import React, { useState } from "react";

export default function Addpoint() {

    return (
        <form>
            <label>x
                <input type="number" />
            </label>
            <label>y
                <input type="number" />
            </label>
            <input type="submit" />
        </form>
    )

}