// let a =1; // global -> 다 접근이 가능함 전역 변수

// /*


// */





// // console.log(a);
// function b (){
//   // 함수 b는 목적이 콘솔 찍고 종료히는 기계
//   // return값은 없다
//   console.log(a);
//   let c = "임소희"; // local -> 이 scope 안에서만 존재 -> 지역 변수(return을 찍지 않으면 절대 꺼낼 수 없음)
//   console.log(c);
//   return c;
// }
// // 그러면 return이 없으면 호출이 안되나요? -> 그렇다
// b();

let current = 0;


let timer = setInterval(function(){
  
  console.log(current);
  current++;
  if(current === 60){
    console.log("1 경과되었습니다");
    clearInterval(timer);
  }
}, 100);