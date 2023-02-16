import { Transaction, Wallet } from "./types";

const mywallet1: Wallet = {
  enable: true,
  transactions: [],
};

const mywallet2: Wallet = {
  enable: true,
  transactions: [],
};

const mywallet3: Wallet = {
  enable: true,
  transactions: [],
};

function addTransaction(transaction: Transaction, wallet: Wallet) {
  wallet.transactions.push(transaction);
}

function printTransaction(wallet: Wallet) {
  wallet.transactions.forEach((item) => {
    console.log(
      `Transação: ${item.description} - Valor: R$${item.value} - Tipo: ${item.type}\n`
    );
  });
}

function saldoWallet(wallet: Wallet) {
  const { transactions } = wallet;
  let saldo = 0;
  wallet.transactions.forEach((item) => {
    if (item.type === "C") {
      saldo += item.value;
    } else {
      saldo -= item.value;
    }
  });
  return saldo;
}

addTransaction({ description: "Salario", type: "C", value: 1500 }, mywallet1);
addTransaction({ description: "Aluguel", type: "D", value: 300 }, mywallet1);
addTransaction({ description: "MC", type: "D", value: 100 }, mywallet1);

addTransaction({ description: "Salario", type: "C", value: 1500 }, mywallet2);
addTransaction({ description: "Jogo", type: "D", value: 100 }, mywallet2);

addTransaction({ description: "Salario", type: "C", value: 5000 }, mywallet3);
addTransaction({ description: "Jogo", type: "D", value: 100 }, mywallet3);
addTransaction({ description: "PS5", type: "D", value: 4000 }, mywallet3);

// printTransaction(mywallet1);
const saldo = saldoWallet(mywallet1);
console.log(saldo);
