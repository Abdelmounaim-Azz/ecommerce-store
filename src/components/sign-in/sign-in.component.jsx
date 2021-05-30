import './sign-in.styles.scss';
import { useState } from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-btn/custom-btn.component';
import { SignInWithGoogle } from '../../firebase/firebase.utils';
const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setEmail('');
    setPassword('');
  };
  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleFormSubmit}>
        <FormInput
          name="email"
          type="email"
          value={email}
          handleFormChange={(e) => {
            setEmail(e.target.value);
          }}
          label="Email"
          required
        />
        <FormInput
          name="password"
          type="password"
          value={password}
          handleFormChange={(e) => {
            setPassword(e.target.value);
          }}
          label="Password"
          required
        />
        <CustomButton type="submit">Sign in For Free</CustomButton>
        <CustomButton onClick={SignInWithGoogle}>
          Sign in With Google
        </CustomButton>
      </form>
    </div>
  );
};
export default SignIn;
