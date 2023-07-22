import * as React from 'react';
import {Button, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import {Screens, StackParamList} from '../ScreenWrapper';
import {homeStyles} from '../../styles/styles';

export type ScreenProp = StackNavigationProp<StackParamList>;

export const HomeScreen: React.FC = () => {
  const navigation = useNavigation<ScreenProp>();

  return (
    <View style={homeStyles.homeContainer}>
      <View style={homeStyles.titleContainer}>
        <Text style={homeStyles.titleText}>환영합니다 주인님</Text>
        <View style={homeStyles.subTitleTextContainer}>
          <Text style={homeStyles.subTitleNameTitle}>"자비스"</Text>
          <Text style={homeStyles.subTitleText}>입니다.</Text>
        </View>
      </View>
      <View style={homeStyles.buttonsContainer}>
        <Button
          title="영단어"
          onPress={() => navigation.navigate(Screens.Vocation)}
        />
        <Button
          title="Chat GPT에게 질문하기"
          onPress={() => navigation.navigate(Screens.Question)}
        />
      </View>
    </View>
  );
};
