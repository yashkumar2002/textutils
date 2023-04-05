import React, {useState} from 'react'

export default function TextForm(props) {
   const handleUpClick = ()=>{
   let newText = text.toUpperCase();
   setText(newText)
   props.showAlert("Text is converted into UpperCase!","success");
   }
   const handleDownClick = ()=>{
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Text is converted into  LowerCase!","success");
   }

    const handleOnChange =(event) =>{
   setText(event.target.value);
    }
   const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Your text is copied!","success");
   }
   const handleSpaces =()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Extra spaces removed!","success");
   }
   const handleClear = ()=>{
    let newText = ("");
    setText(newText)
    props.showAlert("Text is cleared!","success");
   }
    const [text, setText] = useState("")
  return (
    <>
  <div className='container' style={{color: props.mode==='dark'?'white':'#042743'}}>
    <h1  >{props.heading}</h1>
<div className="mb-3">
 <textarea className="form-control" value= {text} onChange = {handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode=== 'dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-outline-success" style = {{margin:"5px"} }onClick={handleUpClick}>Convert to UpperCase</button>
<button className="btn btn-outline-success"  onClick={handleDownClick}>Convert to LowerCase</button>
<button className="btn btn-outline-success"style = {{margin:"5px"}} onClick={handleCopy}>Copy Text</button>
<button className="btn btn-outline-success" onClick={handleSpaces}>Remove extra spaces</button>
<button className="btn btn-outline-success" style = {{margin: "5px"}} onClick={handleClear}>Clear Text</button>

</div> 
<div className='container my-2' style={{color: props.mode==='dark'?'white':'#042743'}}>
  <h1>
    Text Summary 
  </h1>
  <p>Your text contain {text.split(" ").length } words, {text.length} character</p>
  <p>Time taken to read this text is {0.008 * text.split(" ").length} Minutes</p>
  <h3>Preview Text</h3>
  <p>{text.length>0?text:"Enter your text to preview here"}</p>
  

  </div> 
</>
  )        
}
