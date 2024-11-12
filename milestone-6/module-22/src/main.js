// import {  Hellow } from "../public/another";
import React from "react";
import ReactDOM from 'react-dom/client'


const App = () => {
   return (
   <React.Fragment>
   <div>This is a fokira react app</div>
   </React.Fragment>
   )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);