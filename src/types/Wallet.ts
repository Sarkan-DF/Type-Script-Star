import Transaction from "./Transaction";

interface Wallet {
  enable: boolean;
  transactions: Transaction[];
}

export default Wallet;
