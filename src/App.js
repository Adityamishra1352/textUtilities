import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
function App() {
  const[darkMode,setDarkMode]=useState('light');
  const toggleMode=()=>{
    if(darkMode==='light'){
      setDarkMode("dark");
      document.body.style.backgroundColor="grey";
    }
    else{
      setDarkMode("light");
      document.body.style.backgroundColor="white";
    }
  }
  return (
    <>
<Navbar title="textUtils" about="About TextUtils" mode={darkMode} toggleMode={toggleMode}></Navbar>
<div className="container">
<TextForm heading="Enter the text to analyze" mode={darkMode}></TextForm>
{/* <About></About> */}
</div>
    </>
  );
}

export default App;
