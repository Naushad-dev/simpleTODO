import React from 'react'
import  ReactDOM  from 'react-dom/client'
import App from './Components/App'

const AppLayout=()=>{
    return(
        <>
        <App/>
     

  
        </>
    )
}
const root= ReactDOM.createRoot(document.getElementById("root"))

root.render(<AppLayout/>)
