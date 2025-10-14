import { useRef } from 'react';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { BACKEND_URL } from '../config';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export function Signin() {
  //@ts-ignore
  const usernameRef = useRef<HTMLInputElement>();
  //@ts-ignore
  const passwordRef = useRef<HTMLInputElement>();
  const navigate = useNavigate();
  function navland() {
    navigate('/');
  }
  async function signin() {
    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;
    const response = await axios.post(BACKEND_URL + '/api/v1/signin', {
      username,
      password,
    });
    //@ts-ignore
    const jwt = response.data.token;
    localStorage.setItem('token', jwt);
    navigate('/dashboard');
  }

  function signupbutton() {
    navigate('/signup');
  }
  return (
    <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
      <div className="bg-white rounded-xl border min-w-48 p-8">
        <Input reference={usernameRef} type="text" placeholder="Username" />
        <Input reference={passwordRef} type="password "placeholder="Password" />
        <div className="flex justify-center pt-4">
          <Button
            onClick={signin}
            loading={false}
            variant="primary"
            text="Signin"
            fullWidth={true}
          />
        </div>
        <div className="flex justify-center mt-4">
          Don't have an account?
          <span
            onClick={() => {
              signupbutton();
            }}
            className="px-2 text-blue-400 cursor-pointer hover:text-blue-600 transition-all duration-300"
          >
            {' '}
            Signup
          </span>
        </div>
        <div className="p-2 flex justify-center ">
          <Button
            onClick={navland}
            loading={false}
            variant="secondary"
            text="Back"
            fullWidth={false}
          />
        </div>
      </div>
    </div>
  );
}
