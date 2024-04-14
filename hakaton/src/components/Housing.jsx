import React, { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";

function Housing({ setIsLogin, setRole }) {
const [allAdvarts, setAllAdverts] = useState(null);
const [addInfo, setAddInfo] = useState(null);

useEffect(() => {
  const fetchAllAdvarts = async () => {
    try {
      const response = await fetch("http://localhost:8080/housing/get-all-adverts");
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      setAllAdverts(data);
      console.log(data)
    } catch (error) {
      console.error(error);
    }
  };

  fetchAllAdvarts();
}, []);

useEffect(() => {
  const fetchAddInfo = async () => {
    if (allAdvarts) {
      try {
        const adId = allAdvarts.id;
        const requestBody = {
          adid: 1
        };

        const response = await fetch("http://localhost:8080/housing/get-add-info", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(requestBody)
        });

        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const data = await response.json();
        setAddInfo(data);
        console.log(data); // Выводим данные в консоль
      } catch (error) {
        console.error(error);
      }
    }
  };

  fetchAddInfo();
}, [allAdvarts]);

  const isLoginHandle = (value) => {
    setIsLogin(value);
  };
  const roleHandle = (value) => {
    setRole(value);
  };
  return (
    <div className="w-full h-full bg-[#dddddd]">
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
      <div className="w-[65%] h-fit bg-gradient-to-br from-[#54dabb] to-[#1caad1] m-auto mt-16 p-10 pt-8 rounded-3xl">
        <div className="flex w-full justify-center">
          <h1 className=" text-2xl font-semibold">Доступне житло</h1>
        </div>

        <div className="w-full h-fit bg-[#b4b4b45e] mt-8 flex flex-col gap-6 p-5 pl-16 pr-16 rounded-3xl">
          <div className="flex justify-between">
            <h1 className="text-2xl w-1/2">
              1к житло 35,75 м² в клубному будинку з ліфтом вул. Різдвяна 108
            </h1>
            <h1 className="text-xl w-1/2 text-right font-bold">
              1 098 145 грн
            </h1>
          </div>
          <p className="w-full text-lg">
            Житло вільного планування 35,75 м² має: - суміжний санвузол -
            панорамну лоджію - розташування: 2 поверх - встановлені склопакети,
            вхідні двері (металеві протиударні з тимчасовим замком), лічильники
            обліку води і електроенергії Є варіанти на інших поверхах
          </p>
          <div className="w-[85%] flex justify-between text-lg font-light">
            <h1 className="font-normal">вул. Різдвяна 108 </h1>
            <h1>Опубліковано 28 березня 2024 р.</h1>
          </div>
          <h1 className="text-lg">Еталон</h1>
          <h1 className="text-lg">+380937355343</h1>
        </div>
      </div>
    </div>
  );
}

export default Housing;
