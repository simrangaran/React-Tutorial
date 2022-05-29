import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';

function App() {
  return (
    <>
      <Navbar title="TextBAR" about="About-Us" contact="Contact-Us"/>
      <div className="container">
      <Textform heading="Text-O-Bar"/>
      </div>
    </>
  );
}

export default App;