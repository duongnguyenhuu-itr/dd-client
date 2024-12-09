import { MostPopularType } from "@/contants/home";
import classNames from "classnames";
import _ from "lodash";
import { Heart } from "lucide-react";
import Image from "next/image";

export type TMostPopularItem = {
  id: string;
  name: string;
  href: string;
  likes: number;
  type: MostPopularType;
  image: string;
};

interface IProps {
  className?: string;
  data: TMostPopularItem;
}

const MostPopularItem = (props: IProps) => {
  const { data } = props;
  return (
    <div
      className={classNames(
        "bg-white shadow-md p-1.5 rounded-xl",
        props.className
      )}
    >
      <div className="rounded-lg overflow-hidden">
        <Image
          src={data.image}
          alt={data.name}
          width={200}
          height={200}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex justify-between items-center mt-1.5">
        <div className="flex items-center">
          <div className="text-md font-bold">{data.likes}</div>
          <Heart color="#0042E0" />
        </div>
        <div className="text-sm">{_.capitalize(data.type)}</div>
      </div>
    </div>
  );
};

export default MostPopularItem;
