//calculate reward points for a given transaction amount

const calculateRewardPoints = (amount) => {
   let points=0;
   if(amount > 100) {
    points += (amount-100) *2;
    points += 50; //additional 1 point for every dollar spent over $50
   } 
   else if(amount > 50) {
    points += amount - 50;
   }
   return points;

}

export default calculateRewardPoints
