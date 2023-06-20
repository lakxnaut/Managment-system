import React from 'react';

const TextArea = (props) => {

    const handleChange = (e) => {
        props.setText(e.target.value);
    };
    return (
        <textarea
            id="text-area"
            cols="100"
            rows="10"
            value={props.text}
            onChange={handleChange}
        />
    );
};

export default TextArea; 
