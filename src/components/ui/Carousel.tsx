
import React, { useEffect, useState } from 'react';

interface CarouselProps {
    images: string[];
}

const Carousel = ({ images }: CarouselProps) => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [isHovered, setIsHovered] = useState<boolean>(false);

    useEffect(() => {
        const interval = setInterval(() => {
            if (!isHovered) {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % (images?.length || 0));
            }
        }, 3000);
        return () => clearInterval(interval);
    }, [images, isHovered]);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % (images?.length || 0));
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + (images?.length || 0)) % (images?.length || 0));
    };

    return (
        <div
            className="relative h-[100px] md:h-[250px] bg-gray-100"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="flex overflow-hidden">
                {images?.map((image, index) => (
                    <div
                        key={index}
                        className={`${index === currentIndex ? 'opacity-100' : 'opacity-0'
                            } transition-opacity duration-500 absolute inset-0 `}
                    >
                        <img
                            src={image}
                            alt={`Slide ${index}`}
                            className="border border-gray-200 shadow-sm"
                        />

                        <div className="absolute inset-0 flex items-end justify-center">
                            {/* <p className="text-emerald-500 md:text-xl font-bold">Product Details</p> */}
                        </div>
                    </div>
                ))}
            </div>
            <div className="absolute h-[100px] md:h-[250px] w-full flex items-center justify-between">
                <button
                    onClick={prevSlide}
                    className="text-xl opacity-40 hover:opacity-70 font-bold bg-gray-500 hover:bg-gray-700 text-white px-2 py-1 rounded"
                >
                    &lt;
                </button>
                <button
                    onClick={nextSlide}
                    className="text-xl opacity-40 hover:opacity-70 font-bold bg-gray-500 hover:bg-gray-700 text-white px-2 py-1 rounded"
                >
                    &gt;
                </button>
            </div>
        </div>
    );
};

export default Carousel;
