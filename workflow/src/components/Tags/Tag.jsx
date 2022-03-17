import React from 'react'

const Tag = ({text}) => {
  return (
    <span className="inline-block bg-color-btn rounded-full px-3 py-1
             text-sm font-semibold text-white mr-2 mb-2">
                 #{text}
    </span>
  )
}

export default Tag