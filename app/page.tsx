'use client'

import { useState } from 'react'
import { ChatSidebar } from '@/components/chat-sidebar'
import { ChatWindow } from '@/components/chat-window'
import { Chat, Message } from '@/types/chat'

// Define avatar URLs once
const USER_AVATAR = `https://s3-alpha-sig.figma.com/img/728c/3b1d/33fe647a46f9bf668322f8c1d94ed937?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=B3MxA3JrCmOfxnsiq9Ul6zzExrys4R80jn53f7wNxLtXZVk5Ndoi3~jYA8eHorcKJ6X1--jtbMd6wrvrQjvVI9Tj9JYyoaXJXTMCbzWULoc6d~z5qQY~awEvY7BZIifxIKlgAxjyKstrG7QnWNlRBCSooAaRZKHNaU8JkROc2yANCVzHy45oYj0RERG5hTVM~xX-~eXf0p~5z2vOD2uj8JFpABUHIvkK5PNOgouiMUWe2521Q7~6BJxwmJhAYkp8kHrPCv0Gm2ucrV4hXJ6v1arEVdgFhHO3AGX3q4LUtAYZUEC73SaKrqfEmp8-Q29yjzPFBlAG68b3lLTr5Vn50A__`
const BOT_AVATAR = `https://s3-alpha-sig.figma.com/img/d491/d06a/4663198a91f8a512885819053f01fa64?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AwrG6nexEsCN~4cbPKPj1SSUHn92ueI4g6NlPHwQNVEm8t46dzVXPqUSlRnuHAuMI85MYN42x~yuwUbKNkq2gtbJFowSJwpLIq7vOHVCesMiUmI5sJqf4IWISVh~6Q3SNNZzwXEwMrJEejCZWf7HT8zu2X3DZ0q8qWl1W9jYTAnRHP35dWwdswPALljPgvfT9Uu28hkkwzpZeBLlfjC-YmjvBPBovu91b4z5StEBn9r0LBk6jCqL1IQEGY4mHK4~kpOYbAHa9cmWdiJ1brcz5eZES186V4Xk2MJQ7c7P4yRAhskM9xV99mkI90FVTkBK7JjSadNM4m5WUqwl9cEk6g__`

// Dummy data with external avatar URLs
const DUMMY_CHATS: Chat[] = [
  {
    id: `1`,
    user: {
      id: `1`,
      name: `Caressa Jessalin`,
      avatar: BOT_AVATAR,
    },
    lastMessage: `Lorem ipsum dolor sit am...`,
    timestamp: `2:45 PM`,
  },
  {
    id: `2`,
    user: {
      id: `2`,
      name: `Letty Bride`,
      avatar: BOT_AVATAR,
    },
    lastMessage: `Lorem ipsum dolor sit am...`,
    timestamp: `2:43 PM`,
  },
]

