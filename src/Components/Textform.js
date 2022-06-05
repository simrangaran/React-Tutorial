import React , {useState} from 'react'
export default function Textform(props){
//text ko button k clicp par uppercase

   const[text, setText] = useState("");
   const handleOnClick = () =>{
        let new_text = text.toUpperCase();
        setText(new_text);
   }
   const handleOnChange = (event) =>{
       setText(event.target.value);
   }
    return (
    <div>
      <h1 style={{color : props.mode === 'dark' ? 'white' :  'black'}}>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'  ? 'grey' : 'white'}}></textarea>
      </div>
      <button type="button" className="btn btn-primary" onClick={handleOnClick}>Upper-Case</button>
      <h3 style={{color : props.mode === 'dark' ? 'white' :  'black'}}>Your text Summary</h3>
      <p style={{color : props.mode === 'dark' ? 'white' :  'black'}}>{text.split(" ").length} words and {text.length} characters</p>
      <p style={{color : props.mode === 'dark' ? 'white' :  'black'}}>{0.008 * text.split(" ").length} mins to read</p>
      <h2 style={{color : props.mode === 'dark' ? 'white' :  'black'}}>Preview</h2>
      <p style={{color : props.mode === 'dark' ? 'white' :  'black'}}>{text}</p>
    </div> 
    )
}
