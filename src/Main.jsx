import { Button, Pressable, StyleSheet, Text, View } from 'react-native';
import Quiz from './components/Quiz';
import topics from './topics.json'
import { useEffect, useState } from 'react';
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
  const [topic, setTopic] = useState('');
  const [questions, setQuestions] = useState([])

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
  }

  if (page === PAGES.RESULTS) {
    return (
      <View style={styles.container}>
        <Results
          results={answers}
          questions={questions}
          onNewQuiz={onNewQuiz}
          backAction={goMainMenu}
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

const MainMenu = ({ topics, topic, selectTopic, startQuiz }) => {
  return (
    <View style={styles.mainMenuContainer}>
      <View>
        <Text style={styles.title}>Select Questions Topic:</Text>
        {topics.map((t) => (
          <Pressable
            key={`select-topic-${t}`}
            onPress={() => selectTopic(t)}
            style={{
              ...styles.selectTopicButton,
              borderWidth: 5,
              borderColor: topic === t ? 'white' : styles.container.backgroundColor,
            }}
          >
            <Text>{`${t.toUpperCase()}`}</Text>
          </Pressable>
        ))}
      </View>
      <View>
        {topic === '' ? <Button title="" color={styles.container.backgroundColor} /> :
          <Button
            onPress={startQuiz}
            title={`Start new '${topic}' quiz`}
          />
        }
      </View>
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
  mainMenuContainer: {
    padding: 10,
    display: 'flex',
    flex: 1,
    justifyContent: 'space-evenly',
    flexDirection: 'column',
  },
  title: {
    fontWeight: 'bold',
    color: 'white'
  },
  selectTopicButton: {
    backgroundColor: '#D3D3D3',
    padding: 10,
    borderRadius: 10,
    margin: 5,
  }
});