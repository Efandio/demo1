
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/scrollbar';
import '../styles/global.css'

const images = [
    '/1.png',
    '/2.png',
    '/3.png',
    '/4.png',
    '/5.png',
    '/6.png',
    '/7.png',
];

const Gallery = () => {
    return (
        <>
            <main className="my-10 mx-5 pb-20 md:mt-30">

                <div className="flex justify-between w-full items-center px-5 mb-3">
                    <h4 className="martel-bold text-2xl">Gallery</h4>
                    <a className="text-sm hover:text-black/60" href="gallery">See all</a>
                </div>

                <Swiper
                    scrollbar={{
                        hide: true,
                    }}
                    modules={[Scrollbar]}
                    slidesPerView={2}
                    breakpoints={{
                        640: {slidesPerView: 2},
                        768: {slidesPerView: 3},
                    }}
                    spaceBetween={10}
                    className="mySwiper"
                >
                    {images.map((a, index) => (
                        <SwiperSlide key={index}>
                            <div className="h-[250px] md:h-[350px] overflow-hidden rounded-lg w-full pb-6">
                                <img src={a} alt="" className="w-full h-full object-cover" />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </main>
        </>
    )
};

export default Gallery;