import React, {useEffect, useState} from "react";

function Tile({
    tileData, 
    selectedTile, 
    setSelectedTile, 
    id, 
    difficulty, 
    selectedNumber, 
    setLives, 
    lives,
    setSavedGame,
    savedGame,
    updateSavedGame
}) {



    const [created, setCreated] = useState(false)
    const [tileContent, setTileContent] = useState(tileData.split())
    const [className, setClassName] = useState('tile')

    useEffect(() => {
        if (created && !isCorrect() && tileContent !== '-') {
            setClassName('incorrect tile')
            setTimeout(() => {
                setClassName('tile')
                setLives(lives - 1)
                setTileContent('-') 
                //reruns useEffect need to fix
            }, 1000)
        } else {
            setClassName('tile')
        }
    }, [tileContent])
    
    useEffect(() => {
        setCreated(true)
    }, [])

    


    //To-Do: 
        //Win event
        //Save - POST
        //Client-side routing - saved game page /saved-games || easy/medium/hard

    
    //returns true if clicked tile matches tile id
    function isSelected() {
        return (
            selectedTile == id
        )
    }

    function handleClick() {
    //sets selectedTile to tile id if tile is not already selected
        if (!isSelected()) {
           updateMove()
            //Lookup callback in state
            //selected tile is tile index(id)
            setSelectedTile(id)
            

    //if tile is selected and clicked again deselect tile
        } else {
            setSelectedTile(null)
        }
    
    }

    useEffect(() => {
        updateSavedGame()

    }, [tileContent])
    

    function updateMove() {
        if (isCorrect()) {
            setClassName('selected-state tile')
            setTileContent(selectedNumber)
        } else {
            setTileContent(selectedNumber)

        }
    }


    


    
    //checks it selected tile index matches selected numElement - returns true/false
    function isCorrect() {
        const solution = difficulty.solution.charAt(id)
        return (
            solution == selectedNumber
        )
        
        
    }

    return (
        <p onClick={handleClick}  className={className}>
            {tileContent}

        </p>
    )
}

export default Tile