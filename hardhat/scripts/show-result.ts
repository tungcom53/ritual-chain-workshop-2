import {
  formatResult,
} from "./lib/result-format";

const result = {
  id: 7n,
  question:
    "Will ETH reach the target before the market closes?",
  answer: "YES",
  resolved: true,
};

console.log("");
console.log(
  formatResult(result),
);
console.log("");
