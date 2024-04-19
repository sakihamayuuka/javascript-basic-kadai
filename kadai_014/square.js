const calculateTotal = (price) => {
  console.log(price + 500 + '円');
}

// 関数を呼び出し、引数として購入金額を渡す
calculateTotal(5200);

const addTwoArguments = (price, shippingFee) => {  
  console.log(price + shippingFee + '円');
}

// 関数を呼び出し、引数として購入金額と送料を渡す
addTwoArguments(5200, 500);



const isPurchased = (num) => {
  return num * 2;
}

console.log(isPurchased(50));