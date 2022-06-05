import logo from './logo.svg';
import React , {useState} from 'react'
import './App.css';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import Alert from './Components/Alert';

function App() {
  const[darkMode,setDarkMode] = useState('light');
  const toggleMode = () =>{
    if(darkMode === 'light')
    {
      setDarkMode('dark');
      document.body.style.backgroundColor='grey';
      showAlert("Dark Mode Enabled" , 'success');
    }
    else{
      setDarkMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light Mode Enabled" , 'warning');
    }
  }

  const [alert,setAlert] = useState(null);
  const showAlert = (message,type) =>
  {
      setAlert({
        message: message,
        type: type
      })
      setTimeout(()=>{
        setAlert(null)
      },1500)
    
  }
  return (
    <>
      <Navbar title="TextWrap" about="About-Us" contact="Contact-Us" mode={darkMode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container">
      <Textform heading="TextWrap" mode={darkMode} toggleMode={toggleMode}/>
      </div>
    </>
  );
}

export default App;