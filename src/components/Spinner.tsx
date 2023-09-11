import React from 'react'

const Spinner = ({
  color = 'border-blue-500',
  height = 'h-10',
  width = 'w-10',
  border = 'border-4',
}: {
  color?: string
  height?: string
  width?: string
  border?: string
}) => {
  return <div className={`${height} ${width} animate-spin rounded-full ${border} ${color} border-t-transparent`}></div>
}

export default Spinner
