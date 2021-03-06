import './sign-in.styles.scss';
import { useState } from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-btn/custom-btn.component';
import { auth, SignInWithGoogle } from '../../firebase/firebase.utils';
const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email, password);
      setEmail('');
      setPassword('');
    } catch (error) {
      console.error(error);
    }
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
        <div className="buttons">
          <CustomButton type="submit">Sign in For Free</CustomButton>
          <CustomButton onClick={SignInWithGoogle} isGoogleSignIn>
            Sign in With Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};
export default SignIn;
