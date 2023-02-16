interface Transaction {
  value: number;
  description: string;
  type: "C" | "D";
}

export default Transaction;
