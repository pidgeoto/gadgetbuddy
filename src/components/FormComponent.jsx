"use client";
import React, { useState, useRef } from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [emailRequiredError, setEmailRequiredError] = useState(false);

  const formRef = useRef();

  const validateFields = () => {
    let isValid = true;

    if (!firstName.trim()) {
      setFirstNameError("First name is required");
      isValid = false;
    } else {
      setFirstNameError("");
    }

    if (!lastName.trim()) {
      setLastNameError("Last name is required");
      isValid = false;
    } else {
      setLastNameError("");
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailRegex.test(email)) {
      setEmailError("Enter a valid email address");
      isValid = false;
    } else {
      setEmailError("");
    }

    return isValid;
  };

  const handleInputChange = (field, value) => {
    switch (field) {
      case "firstname":
        setFirstName(value);
        setFirstNameError("");
        break;
      case "lastname":
        setLastName(value);
        setLastNameError("");
        break;
      case "email":
        setEmail(value);
        setEmailError("");
        break;
      default:
        break;
    }
  };

  const sendEmail = () => {
    const formElement = formRef.current;

    if (!formElement) {
      console.error("Form element is not available.");
      return;
    }

    emailjs
      .sendForm(
        "service_xgo1jbr",
        "template_3npzkon",
        formElement,
        "sHdZiyj-q_8OA8pRi"
      )
      .then(
        (result) => {
          console.log(result.text);
          formElement.reset();
          setFirstName("");
          setLastName("");
          setEmail("");
          setMessage("");
          setIsValidEmail(true);
          alert("Form submitted successfully!");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const handleSubscribeClick = () => {
    if (!firstName.trim() || !lastName.trim() || !email.trim() || !message.trim()) {
      alert("All fields are mandatory. Please fill in all the details.");
      return;
    }

    if (!isValidEmail) {
      alert("Invalid email address. Please enter a valid email.");
      return;
    }

    sendEmail();
  };


  return (
    <form
    ref={formRef}
    onSubmit={(e) => {
      e.preventDefault();
      handleSubscribeClick();
    }}
    className="p-8"
    >
      <div className=" flex flex-col lg:flex-row gap-2">
        <div className="w-full">
          <Input
            name="firstname"
            label="First Name"
            className="w-full"
            placeholder="Enter your first name"
            value={firstName}
            onChange={(e) => handleInputChange("firstname", e.target.value)}
          />
          {firstNameError && (
            <div className="text-red-500 mt-2 text-sm">{firstNameError}</div>
          )}
        </div>
        <div className="w-full">
          <Input
            name="lastname"
            label="Last Name"
            className="w-full"
            placeholder="Enter your last name"
            value={lastName}
            onChange={(e) => handleInputChange("lastname", e.target.value)}
          />
          {lastNameError && (
            <div className="text-red-500 mt-2 text-sm">{lastNameError}</div>
          )}
        </div>
      </div>

      <div className="my-4">
        <Input
          id="Email"
          name="email"
          label="Email"
          className="w-full"
          placeholder="Enter your email"
          type="email"
          value={email}
          onChange={(e) => handleInputChange("email", e.target.value)}
        />
        {emailError && (
          <div className="text-red-500 mt-2 text-sm">{emailError}</div>
        )}
      </div>

      <Textarea
        id="Description"
        name="message"
        label="Message"
        placeholder="Enter your message"
        type="textarea"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <div className="flex justify-center items-center my-6">
        <Button
          type="submit"
          className="bg-white text-black p-2 rounded-full w-full cursor-pointer shadow-inner hover:bg-gray-600 hover:text-white"
          onClick={handleSubscribeClick}
        >
          Submit
        </Button>
      </div>
    </form>
  );
}
