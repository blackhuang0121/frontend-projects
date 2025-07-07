function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}

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


// for (let i = 1; i <= 35; i++) {   // 這裡假設你有 20 張照片
//     imageList.push(`img/DSCF${i}.JPG`);
// }


shuffle(imageList);

const imageContainerEl = document.querySelector('.image-container');
const btnEl = document.querySelector('.btn');
let currentIndex = 0;
const imagesPerClick = 4;

function addNewImages() {
    const nextIndex = Math.min(currentIndex + imagesPerClick, imageList.length);
    for (let i = currentIndex; i < nextIndex; i++) {
        const newImgEl = document.createElement('img');
        newImgEl.src = imageList[i];
        imageContainerEl.appendChild(newImgEl);
    }
    currentIndex = nextIndex;
    if (currentIndex >= imageList.length) {
        btnEl.disabled = true;
        btnEl.textContent = '沒有更多照片了';
    }
}

btnEl.addEventListener('click', addNewImages);

// 一開始載入第一批
addNewImages();
