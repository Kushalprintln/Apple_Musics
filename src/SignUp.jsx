import React, { useContext, useState } from "react";
import styles from './SignUp.module.css';
import logo from '../images/apple logo.png'
import PeopleIcon from '@mui/icons-material/People';
import CloseIcon from '@mui/icons-material/Close';
import Switches from "./Switches";

import {toast} from 'react-toastify';
import Authcontext from "./AuthContext";



export default function SignUp({close}){

    const Authentication = useContext(Authcontext);
    

    const [selectedOption, setSelectedOption] = useState('LoginIn');
    const [formData,setFormData] = useState({
        name:'soemname',
        email:'someemail@gmail.com',
        password:'somenewpassthree',
        appType: 'music'
    })

    function closemodal(){
        close(false);
        clearForm();
    }

    //REQUIRMENTS;
    const loginURL = 'https://academics.newtonschool.co/api/v1/user/login';
    const signupURL = 'https://academics.newtonschool.co/api/v1/user/signup';
    const header = {'projectId': 'f104bi07c490','Content-Type': 'application/json'};

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

    // LOGIN
    async function login(){
        const reqform = filterOutKey(formData, 'name');
        const resp = await fetch(loginURL,{
            method:'POST',
            headers: header,
            body: JSON.stringify(reqform)
        })
        // console.log(resp);
        const status = await resp.json();
        // console.log(status);
        if(resp.ok){
            toast.success('Login Successfully', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            LoginUser(status.data,status.token);
            closemodal();
        }else{
            toast.error(`${status.message}`, {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
    }

    // SIGNUP
    async function singUp(){
        const resp = await fetch(signupURL,{
            method:'POST',
            headers: header,
            body: JSON.stringify(formData)
        })
        // console.log("Response",resp);
        const status = await resp.json();
        // console.log("status",status);
        if(resp.ok){
            toast.success('Signup Successfully', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            LoginUser(status.data.user,status.token);
            closemodal();
        }else{
            toast.error(`${status.message}`, {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
    }

    
    async function gettingLikedSongs(token){
        // REQUIREMENT FOR GETTING LIKED SONGS;
        const LikeSongURL = 'https://academics.newtonschool.co/api/v1/music/favorites/like';
        const LikeSongsheader = { 'projectId': 'f104bi07c490', 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' };
        
        const resp = await fetch(LikeSongURL,{
            method:'GET',
            headers: LikeSongsheader,
        })
        console.log("Response",resp);
        const songdata = await resp.json();
        console.log("liked songs",songdata);
        console.log("liked songs",songdata.data.songs);
        if(resp.ok){
            // toast.success('Getting Liked Songs', {
            //     position: "top-center",
            //     autoClose: 3000,
            //     hideProgressBar: true,
            //     closeOnClick: true,
            //     pauseOnHover: true,
            //     draggable: true,
            //     progress: undefined,
            //     theme: "dark",
            // });
            let songids = [];
            songdata.data.songs.map((ele)=>{
                songids.push(ele._id);
            })
            Authentication.LikedSongs[1]([...songids]);
        }else{
            // toast.error(`${status.message}`, {
            //     position: "top-center",
            //     autoClose: 3000,
            //     hideProgressBar: true,
            //     closeOnClick: true,
            //     pauseOnHover: true,
            //     draggable: true,
            //     progress: undefined,
            //     theme: "dark",
            // });
        }
    }

    // SETTING USER
    function LoginUser(data,token){
        const userdata = {...data,JWT:token};
        console.log(userdata);
        Authentication.User[1]({...userdata})
        localStorage.setItem('user',JSON.stringify(userdata));
        gettingLikedSongs(token);
    }

    // CLEAR FORM
    function clearForm(){
        setFormData({
            name:'',
            email:'',
            password:'',
            appType: 'music'
        })
    }

    function authenticate(){
        if(selectedOption === 'SignUp'){
            singUp();
        }else{
            login();
        }
    }

    const notify = () => toast("Wow so easy!");

    return (
        <div className={styles.signupcontainer}>
            <div className={styles.signupmodal}>
                <span className={styles.close} onClick={closemodal}>
                    <CloseIcon/>
                </span>
                <div className={styles.logheading}>
                    <img src={logo} alt="" className={styles.logo}/>
                    <h1 className={styles.heading}>Sign In or Sign Up</h1>
                    <h3 className={styles.subheading}>Enter your email to get started.</h3>
                </div>
                <Switches selectedOption={selectedOption} setSelectedOption={setSelectedOption}/>
                <form action="" className={styles.signupform} onSubmit={authenticate}>
                    {selectedOption === 'SignUp' && 
                        <>
                        <input type="text" value={formData.name} name="" id="name" placeholder="Name" onChange={(e)=>{setFormData(prev=>{return {...prev,name:e.target.value}})}}/>
                        {/* <p className={styles.formerror}>This is the error line</p> */}
                        </>
                    }
                    <input type="email" value={formData.email} name="" id="email" placeholder="Email or Apple ID" onChange={(e)=>{setFormData(prev=>{return {...prev,email:e.target.value}})}}/>
                    {/* <p className={styles.formerror}>This is the error line</p> */}
                    <input type="password" value={formData.password} name="" id="password" placeholder="Password" onChange={(e)=>{setFormData(prev=>{return {...prev,password:e.target.value}})}}/>
                    {/* <p className={styles.formerror}>This is the error line</p> */}
                </form>
                    <PeopleIcon sx={{color:'#fa2d48',height:'1.2em',width:'1.2em'}}/>
                <div className={styles.secureinfo}>
                    <p>Your Apple ID information is used to allow you to sign in securely and access your data. Apple records certain data for security, support, and reporting purposes. If you agree, Apple may also use your Apple ID information to send you marketing emails and communications, including based on your use of Apple services. </p>
                    <span>See how your data is managed...</span>
                </div>
                <button className={styles.continue} onClick={authenticate}>Continue</button>
            </div>
        </div>
    )
}