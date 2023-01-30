import React, { createElement } from 'react'

function File() {


  const divElement = createElement("div", {} , "Without JSX My elements")

  return (
    <div>
      {divElement} <div>With JSX: My elements</div>
    </div>
    
  )
}
export default File
