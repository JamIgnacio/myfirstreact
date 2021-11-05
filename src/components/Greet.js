function Greet(props){
    return(
        <div>
            <h1>Hello {props.name} a.k.a. {props.stageName}</h1>
            {props.children}
        </div>
        
    )
}

export default Greet