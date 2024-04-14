import React from "react";
import { Element, Link } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import sal from "sal.js";
import { useEffect } from "react";

function Main({ setIsLogin, setRole }) {
  useEffect(() => {
    sal();
  });
  const isLoginHandle = (value) => {
    setIsLogin(value);
  };
  const roleHandle = (value) => {
    setRole(value);
  };
  return (
    <div className="w-full h-full bg-[#efefef]">
      <header className="flex items-center justify-evenly gap-5 w-full h-[100px] bg-gradient-to-b from-[#54cfb6] to-[#97c0ce]">
        <div className="w-1/4 flex justify-center">
          <RouterLink to="/">
          <img
           src="/images/blue-hands-seeklogo.png"
              alt="Logo"
              className="hover:scale-110
            hover:cursor-pointer transition-all ease-out duration-300 w-[70px]"
            ></img>
          </RouterLink>
        </div>

        <nav className="flex justify-center gap-8 w-1/2">
          <Link
            to="about us"
            spy={true}
            smooth={true}
            duration={500}
            offset={-110}
            className="text-xl font-semibold hover:scale-110
            hover:cursor-pointer transition-all ease-out duration-300"
          >
            {" "}
            Про нас
          </Link>
          <Link
            to="provide"
            spy={true}
            smooth={true}
            duration={500}
            offset={-110}
            className="text-xl font-semibold hover:scale-110 hover:cursor-pointer transition-all ease-out duration-300"
          >
            Що ми надаєм?
          </Link>
          <Link
            to="join"
            spy={true}
            smooth={true}
            duration={500}
            offset={-110}
            className="text-xl font-semibold hover:scale-110 hover:cursor-pointer transition-all ease-out duration-300"
          >
            Як приєднатись?
          </Link>
          <RouterLink
            to="/housing"
            className="text-xl font-semibold hover:scale-110 hover:cursor-pointer transition-all ease-out duration-300"
          >
            Знайти житло
          </RouterLink>
        </nav>
        <div className="w-1/4 flex justify-center">
          <h1
            onClick={() => {
              isLoginHandle(true);
              roleHandle("");
            }}
            className="text-xl font-bold hover:scale-110 hover:cursor-pointer transition-all ease-out duration-300"
          >
            Увійти/Реєстрація
          </h1>
        </div>
      </header>
      <div className="relative w-full pt-[42%] top-0">
        <div
          data-sal="fade-in"
          data-sal-delay="100"
          data-sal-duration="600"
          className="bg-[url('../public/images/Main-img.webp')] bg-cover bg-no-repeat bg-center flex flex-col
       gap-[105px] p-[8%] absolute top-0 left-0 size-full text-black"
        >
          <h1 className="text-6xl font-extrabold w-[85.5%]">ЄДНАЙ</h1>
          <div className="flex flex-col gap-8 w-1/2">
            <h3 className="text-4xl font-semibold">
              Допомога всім хто постраждав в наслідок війни
            </h3>
          </div>
          <button
            type="button"
            className="w-[200px] h-[70px] bg-emerald-400 rounded-xl hover:scale-110 hover:cursor-pointer hover:bg-emerald-500  transition-all ease-out duration-300"
          >
            <RouterLink to="/donation">
              <h1 className="text-xl">Донати</h1>
            </RouterLink>
          </button>
        </div>
      </div>
      <Element>
        <div
          name="provide"
          className="flex flex-col gap-24 p-10 w-[70%] h-[500px] bg-gradient-to-br from-[#54dabb] to-[#1caad1] m-auto mt-24 rounded-3xl"
        >
          <div className="w-full text-center">
            <h1 className="text-2xl font-semibold">Ми надаємо</h1>
          </div>
          <div className="w-full -mt-8">
            <h1 className="text-2xl font-semibold">
              Можливість пошуку нової домівки для{" "}
              <span className="text-[#5647dd]">Біженців</span>
            </h1>
          </div>
          <div className="w-full text-center">
            <h1 className="text-2xl font-semibold">
              Можливість створювати збори для{" "}
              <span className="text-[#5647dd]">Військових</span>
            </h1>
          </div>
          <div className="w-full text-right">
            <h1 className="text-2xl font-semibold">
              Можливість збору всіх{" "}
              <span className="text-[#5647dd]">Волонтерів</span> в одному місці
            </h1>
          </div>
        </div>
      </Element>
      <Element>
        <div
          name="join"
          className="flex flex-col justify-evenly w-[full] bg-[#323232] h-fit p-5 mt-24 text-white"
        >
          <div className="w-full flex justify-center">
            <h1 className="text-2xl w-1/3 text-center">
              Ви можете пройти реєстрацію та вказати хто ви для отримання або
              надання допомоги
            </h1>
          </div>
          <div className="flex justify-evenly mt-12">
            <div
              onClick={() => {
                isLoginHandle(true);
                roleHandle("volunteer");
              }}
              className="flex gap-5 flex-col items-center group hover:cursor-pointer"
            >
              <img
                src="/images/icon3.webp"
                alt="icon1"
                className="w-[100px] rounded-2xl group-hover:scale-110 transition-all ease-out duration-300"
              ></img>
              <h1 className="text-xl r transition-all ease-out duration-300 group-hover:scale-110">
                Волонтер
              </h1>
            </div>
            <div
              onClick={() => {
                isLoginHandle(true);
                roleHandle("soldier");
              }}
              className="flex gap-5 flex-col items-center group hover:cursor-pointer"
            >
              <img
                src="/images/icon2.webp"
                alt="icon1"
                className="w-[100px] rounded-2xl group-hover:scale-110 transition-all ease-out duration-300"
              ></img>
              <h1 className="text-xl  transition-all ease-out duration-300 group-hover:scale-110">
                Військовий
              </h1>
            </div>
            <div
              onClick={() => {
                isLoginHandle(true);
                roleHandle("refugee");
              }}
              className="flex gap-5 flex-col items-center group hover:cursor-pointer"
            >
              <img
                src="/images/icon1.webp"
                alt="icon1"
                className="w-[100px] rounded-2xl group-hover:scale-110 transition-all ease-out duration-300"
              ></img>
              <h1 className="text-xl  transition-all ease-out duration-300 group-hover:scale-110">
                Біженець
              </h1>
            </div>
          </div>
        </div>
      </Element>
    </div>
  );
}

export default Main;
