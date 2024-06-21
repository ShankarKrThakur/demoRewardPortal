import { fetchTransactions } from "../util/api";

describe('fetchTransactions', () => {
    test("Should Fetch Transaction", async () => {
        const transactions = await fetchTransactions();
        expect(transactions.length).toBeGreaterThan(0);
        expect(transactions[0]).toHaveProperty('customerId');
        expect(transactions[0]).toHaveProperty('name');
        expect(transactions[0]).toHaveProperty('amount');
        expect(transactions[0]).toHaveProperty('date');
    })
})