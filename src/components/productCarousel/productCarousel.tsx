'use client'
import {
  Carousel,
  CarouselContent,
  CarouselItem

} from "@/components/ui/carousel"
import Image from 'next/image';
import Autoplay from 'embla-carousel-autoplay';

export default function ProductCarousel({images,altContent}:{images:string[],altContent:string}) {
  return <>
  <Carousel 
 opts={{
    loop: true,
  }}

  plugins={[
        Autoplay({
          delay: 1500,
        }),
      ]}
>
  <CarouselContent>
{images.map((img,index)=>    <CarouselItem key={index}><Image src={img} className='w-full object-cover' alt={altContent} width={300} height={300}/>
</CarouselItem>)}
 
  </CarouselContent>
  
</Carousel>
  </>
}
