import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('Enter the text');

    const handdleUPclick = () => {
        console.log("Upper Case Clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
    };
    const handdleUPclickL = () => {
        console.log("Upper Case Clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
    };
    const handleUPClickC = () => {
        console.log("Capital Case Clicked" + text);
        let newText = text.replace(/\b\w/g, (char) => char.toUpperCase());
        setText(newText);
    };
    const handleUPClickCopy = () => {
        let newText = text.replace(/\b\w/g, (char) => char.toUpperCase());
    
        const textarea = document.createElement('textarea');
        textarea.value = newText;
        textarea.style.position = 'fixed';
        textarea.style.opacity = 0;
        document.body.appendChild(textarea);
    
        textarea.select();
        textarea.setSelectionRange(0, 99999); // For mobile devices
    
        document.execCommand('copy');
    
        document.body.removeChild(textarea);
    
        // Create a div for the prompt
        const promptDiv = document.createElement('div');
        promptDiv.textContent = "Text copied to clipboard!";
        promptDiv.classList.add('copy-prompt');
    
        // Insert the prompt below the button
        const buttonContainer = document.querySelector('.button-container');
        buttonContainer.appendChild(promptDiv);
    
        // Remove the prompt after 3 seconds
        setTimeout(() => {
            buttonContainer.removeChild(promptDiv);
        }, 3000);
    };
    


    const handdleOnChange = (event) => {
        console.log("On Change");
        setText(event.target.value);
    };

    return (
        <>
            <div className='container form'>
                <div className="my-3">
                    <h4 htmlFor="myBox" className="form-title">{props.heading}</h4>
                    <div class="title-2"><span>ConvertCASE</span></div>
                    <div className="input-container">
                        <textarea className="input-mail form-control" value={text} onChange={handdleOnChange} id="myBox" rows="8"></textarea>
                    </div>
                </div>
                <div className="form-container-main">
                    <span className='button-container'>
                        <button className="btn my-btn btn-primary" type="button" onClick={handdleUPclick}>  <strong>
                            To UPPERCASE
                        </strong>
                            <div id="container-stars">
                                <div id="stars"></div>
                            </div>

                            <div id="glow">
                                <div class="circle"></div>
                                <div class="circle"></div>
                            </div>
                        </button>
                    </span>
                    <span className='button-container mx-3'>
                        <button className="btn my-btn btn-primary" type="button" onClick={handdleUPclickL}>  <strong>
                            To lowercase
                        </strong>
                            <div id="container-stars">
                                <div id="stars"></div>
                            </div>

                            <div id="glow">
                                <div class="circle"></div>
                                <div class="circle"></div>
                            </div>
                        </button>
                    </span>
                    <span className='button-container ml-3'>
                        <button className="btn my-btn btn-primary" type="button" onClick={handleUPClickC}>  <strong>
                            To CapitalCase
                        </strong>
                            <div id="container-stars">
                                <div id="stars"></div>
                            </div>

                            <div id="glow">
                                <div class="circle"></div>
                                <div class="circle"></div>
                            </div>
                        </button>
                    </span>
                    <span className='button-container copy ml-3'>
                        <button className="btn my-btn btn-primary" type="button" onClick={handleUPClickCopy}>  <strong>
                            Copy
                        </strong>
                            <div id="container-stars">
                                <div id="stars"></div>
                            </div>

                            <div id="glow">
                                <div class="circle"></div>
                                <div class="circle"></div>
                            </div>
                        </button>
                        
                    </span>
                    <span className="count mx-3">
                        <span>Words <span className='counting'>{text.split(" ").length}</span></span> <span>Characters <span className='counting'>{text.length}</span></span>
                    </span>
                </div>
                <section class="bg-stars">
                    <span class="star"></span>
                    <span class="star"></span>
                    <span class="star"></span>
                    <span class="star"></span>
                </section>
            </div>
            <a className="navbar-brand logo" href="index.html">MOHD <span>SHA</span>HRU<span>K</span>H</a>
        </>
    )
}
