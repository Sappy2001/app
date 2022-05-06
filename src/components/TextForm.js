import React,{useState} from 'react'

export default function TextForm(props) {
    let myStyle=
    {
		color:props.mode==='light'?'black':'#1ffffe',
		backgroundColor: props.mode==='dark'?'#1f1f3d':'white',
        transition:'all 0.5s ease 0s'
	}
    const handleUpClick=()=>
    {
        console.log("data enetered: "+text);
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Letters have been UpperCased","primary") 

    }
    const handleLowClick=()=>
    {
        console.log("data enetered: "+text);
        let newText=text.toLowerCase();
        setText(newText)
        props.showAlert("Letters have been LowerCased","primary")
    }

    const handleClear=()=>
    {
        
        let newText=("");
        setText(newText);
        props.showAlert("Letters have been Cleared","warning")
    }

    const handleCapitalizer=()=>
    {
        const nt=text.split(" ");
        let newText="";
        for(let i=0;i<text.split(" ").length;i++)
      { 
           newText=newText+nt[i].charAt(0).toUpperCase()+nt[i].substring(1,nt[i].length);
           newText=newText+" ";
        }setText(newText);
        props.showAlert("Letters have been Capitalized","primary")
    }

    const handleOnChange=(event)=>{
        console.log("Onchange");
        setText(event.target.value);
    }
    const[text,setText]=useState('');
    
    
    return (
      <>
    <div className='container' >
        <h1>
        {props.heading} 
        </h1>
        <div className="mb-3"  style={myStyle}>
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"  style={myStyle} ></textarea>
        </div>
        <button className={`btn btn-${props.mode==='light'?'':'outline-'}primary m-2`} onClick={handleUpClick}>Convert to uppercase</button>
        <button className={`btn btn-${props.mode==='light'?'':'outline-'}primary m-2`} onClick={handleLowClick}>Convert to lowercase</button>
        <button className={`btn btn-${props.mode==='light'?'':'outline-'}primary m-2`} onClick={handleClear}>Clear</button>
        <button className={`btn btn-${props.mode==='light'?'':'outline-'}primary m-2`} onClick={handleCapitalizer}>Capitalize</button>
    </div>
        <div className='container my-2'>
            <h1>Your Text Summary</h1>
            <p><b>{text.split(" ").filter((e)=>{return e.length!==0}) } words and {text.length} characters</b></p>
            <p><b>On Average {0.005*text.split(" ").length} Minutes to read </b></p>
            <h2>preview</h2>
            <p>{text}</p>
        </div>
    </>
  )
  }
