import buttonStyle from "../styles/Button.module.css"

const Button = (props) => {
    return ( 
        <div className = {`${buttonStyle.wrapper}`}>
           
            <a src="" className = {`${buttonStyle.buttonlink}`}>
                <span>{props.children}</span>
            </a>
           
        </div>
     );
}
 
export default Button;