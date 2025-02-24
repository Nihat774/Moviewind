import React, { useState } from "react";
import { BsList } from "react-icons/bs";
import { IoCloseCircle, IoSearch } from "react-icons/io5";
import { RiCloseLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux"; 
import { setQuery } from "../../redux/searchSlice"; 
import { navLinks } from "../../constants";

function Header() {
  const dispatch = useDispatch()
  const [isOpen, SetIsOpen] = useState(false);
  const [inputText, setInputText] = useState("");
  const [isOpenSearch, setIsOpenSearch] = useState(false);

  function handleChange(e) {
    setInputText(e.target.value);
    dispatch(setQuery(e.target.value));
  }

  function handleClick() {
    SetIsOpen(!isOpen);
  }

  return (
    <>
      <header className="flex items-center justify-between py-3 px-[30px] md:px-[60px] bg-gray-700 sticky top-0">
        <Link to={"/"} className="text-2xl font-extrabold text-blue-200">
          moviewind
        </Link>

        <div className="md:flex hidden gap-5 items-center w-[60%]">
          <nav className="flex gap-5">
            {navLinks.map((item) => {
              return (
                <React.Fragment key={item.id}>
                  <Link to={item.path}>{item.name}</Link>
                </React.Fragment>
              );
            })}
          </nav>
          <label className="input bg-slate-800 rounded-lg">
            <input
              type="search"
              className="grow"
              value={inputText}
              onChange={handleChange} // Redux-a dəyəri göndəririk
              placeholder="Search"
            />
          </label>
          <Link
            to={"/"}
            className="bg-blue-500 text-white rounded-2xl px-4 py-2 shadow-md shadow-blue-500"
          >
            Telegram
          </Link>
        </div>
        <div className={"flex items-center gap-3 md:hidden"}>
          <IoSearch
            className="text-2xl cursor-pointer"
            onClick={() => setIsOpenSearch(!isOpenSearch)}
          />
          {isOpen ? (
            <RiCloseLine
              className="text-3xl cursor-pointer"
              onClick={handleClick}
            />
          ) : (
            <BsList className="text-3xl cursor-pointer" onClick={handleClick} />
          )}
        </div>
      </header>
      <div
        className={`${
          isOpen ? "flex" : "hidden"
        } px-[30px] py-3 bg-slate-300 text-slate-800 font-semibold`}
      >
        <nav className="flex flex-col gap-2">
          {navLinks.map((item) => {
            return (
              <React.Fragment key={item.id}>
                <Link to={item.path} onClick={() => SetIsOpen(!isOpen)}>
                  {item.name}
                </Link>
              </React.Fragment>
            );
          })}
        </nav>
      </div>

      {isOpenSearch ? (
        <>
          <div className="absolute top-[40px] right-[20px]">
          <div className="flex justify-end">
          <IoCloseCircle className="text-2xl" onClick={()=>setIsOpenSearch(!isOpenSearch)}/>
          </div>
            <label className="input bg-slate-800 rounded-lg w-[70vw] ">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
              <input
                type="search"
                className="grow"
                value={inputText}
                onChange={(e) => handleChange(e)}
                placeholder="Search"
              />
            </label>
          </div>
        </>
      ) : null}
    </>
  );
}

export default Header;
