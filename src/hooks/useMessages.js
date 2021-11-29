import { useCallback, useState } from 'react';


export const useMessages = () => {
  const [messageList, setMessageList] = useState([]);
  const [newMessageText, setNewMessageText] = useState('');

  const onSubmitMessageForm = useCallback((event) => {
    event.preventDefault();
    if (newMessageText){
      const copyMessageList = [...messageList];
      copyMessageList.push({
        author: 'You',
        text: `${newMessageText}`
      });
      setMessageList(copyMessageList);
      setNewMessageText('')
    }
  }, [messageList, newMessageText]);

  const onChangeMessageForm = useCallback((event) => {
    setNewMessageText(event.target.value);
  }, []);

  return [
    {messageList, newMessageText},
    {onChangeMessageForm, onSubmitMessageForm}
  ];
};