import React from 'react';

export default function MainPage() {

    const login = async () => {
        window.location.href = "/login";
    }
    
    const signup = async () => {
        window.location.href = "/signup";
    }

    return (
        <div className="main-page-btn"> 
            <div style={{marginBottom:20}}>
                <button className="btn" onClick={login}> Login </button>
            </div> 
            <div >
                <button className="btn" onClick={signup}> Sign Up </button>
            </div>
        </div>
    )
}
