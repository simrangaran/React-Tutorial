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
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" value={text} onChange={handleOnChange}></textarea>
      </div>
      <button type="button" className="btn btn-primary" onClick={handleOnClick}>Upper-Case</button>
      <h3>Your text Summary</h3>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} mins to read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div> 
    )
}
