import React, { useState } from "react";
import axios from "axios";
import { Input, Button } from "antd";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./Landscapes.css";

function Ajax() {
  const [namee, setName] = useState("");
  const [email, setEmail] = useState("");
  const [confirm, setConfirm] = useState("");
  const [phone, setPhone] = useState("");
  const [data, setData] = useState("");
  const [ticket, setTicket] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    if (
      !namee ||
      !email ||
      !confirm ||
      !phone ||
      !data ||
      !ticket ||
      !message
    ) {
      toast.error("Please fill in all required fields.", {
        autoClose: 5000,
        position: "top-right",
      });
      return;
    }

    const chatId = "1999683671"; // Telegram chat ID
    const botToken = "6635249356:AAGS3Claiav2N1a1SBDmj15HCSeCbaRFZQI"; // Your bot token

    // Barcha ma'lumotlarni alohida o'zgaruvchilarda saqlash
    const nameMessage = `Name👉: ${namee}👈`;
    const emailMessage = `Email👉: ${email}👈`;
    const confirmMessage = `Confirm👉: ${confirm}👈`;
    const phoneMessage = `Phone👉: ${phone}👈`;
    const dataMessage = `DD-MM-YY👉: ${data}👈`;
    const ticketMessage = `Ticket👉: ${ticket}👈`;
    const userMessage = `Message👉: ${message}👈`;

    // Barcha ma'lumotlarni bir xabarda yuborish uchun yaratilgan obyektni tuzish
    const messageText = `
    ${nameMessage}
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

      toast.success("Message sent successfully!", {
        autoClose: 5000,
        position: "top-right",
      });

      // Clear the input fields after a successful submission
      setName("");
      setEmail("");
      setConfirm("");
      setPhone("");
      setData("");
      setTicket("");
      setMessage("");
    } catch (error) {
      console.error("Error sending the message: ", error);
      toast.error("Error sending the message.", {
        autoClose: 3000,
        position: "top-right",
      });
    }
  };

  return (
    <div className="top-buttom-right-message1">
      <Input
        placeholder="Name"
        value={namee}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        placeholder="Confirm-Email"
        value={confirm}
        onChange={(e) => setConfirm(e.target.value)}
      />
      <Input
        type="number"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <Input
        type="month"
        placeholder="dd-mm-yy"
        value={data}
        onChange={(e) => setData(e.target.value)}
      />
      <Input
        type="number"
        placeholder="Number of ticket"
        value={ticket}
        onChange={(e) => setTicket(e.target.value)}
      />
      <Input.TextArea
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        style={{ width: "260px", height: "56px" }}
      />
      <div className="buttons-1">
        <Button className="button-1" type="primary" onClick={handleSubmit}>
          Check Availability{" "}
        </Button>
        <Button className="button-1" type="primary">
          Book Now
        </Button>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        limit={8}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default Ajax;
