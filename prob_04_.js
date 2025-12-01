/**
 * PROBLEM 2: Data Transformation - Group and Aggregate
 * 
 * You have an array of sales transactions from different regions and dates.
 * Each transaction: { region: 'North', date: '2024-01-15', amount: 1500, category: 'Electronics' }
 * 
 * Task: Transform the data to show:
 * 1. Group transactions by region
 * 2. For each region, calculate:
 *    - Total sales amount
 *    - Average transaction amount
 *    - Number of transactions
 *    - Categories (unique list)
 * 
 * Return an object like:
 * {
 *   'North': {
 *     total: 4500,
 *     average: 1500,
 *     count: 3,
 *     categories: ['Electronics', 'Clothing']
 *   },
 *   ...
 * }
 * 
 * Example:
 * Input: [
 *   { region: 'North', date: '2024-01-15', amount: 1500, category: 'Electronics' },
 *   { region: 'North', date: '2024-01-16', amount: 800, category: 'Clothing' },
 *   { region: 'South', date: '2024-01-15', amount: 2000, category: 'Electronics' }
 * ]
 */

const transactions = [
  { region: 'North', date: '2024-01-15', amount: 1500, category: 'Electronics' },
  { region: 'North', date: '2024-01-16', amount: 800, category: 'Clothing' },
  { region: 'North', date: '2024-01-17', amount: 1200, category: 'Electronics' },
  { region: 'South', date: '2024-01-15', amount: 2000, category: 'Electronics' },
  { region: 'South', date: '2024-01-16', amount: 600, category: 'Food' },
  { region: 'East', date: '2024-01-15', amount: 900, category: 'Clothing' }
];

// Write your solution here:




