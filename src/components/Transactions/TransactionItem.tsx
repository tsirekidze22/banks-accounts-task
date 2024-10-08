import React from "react";
import TransactionTypeBadge from "./TransactionTypeBadge";

interface Transaction {
  date: Date;
  amount: number;
  balance: number;
  iban: string;
  name: string;
  transaction_type: string;
}

interface TransactionItemProps {
  transaction: Transaction;
}

const TransactionItem: React.FC<TransactionItemProps> = ({ transaction }) => {
  const formatAmount = (amount: number) => {
    return amount.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  const formattedAmount = formatAmount(transaction.amount);

  const formattedDate = transaction.date.toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });

  return (
    <li className="d-flex justify-content-between align-items-center transaction-item">
      <div className="transaction-item-left">
        <h3 className="text-dark mb-2">{transaction.name}</h3>
        <p className="text-secondary fs-16">{formattedDate}</p>
      </div>
      <TransactionTypeBadge transactionType={transaction.transaction_type} />
      <h3 className="fs-20 transaction-item-amount" style={{ fontWeight: 500 }}>
        {transaction.amount > 0 ? `+${formattedAmount}` : formattedAmount}€
      </h3>
    </li>
  );
};

export default TransactionItem;
