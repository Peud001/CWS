import { getUser } from '@/lib/data'
import React from 'react'


const Author = async({userId}) => {

    const user = await getUser(userId)

  return <div>{user?.name}</div>;
}

export default Author