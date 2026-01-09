import { useState, useRef, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

interface Agency {
  id: number;
  name: string;
  location: string;
  image: string;
  rating: number;
  title: string;
  description: string;
}

const agencies: Agency[] = [
  {
    id: 1,
    name: "AI Innovations Studio",
    location: "San Francisco, CA",
    image: "/assets/ai_innovations_studio.png",
    rating: 5,
    title: "Leading the Future",
    description:
      "This month, we spotlight AI Innovations Studio, redefining the digital landscape. They have demonstrated outstanding creativity and technical prowess, delivering high-impact solutions for ambitious product teams worldwide.",
  },
  {
    id: 2,
    name: "NextGen Digital",
    location: "Austin, TX",
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80",
    rating: 5,
    title: "Digital Excellence",
    description:
      "NextGen Digital stands out for their cutting-edge approach to web development. Their team of experts consistently delivers scalable and robust applications that drive business growth and user engagement.",
  },
  {
    id: 3,
    name: "Creative Minds",
    location: "New York, NY",
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80",
    rating: 5,
    title: "Design That Speaks",
    description:
      "Creative Minds brings a fresh perspective to brand identity and user experience design. Their portfolio showcases a diverse range of visually stunning and intuitively designed digital products.",
  },
  {
    id: 4,
    name: "TechFlow Solutions",
    location: "Seattle, WA",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
    rating: 4,
    title: "Seamless Integration",
    description:
      "TechFlow Solutions specializes in complex system integrations and backend architecture. They are the go-to agency for enterprises looking to streamline their operations with custom software solutions.",
  },
];

export default function TopAgency() {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperType>(null);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.update();
    }
  }, []);

  const handleSlideChange = (swiper: SwiperType) => {
    const index = swiper.realIndex;
    if (index >= 0 && index < agencies.length) {
      setActiveIndex(index);
    }
  };

  const handleSlideClick = (index: number) => {
    if (swiperRef.current) {
      swiperRef.current.slideToLoop(index);
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const activeAgency = agencies[activeIndex] || agencies[0];

  return (
    <section className="bg-[#f7f5ef] py-16">
      <style>{`
        .agency-card {
          border: 4px solid transparent;
        }
        .swiper-slide-active .agency-card,
        .swiper-slide-duplicate-active .agency-card {
          border-color: #f25a1a;
        }
      `}</style>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="mb-10 reveal-fade-up">
          <h2 className="text-3xl font-bold text-[#1F2853] text-left font-['Manrope']">
            Top Agencies Of The Month
          </h2>
        </div>

        <div className="rounded-[52px] bg-[#252c52] text-white px-6 py-10 sm:px-10 lg:px-16 lg:py-12 shadow-2xl reveal-fade-up">
          <div className="flex flex-col lg:flex-row gap-10 items-center lg:items-stretch">
            {/* Slider Section */}
            <div className="w-full lg:w-1/2 overflow-hidden">
              <Swiper
                onSwiper={(swiper) => {
                  swiperRef.current = swiper;
                  // Force update after initialization to ensure loop works
                  setTimeout(() => {
                    swiper.update();
                  }, 50);
                }}
                onSlideChange={handleSlideChange}
                modules={[Navigation]}
                spaceBetween={24}
                slidesPerView={1}
                loop={true}
                speed={500}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                  },
                }}
                className="w-full"
              >
                {agencies.map((agency, index) => (
                  <SwiperSlide key={agency.id}>
                    <div
                      className="agency-card relative rounded-[48px] h-64 sm:h-72 overflow-hidden shadow-xl group cursor-pointer transition-all duration-300"
                      onClick={() => handleSlideClick(index)}
                    >
                      <img
                        src={agency.image}
                        alt={agency.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                        <div className="absolute bottom-0 left-0 p-6">
                          <div className="flex gap-1 mb-2">
                            {Array.from({ length: agency.rating }).map(
                              (_, i) => (
                                <Star
                                  key={i}
                                  className="w-4 h-4 fill-yellow-400 text-yellow-400"
                                />
                              )
                            )}
                          </div>
                          <h4 className="text-xl font-bold font-['Manrope'] text-white">
                            {agency.name}
                          </h4>
                          <p className="text-sm text-white/80 font-['Poppins']">
                            {agency.location}
                          </p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Navigation Buttons */}
              <div className="flex justify-center gap-4 mt-6">
                <button
                  onClick={handlePrev}
                  className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-[#252c52] transition-colors duration-200"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={handleNext}
                  className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-[#252c52] transition-colors duration-200"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Content block */}
            <div className="w-full lg:w-1/2 text-left flex flex-col justify-center">
              <p className="text-sm uppercase tracking-[0.25em] text-white/70 font-['Manrope'] mb-4">
                featured agency
              </p>
              <div
                key={activeAgency.id}
                className="transition-all duration-300 animate-in fade-in slide-in-from-right-4"
              >
                <div className="flex items-center gap-2 mb-3">
                  {Array.from({ length: activeAgency.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <h4 className="text-2xl font-bold font-['Manrope'] text-white mb-4">
                  {activeAgency.name}
                </h4>
                {/* <h3 className="text-3xl sm:text-4xl font-bold font-['Manrope'] mb-5">
                  {activeAgency.title}
                </h3> */}
                <p className="text-base sm:text-lg text-white/80 leading-relaxed font-['Poppins']">
                  {activeAgency.description}
                </p>
              </div>

              <button className="mt-10 inline-flex items-center justify-center bg-[#f25a1a] text-white px-9 py-3 rounded-full font-semibold font-['Poppins'] shadow-lg hover:bg-[#ff7635] transition-colors duration-200 w-fit">
                View agency details
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
