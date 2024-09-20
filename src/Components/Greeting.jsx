import React, { useState } from 'react';

function MyComponent() {
    const [inputValue, setInputValue] = useState('');
    const [paragraphText, setParagraphText] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleClick = () => {
        setParagraphText(inputValue);
    };

    return (
        <div>
            <h1>Name tracker</h1>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Enter Your name"
            />
            <br></br>
            <button onClick={handleClick}>Submit</button>
            <p>Hello, {paragraphText} Welcome!</p>
        </div>
    );
}
export default MyComponent;