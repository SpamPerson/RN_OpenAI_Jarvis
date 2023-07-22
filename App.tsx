import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {ScreenWrapper} from './components/ScreenWrapper';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <ScreenWrapper />
    </NavigationContainer>
  );
};

export default App;
