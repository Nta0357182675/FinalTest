var pick1 = document.getElementById('i1');
var so1 = document.querySelector("#i1 div");
var pick2 = document.getElementById("i2");
var so2 = document.querySelector("#i2 div");
var pick3 = document.getElementById("i3");
var so3 = document.querySelector("#i3 div");
var pick4 = document.getElementById("i4");
var so4 = document.querySelector("#i4 div");
var pick5 = document.getElementById("i5");
var so5 = document.querySelector("#i5 div");
var pick6 = document.getElementById("i6");
var so6 = document.querySelector("#i6 div");
var sum = 0;
var a1 = 0;
var a2 = 0;
var a3 = 0;
var a4 = 0;
var a5 = 0;
var a6 = 0;
var mang = [];
pick1.onclick = function () {
    sum = sum + 1;
    if (sum - 3 <= 0) {
        a1 = a1 + 1;
        so1.innerHTML = "".concat(a1);
    }
    if (a1 > 0) {
        mang.push("b\u1EA7u: ".concat(a1));
    }
    return sum;
};
pick2.onclick = function () {
    sum = sum + 1;
    if (sum - 3 <= 0) {
        a2 = a2 + 1;
        so2.innerHTML = "".concat(a2);
    }
    if (a2 > 0) {
        mang.push("cua: ".concat(a2));
    }
    return sum;
};
pick3.onclick = function () {
    sum = sum + 1;
    if (sum - 3 <= 0) {
        a3 = a3 + 1;
        so3.innerHTML = "".concat(a3);
    }
    if (a3 > 0) {
        mang.push("t\u00F4m: ".concat(a1));
    }
    return sum;
};
pick4.onclick = function () {
    sum = sum + 1;
    if (sum - 3 <= 0) {
        a4 = a4 + 1;
        so4.innerHTML = "".concat(a4);
    }
    if (a4 > 0) {
        mang.push("c\u00E1: ".concat(a4));
    }
    return sum;
};
pick5.onclick = function () {
    sum = sum + 1;
    if (sum - 3 <= 0) {
        a5 = a5 + 1;
        so5.innerHTML = "".concat(a5);
    }
    if (a5 > 0) {
        mang.push("h\u01B0\u01A1u: ".concat(a5));
    }
    return sum;
};
pick6.onclick = function () {
    sum = sum + 1;
    if (sum - 3 <= 0) {
        a6 = a6 + 1;
        so6.innerHTML = "".concat(a6);
    }
    if (a6 > 0) {
        mang.push("g\u00E0: ".concat(a6));
    }
    return sum;
};
var n2 = document.getElementById('n2');
n2.onclick = function () {
    sum = 0;
    a1 = 0;
    a2 = 0;
    a3 = 0;
    a4 = 0;
    a5 = 0;
    a6 = 0;
    so1.innerHTML = "".concat(a1);
    so2.innerHTML = "".concat(a2);
    so3.innerHTML = "".concat(a3);
    so4.innerHTML = "".concat(a4);
    so5.innerHTML = "".concat(a5);
    so6.innerHTML = "".concat(a6);
};
var n1 = document.getElementById('n1');
var x1 = document.querySelector('#i1 img');
var x2 = document.querySelector('#i2 img');
var x3 = document.querySelector('#i3 img');
var x4 = document.querySelector('#i4 img');
var x5 = document.querySelector('#i5 img');
var x6 = document.querySelector('#i6 img');
var kq = [
    document.querySelector(".top #kq1"),
    document.querySelector(".top #kq2"),
    document.querySelector(".top #kq3")
].filter(function (el) { return el !== null; });
var x = [x1, x2, x3, x4, x5, x6].filter(function (el) { return el !== null; });
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
var isSpinning = false; // Cờ kiểm tra trạng thái
// Thêm sự kiện nhấn nút "Quay"
n1.addEventListener("click", function () {
    if (sum > 0) {
        disableAllButtons(); // Vô hiệu hóa tất cả các nút
        isSpinning = true;
        // Tạo hiệu ứng trộn cho từng ô
        var shuffleIntervals_1 = kq.map(function (slot) {
            return setInterval(function () {
                var randomImage = getRandomImage();
                slot.innerHTML = "<img src=\"".concat(randomImage.src, "\" alt=\"Random Image\">"); // Hiển thị ảnh đang trộn
            }, 100); // Mỗi 100ms đổi ảnh
        });
        // Dừng hiệu ứng và chọn kết quả sau 3 giây
        window.setTimeout(function () {
            // Dừng trộn
            shuffleIntervals_1.forEach(function (interval) { return clearInterval(interval); });
            // Hiển thị ảnh cuối cùng
            kq.forEach(function (slot) {
                var finalImage = getRandomImage();
                slot.innerHTML = "<img src=\"".concat(finalImage.src, "\" alt=\"Final Image\">");
            });
            enableAllButtons(); // Kích hoạt lại các nút
            isSpinning = false;
        }, 3000); // 3 giây
    }
    else {
        window.alert("Vui lòng đặt ít nhất 1 điểm");
    }
    for (var i = 0; i < mang.length; i = i + 1) {
        var x_1 = mang[i];
    }
    console.log("b\u1EA1n \u0111\u00E3 thua v\u1EDBi k\u1EBFt qu\u1EA3:  ".concat(mang));
});
