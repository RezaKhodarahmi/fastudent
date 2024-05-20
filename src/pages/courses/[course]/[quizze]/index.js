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
  Select,
  MenuItem,
  Grid,
  Box
} from '@mui/material'
import { Clock, List, BarChart, BarChart2, CheckCircle, Repeat } from 'feather-icons-react'
import BASE_URL from 'src/api/BASE_URL'

const correctAnswerStyle = {
  color: 'green',
  fontWeight: 'bold'
}

const incorrectAnswerStyle = {
  color: 'red',
  textDecoration: 'line-through'
}

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

  useEffect(() => {
    if (quizze) {
      dispatch(fetchTestData(quizze))
    }
  }, [quizze])

  const startTest = () => {
    setStarted(true)
    const testDuration = parseInt(testData?.data?.data?.testTime) * 60 // Convert minutes to seconds
    setTimer(testDuration)
    setInitialTimer(testDuration)
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
    setFinished(true)
    clearInterval(timer)

    let correctCount = 0
    let totalQuestions = 0

    const reviewData = testData.data.data.questions.map(question => {
      const userAnswerIds = userAnswers[question.id] || []
      const correctAnswerIds = question.answers.filter(a => a.isCorrect).map(a => a.id)

      const isCorrect =
        userAnswerIds.every(id => correctAnswerIds.includes(id)) && userAnswerIds.length === correctAnswerIds.length

      if (isCorrect) correctCount++
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

    setUserAnswers({})
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
          console.log(response?.data?.allowedRetake)
        })
        .catch(error => {
          console.error('Error sending data:', error)
        })
    }
  }

  useEffect(() => {
    console.log(testData)
  }, [testData])

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
  }

  const paginatedQuestions = testData?.data?.data?.questions?.slice(
    (currentPage - 1) * testsPerPage,
    currentPage * testsPerPage
  )

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
        user: JSON.parse(user)
      }

      axios
        .post(url, postData)
        .then(response => {
          console.log('Data successfully sent:', response.data)
        })
        .catch(error => {
          console.error('Error sending data:', error)
        })
    }
  }, [finished, correctAnswers, totalQuestions, spentTime])

  useEffect(() => {
    if (testData?.data?.data?.id) {
      const user = localStorage.getItem('userData')
      const url = `${BASE_URL}/test/result/user/${JSON.parse(user)}/${testData?.data?.data?.id}`

      axios
        .get(url)
        .then(response => {
          setAllowRetake(response?.data?.allowedRetake || 0)
          console.log(response?.data?.allowedRetake)
        })
        .catch(error => {
          console.error('Error sending data:', error)
        })
    }
  }, [testData])

  return (
    <div className='FNV-Cart'>
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
              <div className='col-12 col-md-10 text-center'>
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
                      style={{ padding: '30px', marginBottom: '30px', borderRadius: '15px' }}
                      key={qIndex}
                    >
                      <Typography variant='h6' style={{ marginBottom: '20px' }}>
                        {qIndex + 1}. {question.questionText}
                      </Typography>
                      {question.image && (
                        <Box mb={2}>
                          <img
                            src={question.image}
                            alt='Question image'
                            style={{ maxWidth: '100%', borderRadius: '10px' }}
                          />
                        </Box>
                      )}
                      <FormControl component='fieldset'>
                        {question.questionType ? (
                          <div>
                            {question.answers?.map((answer, aIndex) => (
                              <FormControl fullWidth key={`${question.id}-${answer.id}`}>
                                {' '}
                                {/* Updated key */}
                                <FormControlLabel
                                  control={
                                    <Checkbox
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
                            style={{ margin: '0 5px' }}
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
                <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px' }}>
                  <Typography variant='h5' style={{ marginBottom: '20px' }}>
                    Test Results
                  </Typography>
                  <table className='table table-striped'>
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
      {finished && testData?.data?.data?.showReviews && (
        <section className='FNV-Quiz-Review py-5'>
          <div className='container'>
            <div className='row justify-content-center'>
              <div className='col-12 col-md-8'>
                <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px' }}>
                  <Typography variant='h5' style={{ marginBottom: '20px' }}>
                    Test Review
                  </Typography>
                  {testReview && (
                    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
                      <div style={{ marginRight: '20px', display: 'flex', alignItems: 'center' }}>
                        <div
                          style={{
                            width: '12px',
                            height: '12px',
                            borderRadius: '50%',
                            backgroundColor: 'blue',
                            marginRight: '5px'
                          }}
                        ></div>
                        <Typography variant='body2'>Not Answered</Typography>
                      </div>
                      <div style={{ marginRight: '20px', display: 'flex', alignItems: 'center' }}>
                        <div
                          style={{
                            width: '12px',
                            height: '12px',
                            borderRadius: '50%',
                            backgroundColor: 'green',
                            marginRight: '5px'
                          }}
                        ></div>
                        <Typography variant='body2'>Correct</Typography>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <div
                          style={{
                            width: '12px',
                            height: '12px',
                            borderRadius: '50%',
                            backgroundColor: 'red',
                            marginRight: '5px'
                          }}
                        ></div>
                        <Typography variant='body2'>Wrong</Typography>
                      </div>
                    </div>
                  )}
                  {testReview?.map((question, index) => (
                    <div key={index} style={{ marginBottom: '20px' }}>
                      <Typography variant='h6'>{question.questionText}</Typography>
                      {question.answers.map(answer => (
                        <Typography
                          key={answer.id}
                          style={{
                            marginLeft: '20px',
                            ...(question.correctAnswerIds.includes(answer.id) ? correctAnswerStyle : {}),
                            ...(question.userAnswerIds.includes(answer.id) &&
                            !question.correctAnswerIds.includes(answer.id)
                              ? incorrectAnswerStyle
                              : question.userAnswerIds.length === 0 // Check if question was not answered
                              ? { color: 'blue' } // Set style for not answered questions
                              : {})
                          }}
                        >
                          {answer.answerText}
                          {question.correctAnswerIds.includes(answer.id) ? ' (Correct Answer)' : ''}
                        </Typography>
                      ))}
                      <Typography
                        style={{
                          marginLeft: '20px',
                          color: question.isCorrect ? 'green' : 'red',
                          display: question.userAnswerIds.length === 0 ? 'none' : 'block' // Hide the "Your answer was..." text for not answered questions
                        }}
                      >
                        Your answer was {question.isCorrect ? 'correct' : 'incorrect'}.
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
