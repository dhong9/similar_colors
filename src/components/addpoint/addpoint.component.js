import React, { useState } from "react";

export default function Addpoint() {

    const [inputs, setInputs] = useState({});

    const handleChange = event =>
        setInputs(values => ({
            ...values,
            [event.target.name] : event.target.value
        }));
    
    const handleSubmit = event => {
        event.preventDefault();

        //! TODO Show input points on plot
        console.log(inputs);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>x
                <input
                    type="number"
                    name="x"
                    value={inputs.x ?? ""}
                    onChange={handleChange}
                />
            </label>
            <label>y
                <input
                    type="number"
                    name="y"
                    value={inputs.y ?? ""}
                    onChange={handleChange}
                />
            </label>
            <input type="submit" />
        </form>
    );

}