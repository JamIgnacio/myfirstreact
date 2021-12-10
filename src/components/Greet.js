const Greet = (props) =>{
    return(
        <div>
            <h1>Welcome to my page, {props.name} {props.stageName}</h1>
            {props.children}
        </div>
        
    )
}

export default Greet