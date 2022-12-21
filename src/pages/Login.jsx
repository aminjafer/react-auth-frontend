import { useState, useEffect } from "react";
import { FaSignInAlt } from 'react-icons/fa';

function Login() {

    const [formData, setFormData] = useState({      
      email: '',
      password: '',      
    });

    const {email, password } = formData;

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const onSubmit = (e) => {
        e.preventDefault(); //will stop the default postback

    }

    return <> 
        <section className="heading">
            <h1>
                <FaSignInAlt /> Login
            </h1>
            <p>Please Sign in</p>
        </section>

        <section className="form">
            <form onSubmit={onSubmit}>
                <div className="form-group">                    
                    <input 
                        type='email'
                        className='form-control'
                        id='email'
                        name='email'
                        value={email}
                        placeholder='Enter your email'
                        onChange = {onChange}
                    />
                    <input 
                        type='password'
                        className='form-control'
                        id='password'
                        name='password'
                        value={password}
                        placeholder='Enter Password'
                        onChange = {onChange}
                    />                    
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-block">Sign in</button>
                </div>
            </form>
        </section>
    </>  
}

export default Login;