//import React from 'react'

export default function Button({name}) {
    function consoleBtn(){
      console.log('this button worked')
    }
  return (
    <>
      <button onClick={ consoleBtn }>{name}</button>
    </>
  )
}



// import React, { Component } from 'react'

// export class Button extends Component {
//     constructor(props) {
//         super(props)
//     }
//   consoleButton () {
//     console.log('this click worked')
//   }

//   render() {
   
//   }
// }

// export default Button