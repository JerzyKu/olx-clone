import React from 'react'

type Props = {
    className?: string;
    children?: React.ReactNode;
}

export default function Card({children, className}: Props) {
  return (
    <div className={'bg-white my-4 p-4 rounded ' + className}>
        {children}
    </div>
  )
}