import { GoogleSingnInButton,BaseButton,Inverted } from "./button.style"

export const BUTTON_TYPE_CLASSES={
    base:"Base",
    google:"google-sign-in",
    inverted:"inverted",

}

const getButton = (buttontype=BUTTON_TYPE_CLASSES.base)=>(
 
    {
        [BUTTON_TYPE_CLASSES.base]:BaseButton,
        [BUTTON_TYPE_CLASSES.google]:GoogleSingnInButton,
        [BUTTON_TYPE_CLASSES.inverted]:Inverted,

    }[buttontype]


)


const Button=({children,buttontype,...otherProps})=>{
    const CustomButton= getButton(buttontype)
    return(
        <CustomButton {...otherProps}>
        {children}
        </CustomButton>
    )
}
export default Button