import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTestData } from 'src/store/apps/tests'
import { useRouter } from 'next/router'
import axios from 'axios'
import {
  Button,
  Paper,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  Checkbox,
  Box
} from '@mui/material'
import { Clock, List, BarChart, BarChart2, CheckCircle, Repeat } from 'feather-icons-react'
import BASE_URL from 'src/api/BASE_URL'
import Spinner from 'src/@core/components/spinner'

const correctAnswerStyle = {
  color: 'green',
  fontWeight: 'bold'
}

const incorrectAnswerStyle = {
  color: 'red',
  textDecoration: 'line-through'
}

// Fisher-Yates Shuffle Function
// const shuffleArray = array => {
//   const shuffled = [...array] // Clone the array to avoid mutating the original
//   for (let i = shuffled.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1)) // Random index
//     ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]] // Swap elements
//   }

//   return shuffled
// }

const Test = () => {
  const router = useRouter()
  const dispatch = useDispatch()
  const testData = useSelector(state => state.tests)
  const { quizze } = router.query
  const [timer, setTimer] = useState(null)
  const [initialTimer, setInitialTimer] = useState(null)
  const [started, setStarted] = useState(false)
  const [finished, setFinished] = useState(false)
  const [showAnswerForQuestion, setShowAnswerForQuestion] = useState({})
  const [testsPerPage, setTestsPerPage] = useState(5)
  const [currentPage, setCurrentPage] = useState(1)
  const [userAnswers, setUserAnswers] = useState({})
  const [correctAnswers, setCorrectAnswers] = useState(0)
  const [testReview, setTestReview] = useState(null)
  const [allowRetake, setAllowRetake] = useState(0)
  const [correctAnswersList, setCorrectAnswersList] = useState([])
  const [wrongAnswersList, setWrongAnswersList] = useState([])
  const [shuffledQuestions, setShuffledQuestions] = useState([])
  const userEmail = localStorage.getItem('userData')

  useEffect(() => {
    if (quizze) {
      dispatch(fetchTestData(quizze))
    }
  }, [quizze])

  const startTest = () => {
    const confirmation = window.confirm('Do you want to start the exam?')

    if (confirmation) {
      setStarted(true)
      const testDuration = parseInt(testData?.data?.data?.testTime) * 60 // Convert minutes to seconds
      setTimer(testDuration)
      setInitialTimer(testDuration)
    }
  }

  const handleCheckboxChange = (questionId, answerId, isChecked) => {
    setUserAnswers(prevAnswers => {
      const answersForQuestion = prevAnswers[questionId] || []
      if (isChecked) {
        // Add the answer if checked
        return { ...prevAnswers, [questionId]: [...answersForQuestion, answerId] }
      } else {
        // Remove the answer if unchecked
        return {
          ...prevAnswers,
          [questionId]: answersForQuestion.filter(id => id !== answerId)
        }
      }
    })
  }

  const finishTest = () => {
    const confirmation = window.confirm('Do you want to close the exam?')

    if (confirmation) {
      setFinished(true)
      clearInterval(timer)

      let correctCount = 0
      let totalQuestions = 0

      const correctList = []
      const wrongList = []

      const reviewData = testData.data.data.questions.map(question => {
        const userAnswerIds = userAnswers[question.id] || []
        const correctAnswerIds = question.answers.filter(a => a.isCorrect).map(a => a.id)

        const isCorrect =
          userAnswerIds.every(id => correctAnswerIds.includes(id)) && userAnswerIds.length === correctAnswerIds.length

        if (isCorrect) {
          correctCount++
          correctList.push(question.id) // Add question ID to correct list
        } else if (userAnswerIds.length > 0) {
          wrongList.push(question.id) // Add question ID to wrong list
        }

        totalQuestions++

        return {
          ...question,
          userAnswerIds,
          correctAnswerIds,
          isCorrect
        }
      })

      // Calculate percentage
      const percentage = (correctCount / totalQuestions) * 100

      // Update state with test review data and result metrics
      setTestReview(reviewData)
      setCorrectAnswers(correctCount)
      setCorrectAnswersList(correctList) // Save correct answers list
      setWrongAnswersList(wrongList) // Save wrong answers list

      setUserAnswers({})
    }
  }

  const saveTestResult = (correctAnswersList, wrongAnswersList) => {
    const url = `${BASE_URL}/test/result/save`
    const user = localStorage.getItem('userData')

    const postData = {
      Percentage: ((correctAnswers / totalQuestions) * 100).toFixed(2),
      time: Math.floor(spentTime / 60) + ':' + (spentTime % 60),
      total: totalQuestions,
      correct: correctAnswers,
      wrong: totalQuestions - correctAnswers,
      point: ((correctAnswers * 10) / totalQuestions) * 10,
      test: testData?.data?.data?.id,
      user: JSON.parse(user),
      correctAnswersList, // Add this line
      wrongAnswersList // Add this line
    }

    axios
      .post(url, postData)
      .then(response => {})
      .catch(error => {
        console.error('Error sending data:', error)
      })
  }

  const retakeTest = () => {
    setStarted(false)
    setFinished(false)
    setUserAnswers({})
    setCorrectAnswers(0)
    setShowAnswerForQuestion({})

    if (testData?.data?.data?.id) {
      const user = localStorage.getItem('userData')
      const url = `${BASE_URL}/test/result/user/${JSON.parse(user)}/${testData?.data?.data?.id}`

      axios
        .get(url)
        .then(response => {
          setAllowRetake(response?.data?.allowedRetake || 0)
        })
        .catch(error => {
          console.error('Error sending data:', error)
        })
    }
  }

  const totalQuestions = testData?.data?.data?.questions?.length || 0
  const wrongAnswers = correctAnswers - totalQuestions
  const noAnswer = totalQuestions - Object.keys(userAnswers).length
  const spentTime = initialTimer - timer

  const grade = (correctAnswers / totalQuestions) * 100

  useEffect(() => {
    let interval
    if (started && timer > 0 && !finished) {
      interval = setInterval(() => {
        setTimer(prev => prev - 1)
      }, 1000)
    }
    if (timer === 0 || finished) {
      clearInterval(interval)
    }

    return () => clearInterval(interval)
  }, [started, timer, finished])

  const handleShowAnswer = questionId => {
    setShowAnswerForQuestion(prev => ({ ...prev, [questionId]: true }))
    // Disable selection for this question
    document.querySelectorAll(`input[name="question-${questionId}"]`).forEach(input => {
      input.disabled = true
    })
  }

  useEffect(() => {
    if (testData?.data?.data?.questions) {
      // const randomizedQuestions = shuffleArray(testData.data.data.questions)

      const randomizedQuestions = testData.data.data.questions
      setShuffledQuestions(randomizedQuestions) // Save shuffled questions
    }
  }, [testData])

  const paginatedQuestions = shuffledQuestions.slice((currentPage - 1) * testsPerPage, currentPage * testsPerPage)

  useEffect(() => {
    const url = `${BASE_URL}/test/result/save`
    const user = localStorage.getItem('userData')
    if (finished) {
      const postData = {
        Percentage: ((correctAnswers / totalQuestions) * 100).toFixed(2),
        time: Math.floor(spentTime / 60) + ':' + (spentTime % 60),
        total: totalQuestions,
        correct: correctAnswers,
        wrong: totalQuestions - correctAnswers,
        point: ((correctAnswers * 10) / totalQuestions) * 10,
        test: testData?.data?.data?.id,
        user: JSON.parse(user),
        correct_answers_list: correctAnswersList, // Include correct answers
        wrong_answers_list: wrongAnswersList // Include wrong answers
      }

      axios
        .post(url, postData)
        .then(response => {})
        .catch(error => {
          console.error('Error sending data:', error)
        })
    }
  }, [finished, correctAnswers, totalQuestions, spentTime, correctAnswersList, wrongAnswersList])

  useEffect(() => {
    if (testData?.data?.data?.id) {
      const user = localStorage.getItem('userData')
      const url = `${BASE_URL}/test/result/user/${JSON.parse(user)}/${testData?.data?.data?.id}`

      axios
        .get(url)
        .then(response => {
          setAllowRetake(response?.data?.allowedRetake || 0)
        })
        .catch(error => {
          console.error('Error sending data:', error)
        })
    }
  }, [testData])

  const preventCopyStyle = {
    userSelect: 'none',
    WebkitUserSelect: 'none',
    MozUserSelect: 'none',
    msUserSelect: 'none',
    position: 'relative'
  }

  const watermarkStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'transparent',
    pointerEvents: 'none',
    zIndex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '3em', // Default font size
    color: 'rgba(0, 0, 0, 0.1)',
    fontWeight: 'bold',
    transform: 'rotate(-30deg)',
    whiteSpace: 'nowrap', // Prevent text wrapping
    overflow: 'hidden' // Hide overflow
  }

  const watermarkCombinedStyle = {
    ...watermarkStyle,
    ...(window.innerWidth <= 768 ? { fontSize: '1.5em', transform: 'rotate(-25deg)' } : {})
  }

  return (
    <div className='FNV-Cart' style={{ direction: 'ltr' }}>
      <section
        className='FNV-Header'
        style={{ background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)', padding: '40px 0', color: '#fff' }}
      >
        <div className='container'>
          <div className='row'>
            <div className='col-12 text-center'>
              <h2>{testData && testData.data?.data?.title}</h2>
              {started && !finished && (
                <Typography variant='h6'>
                  <Clock /> Time Remaining: {Math.floor(timer / 60)}:{timer % 60}
                </Typography>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className='FNV-Quize-Detail py-5'>
        <div className='container'>
          <div className='row justify-content-center'>
            {allowRetake > 0 ? (
              <div className='col-12 col-md-10 text-left'>
                {!started ? (
                  <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px' }}>
                    <Typography variant='h5' style={{ marginBottom: '20px' }}>
                      Test Information
                    </Typography>
                    <table className='table table-striped'>
                      <tbody className='text-center'>
                        <tr>
                          <td>
                            <Clock /> Test Duration
                          </td>
                          <td>{testData?.data?.data?.testTime || '0'} minutes</td>
                        </tr>
                        <tr>
                          <td>
                            <List /> Number of Questions
                          </td>
                          <td>{testData?.data?.data?.questions?.length || '0'}</td>
                        </tr>
                        <tr>
                          <td>
                            <CheckCircle /> Passing Grade
                          </td>
                          <td>70%</td>
                        </tr>
                        <tr>
                          <td>
                            <Repeat /> Allowed Retake
                          </td>
                          <td>{allowRetake}</td>
                        </tr>
                      </tbody>
                    </table>
                    <Button variant='contained' color='primary' onClick={startTest} style={{ marginTop: '20px' }}>
                      Start Test
                    </Button>
                  </Paper>
                ) : null}
                {started &&
                  !finished &&
                  paginatedQuestions?.map((question, qIndex) => (
                    <Paper
                      elevation={3}
                      style={{ padding: '30px', marginBottom: '30px', borderRadius: '15px', position: 'relative' }}
                      key={qIndex}
                    >
                      <div style={watermarkCombinedStyle}>{JSON.parse(userEmail) || 'FANAVARAN.CA'}</div>

                      <Typography variant='h6' style={{ marginBottom: '20px', ...preventCopyStyle }}>
                        {qIndex + 1}. {question.questionText}
                      </Typography>
                      {question.image && (
                        <Box mb={2}>
                          <img
                            src={question.image}
                            alt='Question image'
                            style={{ maxWidth: '100%', borderRadius: '10px', ...preventCopyStyle }}
                          />
                        </Box>
                      )}
                      <FormControl component='fieldset' style={preventCopyStyle}>
                        {question.questionType ? (
                          <div>
                            {question.answers?.map((answer, aIndex) => (
                              <FormControl fullWidth key={`${question.id}-${answer.id}`}>
                                {' '}
                                {/* Updated key */}
                                <FormControlLabel
                                  control={
                                    <input
                                      style={{ zoom: '1.5', marginRight: '5px' }}
                                      type='checkbox'
                                      color='primary'
                                      onChange={e => handleCheckboxChange(question.id, answer.id, e.target.checked)}
                                      checked={userAnswers[question.id] && userAnswers[question.id].includes(answer.id)}
                                    />
                                  }
                                  label={answer.answerText}
                                  style={
                                    showAnswerForQuestion[question.id] && answer.isCorrect
                                      ? { backgroundColor: '#c8e6c9', borderRadius: '5px', marginBottom: '10px' }
                                      : { marginBottom: '10px' }
                                  }
                                />
                              </FormControl>
                            ))}
                          </div>
                        ) : (
                          <RadioGroup name={`question-${question.id}`}>
                            {question.answers?.map((answer, aIndex) => (
                              <FormControlLabel
                                key={aIndex}
                                value={answer.id.toString()}
                                control={
                                  <Radio
                                    color='primary'
                                    checked={
                                      userAnswers[question.id] && userAnswers[question.id].answerId === answer.id
                                    }
                                  />
                                }
                                label={answer.answerText}
                                style={
                                  showAnswerForQuestion[question.id] && answer.isCorrect
                                    ? { backgroundColor: '#c8e6c9', borderRadius: '5px', marginBottom: '10px' }
                                    : { marginBottom: '10px' }
                                }
                              />
                            ))}
                          </RadioGroup>
                        )}
                      </FormControl>

                      {testData?.data?.data?.showAnswer == 1 && (
                        <div style={{ marginTop: '20px' }}>
                          <Button variant='outlined' color='primary' onClick={() => handleShowAnswer(question.id)}>
                            Show Answer
                          </Button>
                        </div>
                      )}
                    </Paper>
                  ))}

                {started && !finished && (
                  <>
                    <div style={{ marginTop: '20px', marginBottom: '20px' }}>
                      {testData?.data?.data?.questions &&
                        [...Array(Math.ceil(testData.data.data.questions.length / testsPerPage))]?.map((_, index) => (
                          <Button
                            key={index}
                            variant='outlined'
                            style={{
                              margin: '0 5px',
                              backgroundColor: currentPage === index + 1 ? 'rgba(0, 128, 0, 0.1)' : 'transparent'
                            }}
                            onClick={() => setCurrentPage(index + 1)}
                          >
                            {index + 1}
                          </Button>
                        ))}
                    </div>
                  </>
                )}

                {started && !finished && (
                  <Button
                    variant='contained'
                    color='primary'
                    size='large'
                    onClick={finishTest}
                    style={{ marginTop: '30px' }}
                  >
                    Finish Test
                  </Button>
                )}
              </div>
            ) : (
              <div className='col-12 col-md-10 text-center'>The number allowed to take the test has ended</div>
            )}
          </div>
        </div>
      </section>

      {finished && (
        <section className='FNV-Quize-Info py-5'>
          <div className='container'>
            <div className='row justify-content-center'>
              <div className='col-12 col-md-8'>
                <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px', position: 'relative' }}>
                  <div style={watermarkCombinedStyle}>{JSON.parse(userEmail) || 'FANAVARAN.CA'}</div>

                  <Typography variant='h5' style={{ marginBottom: '20px' }}>
                    Test Results
                  </Typography>
                  <table className='table table-striped' style={preventCopyStyle}>
                    <tbody className='text-center'>
                      <tr>
                        <td>
                          <CheckCircle /> Grade Percentage
                        </td>
                        <td>{((correctAnswers / totalQuestions) * 100).toFixed(2)}%</td>
                      </tr>
                      <tr>
                        <td>
                          <Clock /> Spent Time
                        </td>
                        <td>
                          {Math.floor(spentTime / 60)}:{spentTime % 60}
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <BarChart /> Point
                        </td>
                        <td>
                          {correctAnswers} / {totalQuestions}
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <List /> Questions
                        </td>
                        <td>{totalQuestions}</td>
                      </tr>
                      <tr>
                        <td>
                          <BarChart2 color='green' /> Correct
                        </td>
                        <td>{correctAnswers}</td>
                      </tr>
                      <tr>
                        <td>
                          <BarChart2 color='red' /> Wrong
                        </td>
                        <td>{totalQuestions - correctAnswers}</td>
                      </tr>
                      <tr>
                        <td>
                          <BarChart /> Points
                        </td>
                        <td>
                          {correctAnswers * 10} / {totalQuestions * 10}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <Button variant='contained' color='primary' onClick={retakeTest} style={{ marginTop: '20px' }}>
                    Retake Test
                  </Button>
                </Paper>
              </div>
            </div>
          </div>
        </section>
      )}
      {finished && testReview && (
        <section className='FNV-Quiz-Review py-5'>
          <div className='container'>
            <div className='row justify-content-center'>
              <div className='col-12 col-md-8'>
                <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px', position: 'relative' }}>
                  <div style={watermarkCombinedStyle}>{JSON.parse(userEmail) || 'FANAVARAN.CA'}</div>

                  <Typography variant='h5' style={{ marginBottom: '20px' }}>
                    Test Review
                  </Typography>

                  {/* Review Questions */}
                  {testReview?.map((question, index) => (
                    <div key={index} style={{ marginBottom: '20px' }}>
                      <Typography variant='h6' style={{ marginBottom: '10px', ...preventCopyStyle }}>
                        Question {index + 1}:
                      </Typography>
                      <Typography style={{ marginLeft: '20px', color: 'green' }}>
                        Correct Answer:{' '}
                        {question.correctAnswerIds.map(
                          id => question.answers.find(answer => answer.id === id)?.answerText || ''
                        )}
                      </Typography>
                      <Typography style={{ marginLeft: '20px', color: question.isCorrect ? 'green' : 'red' }}>
                        Your Answer:{' '}
                        {question.userAnswerIds.map(
                          id => question.answers.find(answer => answer.id === id)?.answerText || 'Not Answered'
                        )}
                      </Typography>
                    </div>
                  ))}
                </Paper>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  )
}

Test.guestGuard = true

export default Test
