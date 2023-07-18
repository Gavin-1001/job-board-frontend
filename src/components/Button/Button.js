const Button = ({onClick, children, color}) => {

    const buttonStyle = {
        backgroundColor: color,
    };


    return (

        <button onClick={onClick} style={buttonStyle}>
            {children}
        </button>
    );
}


export default Button;