import React, { useState } from "react";

// CSS
import "./addpoint.component.css";

export default function Addpoint(props) {

    const [inputs, setInputs] = useState({});

    const handleChange = event =>
        setInputs(values => ({
            ...values,
            [event.target.name] : event.target.value
        }));
    
    const handleSubmit = event => {
        event.preventDefault();
        props.onSubmit(inputs);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>x
                <input
                    className="input"
                    type="number"
                    name="x"
                    value={inputs.x ?? ""}
                    onChange={handleChange}
                />
            </label>
            <label>y
                <input
                    className="input"
                    type="number"
                    name="y"
                    value={inputs.y ?? ""}
                    onChange={handleChange}
                />
            </label>
            <label>k
                <input
                    className="input"
                    type="number"
                    name="k"
                    value={inputs.k ?? ""}
                    onChange={handleChange}
                />
            </label>
            <input className="button" type="submit" />
        </form>
    );

}