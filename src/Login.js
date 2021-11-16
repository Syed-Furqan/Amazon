import { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css"

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventdefault();
    }

    const register = e => {
        e.preventdefault();
    }

    return (
        <div className="login">
            <Link to="/">
                <img
                    className="login__logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png"
                    alt=""
                />
            </Link>
            <div className="login__info">
                <h1>Sign in</h1>
                <form>
                    <label for="em"><small><strong>E-mail</strong></small></label>
                    <input id="em" type="text" value={email} onChange={e => setEmail(e.target.value)}/>
                    <label for="pw"><small><strong>Password</strong></small></label>
                    <input id="pw" type="password" value={password} onChange={e => setPassword(e.target.value)}/> 

                    <button type="submit" onClick={signIn} id="signIn">Sign In</button>

                    <p>By signing-in you agree to Amazons Conditions of 
                    Use and Sale.Please see our Privacy Notice our Cookies Notice
                    and our Internet-Based Ads Notice.</p>

                    <button type="submit" onClick={register} id="signUp">Create your amazon Account</button>
                </form>
            </div>
        </div>
    );
}

export default Login;