export interface Message {
  id: string
  content: string
  sender: User
  timestamp: string
  isUser?: boolean
}

export interface User {
  id: string
  name: string
  avatar: string
  lastSeen?: string
}

export interface Chat {
  id: string
  user: User
  lastMessage: string
  timestamp: string
}

