import React from "react";
import Image from "next/image";
import { FaCheck } from "react-icons/fa";

type Props = {
  title: string;
  id: number;
  imageSrc: string;
  onclick: (event: React.MouseEvent, id: number) => void;
  disable?: boolean;
  active?: boolean;
};

export const Card = ({
  title,
  id,
  imageSrc,
  onclick,
  disable,
  active,
}: Props) => {
  return (
    <div
      onClick={(e) => onclick(e, id)} // Ensure the event is passed here
      className={`h-full border-2 rounded-xl border-bottom-4 hover:bg-black/5 
      cursor-pointer active:border-b-2 flex flex-col items-center justify-center
      p-3 pb-6 min-h-[217px] min-w-[200px] relative ${
        disable ? "pointer-events-none opacity-50" : ""
      }`}
    >
      <div className="min-[24px] w-full flex items-center justify-end">
        {active && (
          <div className="absolute top-1 rounded-md bg-green-600 flex items-center justify-center p-1.5">
            <FaCheck color="white" size={"0.5rem"} />
          </div>
        )}
      </div>
      <Image
        src={imageSrc}
        alt={title}
        className="rounded-lg drop-shadow-md object-cover border"
        height={70}
        width={93.33}
      />
      <h3 className="text-neutral-700 text-center mt-3 font-bold pt-5">
        {title}
      </h3>
    </div>
  );
};
