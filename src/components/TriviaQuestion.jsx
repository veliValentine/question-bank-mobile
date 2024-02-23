import { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

const TriviaQuestion = ({
  question
}) => {
  const [answer, setAnswer] = useState('');
  const [isCorrect, setIsCorrect] = useState(false)
  const [notification, setNotification] = useState('')

  useEffect(() => {
    const timeoutId = setTimeout(() => setNotification(''), 5000)
    return () => clearTimeout(timeoutId)
  }, [notification])

  const { title, answer: correctAnswer } = question;

  const handelUserInput = (input) => {
    if (isCorrect) {
      return
    }
    setAnswer(input.trim())
  }

  const checkAnswer = () => {
    const isCorrect = correctAnswer === answer
    setIsCorrect(isCorrect)
    setNotification(isCorrect ? 'Correct' : 'Incorrect')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TextInput
        style={styles.input}
        onChangeText={handelUserInput}
        value={answer}
        editable={isCorrect === true ? false : true}
        autoCapitalize="none"
        autoComplete="off"
        onSubmitEditing={() => checkAnswer()}
      />
      <Text>{notification}</Text>
      <Button
        title='check'
        onPress={() => checkAnswer()}
        disabled={isCorrect}
      />
    </View>
  )
}

export default TriviaQuestion;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    padding: 20,
    backgroundColor: '#A8A196',
    borderRadius: 20,
  },
  title: {
    padding: 10,
    color: 'black',
    fontWeight: 'bold'
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
