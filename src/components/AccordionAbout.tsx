import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";

export default function AccordionAbout() {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <div className="p-4 md:p-20 min-w-80	flex flex-col justify-center items-center ">
      <div className=" w-full max-w-[600px]">
        <Accordion
          variant="light"
          className="divide-y divide-blue-200 border-t-[1px] border-b-[1px] border-white p-0"
        >
          <AccordionItem
            key="1"
            aria-label="Accordion 1"
            title="Accordion 1"
            classNames={{ title: "text-white" }}
            className="p-2"
          >
            {defaultContent}
          </AccordionItem>
          <AccordionItem
            key="2"
            aria-label="Accordion 2"
            title="Accordion 2"
            classNames={{ title: "text-white" }}
            className="p-2"
          >
            {defaultContent}
          </AccordionItem>
          <AccordionItem
            key="3"
            aria-label="Accordion 3"
            title="Accordion 3 "
            classNames={{
              title: "text-white",
              content: "text-white",
            }}
            className="p-2"
          >
            {defaultContent}
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
