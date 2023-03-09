import React, {useState} from 'react';

function Login(){

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [validation, setValidation] = useState('')

    function handleFormSubmit(e)
    {
        console.log('papito')
    }
    return (
        <div className="middle-box text-center loginscreen animated fadeInDown">
            <div>
                <div>
                    <h1 className="logo-name">AS</h1>
                </div>
                <h3 className="text-white">Welcome to Shifter Administration</h3>
                <p className="text-white">Login in. To see it in action.</p>
                <form className="m-t" onSubmit={handleFormSubmit}>
                    <div className="form-group">
                        <input type="email" className="form-control" id="email" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <input type="password" id="password" className="form-control" placeholder="Mot de passe" value={password} onChange={e=>setPassword(e.target.value)}/>
                    </div>
                    <div className="text-danger my-2"><strong>{validation}</strong></div>
                    <input type="submit" className="btn btn-primary block full-width m-b" value="s'authentifier" />
                    <small>Forgot password?</small>
                </form>
            </div>
      </div>
    )
}

export default Login