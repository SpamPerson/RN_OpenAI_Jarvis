import React from 'react';
import {Text, View} from 'react-native';

import {ConversationType, IConversation} from '../screens/QuestionScreen';
import {commonStyles, conversationBox} from '../../styles/styles';

interface IConversationBox {
  conversation?: IConversation;
}

export const ConversationBox: React.FC<IConversationBox> = props => {
  return (
    <View
      style={
        props.conversation?.type === ConversationType.Me
          ? conversationBox.myMessageContainer
          : conversationBox.aiMessageContainer
      }>
      {props.conversation?.type === ConversationType.Me ? (
        <View style={{...commonStyles.columnContainer}}>
          <View style={commonStyles.flexEnd}>
            <Text
              style={{
                ...commonStyles.fontSizeSmall,
                ...commonStyles.colorBlack,
                ...conversationBox.myMessageBox,
              }}>
              {props.conversation?.message}
            </Text>
          </View>
          <Text
            style={{
              ...commonStyles.fontSizeSmall,
              ...commonStyles.colorBlack,
            }}>
            {props.conversation.messageTime}
          </Text>
        </View>
      ) : (
        <View style={commonStyles.columnContainer}>
          <View style={commonStyles.flexStart}>
            <Text
              style={{
                ...commonStyles.colorWhite,
                ...conversationBox.aiMessageBox,
              }}>
              {props.conversation?.message}
            </Text>
          </View>
          <Text
            style={{...commonStyles.fontSizeSmall, ...commonStyles.colorBlack}}>
            {props.conversation?.messageTime}
          </Text>
        </View>
      )}
    </View>
  );
};
