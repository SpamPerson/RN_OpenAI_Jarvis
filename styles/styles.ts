import {StyleSheet} from 'react-native';

export const commonStyles = StyleSheet.create({
  marginBottom10: {
    marginBottom: 10,
  },
  colorBlack: {
    color: '#000',
  },
  padding10: {
    padding: 10,
  },
  padding20: {
    padding: 20,
  },
  fontBlod: {
    fontWeight: 'bold',
  },
  horizontal: {
    display: 'flex',
    flexDirection: 'row',
  },
  verticalTextAlign: {
    display: 'flex',
    textAlignVertical: 'center',
  },
  fontSizeSmall: {
    fontSize: 12,
  },
  textTitleAlign: {
    textAlignVertical: 'bottom',
  },
  colorWhite: {
    color: '#fff',
  },
  paddingLeft10: {
    paddingLeft: 10,
  },
  columnContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  flexStart: {
    alignSelf: 'flex-start',
  },
  flexEnd: {
    alignSelf: 'flex-end',
  },
  flex1: {
    flex: 1,
  },
  gap5: {
    gap: 5,
  },
});

export const homeStyles = StyleSheet.create({
  homeContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: 'white',
    height: '100%',
    width: '100%',
  },
  titleContainer: {
    color: 'black',
    marginBottom: 10,
    padding: 10,
  },
  titleText: {
    color: 'black',
    fontSize: 19,
    marginBottom: 10,
  },
  subTitleTextContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
  },
  subTitleNameTitle: {
    color: 'black',
    fontWeight: '900',
    fontSize: 30,
  },
  subTitleText: {
    color: 'black',
    fontSize: 30,
  },
  buttonsContainer: {
    width: '100%',
    gap: 10,
  },
});

export const vocationStyles = StyleSheet.create({
  vocationContainer: {
    width: '100%',
    height: '100%',
    padding: 10,
    backgroundColor: '#fff',
  },
  vocationControlContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    height: 50,
  },
  hideControlContainer: {
    ...commonStyles.horizontal,
    gap: 2,
  },
  scrollContainer: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  hideControlText: {
    color: 'black',
    ...commonStyles.verticalTextAlign,
    ...commonStyles.fontSizeSmall,
    ...commonStyles.fontBlod,
  },
  listHeaderContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    textAlignVertical: 'center',
    borderBottomWidth: 1,
    borderColor: '#e0e0e0',
    flexWrap: 'wrap',
  },
  listContainer: {
    width: '100%',
    padding: 20,
    display: 'flex',
    flexDirection: 'row',
    gap: 30,
    borderBottomWidth: 1,
    borderColor: '#e0e0e0',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },
  indexText: {
    color: 'black',
    width: '10%',
    textAlign: 'center',
    fontSize: 15,
    textAlignVertical: 'center',
    height: 55,
  },
  spellingText: {
    color: 'black',
    width: '35%',
    fontSize: 15,
    textAlign: 'center',
    textAlignVertical: 'center',
    height: 55,
  },
  meanText: {
    color: 'black',
    width: '35%',
    fontSize: 15,
    textAlign: 'center',
    textAlignVertical: 'center',
    height: 55,
  },
  indicatorContainer: {
    width: '100%',
    flex: 1,
    justifyContent: 'center',
  },
});

export const questionStyles = StyleSheet.create({
  questionContainer: {
    backgroundColor: '#fff',
    width: '100%',
    height: '100%',
    padding: 10,
    gap: 5,
  },
  scrollViewContainer: {
    display: 'flex',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#e0e0e0',
  },
  textInputContainer: {
    width: '100%',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#e0e0e0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textInput: {
    color: 'black',
    padding: 10,
    width: '80%',
    height: 50,
  },
  aiResponseLodingBox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: 5,
  },
  sendButton: {
    color: 'white',
    display: 'flex',
    flexDirection: 'row',
    textAlignVertical: 'center',
    alignSelf: 'center',
    height: 50,
    padding: 10,
    backgroundColor: '#3C83F6',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
});

export const conversationBox = StyleSheet.create({
  myMessageContainer: {
    padding: 5,
    borderRadius: 10,
    gap: 5,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  aiMessageContainer: {
    padding: 5,
    borderRadius: 10,
    gap: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  myMessageBox: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 5,
    borderWidth: 1,
    borderColor: '#F6E24B',
    borderRadius: 5,
    backgroundColor: '#F6E24B',
  },
  aiMessageBox: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 5,
    borderWidth: 1,
    borderColor: '#3C83F6',
    borderRadius: 5,
    backgroundColor: '#3C83F6',
  },
});
