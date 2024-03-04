const list = [
    {
        id: "q1",
        cauhoi: "Bạn là người tuyệt vời:",
        dapan: "Có"
    },
    {
        id: "q2",
        cauhoi: "Con chó có 6 chân:",
        dapan: "Không"
    },
    {
        id: "q3",
        cauhoi: "Con mèo kêu meo meo:",
        dapan: "Có"
    },
    {
        id: "q4",
        cauhoi: "Bạn là người tài năng:",
        dapan: "Có"
    },
    {
        id: "q5",
        cauhoi: "Con chó kêu meo meo:",
        dapan: "Không"
    },
    {
        id: "q6",
        cauhoi: "Con mèo kêu gâu gâu:",
        dapan: "Không"
    },
    {
        id: "q7",
        cauhoi: "Bạn là người tuyệt vời:",
        dapan: "Có"
    },
    {
        id: "q8",
        cauhoi: "Bạn sở hữu ngôi nhà:",
        dapan: "Có"
    },
    {
        id: "q9",
        cauhoi: "Bạn là sinh viên PTIT:",
        dapan: "Có"
    },
    {
        id: "q10",
        cauhoi: "Con chó có 6 chân:",
        dapan: "Không"
    }
]
const list2 = [
    {
        id: "q11",
        cauhoi: "1+1 bằng bao nhiêu:",
        opt1: "1",
        opt2: "2",
        opt3: "3",
        opt4: "4"
    }, {
        id: "q12",
        cauhoi: "1+2 bằng bao nhiêu:",
        opt1: "1",
        opt2: "2",
        opt3: "3",
        opt4: "4"
    }, {
        id: "q13",
        cauhoi: "1+3 bằng bao nhiêu:",
        opt1: "1",
        opt2: "2",
        opt3: "3",
        opt4: "4"
    }, {
        id: "q14",
        cauhoi: "1+4 bằng bao nhiêu:",
        opt1: "5",
        opt2: "2",
        opt3: "6",
        opt4: "4"
    }, {
        id: "q15",
        cauhoi: "1+11 bằng bao nhiêu:",
        opt1: "12",
        opt2: "22",
        opt3: "32",
        opt4: "43"
    }, {
        id: "q16",
        cauhoi: "11+11 bằng bao nhiêu:",
        opt1: "22",
        opt2: "23",
        opt3: "24",
        opt4: "25"
    }, {
        id: "q17",
        cauhoi: "11+100 bằng bao nhiêu:",
        opt1: "111",
        opt2: "222",
        opt3: "344",
        opt4: "411"
    }, {
        id: "q18",
        cauhoi: "1+1 bằng bao nhiêu:",
        opt1: "1",
        opt2: "2",
        opt3: "3",
        opt4: "4"
    }, {
        id: "q19",
        cauhoi: "1+14 bằng bao nhiêu:",
        opt1: "15",
        opt2: "26",
        opt3: "32",
        opt4: "51"
    }, {
        id: "q20",
        cauhoi: "1+100 bằng bao nhiêu:",
        opt1: "101",
        opt2: "221",
        opt3: "110",
        opt4: "123"
    }

]
const list3 = [
    {
        id: 1,
        cauhoi: "Câu hỏi 1: Chọn một trong các món sau:",
        opt1: "Pizza",
        opt2: "Burger",
        opt3: "Sushi",
        opt4: "Tacos"
    },
    {
        id: 2,
        cauhoi: "Câu hỏi 2: Chọn một loại hoa bạn thích nhất:",
        opt1: "Hồng",
        opt2: "Hướng dương",
        opt3: "Lavender",
        opt4: "Hoa tulip"
    },
    {
        id: 3,
        cauhoi: "Câu hỏi 3: Chọn một trong các môn thể thao sau:",
        opt1: "Bóng đá",
        opt2: "Bóng rổ",
        opt3: "Bơi lội",
        opt4: "Quần vợt"
    }, {
        id: 4,
        cauhoi: "Câu hỏi 4: Chọn một trong các loại động vật sau:",
        opt1: "Chó",
        opt2: "Mèo",
        opt3: "Hải cẩu",
        opt4: "Chim"
    },
    {
        id: 5,
        cauhoi: "Câu hỏi 5: Chọn một trong các món ăn sau:",
        opt1: "Sườn nướng",
        opt2: "Cá hồi",
        opt3: "Gà rán",
        opt4: "Salad"
    },
    {
        id: 6,
        cauhoi: "Câu hỏi 6: Chọn một trong các môn học sau:",
        opt1: "Toán",
        opt2: "Văn",
        opt3: "Lịch sử",
        opt4: "Hóa học"
    },
    {
        id: 7,
        cauhoi: "Câu hỏi 7: Chọn một trong các quốc gia sau:",
        opt1: "Mỹ",
        opt2: "Nhật Bản",
        opt3: "Pháp",
        opt4: "Anh"
    },
    {
        id: 8,
        cauhoi: "Câu hỏi 8: Chọn một trong các màu sắc sau:",
        opt1: "Đỏ",
        opt2: "Xanh",
        opt3: "Vàng",
        opt4: "Trắng"
    },
    {
        id: 9,
        cauhoi: "Câu hỏi 9: Chọn một trong các phim sau:",
        opt1: "Titanic",
        opt2: "Harry Potter",
        opt3: "Avengers",
        opt4: "Star Wars"
    },
    {
        id: 10,
        cauhoi: "Câu hỏi 10: Chọn một trong các loại đồ uống sau:",
        opt1: "Cà phê",
        opt2: "Trà",
        opt3: "Nước ngọt",
        opt4: "Sinh tố"
    }
]
const dapanlist3 = [
    {

        dapan: ["Pizza", "Sushi"]
    },
    {

        dapan: ["Hướng dương"]
    },
    {

        dapan: ["Bóng rổ", "Bơi lội"]
    },
    {

        dapan: ["Mèo"]
    },
    {

        dapan: ["Gà rán","Slad"]
    },
    {

        dapan: ["Lịch sử","Văn"]
    },
    {

        dapan: ["Mỹ", "Nhật Bản"]
    },
    {

        dapan: ["Vàng"]
    },
    {

        dapan: ["Star Wars"]
    },
    {

        dapan: ["Nước ngọt"]
    }

];
const mainContainer = document.getElementById('main_container')
function questions(event) {
    mainContainer.innerHTML = "";
    mainContainer.innerHTML += `<h2>Câu hỏi: </h2>`
    let k = 1
    for (let i = 0; i < list.length; i++) {
        mainContainer.innerHTML += `<strong class="strong">Câu ${k + i}:</strong>`;
        mainContainer.innerHTML += yes_no(list[i]);
    }
    k = 11
    for (let i = 0; i < list2.length; i++) {
        mainContainer.innerHTML += `<strong>Câu ${k + i}:</strong>`
        mainContainer.innerHTML += one_choice(list2[i]);
    }
    k = 21;
    for (let i = 0; i < list3.length; i++) {
        mainContainer.innerHTML += `<strong>Câu ${k + i}:</strong>`
        mainContainer.innerHTML += mul_choice(list3[i]);
    }
    k = 31;
    for (let i = 0; i < list2.length; i++) {
        mainContainer.innerHTML += `<strong>Câu ${k + i}:</strong>`
        mainContainer.innerHTML += tuluan(list2[i]);
    }
    mainContainer.innerHTML += `<button id="submit" onclick="submit()"> Submit</button>`
}
function yes_no(a) {
    return `
    <div id="questions">
    <form>
            <p>${a.cauhoi}</p>
            <input type="radio" id="1_${a.id}" name="fav_language" value="Có">
            <label for="Có">Có</label><br>
            <input type="radio" id="2_${a.id}" name="fav_language" value="Không">
            <label for="Không">Không</label><br>
        </form> 
        </div>`
}
function one_choice(a) {
    return `
    <div id="questions">
    <form>
    <p>${a.cauhoi}</p>
    <input type="radio" id="1_${a.id}" name="fav_language" value="${a.opt1}">
    <label >${a.opt1}</label><br>
    <input type="radio" id="2_${a.id}"  name="fav_language" value="${a.opt2}">
    <label >${a.opt2}</label><br>
    <input type="radio" id="3_${a.id}"  name="fav_language" value="${a.opt3}">
    <label >${a.opt3}</label><br>
    <input type="radio" id="4_${a.id}"  name="fav_language" value="${a.opt4}">
    <label >${a.opt4}</label><br>
</form>
</div>`
}
function mul_choice(a) {
    return `<div id="questions"> 
    <p>${a.cauhoi}</p>
    <form>
    <input type="checkbox" id="1_${a.id}"  value="${a.opt1}">
    <label for="${a.opt3}"> ${a.opt1}</label><br>
    <input type="checkbox" id="2_${a.id}"  value="${a.opt2}">
    <label for="${a.opt3}"> ${a.opt2}</label><br>
    <input type="checkbox" id="3_${a.id}"   value="${a.opt3}">
    <label for="${a.opt3}"> ${a.opt3}</label><br>
    <input type="checkbox" id="4_${a.id}"   value="${a.opt4}">
    <label for="${a.opt3}"> ${a.opt4}</label><br><br>
  </form></div>
    `
}
function tuluan(a) {
    return `
    <div id="questions"> 
    <p>${a.cauhoi}</p>
    <input type="text" class="input" id="1_${a.id}"> </input>
  </form></div>
    `
}
function submit() {
    alert("Bạn đã nộp bài");
    dapan();
}
const dapanlist2 = [
    {
        dapan: "2"
    },
    {
        dapan: "3"
    }, {
        dapan: "4"
    }, {
        dapan: "5"
    }, {
        dapan: "12"
    }, {
        dapan: "22"
    }, {
        dapan: "111"
    },
    {
        dapan: "2"
    }, {
        dapan: "15"
    }, {
        dapan: "101"
    },
]

