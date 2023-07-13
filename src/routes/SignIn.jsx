import {useState} from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button/Button";
import { signInAuthUserWithEmailAndPassword, signInWithGooglePopup } from "../utils/firebase/firebase.utils";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignIn = () => {
  const navigate = useNavigate()
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(email, password);
     // setCurrentUser(user);
     setFormFields(defaultFormFields);
     navigate('/')
   } catch (error) {
     if (error.code === "auth/user-not-found") {
       alert("Cannot find user, please check your");
     } else if (error.code === "auth/wrong-password") {
       alert("incorrect password for email");
     } else {
       console.log(error);
     }
   }
  };

  const logGoogleUser = async () => {
    await signInWithGooglePopup();
  };

  return (
    <div className="mx-auto bg-white px-10 py-8 rounded-2xl shadow-sm">
      <h2 className="text-gray-700 font-semibold text-center">Already have an account?</h2>
      <p className='text-h4 text-gray-600 mt-[2px] text-center'>Log in with your email and password</p>
      <form className='text-left' onSubmit={handleFormSubmit}>
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
        <div className='mt-6 flex justify-center gap-3'>
          <Button btnType='purple'>Sign In</Button>
          <Button btnType='blue' type='button' onClick={logGoogleUser}>Google Sign In</Button>
        </div>
      </form>
      <div className="mt-4 text-center">
        <h4 className="text-gray-600 mb-2">Don't have an account?</h4>
        <Button btnType='cancel' onClick={()=>navigate('/sign-up')}>Create an account</Button>
      </div>
    </div>
  );
};

export default SignIn;
