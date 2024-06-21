import {useState, useEffect} from 'react'
import { fetchTransactions } from './api';

const useFetchData = () => {
    const [transactions, setTransactions] = useState([]);
    useEffect( () => {
        fetchTransactions().then(data => {
            setTransactions(data)
        });
    }, []);
    
    return transactions;
}

export default useFetchData
