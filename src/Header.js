/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMode, setReverse } from './actions/index';

export default function Header() {
  const currentColor = useSelector(state => state.getMode);
  const reverseColor = useSelector(state => state.getMode);
  const dispatch = useDispatch();
  const [, rerender] = useState(false);
  const [isActive, setisActive] = React.useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => rerender(null), 2000);
    return () => {
      clearTimeout(timer1);
    };
  }, [dispatch]);

  const changeMode = () => {
    if (currentColor.color === 'white' && reverseColor.reverse === 'black') {
      dispatch(getMode('black'));
      dispatch(setReverse('white'))
    } else {
      dispatch(getMode('white'));
      dispatch(setReverse('black'))
    }
  }

  const navBar = (
    <nav className='navbar' role='navigation' aria-label='main navigation'>
      <div className='navbar-brand'>
        <a href='/' className='navbar-item'>
          <img
            src='https://bulma.io/images/bulma-logo.png'
            alt='Logo'
            width='112'
            height='28'
          />
        </a>

        <a
          onClick={() => {
            setisActive(!isActive)
          }}
          role='button'
          className={`navbar-burger burger ${isActive ? 'is-active' : ''}`}
          aria-label='menu'
          aria-expanded='false'
          data-target='navbarBasicExample'
        >
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
        </a>
      </div>
      <div id='navbarBasicExample' className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
        <div className='navbar-end'>
          <div className='navbar-item'>
            <a href='/' className='navbar-item'>Home</a>
            <a href='/' className='navbar-item'>Documentation</a>
            <button onClick={changeMode}>dark mode</button>
          </div>
        </div>
      </div>
    </nav>
  )
  return (
    <div>{navBar}</div>
  )
}