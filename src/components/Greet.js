const Greet = (props) =>{
    return(
        <div>
            <h1>Hello {props.name} {props.stageName}</h1>
            {props.children}
        </div>
        
    )
}

export default Greet