import React from 'react'
import { Button } from '@mui/material';
import "./Login.css"
import { useStateValue } from './StateProvider';
import { ActionTypes } from '@mui/base';
import { auth, provider } from './firebase';


function Login() {
  const [state, dispatch] = useStateValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: ActionTypes.SET_USER,
          user: result.user,
        });
        console.log(result);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="login">
      <div className="login__logo">
        <img className="justpostLogo" src="https://media.discordapp.net/attachments/241517003557437440/1080332175146237992/JustPost_Icon_Simple.png?width=676&height=676"alt = "just post logo"/>
        <img src="https://media.discordapp.net/attachments/241517003557437440/1080623675784564817/Just_Post_Text_Logo.png?width=676&height=676" alt = "just post text logo"/>
      </div>

      <Button type="submit" onClick={signIn}>
        Sign In
      </Button>
    </div>
  )
}

export default Login
