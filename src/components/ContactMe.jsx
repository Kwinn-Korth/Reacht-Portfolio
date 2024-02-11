import React, { useState } from 'react';

function ContactMe() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [emailError, setEmailError] = useState('');
    const [nameError, setNameError] = useState('');
    const [messageError, setMessageError] = useState('');

    const validateEmail = (email) => {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!emailRegex.test(email)) {
            setEmailError('Please enter a valid email address');
        } else {
            setEmailError('');
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'name') {
            setName(value);
            setNameError('');
        } else if (name === 'email') {
            setEmail(value);
            setEmailError((prev) => {
                const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
                return !emailRegex.test(value) ? 'Please enter a valid email address' : '';
            });
        } else if (name === 'message') {
            setMessage(value);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name.trim()) {
            setNameError('Name is required');
            return;
        }
        validateEmail();
        if (email.error) {
            return;
        }
        setName('');
        setEmail('');
        setMessage('');
    }

    return (
        <div className='contactme-container'>
            <h2>Contact Me!</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor='name'>Name:</label>
                <input type="text" id="name" name="name" required value={name} onChange={handleChange} />
                {nameError && <p className='error'>{nameError}</p>}

                <label htmlFor='email'>Email:</label>
                <input type="email" id="email" name="email" required value={email} onChange={handleChange} />
                {emailError && <p className='error'>{emailError}</p>}

                <label htmlFor='message'>Message:</label>
                <textarea id="message" name="message" required value={message} onChange={handleChange} />
                {messageError && <p className='error'>{messageError}</p>}

                <button type='submit'>Submit</button>
            </form>
        </div>
    );
}

export default ContactMe;
