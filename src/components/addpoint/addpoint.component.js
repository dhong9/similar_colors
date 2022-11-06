// React
import React, { useState } from "react";

// CSS
import "./addpoint.component.css";

/**
 * Form for adding input point and number of neighbors
 * @param {Object} props contanis form submission function
 * @returns form component
 */
export default function Addpoint(props) {
    
    // Getting and setting form data
    const [inputs, setInputs] = useState({});

    /**
     * Updates input data from user
     * @param {Event} event when user enters data
     */
    const handleChange = event =>
        setInputs(values => ({
            ...values,
            [event.target.name] : event.target.value
        }));
    
    /**
     * Handles form submission event
     * @param {Event} event when user submits form
     */
    const handleSubmit = event => {
        event.preventDefault();
        props.onSubmit(inputs); // Update parent with user input
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* Data point */}
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

            {/* Number of neighbors */}
            <label>k
                <input
                    className="input"
                    type="number"
                    name="k"
                    value={inputs.k ?? ""}
                    onChange={handleChange}
                />
            </label>

            {/* Form submission button */}
            <input className="button" type="submit" />
        </form>
    );

}