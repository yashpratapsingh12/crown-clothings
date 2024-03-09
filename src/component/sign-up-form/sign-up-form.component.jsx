import { useState,useContext } from "react"
import FormInput from "../form-input/form-input.component";
import { createAuthUserWithEmailAndPassword,createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import './sign-up-form.style.scss';
import Button from "../button/button.component";

import { UserContext } from "../../contexts/user.contexts";


const defaultFormFields ={
    displayName:"",
    email:"",
    password:"",
    confirmPassword:"",


}

const SignUpForm=()=>{
    const [formFields,setFormFields]= useState(defaultFormFields);
    const {displayName,email,password,confirmPassword}= formFields;

    
    
   


    const resetform=()=>{
        setFormFields(defaultFormFields);

    }


    
    const handlesubmit= async(event)=>{
        event.preventDefault();

        if(password != confirmPassword){
            alert("Password do not match")
            return ;

        }
        try{

            const {user} = await createAuthUserWithEmailAndPassword(email,password);

         
            await createUserDocumentFromAuth(user, {displayName} );
           
            resetform();




        }catch(error){
            if(error.code=="auth/email-already-in-use"){
                alert("email already in use")
            }
            else{
          console.log("error encountered ",error)
            }
        }
    }


    const handleChange =(event)=>{
        const{name,value}= event.target;

        setFormFields({...formFields,[name]:value})

    };
    
    return (
    <div className="sign-up-container">
        <h2>Dont have an account ?</h2>
        <span>sign-up with email and password</span>
        <form onSubmit={handlesubmit}>

          
            <FormInput 
            label="Display Name"
            type="text"
            required 
            onChange={handleChange} 
            name="displayName" 
            value={displayName}
            />

            
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

            
            <FormInput 
            label="Confirm-Password" 
            type="password" 
            required 
            onChange={handleChange} 
            name="confirmPassword"
            value={confirmPassword}/>
            
            <Button type="submit">sign-up</Button>

        </form>
    </div>
    )
}

export default SignUpForm