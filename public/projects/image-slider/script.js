// src/another.js
(() => {
document.addEventListener('DOMContentLoaded', () => {
    let currentIndex = 0;
    const gallery = document.querySelector('.photo-gallery');
    if (!gallery) return;
    const slides = gallery.children;
    const totalSlides = slides.length;

    // 更新滑動器，應用新的變換值
    function updateSlider() {
        const newTransformValue = `-${currentIndex * 100}%`; // 計算新的位置
        document.querySelector('.photo-gallery').style.transform = `translateX(${newTransformValue})`; // 應用 CSS 變換
    }

    // 更改幻燈片函數，根據點擊方向改變索引
    function changeSlide(direction) {
        currentIndex += direction;

        if (currentIndex < 0) {
            currentIndex = totalSlides - 1; // 返回到最後一張
        } else if (currentIndex >= totalSlides) {
            currentIndex = 0; // 返回到第一張
        }

        updateSlider(); // 更新滑動
    }

    const leftBtn = document.querySelector('.slide-left');
    const rightBtn = document.querySelector('.slide-right');
    if (leftBtn) leftBtn.addEventListener('click', () => changeSlide(-1));
    if (rightBtn) rightBtn.addEventListener('click', () => changeSlide(1));

    updateSlider(); // 初始化調用，設置滑動效果
});
})();
