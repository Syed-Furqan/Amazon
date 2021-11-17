import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";
import "./Login.css"
import { useStateValue } from "./StateProvider";

const Login = () => {

    const [, dispatch] = useStateValue();

    const history = useHistory();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push("/");
            })
            .catch(err => {
                alert(err.message);
            });
        
        dispatch({
            type: 'EMPTY'
        });
    }

    const register = e => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email, password)
            .then(auth => {
                if(auth) {
                    history.push("/");
                }
            })
            .catch(err => {
                alert(err.message);
            });
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
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>

                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)}/> 

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