/**
 * PROBLEM 1: Shopping Cart Total Calculator
 * 
 * You have an array of cart items with discounts and taxes.
 * Each item has: { name, price, quantity, discount (percentage), tax (percentage) }
 * 
 * Task: Calculate the final total after applying:
 * 1. Discount on each item (price * quantity * (1 - discount/100))
 * 2. Tax on the discounted amount (discountedAmount * (1 + tax/100))
 * 3. Sum all items
 * 
 * Example:
 * Input: [
 *   { name: 'Laptop', price: 1000, quantity: 1, discount: 10, tax: 8 },
 *   { name: 'Mouse', price: 20, quantity: 2, discount: 5, tax: 8 }
 * ]
 * 
 * Laptop: 1000 * 1 * 0.9 = 900, then 900 * 1.08 = 972
 * Mouse: 20 * 2 * 0.95 = 38, then 38 * 1.08 = 41.04
 * Total: 972 + 41.04 = 1013.04
 * 
 * Return the total rounded to 2 decimal places.
 */

const cartItems = [
  { name: 'Laptop', price: 1000, quantity: 1, discount: 10, tax: 8 },
  { name: 'Mouse', price: 20, quantity: 2, discount: 5, tax: 8 },
  { name: 'Keyboard', price: 50, quantity: 1, discount: 0, tax: 8 }
];

// Write your solution here:




