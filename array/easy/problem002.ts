// Problem Statement: (Leetcode) Best Time to Buy and Sell Stock

const maxProfit = (prices: Array<number>): number => {
    let lowestPrice = Number.MAX_VALUE;
    let maxProfitEarned = 0;

    for(let price of prices){
        
        if(price < lowestPrice){
            lowestPrice = price;
            continue;
        }

        const currentProfit = price - lowestPrice;

        if(currentProfit >= maxProfitEarned){
            maxProfitEarned = currentProfit;
        }
    }

    return maxProfitEarned;
}

// Test Cases
console.log(maxProfit([7,1,5,3,6,4]));
console.log(maxProfit([7,6,4,3,1]));