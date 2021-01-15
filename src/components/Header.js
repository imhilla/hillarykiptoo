/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMode, setReverse } from '../actions/index';

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
    if (currentColor.color === 'white' && reverseColor.reverse === 'darkgray') {
      dispatch(getMode('darkgray'));
      dispatch(setReverse('white'))
    } else {
      dispatch(getMode('white'));
      dispatch(setReverse('darkgray'))
    }
  }

  const darkMode = currentColor.color === 'darkgray' ? ('🌞') : ('🌙');
  const logcolor = currentColor.color !== 'darkgray' ? ('black') : ('#4b4b4b')
  const color = 'white';
  const othercolor = reverseColor.reverse !== 'darkgray' ? ('white') : ('black')


  const navBar = (
    <nav className='navbar' role='navigation' aria-label='main navigation' style={{ backgroundColor: `${currentColor.color}`, color: `${reverseColor.reverse}` }}>
      <div className='navbar-brand'>
        <a href='/' className='navbar-item logo-item' style={{ color: `${color}`, backgroundColor: `${logcolor}` }}>
          H<span className="logodots">.</span> kiptoo
        </a>
        <div id='navbarBasicExample' className={`navbar-menu ${isActive ? 'is-active' : ''}`} style={{ backgroundColor: `${currentColor.color}` }}>
          <div className='navbar-end'>
            <div className='navitemscontainer small-hide'>
              <a href='#SKILLS' className='nav-items' style={{ color: `${othercolor}` }}>SKILLS</a>
              <a href='https://www.linkedin.com/in/hillarykiptoo/'  rel="noreferrer"  target="_blank" className='nav-items' style={{ color: `${othercolor}` }}>ABOUT ME</a>
              <a href='#CONTACT ME' className='nav-items' style={{ color: `${othercolor}` }}>CONTACT ME</a>
              <button className="darkmode" onClick={changeMode}>{darkMode}</button>
            </div>
          </div>
        </div>

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
          <span aria-hidden='true' style={{ color: `${reverseColor.reverse}` }}></span>
          <span aria-hidden='true' style={{ color: `${reverseColor.reverse}` }}></span>
          <span aria-hidden='true' style={{ color: `${reverseColor.reverse}` }}></span>
        </a>
      </div>
      <div id='navbarBasicExample' className={`navbar-menu ${isActive ? 'is-active' : ''}`} style={{ backgroundColor: `${currentColor.color}` }}>
        <div className='navbar-end'>
          <div className='navitemscontainer hide'>
            <a href='/' className='nav-items' style={{ color: `${othercolor}` }}>SKILLS</a>
            <a href='/' className='nav-items' style={{ color: `${othercolor}` }}>ABOUT ME</a>
            <a href='/' className='nav-items' style={{ color: `${othercolor}` }}>CONTACT ME</a>
            <button className="darkmode" onClick={changeMode}>{darkMode}</button>
          </div>
        </div>
      </div>
    </nav>
  )
  return (
    <div>{navBar}</div>
  )
}