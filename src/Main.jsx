import { Button, StyleSheet, Text, View } from 'react-native';
import Quiz from './components/Quiz';
import topics from './topics.json'
import { useState } from 'react';
import Results from './components/Results';

const PAGES = {
  MAIN_MENU: 'main_menu',
  QUIZ: 'quiz',
  RESULTS: 'results'
}

const Main = () => {
  const [page, setPage] = useState(PAGES.MAIN_MENU)
  const [answers, setAnswers] = useState({})
  const allTopics = Object.keys(topics)
  const [topic] = useState(allTopics[0]);
  const [questions] = useState(topics[topic]?.questions ?? [])

  const updateAnswer = (index, data) => {
    const newAnswers = { ...answers, [index]: data }
    setAnswers(newAnswers)
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
  }

  if (page === PAGES.RESULTS) {
    return (
      <View style={styles.container}>
        <Results
          results={answers}
          questions={questions}
          onNewQuiz={onNewQuiz}
        />
      </View>
    )
  }

  if (page === PAGES.QUIZ) {
    return (
      <View style={styles.container}>
        <Quiz
          topic={topic.toUpperCase()}
          questions={questions}
          finishQuiz={finishQuiz}
          updateAnswer={updateAnswer}
        />
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <MainMenu startQuiz={startQuiz} />
    </View>
  )
}

const MainMenu = ({ startQuiz }) => {
  return (
    <View style={styles.mainMenuContainer}>
      <Button
        onPress={startQuiz}
        title='Start DA-42 quiz'
      />
    </View>
  )
}

export default Main;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F4E0B9',
    height: "100%",
    padding: 50
  },
  mainMenuContainer: {
    padding: 10,
    display: 'flex',
    flex: 1,
    justifyContent: 'center'
  }
});