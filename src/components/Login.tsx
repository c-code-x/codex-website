import React, {useEffect, useState} from "react";
import styles from '../styles/Login.module.css'
import Image from "next/image";
import Link from "next/link";
const Login = ()=>{
    const [form, setForm] = useState(true)
    const [stateLogin, setStateLogin] = useState("flex")
    const [stateSignup, setStateSignup] = useState("none")
    useEffect(()=>{
        if(form){
            setStateLogin("flex")
            setStateSignup("none")
        }
        else{
            setStateLogin("none")
            setStateSignup("flex")
        }
    },[form])
    const loginSubmit = ()=>{

    }
    const signupSubmit = ()=>{

    }
    return(
        <div className={styles.container}>
            <p>Please login to continue</p>
            <div className={styles.innercontainer}>
                <div className={styles.formchanger}>
                    <button onClick={()=>{setForm(true)}}>Login</button>
                    <p>|</p>
                    <button onClick={()=>{setForm(false)}}>SignUp</button>
                </div>
                <div className={styles.logincontainer} style={{ display : stateLogin}}>
                        <form onSubmit={loginSubmit}>
                            <input id={"mail"} type={"email"} placeholder={"Email"}/>
                            <input id={"Pass"} type={"password"} placeholder={"Password"}/>
                            <p><input id={"checkpass"} type={"checkbox"}/> Show password</p>
                            <Link href={""}>Forgot Password?</Link>
                            <button type={"submit"}>Login</button>
                        </form>
                </div>
                <div className={styles.signupcontainer} style={{display : stateSignup}}>
                        <form onSubmit={signupSubmit}>
                            <input id={"name"} type={"text"} placeholder={"Name"}/>
                            <input id={"email"} type={"email"} placeholder={"Email"}/>
                            <input id={"Pass"} type={"password"} placeholder={"Password"}/>
                            <input id={"conPass"} type={"password"} placeholder={"Confirm Password"}/>
                            <p><input id={"checkgitam"} type={"checkbox"}/> I agree that, I am studying in GITAM(Deemed to be University)</p>
                            <button type={"submit"}>SignUp</button>
                        </form>
                </div>
            </div>
        </div>
    )
}

export default Login;