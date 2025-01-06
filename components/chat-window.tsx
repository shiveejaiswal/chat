'use client'

import { useState, useRef, useEffect, ChangeEvent } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Send } from 'lucide-react'
import { Chat, Message } from '@/types/chat'
import Image from 'next/image'

interface ChatWindowProps {
  chat?: Chat
  onBack: () => void
  messages: Message[]
}

export function ChatWindow({ chat, onBack, messages }: ChatWindowProps) {
  const [newMessage, setNewMessage] = useState('')
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const handleMessageChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewMessage(e.target.value)
  }

  if (!chat) {
    return (
      <div className="flex-1 flex items-center justify-center text-gray-500">
        Select a chat to start messaging
      </div>
    )
  }

  return (
    <div className="flex-1 flex flex-col h-[calc(100vh-8rem)] bg-[#1E1E1E] ml-2">
      <div className="border-b border-gray-800 p-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Avatar className="h-10 w-10">
            <AvatarImage src={chat.user.avatar} />
            <AvatarFallback>{chat.user.name[0]}</AvatarFallback>
          </Avatar>
          <div className="font-medium">{chat.user.name}</div>
        </div>
        <div className="flex items-center space-x-4">
          <Button onClick={onBack} variant="ghost" className="p-0 hover:bg-transparent">
            <Image src="/back.png" alt="Back" width={24} height={24} />
            <span className="ml-2 text-white">Back</span>
          </Button>
          <Button variant="ghost" className="p-0 hover:bg-transparent">
            <Image src="/delete.png" alt="Delete" width={24} height={24} />
            <span className="ml-2 text-white">Delete</span>
          </Button>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto flex flex-col-reverse p-4 space-y-reverse space-y-4">
        <div ref={messagesEndRef} />
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex items-end space-x-3 ${
              message.isUser ? 'flex-row-reverse space-x-reverse' : ''
            }`}
          >
            <Avatar className="h-8 w-8">
              <AvatarImage src={message.sender.avatar} />
              <AvatarFallback>{message.sender.name[0]}</AvatarFallback>
            </Avatar>
            <div
              className={`rounded-2xl p-3 max-w-[70%] ${
                message.isUser
                  ? 'bg-[#F4B8B8] text-black'
                  : 'bg-[#2A2A2A] text-white'
              }`}
            >
              <p>{message.content}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="p-4 flex items-center space-x-2">
        <div className="flex-1 bg-[#2A2A2A] rounded-full p-2">
          <Input
            value={newMessage}
            onChange={handleMessageChange}
            placeholder="Message..."
            className="bg-transparent border-none focus:ring-0 text-white placeholder-gray-400"
          />
        </div>
        <Button className="rounded-full bg-[#F4B8B8] hover:bg-[#F4B8B8]/90 p-2 h-12 w-12 flex items-center justify-center">
          <Send className="h-5 w-5 text-black" />
        </Button>
      </div>
    </div>
  )
}