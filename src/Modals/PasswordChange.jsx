// IMPORTING REACT AND STYLES;
import React, { useContext, useState } from "react";
import styles from './PasswordChange.module.css';
import logo from '../../images/apple logo.png'
// IMPORTING ICONS FROM MATERIAL UI;
import LockIcon from '@mui/icons-material/Lock';
import CloseIcon from '@mui/icons-material/Close';
import Authcontext from "../Context/AuthContext";
import { toast } from 'react-toastify';

export default function PasswordChange({ close }) {

    const Authentication = useContext(Authcontext)
    console.log(Authentication);

    function closeModal() {
        close(false);
    }

    const [Updateform, setUpdateform] = useState({
        name: `${Authentication.User[0].name}`,
        email: `${Authentication.User[0].email}`,
        passwordCurrent: 'current_password',
        password: 'user_new_password',
        appType: 'music'
    });
    const[formError,setFormError] = useState({
        passwordCurrentErr: '',
        passwordErr: '',
    })

    //REQUIRMENTS;
    const ChangepassURL = 'https://academics.newtonschool.co/api/v1/user/updateMyPassword';
    const header = { 'projectId': 'f104bi07c490', 'Authorization': `Bearer ${Authentication.User[0].JWT}`, 'Content-Type': 'application/json' };

    async function ChangePassword() {
        const resp = await fetch(ChangepassURL, {
            method: 'PATCH',
            headers: header,
            body: JSON.stringify(Updateform)
        })
        console.log("Response", resp);
        const status = await resp.json();
        console.log("status", status);
        if (resp.ok) {
            toast.success('Password Changed Successfully', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            console.log("previous JWS", Authentication.User[0].JWS)
            clearForm();
            closeModal();
        } else {
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
            clearForm();
        }
    }

    function clearForm() {
        setUpdateform({
            name: `${Authentication.User[0].name}`,
            email: `${Authentication.User[0].email}`,
            passwordCurrent: '',
            password: '',
            appType: 'music'
        })
    }

    // this function is for checking purporse we are not using it.
    function Printform() {
        console.log(Updateform);
    }

    function currpasswordValidation(){
        if(Updateform.passwordCurrent === ''){
            setFormError((prev)=>{return {...prev,passwordCurrentErr:'Please enter valid password'}});
            return false;
        }else if(Updateform.passwordCurrent.length < 4 || Updateform.passwordCurrent.length > 18 ){
            setFormError((prev)=>{return {...prev,passwordCurrentErr:'Email should between 4 to 18 characters'}});
            return false;
        }
        setFormError((prev)=>{return {...prev,passwordCurrentErr:''}});
        return true;
    }

    function passwordValidation(){
        if(Updateform.password === ''){
            setFormError((prev)=>{return {...prev,passwordErr:'Please enter valid password'}});
            return false;
        }else if(Updateform.password.length < 4 || Updateform.password.length > 18 ){
            setFormError((prev)=>{return {...prev,passwordErr:'Email should between 4 to 18 characters'}});
            return false;
        }
        setFormError((prev)=>{return {...prev,passwordErr:''}});
        return true;
    }

    function Validation(){
        currpasswordValidation();
        passwordValidation();
        if(currpasswordValidation() && passwordValidation()){
            ChangePassword()
        }
    }

    return (
        <div className={styles.modalcontainer}>
            <div className={styles.changepassmodal}>
                <span className={styles.close} onClick={closeModal} >
                    <CloseIcon />
                </span>
                <div className={styles.logheading}>
                    <img src={logo} alt="" className={styles.logo} />
                    <h1 className={styles.heading}>Change Password</h1>
                    <h3 className={styles.subheading}>Update Your Security</h3>
                </div>
                <form action="" className={styles.changepassform}>
                    <input type="text" name="" value={Updateform.name} id="name" placeholder="Name" disabled />
                    <input type="email" name="" value={Updateform.email} id="email" placeholder="Email or Apple ID" disabled />
                    <input type="password" name="" id="password" value={Updateform.passwordCurrent} placeholder="Password" onChange={(e) => { setUpdateform(prev => { return { ...prev, passwordCurrent: e.target.value } }) }} />
                    {formError.passwordCurrentErr && <p className={styles.formerror}>{formError.passwordCurrentErr}</p>}
                    <input type="password" name="" id="newpassword" value={Updateform.password} placeholder="New Password" onChange={(e) => { setUpdateform(prev => { return { ...prev, password: e.target.value } }) }} />
                    {formError.passwordErr && <p className={styles.formerror}>{formError.passwordErr}</p>}
                </form>
                <LockIcon sx={{ color: '#fa2d48', height: '1.2em', width: '1.2em' }} />
                <div className={styles.secureinfo}>
                    <p>Protect Your Tunes: Changing your password ensures the security of your Apple Music account, keeping your music and personal information safe from unauthorized access.</p>
                    <span>See how your data is managed...</span>
                </div>
                <button className={styles.continue} onClick={Validation} >Update Password</button>
            </div>
        </div>
    )
}