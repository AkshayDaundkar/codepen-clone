import React ,{useState,useEffect} from "react"
import Editor from "./Editor";
import useLocalStorage from "../hooks/useLocalStorage";
import logo from "./assets/logo.svg"
import man from "./assets/man.png"


function App() {
  const[html,setHtml]= useLocalStorage('html',''); 
  const[css,setcss]= useLocalStorage('css',''); 
  const[js,setjs]= useLocalStorage('js',''); 
  const[srcDoc,setsrcDoc]=useState('')

  useEffect(()=>{
    const timeout= setTimeout(()=>{
      setsrcDoc(`<html>
        <body>${html}</body>
        <style>${css}</style>
        <script>${js}</script>
        </html>
      `)
    },250)

    return  ()=>clearTimeout(timeout)
  },[html,css,js])
  

  return (
   <>
   <header className="headerS">
      <img src={logo} alt="calendar" className='headersStextimg'></img>
      <h4 className="headersStext">METAMORALIS CODE EDITOR</h4>
      <p className="user"> Hi User !</p>
      <img alt="profile" className='profile' src={man}></img>
    </header>



   <div className="pane top-pane">
    <Editor 
    language="xml" 
    displayName="HTML"
    value={html}
    onChange={setHtml}
    />
    <Editor
     language="css" 
     displayName="CSS"
     value={css}
     onChange={setcss}
    />
    <Editor
     language="javascript" 
     displayName="JS"
     value={js}
     onChange={setjs}
    />
    
   </div>
   <div className="pane">
      <p className="para">This is Virtual Playground start your Coding!!!</p>
      <iframe title="output"
        srcDoc={srcDoc}
        sandbox="allow-scripts"
        frameBorder="0"
        width="100%"
        height="100%"
      />
   </div>

   <footer className="headerSS">
      <h4 className="headersStext1">©®™ Made by Metamoralis</h4>
    </footer>
   </>
  );
}

export default App;
