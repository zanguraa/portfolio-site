import React from "react";
import Image from "next/image";
import circleArrow from "../assets/icons/circle_arrow.png";

const Contact = () => {
  const contact = [
    {
      name: "Behance",
      link: "https://www.behance.net/fae9b112",
    },
    {
      name: "Email",
      link: "mailto:barbarajaniashvili79@gmail.com",
    },
    {
      name: "Dribble",
      link: "https://dribbble.com/barbararosaa",
    },
    {
      name: "Linkedin",
      link: "https://www.linkedin.com/in/barbara-janiashvili-3242b3236/",
    },

    {
      name: "Facebook",
      link: "https://www.facebook.com/barbare.janiashvili.10",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center bg-[#B8FF20] py-20 px-6 gap-8">
      <h1 className="text-5xl text-black bold font-['Alerion-Bold'] uppercase text-center">
        LET’S WORK TOGETHER
      </h1>
      <div className="flex w-full flex-col items-start justify-center max-w-[600px]">
        {contact.map((contact, index) => (
          <div
            key={index}
            className="flex flex-row justify-between w-full border-b-[1px] border-black mb-4 pb-4"
          >
            <h2 className="text-xl text-black uppercase">{contact.name}</h2>
            <a href={contact.link} target="black">
              <Image src={circleArrow} alt="circleArrow" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
