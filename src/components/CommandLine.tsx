import React from 'react'

export default function CommandLine(props : React.PropsWithChildren) {
  return (
    <p style={style}>{'>'}  {props.children}</p>
  )
}

const style = {
    height:'3rem',
    backgroundColor: '#111111EE',
    color: '#EEEEEE',
    display: 'flex',
    alignItems: 'center',
    padding : '0 1rem',
    marginBottom: '1rem',
    marginTop: '1rem',
    border: '2px solid #000000'
}
