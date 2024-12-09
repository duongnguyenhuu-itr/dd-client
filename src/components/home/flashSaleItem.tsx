import classNames from "classnames";
import Image from "next/image";

export type TFlashSaleItem = {
  id: string;
  name: string;
  discount: number;
  image: string;
};

interface IProps {
  className?: string;
  data: TFlashSaleItem;
}

const FlashSaleItem = (props: IProps) => {
  const { name, discount, image } = props.data;
  return (
    <div
      className={classNames(
        "p-2 rounded-xl shadow-[0_5px_10px_0_rgba(0,0,0,0.1)]",
        props.className
      )}
    >
      <div className="relative overflow-hidden rounded-lg">
        <Image
          src={image}
          alt=""
          width={200}
          height={200}
          className="w-full h-full"
        />
        <div className="absolute font-bold text-white top-0 right-0 rounded-l-xl py-1 px-3 bg-gradient-to-r from-[#F81140] to-[#FF5790]">
          {`-${discount * 100}%`}
        </div>
      </div>
    </div>
  );
};

export default FlashSaleItem;
