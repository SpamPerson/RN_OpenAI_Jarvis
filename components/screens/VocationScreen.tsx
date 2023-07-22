import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  RefreshControl,
  ScrollView,
  Switch,
  Text,
  View,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

import {commonStyles, vocationStyles} from '../../styles/styles';
import {getWord} from '../../service/openai.request';

export interface WordData {
  spelling: string;
  meaning: string;
}

export const VocationScreen: React.FC = () => {
  const [wordDatas, setWordDatas] = useState<WordData[]>([]);
  const [isHideSpelling, setIsHideSpelling] = useState<boolean>(false);
  const [isHideMeaning, setIsHideMeaning] = useState<boolean>(false);
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const [dropdownSelectedValue, setDropdownSelectedValue] =
    useState<number>(10);
  const [isLoding, setIsLoding] = useState<boolean>(true);
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);

  useEffect(() => {
    getVocation(dropdownSelectedValue);
  }, [dropdownSelectedValue]);

  useEffect(() => {
    if (isRefreshing) {
      getVocation(dropdownSelectedValue);
    }
    setIsRefreshing(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isRefreshing]);

  const getVocation = async (count: number) => {
    setIsLoding(true);
    const result = await getWord(count);
    setWordDatas(result);
    setIsLoding(false);
  };

  return (
    <View style={vocationStyles.vocationContainer}>
      <View style={{...commonStyles.padding20}}>
        <DropDownPicker
          open={dropdownOpen}
          items={[
            {label: '10개 단어', value: 10},
            {label: '20개 단어', value: 20},
            {label: '30개 단어', value: 30},
            {label: '40개 단어', value: 40},
            {label: '50개 단어', value: 50},
          ]}
          setOpen={setDropdownOpen}
          setValue={setDropdownSelectedValue}
          value={dropdownSelectedValue}
        />
      </View>
      <View style={vocationStyles.vocationControlContainer}>
        <View style={vocationStyles.hideControlContainer}>
          <Text style={vocationStyles.hideControlText}>단어 가림</Text>
          <Switch
            value={isHideSpelling}
            onChange={() => setIsHideSpelling(!isHideSpelling)}
            disabled={isHideMeaning}
          />
        </View>
        <View style={vocationStyles.hideControlContainer}>
          <Text style={vocationStyles.hideControlText}>의미 가림</Text>
          <Switch
            value={isHideMeaning}
            onChange={() => {
              if (!isHideSpelling) {
                setIsHideMeaning(!isHideMeaning);
              }
            }}
            disabled={isHideSpelling}
          />
        </View>
      </View>
      <View
        style={{
          ...vocationStyles.listContainer,
        }}>
        <Text
          style={{
            ...vocationStyles.indexText,
            ...commonStyles.fontBlod,
            ...commonStyles.textTitleAlign,
          }}>
          순번
        </Text>
        <Text
          style={{
            ...vocationStyles.spellingText,
            ...commonStyles.fontBlod,
            ...commonStyles.textTitleAlign,
          }}>
          영단어
        </Text>
        <Text
          style={{
            ...vocationStyles.meanText,
            ...commonStyles.fontBlod,
            ...commonStyles.textTitleAlign,
          }}>
          의미
        </Text>
      </View>
      {isLoding ? (
        <View style={vocationStyles.indicatorContainer}>
          <ActivityIndicator size={'large'} color={'#00ff00'} />
        </View>
      ) : (
        <ScrollView
          contentContainerStyle={vocationStyles.scrollContainer}
          refreshControl={
            <RefreshControl
              refreshing={isRefreshing}
              onRefresh={() => setIsRefreshing(true)}
            />
          }>
          {wordDatas.length > 0 &&
            wordDatas.map((value, index) => {
              return (
                <View
                  key={`${value.spelling}_${index}`}
                  style={vocationStyles.listContainer}>
                  <Text style={vocationStyles.indexText}>{index + 1}</Text>
                  <Text style={vocationStyles.spellingText}>
                    {isHideSpelling ? '' : value.spelling}
                  </Text>
                  <Text style={vocationStyles.meanText}>
                    {isHideMeaning ? '' : value.meaning}
                  </Text>
                </View>
              );
            })}
        </ScrollView>
      )}
    </View>
  );
};
