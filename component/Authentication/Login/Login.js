import React from 'react';
import useFirebase from '../../Hooks/UseFireBase/UseFirebase'
const Login = () => {
    const {signInUsingGoogle}=useFirebase()
    return (
        <div>
            <button onClick={signInUsingGoogle} className='btn btn-warning'>Sign In With Google</button>
        </div>
    );
};

export default Login;