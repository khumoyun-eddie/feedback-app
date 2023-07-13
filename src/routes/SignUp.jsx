import { useState } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../utils/firebase/firebase.utils";
import Button from "../components/Button/Button";
import { useNavigate } from "react-router-dom";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
};

const SignUp = () => {
  const navigate = useNavigate()
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password } = formFields;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const { user } = await createAuthUserWithEmailAndPassword(email, password);
      await createUserDocumentFromAuth(user, { displayName });
      // setCurrentUser(user);
      setFormFields(defaultFormFields);
      navigate('/')
      
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user, email is already in use");
      } else {
        console.log("user creation error", error);
      }
    }
  };

  return (
    <div className='mx-auto bg-white px-10 py-8 rounded-2xl shadow-sm'>
      <h1 className='text-gray-800 font-bold text-center'>Don't have an account?</h1>
      <p className='text-h4 text-gray-600 mt-[2px] text-center'>Sign up with your email and password</p>
      <form onSubmit={handleFormSubmit}>
        <div className='mt-4'>
          <h4 className='text-gray-800 font-bold'>Display Name</h4>
          <input
            type='text'
            name='displayName'
            className='w-full h-12 px-[10px] bg-gray-300 mt-2 rounded-[5px] shadow-sm text-gray-800 text-sm'
            onChange={handleChange}
            value={displayName}
          />
        </div>

        <div className='mt-4'>
          <h4 className='text-gray-800 font-bold'>Email</h4>
          <input
            type='text'
            name='email'
            className='w-full h-12 px-[10px] bg-gray-300 mt-2 rounded-[5px] shadow-sm text-gray-800 text-sm'
            onChange={handleChange}
            value={email}
          />
        </div>
        <div className='mt-4'>
          <h4 className='text-gray-800 font-bold'>Password</h4>
          <input
            type='password'
            name='password'
            className='w-full h-12 px-[10px] bg-gray-300 mt-2 rounded-[5px] shadow-sm text-gray-800 text-sm'
            onChange={handleChange}
            value={password}
          />
        </div>
        <div className='mt-6 flex justify-center'>
          <Button
            btnType='purple'
            type='submit'
          >
            Create Account
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
