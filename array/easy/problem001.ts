//Problem Statement: (Leetcode) Two Sum

const twoSum = (nums: Array<number>, target: number): [number, number] => {
    const numMap: Map<number, number> = new Map();

    for(let i=0; i<nums.length; i++){
        const targetNumber = target - nums[i];

        if(numMap.get(targetNumber) == undefined){
            numMap.set(nums[i], i);
        }
        else{
            return [numMap.get(targetNumber) ?? 0, i]
        }
    }

    return [-1, -1];
}


//Testcases
console.log(twoSum([2,7,11,15], 9));
console.log(twoSum([3,2,4], 6));
console.log(twoSum([3,3], 6));
console.log(twoSum([-3,4,3,90], 0));