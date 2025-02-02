// function isPrime(n) {
//   if (n < 2) return false;
//   if (n === 2) return true; // 2 是唯一的偶数质数
//   if (n % 2 === 0) return false; // 剔除所有偶数

//   for (let i = 3; i <= Math.sqrt(n); i += 2) {
//     // 只检查奇数
//     if (n % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }

// // 测试
// const num = 9;
// console.log(num + (isPrime(num) ? " 是质数" : " 不是质数"));

function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      console.log("不是质数");
      return;
    }
  }
  console.log("是质数");
}

isPrime(12);
isPrime(6);
