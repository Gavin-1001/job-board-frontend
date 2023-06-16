import React, { useEffect } from 'react'
import { useState } from 'react'
import User from './../../common/models/User';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Register = () => {

    const [user, setUser] = useState(new User('', ', '));
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const currentUser = useSelector(state => state.user);

    const navigate = useNavigate();


    useEffect(() => {
        if(currentUser?.id){
          navigate('/dashboard');
        }
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
    }

  return (
    <div>Register</div>
  )
}

export default Register