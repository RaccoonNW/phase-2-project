import './App.css'

function Options({setDifficulty}) {

    function handleSetDifficulty() {
        const element = document.getElementById('difficulty-select')
        if (element.value === 'easy') {
            fetch('http://localhost:3001/puzzles')
                .then((r) => r.json())
                .then((puzzles) => setDifficulty(puzzles[0]))
        }
        else if (element.value === 'medium') {
            fetch('http://localhost:3001/puzzles')
                .then((r) => r.json())
                .then((puzzles) => setDifficulty(puzzles[1]))
        }
        else {
            fetch('http://localhost:3001/puzzles')
                .then((r) => r.json())
                .then((puzzles) => setDifficulty(puzzles[2]))
        }
    }
    
        

    return (
        <div id="setup-game">
            <div id="difficulty">
                <h3>Choose Difficulty:</h3>
                <select name='difficulty' id='difficulty-select' onChange={handleSetDifficulty}>  
                    <option value=''>Select Difficulty</option>
                    <option id='diff-1' value='easy'>Easy</option>
                    <option id='diff-2' value='medium'>Medium</option>
                    <option id='diff-3' value='hard'>Hard</option>
                </select>
            </div>
        </div>
    )

}

export default Options