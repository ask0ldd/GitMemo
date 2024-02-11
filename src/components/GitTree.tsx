import React from 'react'

export default function GitTree(props : React.PropsWithChildren) {

    if(props.children == null) return(<></>)
    console.log(props.children)

    const [initialState, arrow, postState] = (props.children as Array<string>)
    return (
        <div style={style}>
            <div style={{display:'flex', flex:'1 1 50%', justifyContent: 'center'}}>{initialState}</div>
            <div style={{display:'flex', flex:'0 0 4rem', justifyContent: 'center'}}>{arrow}</div>
            <div style={{display:'flex', flex:'1 1 50%', justifyContent: 'center'}}>{postState}</div>
        </div>
    )
}

const style = {
    height:'6rem',
    backgroundColor: '#111133DD',
    color: '#EEEEEE',
    display: 'flex',
    alignItems: 'center',
    padding : '0 1rem',
    marginBottom: '1rem',
    border: '2px solid #2222aa'
}
