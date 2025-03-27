const Child = ({handleClick}) => {
    return (
        <>
        <button onClick={() => handleClick("Increase")}> Increase</button>
        <button onClick={() => handleClick("Decrease")}> Decrease</button>
    
        </>
    )
    }
    export default Child;