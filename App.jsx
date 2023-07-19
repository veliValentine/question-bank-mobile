import { useEffect, useState } from 'react';
import { Alert, BackHandler, Pressable, StyleSheet } from 'react-native';
import Welcome from './src/Welcome';
import Main from './src/Main';

const App = () => {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowWelcome(false), 5000);
    return () => { clearTimeout(timer) }
  }, [])

  useEffect(() => {
    const backAction = () => {
      Alert.alert('Hold on!', 'Are you sure you want to exit?', [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel',
        },
        { text: 'YES', onPress: () => BackHandler.exitApp() },
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);

  if (showWelcome) {
    return (
      <Pressable
        style={styles.welcomeButtonContainer}
        onPress={() => setShowWelcome(false)}
      >
        <Welcome />
      </Pressable>
    )
  }
  return (
    <Main />
  )
};

export default App;

const styles = StyleSheet.create({
  welcomeButtonContainer: {
    backgroundColor: '#F4E0B9',
    height: "100%",
  },
});
