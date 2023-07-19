import { useEffect, useState } from 'react';
import Welcome from './src/Welcome';
import Main from './src/Main';
import { Alert, BackHandler } from 'react-native';

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
      <Welcome />
    )
  }
  return (
    <Main />
  )
};

export default App;
