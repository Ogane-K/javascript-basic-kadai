const holidays = ["正月","成人の日","建国記念日","天皇誕生日","春分の日","昭和の日","憲法記念日","みどりの日","こどもの日","海の日","山の日","敬老の日","秋分の日","スポーツの日","文化の日","勤労感謝の日"]

const  holidays_count = holidays.length;



// for文の場合
for (forCount = 0; forCount <= holidays_count - 1; forCount++ ) {

    console.log(holidays[forCount]);
}

let whileCount = 0;

// while文の場合
while (whileCount <= holidays_count - 1) {
    console.log(holidays[whileCount]);
    whileCount++;
}