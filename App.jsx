import { useEffect, useState } from 'react';
import Welcome from './src/Welcome';
import Main from './src/Main';

const App = () => {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowWelcome(false), 5000);
    return () => { clearTimeout(timer) }
  }, [])

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
