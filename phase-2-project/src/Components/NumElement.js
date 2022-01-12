import React from "react";


function NumElement({id, number, setSelected, selected}) {

    function handleClick() {
        setSelected(number)
    }

    return (
        <p id={id} onClick={handleClick} className={selected == number ? 'selected-state' : ""}>
            {number}
        </p>
    )
}

export default NumElement;