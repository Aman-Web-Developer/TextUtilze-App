import React, { useState } from 'react';

const Forms = (props) => {
    const [text, setText] = useState("");
    const onInput = (e) => {
        setText(e.target.value);
    }
    const toUpperCase = () => {
        setText(text.toUpperCase());
        props.showAlert("Converted to UpperCase", "success");
    }
    const toLowerCase = () => {
        setText(text.toLowerCase());
        props.showAlert("Converted to LowerCase", "success");
    }
    const [copyText, setCopyText] = useState("Copy into Clipboard");
    const copyClipboard = () => {
        navigator.clipboard.writeText(text);
        setCopyText("Copied");
        props.showAlert("Copy into the clipboard", "success");
        console.log(copyText)
        setTimeout(() => {
            setCopyText("Copy into Clipboard");
        }, 1000);
    }

    const toClear = () => {
        setText("");
        props.showAlert("All text cleared", "success");
    }

    const toRemoveSpace = () => {
        let newText = text.split(/\s+/)
        setText(newText.join(" "));
        props.showAlert("Extra spcaes removed", "success");
    }
    return (
        <>
            <div className={`container mt-3 text-${props.mode === "light" ? "dark" : "light"}`}>
                <div className="mb-3">
                    <h3>{props.heading}</h3>
                    <textarea onChange={onInput} value={text} className="my-3 form-control" style={{ background: `${props.mode !== "light" ? "#3f474f" : "#fff"}`, color: `${props.mode === "light" ? "#333" : "#fff"}` }} id="exampleFormControlTextarea1" rows="8"></textarea>
                    <button disabled={text.length === 0} className="btn text-white btn-success my-2 mx-1" title='Uppercase' onClick={toUpperCase}>Convert To UpperCase</button>
                    <button disabled={text.length === 0} className="btn text-white btn-success my-2 mx-1" title='Lowecase' onClick={toLowerCase}>Convert To LowerCase</button>
                    <button disabled={text.length === 0} className="btn text-white btn-success my-2 mx-1" title='Clear Text' onClick={toClear}>Clear Text</button>
                    <button disabled={text.length === 0} className="btn text-white btn-success my-2 mx-1" title='Copy' onClick={copyClipboard}>{copyText}</button>
                    <button disabled={text.length === 0} className="btn text-white btn-success my-2 mx-1" title='Remove Extra Spaces' onClick={toRemoveSpace}>Remove Extra Spaces</button>
                </div>
            </div>
            <div className={`container mt-4 text-${props.mode === "light" ? "dark" : "light"}`}>
                <h2>Your text summary</h2>
                <p>{text.split(" ").filter((element) => { return element.length !== 0 }).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length} Minutes to read</p>
                <h3>Preview</h3>
                <p>{text.length > 0 ? text : "Nothing to preview"}</p>
            </div>
        </>
    );
}

export default Forms;