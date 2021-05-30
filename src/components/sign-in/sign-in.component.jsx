import "./sign-in.styles.scss";
import {useState} from "react"
const SignIn=()=>{
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const handleFormSubmit=(e)=>{
    e.preventDefault();
    setEmail("");
    setPassword("");
  }
  return(
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleFormSubmit}>
        <input name="email" type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} required />
        <label>Email</label>
        <input name="password" type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} required />
        <label>Password</label>
        <input type="submit" value="Sign in For Free" />
      </form>
    </div>
  )
}
export default SignIn;