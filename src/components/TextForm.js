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
        let newText = text.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase());
        setText(newText);
    };
    const handleUndo = () => {
        if (historyIndex > 0) {
            const newIndex = historyIndex - 1;
            setHistoryIndex(newIndex);
            setText(history[newIndex]);
        }
    };
    const [history, setHistory] = useState(['Enter the text']);
    const [historyIndex, setHistoryIndex] = useState(0);

    const updateText = (newText) => {
        const newHistory = history.slice(0, historyIndex + 1);
        newHistory.push(newText);
        setHistory(newHistory);
        setHistoryIndex(newHistory.length - 1);
        setText(newText);
    };
    const handleClear = () => updateText('');
    const handleKeyDown = (e) => {
        if (e.ctrlKey && e.key === 'z') {
            e.preventDefault();
            handleUndo();
        }
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
        promptDiv.textContent = "😈Gyahahahaha, Your Text is Copied!";
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
                        <textarea className="input-mail form-control" value={text} onChange={handdleOnChange} onKeyDown={handleKeyDown} id="myBox" rows="8"></textarea>
                    </div>
                </div>
                <div className="form-container-main">
                    <span className='button-container'>
                        <button className="btn my-btn btn-primary" type="button" onClick={handdleUPclick}>  <strong>
                            UPPERCASE
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
                            lowercase
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
                            CapitalCase
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
                    <span className='button-container copy ml-3'>
                        <button className="btn my-btn clear btn-primary" type="button" onClick={handleClear}><strong>Clear</strong>
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
                        <button className="btn my-btn btn-primary" type="button" onClick={handleUndo}>
                            <strong>Undo</strong>
                            <div id="container-stars">
                                <div id="stars"></div>
                            </div>
                            <div id="glow">
                                <div className="circle"></div>
                                <div className="circle"></div>
                            </div>
                        </button>
                    </span>
                    <span className="count mx-3">
                        <span>Words <span className='counting'>{text.trim().split(/\s+/).filter(word => word !== '').length}</span></span> <span>Characters <span className='counting'>{text.length}</span></span>
                    </span>
                </div>
                <section class="bg-stars">
                    <span class="star"></span>
                    <span class="star"></span>
                    <span class="star"></span>
                    <span class="star"></span>
                </section>
            </div>
            <a className="navbar-brand logo" href="index.html">MOHD <span>SHA</span>H<span>R</span>U<span>K</span>H</a>
            <div className="social-container">
                <ul className="social-icons">
                    <li>
                        <a href="https://m.facebook.com/m0hdshahrukh/" className="facebook" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                <path fill="currentColor" d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96C18.34 21.21 22 17.06 22 12.06C22 6.53 17.5 2.04 12 2.04Z" />
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a href="https://dev-loper-srk.pantheonsite.io/" className="twitter" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
              <path fill="currentColor" d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3M5 5H19V8H5V5M5 10H19V19H5V10M7 12V17H17V12H7M9 14H15V15H9V14Z"/>
            </svg>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/m0hd_shahrukh/" className="instagram" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                <path fill="currentColor" d="M7.8 2H16.2C19.4 2 22 4.6 22 7.8V16.2C22 19.4 19.4 22 16.2 22H7.8C4.6 22 2 19.4 2 16.2V7.8C2 4.6 4.6 2 7.8 2ZM7.6 4C5.61 4 4 5.61 4 7.6V16.4C4 18.39 5.61 20 7.6 20H16.4C18.39 20 20 18.39 20 16.4V7.6C20 5.61 18.39 4 16.4 4H7.6ZM17.25 5.5C17.9404 5.5 18.5 6.05964 18.5 6.75C18.5 7.44036 17.9404 8 17.25 8C16.5596 8 16 7.44036 16 6.75C16 6.05964 16.5596 5.5 17.25 5.5ZM12 7C14.7614 7 17 9.23858 17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7ZM12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9Z" />
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/mohd2456/" className="linkedin" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.024-3.041-1.853-3.041-1.854 0-2.139 1.45-2.139 2.949v5.661h-3.554V9h3.414v1.561h.047c.476-.901 1.635-1.854 3.366-1.854 3.6 0 4.266 2.368 4.266 5.448v6.297zM5.337 7.433c-1.144 0-2.07-.93-2.07-2.077 0-1.147.926-2.077 2.07-2.077s2.07.93 2.07 2.077c0 1.147-.926 2.077-2.07 2.077zM6.996 20.452H3.676V9h3.32v11.452zM22.225 0H1.771C.792 0 0 .775 0 1.729v20.542C0 23.225.792 24 1.771 24h20.451C23.207 24 24 23.225 24 22.271V1.729C24 .775 23.207 0 22.225 0z"/>
</svg>

                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/m0hdShahrukh" className="github" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                <path fill="currentColor" d="M12 2A10 10 0 0 0 2 12C2 16.42 4.87 20.17 8.84 21.5C9.34 21.58 9.5 21.27 9.5 21C9.5 20.77 9.5 20.14 9.5 19.31C6.73 19.91 6.14 17.97 6.14 17.97C5.68 16.81 5.03 16.5 5.03 16.5C4.12 15.88 5.1 15.9 5.1 15.9C6.1 15.97 6.63 16.93 6.63 16.93C7.5 18.45 8.97 18 9.54 17.76C9.63 17.11 9.89 16.67 10.17 16.42C7.95 16.17 5.62 15.31 5.62 11.5C5.62 10.39 6 9.5 6.65 8.79C6.55 8.54 6.2 7.5 6.75 6.15C6.75 6.15 7.59 5.88 9.5 7.17C10.29 6.95 11.15 6.84 12 6.84C12.85 6.84 13.71 6.95 14.5 7.17C16.41 5.88 17.25 6.15 17.25 6.15C17.8 7.5 17.45 8.54 17.35 8.79C18 9.5 18.38 10.39 18.38 11.5C18.38 15.32 16.04 16.16 13.81 16.41C14.17 16.72 14.5 17.33 14.5 18.26C14.5 19.6 14.5 20.68 14.5 21C14.5 21.27 14.66 21.59 15.17 21.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z" />
                            </svg>
                        </a>
                    </li>
                </ul>
            </div>
        </>
    )
}
