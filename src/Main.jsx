import { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import MultipleChoice from './pages/MultipleChoice';
import MultipleChoiceResults from './pages/MultipleChoiceResults';
import MainMenu from './pages/MainMenu';
import topics from './topics.json'
import TriviaPage from './pages/TriviaPage';

const PAGES = {
  MAIN_MENU: 'main_menu',
  QUIZ: 'quiz',
  RESULTS: 'results'
}

const QUIZ_TYPES = {
  MULTIPLE_CHOICE: 0,
  TRIVIA: 1
}

const Main = () => {
  const [page, setPage] = useState(PAGES.MAIN_MENU)
  const [answers, setAnswers] = useState({})
  const [topic, setTopic] = useState('')
  const [questions, setQuestions] = useState([])

  const allTopics = Object.keys(topics)
  const quizType = topics[topic]?.type ?? null

  useEffect(() => {
    setQuestions(topics[topic]?.questions ?? [])
  }, [topic])

  const goMainMenu = () => {
    onNewQuiz()
    return true
  }

  const updateAnswer = (index, data) => {
    const newAnswers = { ...answers, [index]: data }
    setAnswers(newAnswers)
  }

  const changeTopic = (newTopic) => {
    if (newTopic === topic) {
      setTopic('')
      return
    }
    setTopic(newTopic ?? '')
  }

  const startQuiz = () => {
    setPage(PAGES.QUIZ)
  }

  const finishQuiz = () => {
    setPage(PAGES.RESULTS)
  }

  const onNewQuiz = () => {
    setAnswers({})
    setPage(PAGES.MAIN_MENU)
    setTopic('')
  }

  const isQuizPage = PAGES.QUIZ === page
  const isResultsPage = PAGES.RESULTS === page

  const isMultipleChoiceQuiz = QUIZ_TYPES.MULTIPLE_CHOICE == quizType

  if (isMultipleChoiceQuiz && isQuizPage) {
    return (
      <View style={styles.container}>
        <MultipleChoice
          topic={topic.toUpperCase()}
          questions={questions}
          finishQuiz={finishQuiz}
          updateAnswer={updateAnswer}
          backAction={goMainMenu}
        />
      </View>
    )
  }

  if (isMultipleChoiceQuiz && isResultsPage) {
    return (
      <View style={styles.container}>
        <MultipleChoiceResults
          results={answers}
          questions={questions}
          onNewQuiz={onNewQuiz}
          backAction={goMainMenu}
        />
      </View>
    )
  }

  const isTriviaQuiz = QUIZ_TYPES.TRIVIA == quizType

  if (isTriviaQuiz && isQuizPage) {
    return (
      <View style={styles.container}>
        <TriviaPage
          topic={topic}
          questions={questions}
          onNewQuiz={onNewQuiz}
          backAction={goMainMenu}
        />
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <MainMenu
        topics={allTopics}
        topic={topic ?? ''}
        selectTopic={changeTopic}
        startQuiz={startQuiz} />
    </View>
  )
}

export default Main;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000',
    height: "100%",
    padding: 50
  },
});
