import calculateRewardPoints from "../util/calculateRewardPoints"

describe("calculateRewardPoints", () => {
    test('should return 0 points for amount <= %50', () => {
        //Querying
        const result = calculateRewardPoints(50);

        //Assertion
        expect(result).toBe(0);
      
    })

    test('should return correct points for amount > 50 and < 100', () => {
        //Querying
        const result = calculateRewardPoints(60);

        //Assertion
        expect(result).toBe(10);
      
    })

    test('should return correct points for amount > 100', () => {
        //Querying
        const result = calculateRewardPoints(120);

        //Assertion
        expect(result).toBe(90);
      
    })
    
})