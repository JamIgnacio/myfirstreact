const Greet = (props) =>{
    return(
        <div>
            <h1>Welcome to the game, {props.name} {props.stageName}</h1>
            {props.children}
        </div>
        
    )
}

export default Greet