import React from 'react'

const Loading = () => {
  return (
    <div className='w-full h-[400px] gap-3 flex items-center justify-center'>
      <div className='w-8 h-8 border-b-2 rounded-full animate-spin'>
      </div>
        <div>Loading...</div>
    </div>
  )
}

export default Loading
