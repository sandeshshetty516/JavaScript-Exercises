/* 23:
Write a Javascript function to convert an amount to coins.
Ex input: 26 and possible coins 10, 5, 2, 1
output: 10, 10, 5, 1 
*/

const countCoins = (money, coins = [10, 5, 2, 1]) =>{
    const totalCoins = [];
    for (let i = 0; i < coins.length; i += 1) {
        const thisCoinNum = Math.floor(money / coins [i]);
        for (let y = 0; y < thisCoinNum; y += 1) {
            totalCoins.push(coins[i]);
        }
        money -= coins[i] * thisCoinNum;
    }
    return totalCoins;
}

console.log(countCoins(26));
console.log(countCoins(8));