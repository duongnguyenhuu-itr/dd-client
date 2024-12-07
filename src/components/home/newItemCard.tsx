import Image from "next/image";
import React from "react";

export type TNewItemCard = {
  id: string;
  name: string;
  price: number;
  image: string;
};

interface IProps {
  className?: string;
  data: TNewItemCard;
}

const NewItemCard = (props: IProps) => {
  const { name, price, image } = props.data;
  return (
    <div className={props.className}>
      <div className="rounded-lg p-1.5 shadow-[0_5px_10px_0_rgba(0,0,0,0.1)]">
        <Image
          src={image}
          alt=""
          width={200}
          height={200}
          className="w-full h-full rounded"
        />
      </div>
      <div className="mt-1 text-[12px] md:text-sm lg:text-base">{name}</div>
      <div className="font-bold text-lg md:text-xl lg:text-2xl">{`$${price.toFixed(
        2
      )}`}</div>
    </div>
  );
};

export default NewItemCard;
