import { useState } from 'react'

const PracticeQuiz = ({ questions, domainName, onBack }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState({})
  const [showResults, setShowResults] = useState(false)
  const [showExplanation, setShowExplanation] = useState(false)

  const handleAnswerSelect = (questionId, answerIndex) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: answerIndex
    }))
    setShowExplanation(false)
  }

  const handleSubmitAnswer = () => {
    setShowExplanation(true)
  }

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1)
      setShowExplanation(false)
    } else {
      setShowResults(true)
    }
  }

  const handlePrevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1)
      setShowExplanation(false)
    }
  }

  const calculateScore = () => {
    let correct = 0
    questions.forEach(question => {
      if (selectedAnswers[question.id] === question.correctAnswer) {
        correct++
      }
    })
    return { correct, total: questions.length, percentage: Math.round((correct / questions.length) * 100) }
  }

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case '기초': return 'bg-green-500'
      case '중급': return 'bg-yellow-500'
      case '고급': return 'bg-red-500'
      default: return 'bg-gray-500'
    }
  }

  const getSelectedAnswerStatus = (questionIndex, optionIndex) => {
    const question = questions[questionIndex]
    const selectedAnswer = selectedAnswers[question.id]

    if (!showExplanation || selectedAnswer === undefined) {
      return selectedAnswer === optionIndex ? 'selected' : 'default'
    }

    if (optionIndex === question.correctAnswer) {
      return 'correct'
    } else if (optionIndex === selectedAnswer && selectedAnswer !== question.correctAnswer) {
      return 'incorrect'
    }
    return 'default'
  }

  const getOptionClasses = (status) => {
    const baseClasses = 'w-full p-4 text-left rounded-lg border-2 transition-all duration-200 '

    switch (status) {
      case 'selected':
        return baseClasses + 'border-blue-500 bg-blue-50 text-blue-900'
      case 'correct':
        return baseClasses + 'border-green-500 bg-green-50 text-green-900'
      case 'incorrect':
        return baseClasses + 'border-red-500 bg-red-50 text-red-900'
      default:
        return baseClasses + 'border-gray-300 bg-white text-gray-900 hover:border-blue-300 hover:bg-blue-50'
    }
  }

  if (showResults) {
    const score = calculateScore()
    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-center mb-6">퀴즈 완료!</h2>

          <div className="text-center mb-8">
            <div className="text-6xl font-bold text-blue-600 mb-2">
              {score.percentage}%
            </div>
            <div className="text-xl text-gray-600">
              {score.correct}/{score.total} 문제 정답
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-green-50 border-2 border-green-200 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-green-600">{score.correct}</div>
              <div className="text-green-700">정답</div>
            </div>
            <div className="bg-red-50 border-2 border-red-200 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-red-600">{score.total - score.correct}</div>
              <div className="text-red-700">오답</div>
            </div>
            <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-blue-600">{score.total}</div>
              <div className="text-blue-700">총 문제</div>
            </div>
          </div>

          <div className="flex gap-4 justify-center">
            <button
              onClick={() => {
                setCurrentQuestion(0)
                setSelectedAnswers({})
                setShowResults(false)
                setShowExplanation(false)
              }}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              다시 풀기
            </button>
            <button
              onClick={onBack}
              className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
            >
              돌아가기
            </button>
          </div>
        </div>
      </div>
    )
  }

  const question = questions[currentQuestion]
  const selectedAnswer = selectedAnswers[question.id]

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-xl shadow-lg p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={onBack}
            className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
          >
            ← 돌아가기
          </button>
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-800">{domainName}</h1>
            <p className="text-gray-600">연습 문제</p>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-500">진행률</div>
            <div className="text-lg font-semibold">
              {currentQuestion + 1} / {questions.length}
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-2 mb-8">
          <div
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
          ></div>
        </div>

        {/* Question */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-lg font-bold text-gray-700">Q{question.id}</span>
            <span className={`px-3 py-1 rounded-full text-sm font-medium text-white ${getDifficultyColor(question.difficulty)}`}>
              {question.difficulty}
            </span>
          </div>
          <h2 className="text-xl font-semibold text-gray-800 leading-relaxed">
            {question.question}
          </h2>
        </div>

        {/* Options */}
        <div className="space-y-3 mb-8">
          {question.options.map((option, index) => {
            const status = getSelectedAnswerStatus(currentQuestion, index)
            return (
              <button
                key={index}
                onClick={() => handleAnswerSelect(question.id, index)}
                disabled={showExplanation}
                className={getOptionClasses(status)}
              >
                <span className="font-semibold mr-2">{String.fromCharCode(97 + index)})</span>
                {option}
              </button>
            )
          })}
        </div>

        {/* Explanation */}
        {showExplanation && (
          <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6 mb-8">
            <h3 className="font-semibold text-blue-800 mb-2">📝 해설</h3>
            <p className="text-blue-700 leading-relaxed">{question.explanation}</p>
          </div>
        )}

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <button
            onClick={handlePrevQuestion}
            disabled={currentQuestion === 0}
            className="px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            이전 문제
          </button>

          <div className="flex gap-3">
            {!showExplanation && selectedAnswer !== undefined && (
              <button
                onClick={handleSubmitAnswer}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                정답 확인
              </button>
            )}

            {showExplanation && (
              <button
                onClick={handleNextQuestion}
                className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                {currentQuestion === questions.length - 1 ? '결과 보기' : '다음 문제'}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PracticeQuiz