import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('Enter the text');

    const handdleUPclick = () => {
        console.log("Upper Case Clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
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
                <span>
                <button className="btn my-btn btn-primary" type="button" onClick={handdleUPclick}>  <strong>To UPPERCASE</strong>
                    <div id="container-stars">
                        <div id="stars"></div>
                    </div>

                    <div id="glow">
                        <div class="circle"></div>
                        <div class="circle"></div>
                    </div> </button>
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
