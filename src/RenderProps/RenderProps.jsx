import { useState } from 'react'
function RenderProps(props) {
    const [state,setState]= useState(0)
    function handleState(){
        setState(state+1)
    }
  return (
    props.render(state,handleState)
  )
}

export default RenderProps