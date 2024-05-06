import React from 'react'

function Box(props) {
  return (
    <div style={{height:'100px',width:'100px',border:'1px solid',backgroundColor:" black",color:'white',display:'flex', justifyContent:'center',alignItems:'center',fontSize:'50px',borderRadius:'5px'
    }} onClick={props.onClick}>
      <p>{props.value}</p>
    </div>
  )
}

export default Box