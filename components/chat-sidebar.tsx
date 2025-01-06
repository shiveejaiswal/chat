'use client'

import { useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Chat } from '@/types/chat'
import Image from 'next/image'

interface ChatSidebarProps {
  chats: Chat[]
  onSelectChat: (chat: Chat) => void
  selectedChat?: Chat
}

export function ChatSidebar({ chats, onSelectChat, selectedChat }: ChatSidebarProps) {
  const [chatImagesEnabled, setChatImagesEnabled] = useState(true)

  return (
    <div className="w-[300px] bg-[#1E1E1E] p-4 flex flex-col h-[calc(100vh-8rem)]">
      <h2 className="text-lg font-semibold mb-4">ALL YOUR CHATS</h2>
      
      {/* Chat Images Button */}
      <Button
        onClick={() => setChatImagesEnabled(!chatImagesEnabled)}
        className="w-full bg-[#F4B8B8] hover:bg-[#F4B8B8]/90 text-black mb-2 flex items-center justify-center gap-2"
      >
        <Image 
          src="/message.png" 
          alt="Chat Icon" 
          width={20} 
          height={20}
        />
        Chat Images: {chatImagesEnabled ? 'ON' : 'OFF'}
      </Button>
      <p className="text-sm text-gray-400 mb-4">
        When a bot sends you images, you will be charged one secondary image
      </p>

      {/* Chat List */}
      <div className="space-y-2">
        {chats.map((chat) => (
          <button
            key={chat.id}
            onClick={() => onSelectChat(chat)}
            className={`w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-[#2A2A2A] transition-colors ${
              selectedChat?.id === chat.id ? 'bg-[#2A2A2A]' : ''
            }`}
          >
            <Avatar>
              <AvatarImage src={chat.user.avatar} />
              <AvatarFallback>{chat.user.name[0]}</AvatarFallback>
            </Avatar>
            <div className="flex-1 text-left">
              <div className="font-medium">{chat.user.name}</div>
              <div className="text-sm text-gray-400">{chat.lastMessage}</div>
            </div>
          </button>
        ))}

        {/* Create New Bot Button - Now with custom plus icon */}
        <button
          className="w-full flex items-center space-x-2 p-3 rounded-lg hover:bg-[#2A2A2A] transition-colors text-left"
        >
          <Image 
            src="/add.png" 
            alt="Add New Bot" 
            width={32} 
            height={32}
            className="flex-shrink-0"
          />
          <span>Create new bot</span>
        </button>
      </div>
    </div>
  )
}

