import { getUser } from '@/lib/data'
import React from 'react'

const Author = async({userId}: any) => {

    const user = await getUser(userId)

  return <div>{user.username}</div>;
}

export default Author