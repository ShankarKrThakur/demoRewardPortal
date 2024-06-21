import './App.css';
import { useEffect, useState } from 'react';
import useFetchData from './util/useFetchData';
import useCalculateRewards from './util/useCalculateRewards';


const App = () => {

    const [loading, setLoading] = useState(true);
    const [rewards, setRewards] = useState({});

    const transactions = useFetchData();
    
    useEffect(() => {
      if(transactions){
        setLoading(false);
      }
    }, []);

    useEffect( () => {
      if(!loading){
        setRewards(rewardsData);
      }
    }, [loading, transactions])

    const rewardsData = useCalculateRewards(transactions);

    if(loading) {
      return <div>Loading...</div>
    }

    return(
      <div className="App">
        <h1>Customer Reward Program</h1>
        <div className="box">
        {Object.entries(rewards).map(([customerId, {name, monthlyPoints, totalPoints}]) => (
          <div key = {customerId} className="customer-rewards">
            <h2>{name}</h2>
            <ul>
              {Object.entries(monthlyPoints).map( ([month, points]) => (
                <li key={month}>{month}: {points} points </li>
              ))}
              </ul>
              <p>Total Points: {totalPoints}</p>
          </div>
          
        ))}
        </div>

      </div>
    )
};
export default App;