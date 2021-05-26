//task1
const card1 = userCard(1);
const card2 = userCard(2);
const card3 = userCard(3);

function userCard(index) {
  let obj = {
    balance: 100,
    transactionLimit: 100,
    historyLogs: [],
    key: index,
  };
  return {
    getCardOptions() {
      return obj;
    },
    putCredits(value) {
      obj.balance = obj.balance + value;
      obj.historyLogs.push({
        operationType: "Received of credits",
        credits: value,
        operationTime: new Date(),
      });
    },
    takeCredits(value) {
      if (value > obj.transactionLimit || value > obj.balance) {
        return console.log("error");
      } else obj.balance = obj.balance - value;
      obj.historyLogs.push({
        operationType: "Withdrawal of creidts",
        credits: value,
        operationTime: new Date(),
      });
    },
    setTransactionLimit(value) {
      obj.transactionLimit = value;
      obj.historyLogs.push({
        operationType: "Transaction limit change",
        credits: value,
        operationTime: new Date(),
      });
    },
    transferCredits(value, card) {
      obj.balance = obj.balance - value - value * 0.005;
      card.getCardOptions().balance = card.getCardOptions().balance + value;
    },
  };
}
//task2
class UserAccount {
  constructor(name) {
    this.name = name;
    this.cards = [];
  }
  addCard() {
    this.cards.push(userCard().getCardOptions());
    if (user.cards.length > 3) {
      return console.log(`Can't create more 3 cards for one user`);
    }
  }
  getCardByKey(index) {
    user.cards[0].key = index;
    return user.cards[0];
  }
}
const user = new UserAccount("Bob");
