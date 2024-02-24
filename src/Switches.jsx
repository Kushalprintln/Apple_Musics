import React, { useState } from 'react';
import styles from './Switches.module.css';

const Switches = ({selectedOption, setSelectedOption}) => {

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return (
        <div className={styles.switchesContainer}>
            <input
                type="radio"
                id="switchLoginIn"
                name="switchPlan"
                value="LoginIn"
                checked={selectedOption === 'LoginIn'}
                onChange={handleOptionChange}
            />
            <input
                type="radio"
                id="switchSignUp"
                name="switchPlan"
                value="SignUp"
                checked={selectedOption === 'SignUp'}
                onChange={handleOptionChange}
            />
            <label htmlFor="switchLoginIn">LoginIn</label>
            <label htmlFor="switchSignUp">SignUp</label>
            <div className={styles.switchWrapper}>
                <div className={styles.switch}>
                    <div>LoginIn</div>
                    <div>SignUp</div>
                </div>
            </div>
        </div>
    );
};

export default Switches;