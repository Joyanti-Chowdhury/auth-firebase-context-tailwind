import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const Login = () => {

  const {signIn,signInWithGoogle} = useContext(AuthContext);


    const handleLogin = event => {
        event.preventDefault();
        const from = event.target;
        const email = from.email.value;
        const password = from.password.value;

        console.log(email,password);
      signIn(email,password)
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
        from.reset()
      })
      .catch(error => {
        console.log(error);
      })
    }


    const handleGoogleSignIn =() => {
      signInWithGoogle()
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);

      })
      .catch(error => {
        console.log(error);
      })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center">
            <h1 className="text-5xl font-bold">Please Login !</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered"  required/>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password"  name="password" placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
           <p className='mb-4 ml-8'>
           <Link to="/register"  className="label-text-alt link link-hover">
            <button >New to Auth Master? Please Register</button>

            </Link>
           </p>
           <div>
           <button onClick={handleGoogleSignIn} className="btn btn-primary">Sign in With Google</button>
           </div>

          </div>
        </div>
      </div>
    );
};

export default Login;