const DUMMY_MESSAGES: Message[] = [
  // Messages for Caressa Jessalin (Chat 1)
  {
    id: `10`,
    content: `You are welcome! Is there anything else you would like to know about the product or the launch event?`,
    sender: DUMMY_CHATS[0].user,
    timestamp: `2:45 PM`,
  },
  {
    id: `9`,
    content: `That is helpful information. Thanks, Caressa!`,
    sender: { id: `user`, name: `You`, avatar: USER_AVATAR },
    isUser: true,
    timestamp: `2:44 PM`,
  },
  {
    id: `8`,
    content: `Of course! The base model will be priced at $299, with a premium version available for $499. Both come with a 30-day money-back guarantee. Early bird discounts will be available at the launch event.`,
    sender: DUMMY_CHATS[0].user,
    timestamp: `2:43 PM`,
  },
  {
    id: `7`,
    content: `Yes, please! That would be great. Can you also tell me about the pricing?`,
    sender: { id: `user`, name: `You`, avatar: USER_AVATAR },
    isUser: true,
    timestamp: `2:42 PM`,
  },
  {
    id: `6`,
    content: `The official launch date is set for next month, on the 15th. We are planning a big event to showcase all the features. Would you like me to send you an invitation?`,
    sender: DUMMY_CHATS[0].user,
    timestamp: `2:41 PM`,
  },
  {
    id: `5`,
    content: `That sounds interesting! When is the official launch date?`,
    sender: { id: `user`, name: `You`, avatar: USER_AVATAR },
    isUser: true,
    timestamp: `2:40 PM`,
  },
  {
    id: `4`,
    content: `Our new product is a revolutionary AI-powered smart home assistant. It can control your home devices, answer questions, and even help with daily tasks. What specific information would you like to know?`,
    sender: DUMMY_CHATS[0].user,
    timestamp: `2:39 PM`,
  },
  {
    id: `3`,
    content: `I have a question about the new product launch. Can you provide me with some details?`,
    sender: { id: `user`, name: `You`, avatar: USER_AVATAR },
    isUser: true,
    timestamp: `2:38 PM`,
  },
  {
    id: `2`,
    content: `Hi there! How can I assist you today?`,
    sender: DUMMY_CHATS[0].user,
    timestamp: `2:37 PM`,
  },
  {
    id: `1`,
    content: `Hello, Caressa! 👋`,
    sender: { id: `user`, name: `You`, avatar: USER_AVATAR },
    isUser: true,
    timestamp: `2:36 PM`,
  },

  // Messages for Letty Bride (Chat 2)
  {
    id: `20`,
    content: `You are welcome! I am glad I could assist you. If you have any more questions in the future, do not hesitate to ask. Have a great day!`,
    sender: DUMMY_CHATS[1].user,
    timestamp: `2:45 PM`,
  },
  {
    id: `19`,
    content: `That is all for now. You have been really helpful, Letty. Thank you!`,
    sender: { id: `user`, name: `You`, avatar: USER_AVATAR },
    isUser: true,
    timestamp: `2:44 PM`,
  },
  {
    id: `18`,
    content: `Exactly! Click on the Change Password button, and you will be prompted to enter your current password and then your new password twice for confirmation. Is there anything else you need help with?`,
    sender: DUMMY_CHATS[1].user,
    timestamp: `2:43 PM`,
  },
  {
    id: `17`,
    content: `Ah, I found it! Thanks. Now I see the Change Password button. Should I just click on that?`,
    sender: { id: `user`, name: `You`, avatar: USER_AVATAR },
    isUser: true,
    timestamp: `2:42 PM`,
  },
  {
    id: `16`,
    content: `I see. To change your password, you need to go to the Security tab in your account settings. Are you able to locate that tab?`,
    sender: DUMMY_CHATS[1].user,
    timestamp: `2:41 PM`,
  },
  {
    id: `15`,
    content: `I am trying to change my password, but I am not seeing the option anywhere in the settings menu.`,
    sender: { id: `user`, name: `You`, avatar: USER_AVATAR },
    isUser: true,
    timestamp: `2:40 PM`,
  },
  {
    id: `14`,
    content: `Of course! I would be happy to help. What specific issue are you experiencing with your account settings?`,
    sender: DUMMY_CHATS[1].user,
    timestamp: `2:39 PM`,
  },
  {
    id: `13`,
    content: `I am having some trouble with my account settings. Can you help me out?`,
    sender: { id: `user`, name: `You`, avatar: USER_AVATAR },
    isUser: true,
    timestamp: `2:38 PM`,
  },
  {
    id: `12`,
    content: `Hello! I am doing well, thank you for asking. How can I assist you today?`,
    sender: DUMMY_CHATS[1].user,
    timestamp: `2:37 PM`,
  },
  {
    id: `11`,
    content: `Hey Letty, how is it going?`,
    sender: { id: `user`, name: `You`, avatar: USER_AVATAR },
    isUser: true,
    timestamp: `2:36 PM`,
  },
]

export default function Home() {
  const [selectedChat, setSelectedChat] = useState<Chat | undefined>()
  const [isMobileView, setIsMobileView] = useState(false)

  return (
    <div className="max-w-[1400px] mx-auto flex h-[calc(100vh-8rem)]">
      <div className={`${isMobileView ? 'hidden' : 'block'} lg:block`}>
        <ChatSidebar
          chats={DUMMY_CHATS}
          selectedChat={selectedChat}
          onSelectChat={(chat) => {
            setSelectedChat(chat)
            setIsMobileView(true)
          }}
        />
      </div>
      <div className={`${isMobileView ? 'block' : 'hidden'} lg:block flex-1`}>
        <ChatWindow
          chat={selectedChat}
          messages={selectedChat ? DUMMY_MESSAGES.filter(message => message.sender.id === selectedChat.user.id || message.isUser) : []}
          onBack={() => setIsMobileView(false)}
        />
      </div>
    </div>
  )
}
