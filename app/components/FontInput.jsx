"use client";
import React, { useState, useEffect } from 'react';

export default function FontInput({ text }) {
    const [inputText, setInputText] = useState(text || "Preview Text");

    useEffect(() => {
        if (text) {
            setInputText(text);
        } else {
            setInputText("Preview Text");
        }
    }, [text]);

    const handleInputChange = (event) => {
        setInputText(event.target.value);
    };

    return (
        <div className='font-input-div w-[100%] flex justify-between'>
            <input 
                type='text' 
                className='font-input pl-[10px]' 
                value={inputText} 
                onChange={handleInputChange} 
                readOnly 
            />
            <button className='font-input-button'>Copy</button>
        </div>
    );
}
