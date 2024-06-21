
import calculateRewardPoints from './calculateRewardPoints';

const useCalculateRewards = (transactions) => {
    const rewardData = {};

    transactions.forEach(({customerId, name, amount, date }) => {
        const month = new Date(date).toLocaleString('default', {month: 'short'});
        const points = calculateRewardPoints(amount);

        if(!rewardData[customerId]){
            rewardData[customerId] = {name, monthlyPoints: {}, totalPoints: 0};
        }

        if(!rewardData[customerId].monthlyPoints[month]){
            rewardData[customerId].monthlyPoints[month] = 0;
        }

        rewardData[customerId].monthlyPoints[month] += points;
        rewardData[customerId].totalPoints += points;

    })

    return rewardData;
  
}

export default useCalculateRewards;
