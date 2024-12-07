"use client";

import GET_PRODUCTS from "@/apollo/query/getProducts";
import { AvatarCustom } from "@/components/custom/avatarCustom";
import { MainBackground } from "@/components/custom/mainBackground";
import { MobileNavigation } from "@/components/custom/mobileNavigation";
import CountDown from "@/components/home/countDown";
import NewItemCard, { TNewItemCard } from "@/components/home/newItemCard";
import { Button } from "@/components/ui/button";
import { HomeBannerType } from "@/contants/home";
import { useQuery } from "@apollo/client";
import dayjs from "dayjs";
import { CircleChevronRight } from "lucide-react";

import Image from "next/image";
import Link from "next/link";
import { title } from "process";

interface Product {
  id: string;
  name: string;
  price: number;
}

export default function Home() {
  const { loading, error, data, refetch, fetchMore } = useQuery<{
    products: Product[];
  }>(GET_PRODUCTS);

  const categories = [
    {
      id: 1,
      name: "Switches",
      href: "#",
      count: 122,
      images: [
        "https://github.com/shadcn.png",
        "https://github.com/shadcn.png",
        "https://github.com/shadcn.png",
        "https://github.com/shadcn.png",
      ],
    },
    {
      id: 2,
      name: "Keycaps",
      href: "#",
      count: 100,
      images: [
        "https://github.com/shadcn.png",
        "https://github.com/shadcn.png",
        "https://github.com/shadcn.png",
        "https://github.com/shadcn.png",
      ],
    },
    {
      id: 3,
      name: "Keyboards",
      href: "#",
      count: 100,
      images: [
        "https://github.com/shadcn.png",
        "https://github.com/shadcn.png",
        "https://github.com/shadcn.png",
        "https://github.com/shadcn.png",
      ],
    },
    {
      id: 4,
      name: "Accessories",
      href: "#",
      count: 100,
      images: [
        "https://github.com/shadcn.png",
        "https://github.com/shadcn.png",
        "https://github.com/shadcn.png",
        "https://github.com/shadcn.png",
      ],
    },
  ];
  const banners = [
    {
      id: 1,
      image: "https://github.com/shadcn.png",
      link: "/product/1",
    },
    {
      id: 2,
      image: "https://github.com/shadcn.png",
      link: "product/2",
    },
    {
      id: 3,
      image: "https://github.com/shadcn.png",
      link: "product/3",
    },
  ];
  const newItems: TNewItemCard[] = [
    {
      id: "1",
      name: "Lorem ipsum dolor sit amet consectetur.",
      price: 10.23,
      image: "https://github.com/shadcn.png",
    },
  ];

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="p-4 lg:p-6">
      <section className="gap-8">HOME Slider</section>
      <section>
        <div className="flex justify-between items-center mb-2">
          <div className="text-xl font-bold">Categories</div>
          <div className="flex gap-2 cursor-pointer items-center">
            <div className="text-sm font-bold leading-6">See All</div>
            <CircleChevronRight size={24} />
          </div>
        </div>
        <div className="grid gap-4 grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 rounde">
          {categories.map((category) => (
            <div
              key={category.id}
              className="bg-white shadow-md p-1.5 rounded-lg"
            >
              <div className="grid grid-cols-2 gap-1">
                {category.images.map((image, index) => (
                  <div className="rounded-lg overflow-hidden">
                    <Image
                      key={index}
                      src={image}
                      alt={category.name}
                      width={200}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div className="flex justify-between items-center mt-1.5">
                <div className="text-md font-bold">{category.name}</div>
                <div className="text-sm font-bold bg-[#DFE9FF] px-2 rounded-lg">
                  {category.count}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="mt-6">
        <div className="text-xl font-bold mb-2">Top Products</div>
        <div className="flex gap-2">
          {banners.map((banner) => (
            <div
              key={banner.id}
              className="h-14 w-14 p-1.5 sm:h-16 sm:w-16 lg:h-20 lg:w-20 rounded-[50%] shadow-[0_5px_10px_0_rgba(0,0,0,0.16)] cursor-pointer"
            >
              <Image
                src={banner.image}
                alt={"top product"}
                width={200}
                height={200}
                className="w-full h-full object-cover rounded-[50%]"
              />
            </div>
          ))}
        </div>
      </section>
      <section className="mt-8">
        <div className="flex justify-between items-center mb-2">
          <div className="text-xl font-bold">New Items</div>
          <div className="flex gap-2 cursor-pointer items-center">
            <div className="text-sm font-bold leading-6">See All</div>
            <CircleChevronRight size={24} />
          </div>
        </div>
        {/* Carousel of new items */}
        <div className="flex gap-4">
          {newItems.map((item) => (
            <NewItemCard
              key={item.id}
              data={item}
              className="w-36 md:w-52 lg:w-64"
            />
          ))}
        </div>
      </section>
      <section className="mt-6">
        <div className="flex justify-between items-center mb-2">
          <div className="text-xl font-bold">Flash Sale</div>
          <div className="flex gap-2 cursor-pointer items-center">
            <CountDown endTime={dayjs().add(5, "hour")} />
          </div>
        </div>
        {/* Carousel of new items */}
        <div className="flex gap-4">
          {newItems.map((item) => (
            <NewItemCard
              key={item.id}
              data={item}
              className="w-36 md:w-52 lg:w-64"
            />
          ))}
        </div>
      </section>
    </div>
  );
}
