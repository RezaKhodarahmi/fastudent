import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTestData } from 'src/store/apps/tests'
import { useRouter } from 'next/router'
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
  Grid
} from '@mui/material'
import { Clock, List, BarChart, BarChart2, CheckCircle } from 'feather-icons-react'

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

  useEffect(() => {
    dispatch(fetchTestData(quizze))
  }, [quizze])

  const startTest = () => {
    setStarted(true)
    const testDuration = parseInt(testData?.data?.data?.testTime) * 60 // Convert minutes to seconds
    setTimer(testDuration)
    setInitialTimer(testDuration) // Store the initial timer value
  }

  const handleCheckboxChange = (questionId, answerId, isChecked, isCorrect) => {
    setUserAnswers(prevAnswers => {
      const previousAnswersForQuestion = prevAnswers[questionId] || []
      if (isChecked) {
        return {
          ...prevAnswers,
          [questionId]: [...previousAnswersForQuestion, answerId, isCorrect]
        }
      } else {
        return {
          ...prevAnswers,
          [questionId]: previousAnswersForQuestion.filter(id => id !== answerId)
        }
      }
    })
  }

  const finishTest = () => {
    setFinished(true)
    clearInterval(timer)

    // Calculate results
    let correctCount = 0
    Object.values(userAnswers).forEach(answerArray => {
      if (answerArray[1] === 1) {

        // Assuming 1 is for correct and 0 is for incorrect
        correctCount++
      }
    })

    setCorrectAnswers(correctCount)
  }

  const retakeTest = () => {
    setStarted(false)
    setFinished(false)
    setUserAnswers({})
    setCorrectAnswers(0)
    setShowAnswerForQuestion({})
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
  }

  const paginatedQuestions = testData?.data?.data?.questions?.slice(
    (currentPage - 1) * testsPerPage,
    currentPage * testsPerPage
  )

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
                    </tbody>
                  </table>
                  <Button variant='contained' color='primary' onClick={startTest} style={{ marginTop: '20px' }}>
                    Start Test
                  </Button>
                </Paper>
              ) : null}
              {started &&
                !finished &&
                paginatedQuestions.map((question, qIndex) => (
                  <Paper
                    elevation={3}
                    style={{ padding: '30px', marginBottom: '30px', borderRadius: '15px' }}
                    key={qIndex}
                  >
                    <Typography variant='h6' style={{ marginBottom: '20px' }}>
                      {qIndex + 1}. {question.questionText}
                    </Typography>
                    <FormControl component='fieldset'>
                      {question.questionType === '0' ? (
                        <div>
                          {question.answers.map((answer, aIndex) => (
                            <FormControl fullWidth key={aIndex}>
                              <FormControlLabel
                                control={
                                  <Checkbox
                                    color='primary'
                                    onChange={e =>
                                      handleCheckboxChange(question.id, answer.id, e.target.checked, answer.isCorrect)
                                    }
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
                          {question.answers.map((answer, aIndex) => (
                            <FormControlLabel
                              key={aIndex}
                              value={answer.id.toString()}
                              control={
                                <Radio
                                  color='primary'
                                  checked={userAnswers[question.id] && userAnswers[question.id].answerId === answer.id}
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
                    <div style={{ marginTop: '20px' }}>
                      <Button variant='outlined' color='primary' onClick={() => handleShowAnswer(question.id)}>
                        Show Answer
                      </Button>
                    </div>
                  </Paper>
                ))}

              {started && !finished && (
                <>
                  <div style={{ marginTop: '20px', marginBottom: '20px' }}>
                    {testData?.data?.data?.questions &&
                      [...Array(Math.ceil(testData.data.data.questions.length / testsPerPage))].map((_, index) => (
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
    </div>
  )
}

Test.guestGuard = true

export default Test
