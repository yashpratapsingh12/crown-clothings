import { useState } from "react"
import FormInput from "../form-input/form-input.component";
import {signInWithGogglePopup ,createUserDocumentFromAuth,signInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";
import  Button,{BUTTON_TYPE_CLASSES} from "../button/button.component";
import './sign-in-form.style.scss';




const defaultFormFields ={

    email:"",
    password:"",



}

const SignInForm=()=>{
    const [formFields,setFormFields]= useState(defaultFormFields);
    const {email,password}= formFields;

 



    const resetform=()=>{
        setFormFields(defaultFormFields);

    }

    const signInWithGoggle = async()=>{
         await signInWithGogglePopup();
   

   

    }


    
    const handlesubmit= async(event)=>{
        event.preventDefault();

        try{


            const {user} = await signInAuthUserWithEmailAndPassword(email,password);
          

         



       
            resetform();




        }catch(error){
            switch(error.code){
                case 'auth/invalid-credential':
                    alert("wrong credentials");
                  break;

                  case 'auth/user-not-found':
                  alert("no email associated ")
                  break;

                  default:
                    console.log(error)

            }
      
        }
    }


    const handleChange =(event)=>{
        const{name,value}= event.target;

        setFormFields({...formFields,[name]:value})

    };
    
    return (
    <div className="sign-up-container">
        <h2>Already have an account</h2>
        <span>sign-in with email and password</span>
        <form onSubmit={handlesubmit}>

          
      

            
            <FormInput 
            label="Email" 
            type="email"
            required 
            onChange={handleChange} 
            name="email"
            value={email}
            />

       
            <FormInput 
            label="Password" 
            type="password" 
            required 
            onChange={handleChange} 
            name="password"
            value={password}
            />

            
    
          
     <div className="buttons-container">
        
            <Button type="submit">sign-in</Button>
            <Button type="button"buttontype={BUTTON_TYPE_CLASSES.google}onClick={signInWithGoggle}>Google sign-in</Button>


     </div>
            

         


        </form>
        
    </div>
    )
}

export default SignInForm