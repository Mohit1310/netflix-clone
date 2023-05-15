import { useEffect, useState } from 'react'
import HomeScreen from './screens/HomeScreen'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import LoginScreen from './screens/LoginScreen';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import ProfileScreen from './screens/ProfileScreen';


function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if(userAuth) {
        // loggged in 
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,
        }));
      } else {
        // logged out
        dispatch(logout());
      }
    })

    return unsubscribe;
  },[dispatch]);

  return (
    <div className='app'>
      {!user ? <LoginScreen /> : (
      <Router>
        <Routes>
          <Route exact path='/' element={<HomeScreen />}/>
          <Route path='/profile' element={<ProfileScreen />}/>
        </Routes>
      </Router>
      )}
    </div>
  )
}

export default App
