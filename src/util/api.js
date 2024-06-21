//Simulate an asynchronous API call to fetch transaction data
export const fetchTransactions = () => {
    return new Promise((resolve) => {
        setTimeout( () => {
            const transactions = [
                {customerId: 1, name: "Ajay Kumar", amount: 120, date: "2024-01-15"},
                {customerId: 1, name: "Ajay Kumar", amount: 75, date: "2024-02-23"},
                {customerId: 1, name: "Ajay Kumar", amount: 200, date: "2024-03-12"},
                {customerId: 2, name: "Jatin Khushwah", amount: 150, date: "2024-01-11"},
                {customerId: 2, name: "Jatin Khushwah", amount: 85, date: "2024-02-15"},
                {customerId: 2, name: "Jatin Khushwah", amount: 95, date: "2024-03-27"},
                //Add more transactions to simulate alarger dataset
            ];
            resolve(transactions);
        }, 1000);
    });
};