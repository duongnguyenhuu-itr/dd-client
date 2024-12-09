import Image from "next/image";

export type TCategoryItem = {
  id: string;
  name: string;
  href: string;
  count: number;
  images: string[];
};

interface IProps {
  className?: string;
  data: TCategoryItem;
}

const CategoryItem = (props: IProps) => {
  const { data } = props;
  return (
    <div className="bg-white shadow-md p-1.5 rounded-xl">
      <div className="grid grid-cols-2 gap-1">
        {data.images.map((image, index) => (
          <div className="rounded-lg overflow-hidden">
            <Image
              key={index}
              src={image}
              alt={data.name}
              width={200}
              height={200}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center mt-1.5">
        <div className="text-md font-bold">{data.name}</div>
        <div className="text-sm font-bold bg-[#DFE9FF] px-2 rounded-lg">
          {data.count}
        </div>
      </div>
    </div>
  );
};

export default CategoryItem;
