import React from "react";
import { dataImage } from "../ImagemProjetos";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import SvgLink from "../../../assets/svg/SvgLink";

export default function CardProjetos() {
    return(
        <div>
            <Swiper
                effect="coverflow"
                grabCursor={true}
                loop={true}
                centeredSlides={true}
                slidesPerView={2}
                spaceBetween={20}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 10
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20
                    }
                }}
                
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 500,
                    modifier: 2,
                    slideShadows: true,
                }}
                pagination={{ clickable: true }}
                navigation={{ clickable: true }}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className="swiper w-full h-full mt-10 card-container"
                style={{ width: '100%', height: '100%' }}
            >
                {dataImage.map((item) => (
                    <SwiperSlide key={item.id} className="swiper-slide bg-branco bg-center rounded-xl border-2 border-gray-300">
                        <div className="p-2 lg:p-2.5">
                            <img src={item.image} alt={`Projeto ${item.id}`} className="rounded-xl border-2 border-gray-200" />
                        </div>
                        <h1 className="flex justify-center items-center py-0.5 text-xs font-semibold lg:text-xl">{item.titulo}</h1>

                        <div className="p-2.5 flex justify-between items-center">

                            <div className="flex gap-2">
                                {item.technologias.map((tech, index) => (
                                    <img key={index} src={tech} alt={`Tecnologia ${index}`} className="w-4 h-4 lg:w-9 lg:h-9" />
                                ))}
                            </div>

                            <div className="w-5 lg:w-8">
                                <div><a href={item.endereco} target="_blank"><SvgLink color={'#000'} /></a></div>
                            </div>

                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}