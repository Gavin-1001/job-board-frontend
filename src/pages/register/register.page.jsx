import React, { useEffect } from 'react'
import { useState } from 'react'
import User from '../../common/models/User';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AuthService } from '../../service/AuthService.service'
import { setSelectionRange } from '@testing-library/user-event/dist/utils';

const Register = () => {

    const [user, setUser] = useState(new User('', ', '));
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const currentUser = useSelector(state => state.user);

    const navigate = useNavigate();


    useEffect(() => {
        // if(currentUser?.id){
        //   navigate('/dashboard');
        // }
    }, []);

    const handleChange = (e) => {
      const {name, value} = e.target;

      setUser((prevState => {
        return {
            ...prevState,
            [name]: value
        };
      }));
    };

    const handleRegister = () => {
      setSubmitted(true);
      if(user.username || user.password){
        return;
      }
      setLoading(true);
      AuthService.register(user).then(_ => {
        navigate('/login')
      }).catch(error => {
        console.log(error);
        if(error?.response?.status === 409){
          setErrorMessage("username or password is not valid");
        }else{
          setErrorMessage("unexpected error occured");
        }
        setLoading(false);
      });
    };

  return (
    <div><h3>Register</h3></div>
  )
}

export default Register