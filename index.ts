let pick1 = document.getElementById('i1') as HTMLButtonElement
let so1 = document.querySelector(`#i1 div`) as HTMLElement
let pick2 = document.getElementById(`i2`) as HTMLButtonElement
let so2 = document.querySelector(`#i2 div`) as HTMLElement
let pick3 = document.getElementById(`i3`) as HTMLButtonElement
let so3 = document.querySelector(`#i3 div`) as HTMLElement
let pick4 = document.getElementById(`i4`) as HTMLButtonElement
let so4 = document.querySelector(`#i4 div`) as HTMLElement
let pick5 = document.getElementById(`i5`) as HTMLButtonElement
let so5 = document.querySelector(`#i5 div`) as HTMLElement
let pick6 = document.getElementById(`i6`) as HTMLButtonElement
let so6 = document.querySelector(`#i6 div`) as HTMLElement



let sum = 0
let a1 = 0
let a2 = 0
let a3 = 0
let a4 = 0
let a5 = 0
let a6 = 0
let mang: Array<any> = []
pick1.onclick = function () {

    sum = sum + 1
    if (sum - 3 <= 0) {
        a1 = a1 + 1
        so1.innerHTML = `${a1}`
    }
    if (a1 > 0){
        mang.push(`bầu: ${a1}`)
    }
    return sum
}
pick2.onclick = function () {

    sum = sum + 1
    if (sum - 3 <= 0) {
        a2 = a2 + 1
        so2.innerHTML = `${a2}`
    }
    if (a2 > 0){
        mang.push(`cua: ${a2}`)
    }
    return sum
}
pick3.onclick = function () {

    sum = sum + 1
    if (sum - 3 <= 0) {
        a3 = a3 + 1
        so3.innerHTML = `${a3}`
    }
    if (a3 > 0){
        mang.push(`tôm: ${a1}`)
    }
    return sum
}
pick4.onclick = function () {

    sum = sum + 1
    if (sum - 3 <= 0) {
        a4 = a4 + 1
        so4.innerHTML = `${a4}`
    }
    if (a4 > 0){
        mang.push(`cá: ${a4}`)
    }
    return sum
}
pick5.onclick = function () {

    sum = sum + 1
    if (sum - 3 <= 0) {
        a5 = a5 + 1
        so5.innerHTML = `${a5}`
    }
    if (a5 > 0){
        mang.push(`hươu: ${a5}`)
    }
    return sum
}
pick6.onclick = function () {

    sum = sum + 1
    if (sum - 3 <= 0) {
        a6 = a6 + 1
        so6.innerHTML = `${a6}`
    }
    if (a6 > 0){
        mang.push(`gà: ${a6}`)
    }
    return sum
}



let n2 = document.getElementById('n2')  as HTMLButtonElement

n2.onclick = function () {
    sum = 0
    a1 = 0
    a2 = 0
    a3 = 0
    a4 = 0
    a5 = 0
    a6 = 0
    so1.innerHTML = `${a1}`
    so2.innerHTML = `${a2}`
    so3.innerHTML = `${a3}`
    so4.innerHTML = `${a4}`
    so5.innerHTML = `${a5}`
    so6.innerHTML = `${a6}`
}

let n1 = document.getElementById('n1') as HTMLButtonElement
let x1 = document.querySelector('#i1 img') as HTMLElement
let x2 = document.querySelector('#i2 img') as HTMLElement
let x3 = document.querySelector('#i3 img') as HTMLElement
let x4 = document.querySelector('#i4 img') as HTMLElement
let x5 = document.querySelector('#i5 img') as HTMLElement
let x6 = document.querySelector('#i6 img') as HTMLElement



let kq: Array<HTMLElement> = [
    document.querySelector(`.top #kq1`),
    document.querySelector(`.top #kq2`),
    document.querySelector(`.top #kq3`)
].filter((el) => el !== null) as HTMLElement[];

let x: Array<HTMLImageElement> = [x1!, x2!, x3!, x4!, x5!, x6!].filter((el) => el !== null) as HTMLImageElement[];

// Hàm chọn ngẫu nhiên 1 ảnh
function getRandomImage() {
    return x[Math.floor(Math.random() * x.length)];
}


// Hàm vô hiệu hóa tất cả các nút
function disableAllButtons() {
    n1.disabled = true;
    n2.disabled = true;
    pick1.disabled = true;
    pick2.disabled = true;
    pick3.disabled = true;
    pick4.disabled = true;
    pick5.disabled = true;
    pick6.disabled = true;
}

// Hàm kích hoạt lại tất cả các nút
function enableAllButtons() {
    n1.disabled = false;
    n2.disabled = false;
    pick1.disabled = false;
    pick2.disabled = false;
    pick3.disabled = false;
    pick4.disabled = false;
    pick5.disabled = false;
    pick6.disabled = false;
}

let isSpinning = false; // Cờ kiểm tra trạng thái

// Thêm sự kiện nhấn nút "Quay"
n1.addEventListener("click", () => {
    if (sum > 0) {
        disableAllButtons(); // Vô hiệu hóa tất cả các nút
        isSpinning = true;

        // Tạo hiệu ứng trộn cho từng ô
        const shuffleIntervals = kq.map((slot) => {
            return setInterval(() => {
                const randomImage = getRandomImage();
                slot.innerHTML = `<img src="${randomImage.src}" alt="Random Image">`; // Hiển thị ảnh đang trộn
            }, 100); // Mỗi 100ms đổi ảnh
        });

        // Dừng hiệu ứng và chọn kết quả sau 3 giây
        window.setTimeout(() => {
            // Dừng trộn
            shuffleIntervals.forEach((interval) => clearInterval(interval));

            // Hiển thị ảnh cuối cùng
            kq.forEach((slot) => {
                const finalImage = getRandomImage();
                slot.innerHTML = `<img src="${finalImage.src}" alt="Final Image">`;
            });

            enableAllButtons(); // Kích hoạt lại các nút
            isSpinning = false;
        }, 3000); // 3 giây
    } else {
        window.alert("Vui lòng đặt ít nhất 1 điểm");
    }
    console.log(`bạn đã thua với kết quả:  ${mang}`)
});
