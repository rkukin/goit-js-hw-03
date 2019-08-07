"use strict";

/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw"
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

  /*
   * Метод отвечающий за добавление суммы к балансу
   * Создает объект транзакции и вызывает addTransaction
   */
  deposit(amount) {
    if (!isNaN(Number(amount))) {
      if (amount > 0) {
        const transaction = {
          id:
            Math.random()
              .toString(36)
              .substring(2) + Date.now().toString(36),
          type: Transaction.DEPOSIT,
          amount: amount
        };
        this.balance = this.balance + amount;
        this.addTransaction(transaction);
        return;
      } else {
        console.log("Amount should be greated than zero");
        return;
      }
    } else {
      console.log("Amount must be a number");
      return;
    }
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Создает объект транзакции и вызывает addTransaction
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {
    if (!isNaN(Number(amount))) {
      if (amount > 0) {
        if (amount >= this.balance) {
          console.log("Недостаточно средств на счету");
        } else {
          const transaction = {
            id:
              Math.random()
                .toString(36)
                .substring(2) + Date.now().toString(36),
            type: Transaction.WITHDRAW,
            amount: amount
          };
          this.balance = this.balance - amount;
          this.addTransaction(transaction);
          return;
        }
      } else {
        console.log("Amount should be greated than zero");
        return;
      }
    } else {
      console.log("Amount must be a number");
      return;
    }
  },

  /*
   * Метод добавляющий транзацию в свойство transactions
   * Принимает объект трназкции
   */
  addTransaction(transaction) {
    this.transactions.push(transaction);
    return;
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    return this.balance;
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
    let transactionDetails = [];
    for (const transaction of this.transactions) {
      if (transaction.id === id) {
        transactionDetails = transaction;
      } else {
        transactionDetails = `No transactions with id +${id}`;
      }
    }
    return transactionDetails;
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    if (type === Transaction.DEPOSIT || type === Transaction.WITHDRAW) {
      let transactionSum = 0;
      for (const transaction of this.transactions) {
        if (transaction.type === type) {
          transactionSum += transaction.amount;
        }
      }
      return transactionSum;
    } else {
      console.log(
        `Тип транзакции указан неверно, укажите ${Transaction.DEPOSIT} или ${
          Transaction.WITHDRAW
        }`
      );
      return;
    }
  }
};
