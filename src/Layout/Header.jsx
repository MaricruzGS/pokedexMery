import React from "react";
import { useDispatch } from "react-redux";
import { setNameTrainerGlobal } from "../store/slices/nameTrainer.slice";
import "./styles/Header.css"

const Header = () => {

  const dispatch = useDispatch()

  const handleClickLogout = () => {
      dispatch(setNameTrainerGlobal(""))
  }

  return (
    <header className="header">
      <img className="header__img" src="/image/pokedex.png" alt="" />
      <div className="header__black"></div>
      <div className="header__circle">
        <div className="header__circle--int"> 
        <i onClick={handleClickLogout} className='bx bx-log-out'></i></div>
      </div>
    </header>
  );
};

export default Header;
