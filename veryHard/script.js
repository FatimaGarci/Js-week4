// *VERY HARD: You are given coins of different denominations and a total amount of money amount. Write a function to compute the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

var coins = [1, 2, 5];
var  amount = 11;

function veryHard(coins, amount) {
    coins.sort((a, b) => a - b).reverse();
    var count = 0;
    for (var i = 0; i < coins.length; i++) {
        while (amount >= coins[i]) {
            amount -= coins[i];
            count++;
        }
    }
    if (amount !== 0){
        return -1;
    }


    return count;
}

console.log(veryHard(coins, amount));