function dapan() {
    mainContainer.innerHTML = "";
    let ketqua = 0;
    for (let i = 0; i < list.length; i++) {
        const dapandung1 = document.getElementById("1__q" + (i + 1));
        const dapandung2 = document.getElementById("2__q" + (i + 1));
        if (dapandung1 && dapandung1.checked && dapandung1.value == list[i].dapan) {
            ketqua++;
        }
        if (dapandung2 && dapandung2.checked && dapandung2.value == list[i].dapan) {
            ketqua++;
        }
    }
    let k = 11;
    for (let i = 0; i < list2.length; i++) {
        const dapandung1 = document.getElementById("1__q" + (i + k));
        const dapandung2 = document.getElementById("2__q" + (i + k));
        const dapandung3 = document.getElementById("3__q" + (i + k));
        const dapandung4 = document.getElementById("4__q" + (i + k));
        if (dapandung1 && dapandung1.checked && dapandung1.value == dapanlist2[i].dapan) {
            ketqua++;
        }
        if (dapandung2 && dapandung2.checked && dapandung2.value == dapanlist2[i].dapan) {
            ketqua++;
        }
        if (dapandung3 && dapandung3.checked && dapandung3.value == dapanlist2[i].dapan) {
            ketqua++;
        }
        if (dapandung4 && dapandung4.checked && dapandung4.value == dapanlist2[i].dapan) {
            ketqua++;
        }
    }
    k = 21;
    for (let i = 0; i < dapanlist3.length; i++) {
        const dapandung1 = document.getElementById("1__q" + (i + k));
        const dapandung2 = document.getElementById("2__q" + (i + k));
        const dapandung3 = document.getElementById("3__q" + (i + k));
        const dapandung4 = document.getElementById("4__q" + (i + k));
        let check = 1;
        if (dapandung1 && dapandung1.checked && !dapanlist3[i].dapan.includes(dapandung1.value)) {
            check = 0;
        }
        if (dapandung2 && dapandung2.checked && !dapanlist3[i].dapan.includes(dapandung2.value)) {
            check = 0;
        }
        if (dapandung3 && dapandung3.checked && !dapanlist3[i].dapan.includes(dapandung3.value)) {
            check = 0;
        }
        if (dapandung4 && dapandung4.checked && !dapanlist3[i].dapan.includes(dapandung4.value)) {
            check = 0;
        }
        if (check == 1) ketqua++;
        if(check==1 && !dapandung1 && !dapandung2 &&dapandung3 &&!dapandung4 )
            ketqua--;
    }

    k = 31;
    for (let i = 0; i < 10; i++) {
        const dapandung1 = document.getElementById("1__q" + (i + k));
        if (dapandung1 && dapandung1.innerHTML.trim() !== "") {
            ketqua++;
        }
    }
    mainContainer.innerHTML+=`
        <div> Kết quả của bạn là:${ketqua*100/40}</div>
        <div> Số câu đúng là: ${ketqua}</div>
    `
}
