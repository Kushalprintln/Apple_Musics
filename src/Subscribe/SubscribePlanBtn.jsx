// IMPORT REACT (Having inline CSS for this);
// This button only toastify the subscription made;
import React, { useContext } from "react";
import Authcontext from "../Context/AuthContext";
import { toast } from 'react-toastify';

export default function SubscribePlanBtn({ plan }) {

    const Authentication = useContext(Authcontext);

    const btnstyle = {
        width: '152px',
        height: '32px',
        padding: '8px 16px',
        fontSize: '13px',
        backgroundColor: '#fa233b',
        borderRadius: '4px',
        minWidth: '125px',
        fontWeight: '700',
        border: 'none',
        color: '#ffffffeb',
        cursor: 'pointer'
    }

    function ActivatePlan() {
        if (Authentication.User[0]) {
            toast.success(`${plan.toUpperCase()} ACTIVATE`, {
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
        else {
            Authentication.singupModal(true);
        }
    }

    return <button style={btnstyle} onClick={ActivatePlan}>Subscribe</button>
}