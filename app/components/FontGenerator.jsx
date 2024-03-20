"use client";
import React, { useState } from "react";
import FontGeneratorDiv from "./FontGeneratorDiv";
import Textarea from "./Textarea";

export default function FontGenerator() {
    const [text, setText] = useState("Preview Text");

    const handleTextareaChange = (event) => {
        setText(event.target.value);
    };

    return (
        <div>
            <div className="text-area-div w-[60%] m-auto">
                <textarea 
                    className="text-area-font p-[10px]"
                    placeholder="Type or Paste Text Here ..."
                    value={text}
                    onChange={handleTextareaChange}
                ></textarea>
            </div>
            <FontGeneratorDiv text={text} />
        </div>
    );
}
