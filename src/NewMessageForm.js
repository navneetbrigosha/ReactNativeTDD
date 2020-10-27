import React, {useState} from 'react';
import {
  View,
  TextInput,
  Button
} from 'react-native';

const NewMessageForm = ({onSend}) => {
  const [inputText, setInputText] = useState('');
  const handleSend = () =>  {
    onSend(inputText);
    setInputText('');
  }
  return (
    <View>
      <TextInput
        testID="messageText"
        value={inputText}
        onChangeText={setInputText}
      />
      <Button
        title="Send"
        testID="sendButton"
        onPress={handleSend}
      />
    </View>
  );
};

export default NewMessageForm;
