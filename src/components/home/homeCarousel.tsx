'use client'
import React, { useEffect, useState } from "react"
import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { useRouter } from "next/navigation"
import { useQuery } from "@apollo/client"
import { link } from "fs"
import classNames from "classnames"

export type TCarouselItem = {
  content: string | React.ReactNode
  link?: string
}

export function HomeCarousel({ className }: { className?: string }) {
  // const { loading, error, data } = useQuery<{ sliders: Product[] }>(GET_HOME_SLIDERS);
  const router = useRouter()
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false })
  )
  const data: { sliders: TCarouselItem[] } = {
    sliders: [
      {
        content: <div className="text-4xl font-semibold">1</div>,
        link: "/",
      },
      {
        content: <div className="text-4xl font-semibold">2</div>,
        link: "/",
      },
      {
        content: <div className="text-4xl font-semibold">3</div>,
        link: "/",
      },
      {
        content: <div className="text-4xl font-semibold">4</div>,
        link: "/",
      },
    ]
  }

  const onClick = (e: React.MouseEvent<HTMLDivElement>, item: TCarouselItem) => {
    e.preventDefault()
    if (item.link) {
      router.push(item.link)
    }
  }

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error: {error.message}</p>;

  return (
    <Carousel
      plugins={[plugin.current]}
      className={classNames("w-full", className)}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={() => plugin.current.play()}
      opts={{
        align: "start",
      }}
    >
      <CarouselContent>
        {data.sliders.map((i, index) => (
          <CarouselItem
            key={index}
            onClick={(e) => onClick(e, i)}
            className="pl-1 md:basis-1/2 lg:basis-1/3"
          >
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  {i.content}
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}