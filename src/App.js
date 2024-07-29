import React, { useState } from 'react';

const App = () => {
    const [balance, setBalance] = useState(0);
    const [transactions, setTransactions] = useState([]);
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');

    const addExpense = () => {
        const parsedAmount = parseFloat(amount);

        if (isNaN(parsedAmount) || parsedAmount <= 0) {
            alert('Please enter a valid amount.');
            return;
        }

        // Update balance
        setBalance((prevBalance) => prevBalance + parsedAmount);

        // Add transaction to the list
        setTransactions((prevTransactions) => [
            ...prevTransactions,
            { description, amount: parsedAmount },
        ]);

        // Clear form
        setDescription('');
        setAmount('');
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>Expense Tracker</h1>
            <div style={styles.balance}>
                <h2>
                    Balance: $
                    <span id="balance">
                        {balance.toFixed(2)}
                    </span>
                </h2>
            </div>
            <div style={styles.transactions}>
                <h2>Transactions</h2>
                <ul style={styles.transactionList}>
                    {transactions.map((transaction, index) => (
                        <li key={index} style={styles.transactionItem}>
                            {`${transaction.description}: $${transaction.amount.toFixed(2)}`}
                        </li>
                    ))}
                </ul>
            </div>
            <div style={styles.addExpense}>
                <h2>Add Expense</h2>
                <form style={styles.form}>
                    <label htmlFor="description" style={styles.label}>Description:</label>
                    <input
                        type="text"
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                        style={styles.input}
                    />
                    <label htmlFor="amount" style={styles.label}>Amount:</label>
                    <input
                        type="number"
                        id="amount"
                        step="0.01"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        required
                        style={styles.input}
                    />
                    <button type="button" onClick={addExpense} style={styles.button}>
                        Add Expense
                    </button>
                </form>
            </div>
        </div>
    );
};

const styles = {
    container: {
        maxWidth: '600px',
        margin: '0 auto',
        padding: '20px',
        backgroundColor: '#f8f9fa',
        borderRadius: '10px',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
        fontFamily: 'Arial, sans-serif'
    },
    heading: {
        textAlign: 'center',
        color: '#343a40'
    },
    balance: {
        marginBottom: '20px',
        textAlign: 'center',
        color: '#28a745'
    },
    transactions: {
        marginBottom: '20px'
    },
    transactionList: {
        listStyleType: 'none',
        padding: '0'
    },
    transactionItem: {
        backgroundColor: '#ffffff',
        border: '1px solid #e9ecef',
        borderRadius: '5px',
        marginBottom: '10px',
        padding: '10px',
        color: '#343a40'
    },
    addExpense: {
        backgroundColor: '#ffffff',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)'
    },
    form: {
        display: 'flex',
        flexDirection: 'column'
    },
    label: {
        marginBottom: '5px',
        color: '#495057'
    },
    input: {
        marginBottom: '15px',
        padding: '10px',
        border: '1px solid #ced4da',
        borderRadius: '5px'
    },
    button: {
        padding: '10px',
        backgroundColor: '#007bff',
        color: '#ffffff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer'
    },
    buttonHover: {
        backgroundColor: '#0056b3'
    }
};

export default App;
