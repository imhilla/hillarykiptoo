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
    if (currentColor.color === 'white' && reverseColor.reverse === '#444444') {
      dispatch(getMode('#444444'));
      dispatch(setReverse('white'))
    } else {
      dispatch(getMode('white'));
      dispatch(setReverse('#444444'))
    }
  }

  const darkMode = currentColor.color === '#444444' ? ('🌞') : ('🌙');
  const logcolor = currentColor.color !== '#444444' ? ('#444444') : ('white')
  const color = currentColor.color !== '#444444' ? ('white') : ('#444444')
  const othercolor = reverseColor.reverse !== '#444444' ? ('white') : ('black')


  const navBar = (
    <nav className='navbar' role='navigation' aria-label='main navigation' style={{ backgroundColor: `${currentColor.color}`, color: `${reverseColor.reverse}` }}>
      <div className='navbar-brand'>
        <a href='/' onclick="return false;" className='navbar-item logo-item' style={{ color: `${color}`, backgroundColor: `${logcolor}` }}>
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