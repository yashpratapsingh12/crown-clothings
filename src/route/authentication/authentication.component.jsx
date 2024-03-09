import { signInWithGogglePopup,createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import SignUpForm from "../../component/sign-up-form/sign-up-form.component";
import SignInForm from "../../component/sign-in-form copy/sign-in-form.component";

import './authentication.component.style.scss';


const Authentication =()=>{

 


    return (
        <div className="authentication-container">
          
            <SignInForm/>
            <SignUpForm/>
        </div>
    )
}

export default Authentication;
