import { useCallback, useState } from 'react';


export const useMessages = () => {
  const [messageList, setMessageList] = useState([]);
  const [newMessageText, setNewMessageText] = useState('');

  const sendMessage = useCallback((author, text) => {
    const copyMessageList = [...messageList];
    const newMessage = {
      author: author,
      text: text
    };
    copyMessageList.push(newMessage);
    setMessageList(copyMessageList);
  }, [messageList]);

  const submitMessageForm = useCallback((event) => {
    event.preventDefault();
    if (newMessageText){
      sendMessage('You', newMessageText);
      setNewMessageText('');
    }
  }, [newMessageText, sendMessage]);

  const changeMessageInput = useCallback((event) => {
    setNewMessageText(event.target.value);
  }, []);

  return [
    {messageList, newMessageText},
    {changeMessageInput, submitMessageForm, sendMessage}
  ];
};