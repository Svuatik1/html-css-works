// Your code goes here

function discountPrice() {
  const amountMoney = +prompt(`input amount of money`);
  const discount = +prompt(`input discount in procent`);
  if (amountMoney < 0 || amountMoney > 9999999 || discount > 99 || discount < 0) {
    alert(`invalid input data`);
  } else {
    const percent = discount / 100;
    const saved = amountMoney * percent;
    const priceWithDiscount = amountMoney - saved;
    alert(`Price without discont: ${amountMoney.toFixed(2)}, Discount: ${discount.toFixed(2)}%, Price with discount: ${priceWithDiscount.toFixed(2)}, Saved: ${saved.toFixed(2)}`);
  }
};

discountPrice();