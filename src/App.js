import React from 'react'
import logo from './logo.svg'
const App = () => {
  return (
    <div style={{
      display:'flex',
      flexDirection:'column',
      justifyContent:'Center',
      alignItems:'center',
      height: '100vh',
      fontFamily:'roboto'
      }}>
        <img src={logo} alt="Quality logo"/>
       <h1 style={{
         color:'#6EC177',
         margin:0,

       }}
       >kamel dawoud,coming soon</h1>
       <p>Whats up,  coming soone</p>
    </div>
  )
}

export default App
