class Solution {
    /**
     * Returns the maximum profit from a single buy/sell.
     * Track the lowest price seen so far; at each price compute the profit
     * of selling today and keep the best. One pass, constant space.
     *
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let minPrice = Infinity;
        let maxProfit = 0;

        for (const price of prices) {
            if (price < minPrice) {
                minPrice = price;
            } else {
                const profit = price - minPrice;
                if (profit > maxProfit) {
                    maxProfit = profit;
                }
            }
        }

        return maxProfit;
    }
}

module.exports = Solution;
