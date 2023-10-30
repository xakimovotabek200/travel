import React, { useState } from "react";
import axios from "axios";
import "./Landscapes.css";

import { Input } from "antd"; // Replace with your UI library
const { TextArea } = Input;

function Ajax() {
  const [email, setEmail] = useState("");
  const [confirm, setConfirm] = useState("");
  const [phone, setPhone] = useState("");
  const [data, setData] = useState("");
  const [ticket, setTicket] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    const chatId = "1999683671"; // Telegram chat ID
    const botToken = "6635249356:AAGS3Claiav2N1a1SBDmj15HCSeCbaRFZQI"; // Your bot token

    // Barcha ma'lumotlarni alohida o'zgaruvchilarda saqlash
    const emailMessage = `Email: ${email}`;
    const confirmMessage = `Confirm: ${confirm}`;
    const phoneMessage = `Phone: ${phone}`;
    const dataMessage = `DD-MM-YY: ${data}`;
    const ticketMessage = `Ticket: ${ticket}`;
    const userMessage = `Message: ${message}`;

    // Barcha ma'lumotlarni bir xabarda yuborish uchun yaratilgan obyektni tuzish
    const messageText = `
    ${emailMessage}
    ${confirmMessage}
    ${phoneMessage}
    ${dataMessage}
    ${ticketMessage}
    ${userMessage}
    `;

    try {
      const url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(
        messageText
      )}`;
      await axios.get(url);
    } catch (error) {
      console.error("Error sending the messages: ", error);
    }
  };

  return (
    <div>
      <Input placeholder="Name" id="name" />
      <Input
        placeholder="Email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        placeholder="Confirm-Email"
        id="confirm"
        value={confirm}
        onChange={(e) => setConfirm(e.target.value)}
      />
      <Input
        type="number"
        placeholder="Phone"
        id="number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <Input
        type="month"
        placeholder="dd-mm-yy"
        id="data"
        value={data}
        onChange={(e) => setData(e.target.value)}
      />
      <Input
        type="number"
        placeholder="Number of ticket"
        id="ticket"
        value={ticket}
        onChange={(e) => setTicket(e.target.value)}
      />
      <TextArea
        placeholder="Message"
        id="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        style={{ width: "300px", height: "56px" }}
      />
      <div className="buttons-1">
        <button className="button-1" onClick={handleSubmit}>
          Check Availability
        </button>
        <button className="button-1">Book Now</button>
      </div>
    </div>
  );
}

export default Ajax;
