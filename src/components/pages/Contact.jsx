import React from "react";
import FormComponent from "../FormComponent";
import Link from "next/link";
import { AutoCarousel } from "../AutoCarousel";

export default function Contact() {
  return (
    <>
      <AutoCarousel />
      <div className="w-full flex justify-center flex-col lg:flex-row gap-2">
        <SendMessageSection />
        <ContactInfoSection />
      </div>
    </>
  );
}

const ContactInfoSection = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="bg-gray-100 p-4 shadow-md rounded-2xl">
        <h2 className="text-xl font-semibold mb-4">Contact Info</h2>
        <ContactLink href="mailto:dummy@gmail.com">
          dummy@gmail.com
        </ContactLink>
        <ContactLink href="tel:+9198765448417">+91-XXX XXXX 417</ContactLink>
        <ContactLink href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.8121695561713!2d77.03638927468698!3d28.424923975778746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1875d7aa50e5%3A0x7e6930bbea28775f!2sILD%20Trade%20Centre!5e0!3m2!1sen!2sin!4v1699085579380!5m2!1sen!2sin">
        
        </ContactLink>
      </div>
     
    </div>
  );
};

const SendMessageSection = () => {
  return (
    <div className="lg:w-[720px] flex flex-col gap-2">
      <div className="text-white shadow-md rounded-2xl bg-black">
        <h2 className="text-center mt-6 font-bold">Send Us a Message</h2>
        <FormComponent />
      </div>
    </div>
  );
};

const ContactLink = ({ href, children }) => {
  return (
    <div className="mb-2">
      <Link href={href}>{children}</Link>
    </div>
  );
};
