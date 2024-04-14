import React from "react";
import { Element, Link } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

function Volunteers({ setIsLogin, setRole }) {
  const responce = {
    collectionId: 1,
    userId: 10,
    categoryId: 2,
    name: "Community Park Renewal",
    description:
      "Raising funds to renew the local community park with new playgrounds and green spaces.",
    reference: "CPark2024",
    goal: 20000,
    currency: "USD",
    collectedAmount: 1500,
    photo: "base64EncodedImageString",
  };
  const isLoginHandle = (value) => {
    setIsLogin(value);
  };
  const roleHandle = (value) => {
    setRole(value);
  };
  return (
    <div className="w-full h-full bg-[#efefef]">
      <header className="flex sticky top-0 items-center justify-evenly gap-5 w-full h-[100px] bg-gradient-to-b from-[#54cfb6] to-[#97c0ce]">
        <div className="w-1/3 flex justify-center">
          <RouterLink to="/">
          <img
           src="/images/blue-hands-seeklogo.png"
              alt="Logo"
              className="hover:scale-110
            hover:cursor-pointer transition-all ease-out duration-300 w-[70px]"
            ></img>
          </RouterLink>
        </div>
        <nav className="flex justify-center gap-8 w-1/3">
          <Link
            to="founds"
            spy={true}
            smooth={true}
            duration={500}
            className="text-xl font-semibold hover:scale-110
            hover:cursor-pointer transition-all ease-out duration-300"
          >
            {" "}
            Фонди
          </Link>
          <Link
            to="volontears"
            spy={true}
            smooth={true}
            duration={500}
            className="text-xl font-semibold hover:scale-110 hover:cursor-pointer transition-all ease-out duration-300"
          >
            Волонтери
          </Link>
          <RouterLink
            to="/housing"
            className="text-xl font-semibold hover:scale-110 hover:cursor-pointer transition-all ease-out duration-300"
          >
            Знайти житло
          </RouterLink>
        </nav>
        <div className="w-1/3 flex justify-center">
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
      <div className="flex flex-col w-[95%] h-fit p-10 bg-gradient-to-br from-[#54dabb] to-[#1caad1] m-auto mt-16 rounded-3xl">
        <Element>
          <div name="fonds" className="w-full flex justify-center">
            <h1 className="text-center text-2xl font-semibold w-1/2">
              Ви можете скинути донати на один з запропонованих благодійних
              фондів
            </h1>
          </div>
          <div className="flex justify-evenly mt-10">
            <a href="https://u24.gov.ua/uk">
              <img
                src="/images/united24.jpg"
                alt="united24"
                className="w-[200px] rounded-2xl hover:scale-110 hover:cursor-pointer transition-all ease-out duration-300"
              ></img>
            </a>
            <a href="https://savelife.in.ua/">
              <img
                src="/images/return-live.png"
                alt="return-live"
                className="w-[200px] rounded-2xl hover:scale-110 hover:cursor-pointer transition-all ease-out duration-300"
              ></img>
            </a>
          </div>
        </Element>
        <div className="flex mt-20 gap-3 items-center justify-center">
          <hr className="w-[40%] h-1 bg-black"></hr>
          <h1 className="text-2xl font-semibold">Або</h1>
          <hr className="w-[40%] h-1 bg-black"></hr>
        </div>
        <Element>
          <div name="volontears" className="w-full flex justify-center mt-10">
            <h1 className="text-2xl font-semibold">
              Можете скинути донати нашим волонтерам
            </h1>
          </div>
          <div className="w-[70%] h-fit p-4 m-auto mt-20 flex flex-col">
            <div className="flex justify-around gap-[70px]">
              <h1 className="text-2xl">ID</h1>
              <h1 className="text-2xl ml-10">П.І.Б.</h1>
              <h1 className="text-2xl ml-10">Номер телефону</h1>
              <h1 className="text-2xl">Назва збору</h1>
              <h1 className="text-2xl">Ціль збору</h1>
            </div>
            <div className="flex justify-around gap-3 mt-20">
              <h1 className="text-2xl">{responce.collectionId}.</h1>
              <h1 className="text-2xl">Феняк Павло Ігорович</h1>
              <h1 className="text-2xl">+39093665263</h1>
              <h1 className="text-xl">{responce.name}</h1>
              <h1 className="text-xl">
                {responce.collectedAmount} / {responce.goal}
              </h1>
            </div>
          </div>
        </Element>
      </div>
    </div>
  );
}

export default Volunteers;
