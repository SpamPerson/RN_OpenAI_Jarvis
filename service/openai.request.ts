import axios from 'axios';
import {WordData} from '../components/screens/VocationScreen';

export const getWord = async (count: number) => {
  try {
    let result: WordData[] = [];
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'user',
            content: `많이 쓰이는 영어단어 ${count}개만 단어와 뜻을 뜻은 한국어로 알려줘 (한번 알려 줬던 단어 말고) 단, 1. 영어단어 - 뜻 이런 형식으로 알려줘.`,
          },
        ],
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.API_KEY}`,
        },
      },
    );
    if (response.data) {
      const words = response.data.choices[0].message.content.split('\n');
      for (const word of words) {
        const wordData: WordData = {
          spelling: word.split(' - ')[0].split('. ')[1].trim(),
          meaning: word.split(' - ')[1].trim(),
        };
        result.push(wordData);
      }
    }
    return result;
  } catch (err) {
    throw err;
  }
};

export const getOpenAiResponse = async (message: string) => {
  try {
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'user',
            content: `${message}`,
          },
        ],
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.API_KEY}`,
        },
      },
    );
    return response.data.choices[0].message.content;
  } catch (err) {
    throw err;
  }
};
