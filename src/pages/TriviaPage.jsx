import { useEffect } from 'react';
import { BackHandler, Button, Dimensions, FlatList, StyleSheet, Text, View } from 'react-native';
import TriviaQuestion from '../components/TriviaQuestion';

const TriviaPage = ({
  topic,
  questions,
  backAction
}) => {
  useEffect(() => {
    const backActionResponse = BackHandler.addEventListener('hardwareBackPress', backAction)
    return () => backActionResponse.remove()
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{`${topic.toUpperCase()} ${questions.length} questions`}</Text>
      <View style={{ ...styles.listContainer, height: Dimensions.get('window').height * 0.6 }}>
        <FlatList
          data={questions}
          renderItem={({ index, item }) => <TriviaQuestion index={index} question={item} />}
          initialNumToRender={10}
        />
      </View>
      <FooterComponent backAction={backAction} />
    </View>
  )
}

const FooterComponent = ({ backAction }) => {
  return (
    <View style={styles.listFooterContainer}>
      <Button
        title="Finish"
        onPress={() => backAction()}
      />
    </View>
  )
}

export default TriviaPage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000'
  },
  title: {
    padding: 10,
    color: 'white',
    fontWeight: 'bold'
  },
  text: {
    padding: 10,
    color: 'white',
  },
  listContainer: {
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 5,
    padding: 1,
  },
  listFooterContainer: {
    margin: 10,
    padding: 50,
    backgroundColor: '#A8A196',
    borderRadius: 20,
  }
});