// numを引数にした関数squareを作る

const square = (num) => {

// 答えをいれるAnswerとその中身式を定義
   let Answer = num * num;
//    Answerを戻り値に指定
    return Answer;
} 

// square のnumに10を入れて、Answerとして返したものを表示
console.log(square(10));