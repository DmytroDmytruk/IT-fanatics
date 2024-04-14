import React, { useState, useEffect } from "react";
import axios from "axios";
import { IoCloseSharp } from "react-icons/io5";

function Chat() {
  const [userInput, setUserInput] = useState("привіт");
  const [botResponse, setBotResponse] = useState("");
  const [categoryData, setCategoryData] = useState({
    buttons: [],
    donations: [],
    houses: [],
    psychologists: [],
    houseInfo: null,
    refugeeDocs: null,
    volunteerDocs: null,
    militaryDocs: null,
  });

  useEffect(() => {
    sendMessage();
  }, []);

  useEffect(() => {
    if (categoryData.buttons.length > 0) {
      setBotResponse("Виберіть категорію:");
    } else if (categoryData.donations.length > 0) {
      setBotResponse("Список донатів:");
    } else if (categoryData.houses.length > 0) {
      setBotResponse("Список будинків:");
    } else if (categoryData.psychologists.length > 0) {
      setBotResponse("Інформація про психологів:");
    } else if (categoryData.houseInfo) {
      setBotResponse("Інформація про будинок:");
    } else if (categoryData.refugeeDocs) {
      setBotResponse("Інформація про документи для біженців:");
    } else if (categoryData.volunteerDocs) {
      setBotResponse("Інформація про документи для волонтерів:");
    } else if (categoryData.militaryDocs) {
      setBotResponse("Інформація про військові документи:");
    }
  }, [categoryData]);

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleButtonClick = async (button) => {
    setUserInput(button);
    await sendMessage(button);
  };

  const handleBackClick = async () => {
    setUserInput("привіт");
    await sendMessage("привіт");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await sendMessage();
  };

  const sendMessage = async (button = null) => {
    try {
      const response = await axios.post("http://localhost:5000/get_response", {
        message: button ? button : userInput,
      });
      const data = response.data;

      setBotResponse(data.message);

      setCategoryData({
        buttons: data.buttons || [],
        donations: data.donations || [],
        houses: data.houses || [],
        psychologists: data.psychologists || [],
        houseInfo: data.house_info || null,
        refugeeDocs: data.refugee_docs || null,
        volunteerDocs: data.volunteer_docs || null,
        militaryDocs: data.military_docs || null,
      });
    } catch (error) {
      console.error("Error fetching bot response:", error);
    }
  };

  const renderDonations = () => (
    <div>
      <h3>Список донатів:</h3>
      <ul>
        {categoryData.donations.map((donation, index) => (
          <li key={index}>
            <strong>{donation.name}</strong>
            <p>{donation.description}</p>
            <p>
              <a href={donation.reference}>Посилання</a>
            </p>
            <p>
              Мета: {donation.goal} {donation.currency}
            </p>
            <p>
              Зібрано: {donation.CollectAmmount} {donation.currency}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );

  const renderHouses = () => (
    <div className="text-center">
      <h3>Список будинків:</h3>
      <ul>
        {categoryData.houses.map((house, index) => (
          <li key={index}>
            <button
              className="transition-all ease-out duration-300 hover:scale-110 m-1"
              onClick={() => handleButtonClick(house)}
            >
              {house}
            </button>
          </li>
        ))}
      </ul>
      {categoryData.houseInfo && (
        <div>
          <h3>Інформація про будинок:</h3>
          <p>{categoryData.houseInfo}</p>
        </div>
      )}
    </div>
  );

  const renderPsychologists = () => (
    <div>
      <h3>Інформація про психологів:</h3>
      <table>
        <thead>
          <tr>
            <th>ПІБ</th>
            <th>Освіта</th>
            <th>Номер телефону</th>
            <th>Місце роботи</th>
            <th>Ціна</th>
          </tr>
        </thead>
        <tbody>
          {categoryData.psychologists.map((psychologist, index) => (
            <tr key={index}>
              <td>{psychologist.name}</td>
              <td>{psychologist.education}</td>
              <td>{psychologist.phone}</td>
              <td>{psychologist.workplace}</td>
              <td>{psychologist.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const renderDocs = (docs, title) => (
    <div>
      <h3>{title}</h3>
      <ul>
        {Object.entries(docs).map(([key, value], index) => (
          <li key={index}>
            <strong>{key}</strong>
            <p>{value}</p>
          </li>
        ))}
      </ul>
    </div>
  );

  const [isOpen, setIsOpen] = useState(false);

  const isOpenHandle = (value) => {
    setIsOpen(value);
  };
  return (
    <>
      <img
        src="https://st3.depositphotos.com/8950810/17657/v/450/depositphotos_176577870-stock-illustration-cute-smiling-funny-robot-chat.jpg"
        onClick={() => {
          isOpenHandle(true);
        }}
        className={`transition-all ease-out duration-300 ${
          isOpen === true ? "opacity-0" : "opacity-100"
        } fixed right-[5%] bottom-[10%] z-30 w-[80px] h-[80px] rounded-full hover:cursor-pointer hover:scale-110 bg-black`}
      ></img>
      <div
        className={`transition-all ease-out duration-300 ${
          isOpen === true ? "opacity-100 z-30" : "opacity-0 -z-10"
        } fixed right-[5%] bottom-[10%] min-w-[300px] max-w-[600px] min-h-[360px] max-h[600px] bg-[#d7d7d77d] rounded-2xl backdrop-blur-xl p-4`}
      >
        <div
          onClick={() => isOpenHandle(false)}
          className="flex justify-center items-center absolute top-0 right-0 w-12 h-12 bg-[#404040] rounded-tr-2xl group transition-all ease-out duration-300 hover:bg-[#353535] hover:cursor-pointer"
        >
          <IoCloseSharp
            size={35}
            className="text-white group-hover:scale-125 transition-all ease-out duration-300"
          ></IoCloseSharp>
        </div>
        <input
          className="opacity-0 -z-50"
          type="text"
          value={userInput}
          onChange={handleInputChange}
          placeholder="Введіть ваше питання..."
        />
        <h1 className="text-xl font-semibold text-center">Асистент</h1>
        <form onSubmit={handleSubmit} className=" opacity-0 -z-10"></form>
        <p className="text-center mt-8 text-lg">Бот: {botResponse}</p>
        <div className="gap-5 flex flex-col mt-5">
          {categoryData.buttons.map((button, index) => (
            <button
              className="transition-all ease-out duration-300 hover:scale-110"
              key={index}
              onClick={() => handleButtonClick(button)}
            >
              {button}
            </button>
          ))}
        </div>
        {categoryData.donations.length > 0 && renderDonations()}
        {categoryData.houses.length > 0 && renderHouses()}
        {categoryData.psychologists.length > 0 && renderPsychologists()}
        {categoryData.refugeeDocs &&
          renderDocs(
            categoryData.refugeeDocs,
            "Інформація про документи для біженців:"
          )}
        {categoryData.volunteerDocs &&
          renderDocs(
            categoryData.volunteerDocs,
            "Інформація про документи для волонтерів:"
          )}
        {categoryData.militaryDocs &&
          renderDocs(
            categoryData.militaryDocs,
            "Інформація про військові документи:"
          )}
        <button
          className="mt-5 transition-all ease-out duration-300 hover:scale-110"
          onClick={handleBackClick}
        >
          &#8592; Назад
        </button>
      </div>
    </>
  );
}

export default Chat;
