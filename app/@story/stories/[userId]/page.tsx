import React from 'react'

type Props = {
    params: {
        userId: string
    }
}
export default function UserStory({params}: Props) {
    const { userId } = params
  return (
    <div>story modal for : {userId}</div>
  )
}
