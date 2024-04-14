import React, { useEffect, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import axios from "axios";

function RegistrationLogin({ setIsLogin, isLogin, role }) {
  const [isRegistration, setIsRegistration] = useState(false);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role_, setRole_] = useState("");
  const [fullName, setFullName] = useState("");

  const isRegistrationHandle = (value) => {
    setIsRegistration(value);
  };
  const isLoginHandle = (value) => {
    setIsLogin(value);
  };

  const registrationHandle = async (
    e,
    username,
    email,
    password,
    role,
    fullName
  ) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/auth/sign-up", {
        username: username,
        email: email,
        password: password,
        role: role,
        passportData: null,
        fullName: fullName,
        phone: null,
        birthDay: null,
        country: null,
        soldierTicket: [null],
        volunteerTicket: [null],
        refugeeTicket: [null],
      });
      console.log(response.data);
      // Add logic here for what happens on successful registration
    } catch (error) {
      console.error(error);
      // Display error message to user here
    }
  };
  useEffect(() => {
    const roleCheck = () => {
      if (role !== "") {
        setIsRegistration(true);
        setRole_(role);
      } else setIsRegistration(false);
      console.log(role);
    };
    roleCheck();
  }, [role]);
  return (
    <div
      className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col transition-all ease-out duration-300 ${
        isLogin === false ? "opacity-0 -z-10" : "opacity-100 z-10"
      } ${
        isRegistration === false ? "w-[400px]" : "w-[600px]"
      } h-fit bg-transparent backdrop-blur-xl rounded-3xl p-6`}
    >
      <div
        onClick={() => isLoginHandle(false)}
        className="flex justify-center items-center absolute top-0 right-0 w-12 h-12 bg-[#404040] rounded-tr-3xl group transition-all ease-out duration-300 hover:bg-[#353535] hover:cursor-pointer"
      >
        <IoCloseSharp
          size={35}
          className="text-white group-hover:scale-125 transition-all ease-out duration-300"
        ></IoCloseSharp>
      </div>
      {isRegistration === false ? (
        <>
          <h1 className="text-center text-3xl font-semibold mb-5">Вхід</h1>
          <div className="w-full h-fit">
            <div className="mb-11">
              <h1 className=" text-[22px] mb-3">Електрона пошта</h1>
              <input
                type="email"
                className="w-full h-[35px] bg-gradient-to-r from-[#58d2b4] to-[#44bcdb] rounded-xl items-center pl-3 pr-3 outline-none text-lg"
              ></input>
            </div>
            <div className="mb-5">
              <h1 className="text-[22px] mb-3">Пароль</h1>
              <input
                type="password"
                className="w-full h-[35px] bg-gradient-to-r from-[#58d2b4] to-[#43bddb] rounded-xl items-center pl-3 pr-3 outline-none text-lg"
              ></input>
            </div>
            <h3 className="underline underline-offset-4 transition-all mb-5 ease-out duration-300 hover:text-[#03A400] hover:cursor-pointer w-fit">
              Забули пароль?
            </h3>
          </div>
          <div className="flex flex-col items-center gap-3 justify-center w-full">
            <button
              type="submit"
              className="w-[100px] h-[50px] rounded-2xl bg-[#43bddb] transition-all ease-out duration-300 hover:bg-[#58d2b4] hover:cursor-pointer"
            >
              <h1 className="text-xl">Увійти</h1>
            </button>
            <h3>
              Не маєте акаунту?{" "}
              <span
                onClick={() => isRegistrationHandle(true)}
                className=" text-[#03A400] transition-all ease-out duration-300 hover:text-[#316a30] hover:cursor-pointer"
              >
                Створіть
              </span>
            </h3>
          </div>
        </>
      ) : (
        <form
          onSubmit={(e) =>
            registrationHandle(e, userName, email, password, role_, fullName)
          }
        >
          <h1 className="text-center text-3xl font-semibold mb-5">
            Реєстрація
          </h1>
          <div className="flex gap-10 justify-around">
            <div className="w-[45%]">
              <div className="w-full h-fit">
                <div className="mb-5">
                  <h1 className=" text-[22px] mb-3">П.І.Б.</h1>
                  <input
                    type="text"
                    onChange={(e) => setFullName(e.target.value)}
                    value={fullName}
                    className="w-full h-[35px] bg-gradient-to-r from-[#58d2b4] to-[#44bcdb] rounded-xl items-center pl-3 pr-3 outline-none text-lg"
                  ></input>
                </div>
                <div className="mb-5">
                  <h1 className="text-[22px] mb-3">Ім'я користувача</h1>
                  <input
                    type="text"
                    onChange={(e) => setUserName(e.target.value)}
                    value={userName}
                    className="w-full h-[35px] bg-gradient-to-r from-[#58d2b4] to-[#44bcdb] rounded-xl items-center pl-3 pr-3 outline-none text-lg"
                  ></input>
                </div>
                <div className="mb-5">
                  <h1 className=" text-[22px] mb-3">Електрона пошта</h1>
                  <input
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    className="w-full h-[35px] bg-gradient-to-r from-[#58d2b4] to-[#44bcdb] rounded-xl items-center pl-3 pr-3 outline-none text-lg"
                  ></input>
                </div>
              </div>
            </div>
            <div className="w-[45%]">
              <div className="mb-5">
                <h1 className=" text-[22px] mb-3">Виберіть роль</h1>
                <select
                  name="roles"
                  onChange={(e) => setRole_(e.target.value)}
                  value={role_}
                  className="w-full h-[35px] bg-gradient-to-r from-[#58d2b4] to-[#44bcdb] rounded-xl items-center pl-3 pr-3 outline-none text-lg"
                >
                  <option value="user">Користувач</option>
                  <option value="refugee">Біженець</option>
                  <option value="volunteer">Волонтер</option>
                  <option value="soldier">Військовий</option>
                </select>
              </div>
              <div className="mb-5">
                <h1 className="text-[22px] mb-3">Пароль</h1>
                <input
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  className="w-full h-[35px] bg-gradient-to-r from-[#58d2b4] to-[#44bcdb] rounded-xl items-center pl-3 pr-3 outline-none text-lg"
                ></input>
              </div>
              <div className="mb-5">
                <h1 className="text-[22px] mb-3">Підтвердити пароль</h1>
                <input
                  type="password"
                  className="w-full h-[35px] bg-gradient-to-r from-[#58d2b4] to-[#44bcdb] rounded-xl items-center pl-3 pr-3 outline-none text-lg"
                ></input>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-3 mt-5 justify-center w-full">
            <button
              type="submit"
              className="w-fit h-[50px] rounded-2xl bg-[#B4EDFF] pl-3 pr-3 transition-all ease-out duration-300 hover:bg-[#7ad6cb] hover:cursor-pointer"
            >
              <h1 className="text-xl">Зареєструватись</h1>
            </button>
            <h3>
              Маєте акаунт?{" "}
              <span
                onClick={() => isRegistrationHandle(false)}
                className=" text-[#03A400] transition-all ease-out duration-300 hover:text-[#316a30] hover:cursor-pointer"
              >
                Увійдіть
              </span>
            </h3>
          </div>
        </form>
      )}
    </div>
  );
}

export default RegistrationLogin;
