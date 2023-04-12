function numberOneTriangle(num) {
  if (Number.isInteger(num) && num >= 1 && num <= 10) {
    for (let i = 1; i <= num; i++) {
      let row = '';
      for (let j = 1; j <= i; j++) {
        row += '*';
      }
      console.log(row);
    }
  } else {
    console.log('Tham số truyền vào không phải số nguyên từ 1 đến 10');
  }
}