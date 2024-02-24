import React, { useState } from "react";
import styles from './SignUp.module.css';
import logo from '../images/apple logo.png'
import PeopleIcon from '@mui/icons-material/People';
import CloseIcon from '@mui/icons-material/Close';
import Switches from "./Switches";
export default function SignUp({close}){

    const [selectedOption, setSelectedOption] = useState('LoginIn');
    const [formData,setFormData] = useState({
        name:'soemname',
        email:'someemail',
        pass:'somepass',
        appType: 'music'
        })

    function closemodal(){
        close(false);
    }

    //REQUIRMENTS;
    const loginURL = 'https://academics.newtonschool.co/api/v1/user/login';
    const signupURL = 'https://academics.newtonschool.co/api/v1/user/signup';
    const header = {'projectId': 'f104bi07c490','Content-Type': 'application/json'};

    // LOGIN
    async function login(){
        const resp = await fetch(loginURL,{
            method:'POST',
            headers: header,
            body: JSON.stringify()
        })
    }

    function filterOutKey(originalObject, keyToFilter) {
        // Create a new object to store the filtered key-value pairs
        const filteredObject = {};
      
        // Iterate over the keys of the original object
        for (let key in originalObject) {
          // Check if the current key is the one to filter out
          if (key !== keyToFilter) {
            // If not, add the key-value pair to the filtered object
            filteredObject[key] = originalObject[key];
          }
        }
      
        // Return the filtered object
        return filteredObject;
    }

    // SIGNUP
    async function singUp(){
        const reqform = filterOutKey(formData, 'name');
        const resp = await fetch(signupURL,{
            method:'POST',
            headers: header,
            body: JSON.stringify(reqform)
        })
    }

    return (
        <div className={styles.signupcontainer}>
            <div className={styles.signupmodal}>
                <span className={styles.close} onClick={closemodal}>
                    <CloseIcon/>
                </span>
                <div className={styles.logheading}>
                    <img src={logo} alt="" className={styles.logo}/>
                    <h1 className={styles.heading}>Sing In or Sign Up</h1>
                    <h3 className={styles.subheading}>Enter your email to get started.</h3>
                </div>
                <Switches selectedOption={selectedOption} setSelectedOption={setSelectedOption}/>
                <form action="" className={styles.signupform}>
                    {selectedOption === 'SignUp' && 
                        <>
                        <input type="text" value={formData.name} name="" id="name" placeholder="Name" onChange={(e)=>{setFormData(prev=>{return {...prev,name:e.target.value}})}}/>
                        {/* <p className={styles.formerror}>This is the error line</p> */}
                        </>
                    }
                    <input type="email" value={formData.email} name="" id="email" placeholder="Email or Apple ID" onChange={(e)=>{setFormData(prev=>{return {...prev,email:e.target.value}})}}/>
                    {/* <p className={styles.formerror}>This is the error line</p> */}
                    <input type="password" value={formData.pass} name="" id="password" placeholder="Password" onChange={(e)=>{setFormData(prev=>{return {...prev,pass:e.target.value}})}}/>
                    {/* <p className={styles.formerror}>This is the error line</p> */}
                </form>
                    <PeopleIcon sx={{color:'#fa2d48',height:'1.2em',width:'1.2em'}}/>
                <div className={styles.secureinfo}>
                    <p>Your Apple ID information is used to allow you to sign in securely and access your data. Apple records certain data for security, support, and reporting purposes. If you agree, Apple may also use your Apple ID information to send you marketing emails and communications, including based on your use of Apple services. </p>
                    <span>See how your data is managed...</span>
                </div>
                <button className={styles.continue}>Continue</button>
            </div>
        </div>
    )
}