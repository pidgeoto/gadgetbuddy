"use client";
import React, { useState, useRef } from "react";
import { cn } from "@/lib/utils";
import emailjs from "@emailjs/browser";

const Subscribe = React.forwardRef(
  ({ className, type, placeholder, ...props }, ref) => {
    const [email, setEmail] = useState("");
    const [isValidEmail, setIsValidEmail] = useState(true);
    const [emailRequiredError, setEmailRequiredError] = useState(false);

    const handleInputChange = (event) => {
      setEmail(event.target.value);
      setIsValidEmail(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(event.target.value));
    };

    const sendEmail = () => {
      const formElement = ref?.current;

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
            setEmail("");
            setIsValidEmail(true);
          },
          (error) => {
            console.log(error.text);
          }
        );
    };

    const handleSubscribeClick = () => {
      setEmailRequiredError(false);

      if (!email.trim()) {
        setEmailRequiredError(true);
        return;
      }

      if (!isValidEmail) {
        alert("Invalid email address. Please enter a valid email.");
        return;
      }

      sendEmail();
    };

    return (
      <div className="relative">
        <form
          ref={ref}
          onSubmit={(e) => {
            e.preventDefault();
            handleSubscribeClick();
          }}
          className="flex flex-col items-center rounded-full"
        >
          <div className="relative">
            <input
              type={type}
              name="email"
              placeholder={placeholder}
              className={cn(
                "flex h-10 rounded-full border border-slate-200 bg-gray-100 px-5 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-300 dark:bg-slate-450 dark:ring-offset-slate-450 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300",
                "sm:w-[320px]",
                className
              )}
              ref={ref}
              onChange={handleInputChange}
              value={email}
            />
            <div className="absolute inset-y-0 right-2 flex items-center z-20">
              <button
                className="primary hidden sm:block"
                onClick={handleSubscribeClick}
              >
                Subscribe
              </button>
            </div>
          </div>
          <div className="mt-2 sm:mt-0 sm:order-first">
            <button
              className="primary md:hidden"
              onClick={handleSubscribeClick}
            >
              Subscribe
            </button>
          </div>
        </form>
        {!isValidEmail && (
          <div className="text-red-500 mt-2 text-sm">
            Please enter a valid email address
          </div>
        )}
        {emailRequiredError && (
          <div className="text-red-500 mt-2 text-sm">
            Email is required
          </div>
        )}
      </div>
    );
  }
);

Subscribe.displayName = "Subscribe";

export { Subscribe };
