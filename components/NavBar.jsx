import React from 'react';
import Link from 'next/link';
import {useUser} from '@auth0/nextjs-auth0'

const NavBar = () => {
  const { user, isLoading } = useUser();
  return (
    <div style={{color:'grey'}}>
      {!isLoading && user && 
        <>
          <p>welcome {user.name}</p> 
          <a href="/api/auth/logout">
            <h2>Logout</h2>
          </a>
        </>
      }
      {!user && <a href="/api/auth/login"><h2>Login</h2></a>}
    </div>
  )}

  export default NavBar;