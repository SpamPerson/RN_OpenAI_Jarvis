import React, {useEffect, useRef, useState} from 'react';
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import dayjs from 'dayjs';

import {commonStyles, questionStyles} from '../../styles/styles';
import {ConversationBox} from '../controls/ConversationBox';
import {getOpenAiResponse} from '../../service/openai.request';

export enum ConversationType {
  Me = 'me',
  AI = 'ai',
}

export interface IConversation {
  index: number;
  type: ConversationType;
  message: string;
  messageTime: string;
}

export const DATE_CONVERSATION_FORMAT = 'YYYY년MM월DD일 ddd hh:mm:ss';

export const QuestionScreen: React.FC = () => {
  const [myMessage, setMyMessage] = useState<string>('');
  const [isAiLoding, setIsAiLoding] = useState<boolean>(false);
  const [conversations, setConversation] = useState<IConversation[]>([
    {
      index: 0,
      type: ConversationType.AI,
      message: '안녕하세요? AI Chat GPT입니다.',
      messageTime: dayjs().format(DATE_CONVERSATION_FORMAT),
    },
  ]);
  const scrollRef = useRef<ScrollView>(null);

  useEffect(() => {
    getChatResponse();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [conversations]);

  const getChatResponse = async () => {
    if (conversations[conversations.length - 1].type === ConversationType.Me) {
      if (myMessage !== '') {
        setIsAiLoding(true);
        setMyMessage('');
        const response = await getOpenAiResponse(myMessage);
        if (response) {
          const newConversations: IConversation[] = [...conversations];
          const index =
            newConversations.length > 0
              ? newConversations[newConversations.length - 1].index + 1
              : 0;
          const newConversation: IConversation = {
            index: index,
            type: ConversationType.AI,
            message: response,
            messageTime: dayjs().format(DATE_CONVERSATION_FORMAT),
          };
          newConversations.push(newConversation);
          scrollRef.current?.scrollToEnd();
          setConversation(newConversations);
        }
        setIsAiLoding(false);
      }
    }
  };

  const onPressSend = () => {
    const newConversations: IConversation[] = [...conversations];
    const index =
      newConversations.length > 0
        ? newConversations[newConversations.length - 1].index + 1
        : 0;

    if (myMessage !== '') {
      const newConversation: IConversation = {
        index: index,
        type: ConversationType.Me,
        message: myMessage,
        messageTime: dayjs().format(DATE_CONVERSATION_FORMAT),
      };
      newConversations.push(newConversation);
      scrollRef.current?.scrollToEnd();
    }
    setConversation(newConversations);
  };

  return (
    <View style={questionStyles.questionContainer}>
      <KeyboardAvoidingView style={{...commonStyles.flex1}}>
        <ScrollView ref={scrollRef} style={questionStyles.scrollViewContainer}>
          <View style={{...commonStyles.padding10, ...commonStyles.gap5}}>
            {conversations.length > 0 &&
              conversations.map((conversation, index) => (
                <View key={index}>
                  <ConversationBox conversation={conversation} />
                </View>
              ))}
            {isAiLoding && (
              <View style={questionStyles.aiResponseLodingBox}>
                <ActivityIndicator size={'small'} />
              </View>
            )}
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
      <View style={questionStyles.textInputContainer}>
        <TextInput
          placeholder="채팅을 입력하세요"
          value={myMessage}
          onChangeText={text => setMyMessage(text)}
          numberOfLines={2}
          onFocus={() => scrollRef.current?.scrollToEnd()}
          onSubmitEditing={onPressSend}
          returnKeyType="done"
          blurOnSubmit={true}
          multiline
          style={questionStyles.textInput}
        />
        <TouchableOpacity onPress={onPressSend}>
          <Text style={questionStyles.sendButton}>전송</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
