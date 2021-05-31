import { useState } from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-btn/custom-btn.component';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import './sign-up.styles.scss';
const SignUp = () => {
  const [userCredentials, setUserCredentials] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const { displayName, email, password, confirmPassword } = userCredentials;

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });
      setUserCredentials({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
    } catch (error) {
      console.error(error);
    }
  };
  const handleFormChange = (event) => {
    const { name, value } = event.target;

    setUserCredentials({ ...userCredentials, [name]: value });
  };
  return (
    <div className="sign-up">
      <h2 className="title">I do not have an account.</h2>
      <span>Sign Up with your email and password.</span>
      <form className="sign-up-form" onSubmit={handleFormSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleFormChange}
          label="Display Name"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={handleFormChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={handleFormChange}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleFormChange}
          label="Confirm Password"
          required
        />
        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </div>
  );
};

export default SignUp;
