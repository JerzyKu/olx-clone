import React from 'react'

type Props = {
    children: React.ReactNode;
}

export default function Card({children}: Props) {
  return (
    <div className='bg-white my-4 p-4 flex flex-col'>
        {children}
    </div>
  )
}