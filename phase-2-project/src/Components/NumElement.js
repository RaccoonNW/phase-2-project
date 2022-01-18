import React, {useState} from "react";


function NumElement({id, number, setSelectedNumber, selectedNumber}) {

    function handleClick() {
        if (selectedNumber !== number) {
            setSelectedNumber(number)
            
        } else {
            setSelectedNumber(null)
        }
    }

    return (
        <p id={id} onClick={handleClick} className={selectedNumber == number ? 'selected-state' : ""}>
            {number}
        </p>
    )
}

export default NumElement;