import React from 'react'

type Params = {
    children: React.ReactNode
    error: React.ReactNode
}

export default function UserProfileLayout({children, error}: Params) {
    const isUser = false
  return isUser ? children : error
}