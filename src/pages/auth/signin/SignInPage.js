import React, { useState } from 'react'
import jwtDecode from "jwt-decode";
import SignIn from './components/SignIn';
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { login } from '../../../features/authSlice';
import { useCookies } from 'react-cookie';


const SiginInPage = () => {
  const [cookies, setCookie] = useCookies(['token']);
  const [errorMessage, setErrorMessage] = useState('')
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const submit = async (payload) => {
    try {
      const result = await dispatch(login(payload)).unwrap();
      const user = jwtDecode(result.access_token);


      setCookie('token', result.access_token, { path: '/' });

    } catch (error) {
      setErrorMessage(error.message)
      return;
    }

    navigate('/admin/dashboard');
  };

  return (
    <>
      <SignIn onSubmit={submit} message={errorMessage} />
    </>
  )
}

export default SiginInPage;