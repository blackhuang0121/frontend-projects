'use client'
import { useState, useEffect } from "react";
import Image from "next/image";

// 這裡可以放你的圖片列表
const imagesData = [
    {
        src: "https://live.staticflickr.com/65535/54644030437_5308f2fc6b_b.jpg",
        alt: "DSCF2516 - Brussels"
    },
    {
        src: "https://live.staticflickr.com/65535/54645115233_e46452193c_b.jpg",
        alt: "DSCF2901 - Antwerpen"
    },
    {
        src: "https://live.staticflickr.com/65535/54644874381_2eda9a9bb4_b.jpg",
        alt: "DSCF3175 - Windmill at Kinderdijk"
    },
    {
        src: "https://live.staticflickr.com/65535/54645194195_c538468083_b.jpg",
        alt: "DSCF3835 - Notting hill"
    },
    {
        src: "https://live.staticflickr.com/65535/54645194210_001481bf18_b.jpg",
        alt: "DSCF5753 - Eiffel tower"
    }
];

// 洗牌 function
function shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

export default function ImageSliderPage() {
    const [images, setImages] = useState(imagesData);
    const [current, setCurrent] = useState(0);

    // 頁面加載時洗牌
    useEffect(() => {
        setImages(shuffleArray(imagesData));
        setCurrent(0);
    }, []);

    const nextSlide = () => setCurrent((c) => (c + 1) % images.length);
    const prevSlide = () => setCurrent((c) => (c - 1 + images.length) % images.length);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-[#f9f9f9]">
            <div className="bg-white rounded-2xl shadow-xl px-6 py-8 w-full max-w-2xl mx-auto">
                <h1 className="text-3xl font-bold text-center mb-2">圖片滑動</h1>
                <p className="text-center text-lg text-gray-700 mb-6">
                    點擊左右按鈕切換顯示不同圖片，練習 DOM 操作和事件（React 實作）。
                </p>
                <div className="w-full max-w-2xl mx-auto relative overflow-hidden h-[400px]">
                    {/* 圖片淡入淡出區 */}
                    <div className="relative w-full h-full">
                        {images.map((img, idx) => (
                            <Image
                                key={img.src}
                                src={img.src}
                                alt={img.alt}
                                fill
                                className={`
                                    absolute top-0 left-0 w-full h-full object-cover
                                    transition-opacity duration-500
                                    ${idx === current ? "opacity-100 z-10" : "opacity-0 z-0"}
                                `}
                                style={{ borderRadius: "20px" }}
                            />
                        ))}
                    </div>
                    {/* 左右按鈕 */}
                    <button onClick={prevSlide}
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white hover:text-yellow-400 p-2 rounded-full z-20"
                        aria-label="上一張"
                    >
                        &lt;
                    </button>
                    <button onClick={nextSlide}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white hover:text-yellow-400 p-2 rounded-full z-20"
                        aria-label="下一張"
                    >
                        &gt;
                    </button>
                    {/* 點點指示器 */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                        {images.map((_, idx) => (
                            <span
                                key={idx}
                                className={`inline-block w-3 h-3 rounded-full ${idx === current ? "bg-yellow-400" : "bg-gray-300"
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
