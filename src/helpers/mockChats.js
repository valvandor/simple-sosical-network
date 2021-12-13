import chance from "chance";

export const createMessage = () => ({
  id: chance().fbid(),
  // createAt: chance().date({ string: true, american: false }),
  author: chance().name(),
  // authorEmail: chance().email(),
  text: chance().paragraph()
});

export const createChat = () => {
  const messagesCount = chance().integer({ min: 0, max: 10 });
  return {
    id: chance().fbid(),
    // createAt: chance().date({ string: true, american: false }),
    name: chance().name(),
    // title: chance().sentence(),
    // content: chance().paragraph({ sentences: 20 }),
    messagesCount,
    messages: Array.from({
      length: messagesCount
    }).map(createMessage)
  };
};

export const createChats = (count) =>
  Array.from({
    length: count
  }).map(createChat);

export const MOCK_CHATS = createChats(12);