import { getUser } from '@/lib/data'
import React from 'react'


const Author = async({userId}: {userId: number}) => {

    const user = await getUser(userId)

  return <div>{`${user && user.name}`}</div>;
}

export default Author