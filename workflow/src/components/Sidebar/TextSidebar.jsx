import React from 'react'

const TextSidebar = ({text,openSidebar}) => {
  return (
    <h3 className={`text-sm text-color-tertiary font-semibold uppercase tracking-wide duration-300 ${!openSidebar&& "scale-0"}`}>{text}</h3>
  )
}

export default TextSidebar