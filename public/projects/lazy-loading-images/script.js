const imageContainerEl = document.querySelector('.image-container');
let currentIndex = 0;
const imagesPerLoad = 8;
const imageList = [
    "img/DSCF2002.JPG",
    "img/DSCF2117.JPG",
    "img/DSCF2122.JPG",
    "img/DSCF2125.JPG",
    "img/DSCF2161.JPG",
    "img/DSCF2274.JPG",
    "img/DSCF2728.JPG",
    "img/DSCF2794.JPG",
    "img/DSCF2831.JPG",
    "img/DSCF2847.JPG",
    "img/DSCF3196.JPG",
    "img/DSCF3211.JPG",
    "img/DSCF3499.JPG",
    "img/DSCF4252.JPG",
    "img/DSCF4346.JPG",
    "img/DSCF4391.JPG",
    "img/DSCF4461.JPG",
    "img/DSCF4481.JPG",
    "img/DSCF4563.JPG",
    "img/DSCF4572.JPG",
    "img/DSCF4621.JPG",
    "img/DSCF4639.JPG",
    "img/DSCF4701.JPG",
    "img/DSCF4782.JPG",
    "img/DSCF4889.JPG",
    "img/DSCF4921.JPG",
    "img/DSCF5052.JPG",
    "img/DSCF5160.JPG",
    "img/DSCF5329.JPG",
    "img/DSCF5333.JPG",
    "img/DSCF5346.JPG",
    "img/DSCF5365.JPG",
    "img/DSCF5558.JPG",
    "img/DSCF5845.JPG",
];

function addNewImages() {
    const nextIndex = Math.min(currentIndex + imagesPerLoad, imageList.length);
    console.log('addNewImages:', currentIndex, '->', nextIndex, 'total:', imageList.length);
    for (let i = currentIndex; i < nextIndex; i++) {
        const newImgEl = document.createElement('img');
        newImgEl.src = imageList[i];
        imageContainerEl.appendChild(newImgEl);
    }
    currentIndex = nextIndex;
}

function autoFillToScrollable() {
    while (document.body.offsetHeight <= window.innerHeight && currentIndex < imageList.length) {
        addNewImages();
        setTimeout(autoFillToScrollable, 80);  // 遞迴執行，直到真的超過高度
    }
}

// ⬇️ 這裡每次初始化都會清空舊內容，歸零
function initializeImages() {
    imageContainerEl.innerHTML = ""; // 清掉全部舊圖片
    currentIndex = 0;                // 歸零
    addNewImages();
    autoFillToScrollable();
}

function initializeImages() {
    imageContainerEl.innerHTML = "";
    currentIndex = 0;
    addNewImages();
    autoFillToScrollable();
}

initializeImages(); // 初次載入呼叫一次


// 偵測滑到頁底就再加
window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 200
        && currentIndex < imageList.length
    ) {
        addNewImages();
    }
});
