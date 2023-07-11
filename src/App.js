import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
function App() {
  const[darkMode,setDarkMode]=useState('light');
  const[alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      showAlert(null);
    }, 3000);
  }
  const toggleMode=()=>{
    if(darkMode==='light'){
      setDarkMode("dark");
      document.body.style.backgroundColor="grey";
      showAlert("Dark Mode has been enabled", "success");
    }
    else{
      setDarkMode("light");
      document.body.style.backgroundColor="white";
      showAlert("Light Mode has been enabled","success");
    }
  }
  return (
    <>
<Navbar title="textUtils" about="About TextUtils" mode={darkMode} toggleMode={toggleMode}></Navbar>
<Alert alert={alert}></Alert>
<div className="container">
<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={darkMode}></TextForm>
{/* <About></About> */}
</div>
    </>
  );
}

export default App;
