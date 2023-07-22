import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {HomeScreen} from './screens/HomeScreen';
import {VocationScreen} from './screens/VocationScreen';
import {QuestionScreen} from './screens/QuestionScreen';

export enum Screens {
  Home = 'HomeScreen',
  Vocation = 'VocationScreen',
  Question = 'QuestionScreen',
}

export type StackParamList = {
  HomeScreen: undefined;
  VocationScreen: undefined;
  QuestionScreen: undefined;
};

const Stack = createStackNavigator<StackParamList>();

export const ScreenWrapper: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Screens.Home}
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Screens.Vocation}
        component={VocationScreen}
        options={{headerTitle: '영단어'}}
      />
      <Stack.Screen
        name={Screens.Question}
        component={QuestionScreen}
        options={{headerTitle: 'Chat GPT에게 질문'}}
      />
    </Stack.Navigator>
  );
};
