"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
let results = [];
fs_1.default.readFile('data.txt', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    const result = data.toString().split('\n');
    let sum = 0;
    result.forEach((line, index) => {
        if (line !== '') {
            sum += parseInt(line);
            return;
        }
        else if (line === '') {
            results.push(sum);
            sum = 0;
            return;
        }
    });
    const highest = results.reduce((a, b) => Math.max(a, b), -Infinity);
    const highestIndex = results.indexOf(highest);
    console.log(`The ${highestIndex}th elf is carrying the most calories with: ${highest} calories`);
});
