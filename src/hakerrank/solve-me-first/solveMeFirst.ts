'use strict';

import { pathToFileURL } from 'node:url';

let inputString: string = '';
let inputLines: string[] = [];
let currentLine: number = 0;

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
    process.stdin.resume();
    process.stdin.setEncoding('utf-8');
    process.stdin.on('data', function(inputStdin: string): void {
        inputString += inputStdin;
    });

    process.stdin.on('end', function(): void {
        inputLines = inputString.split('\n');
        inputString = '';
        console.log(main(parseInt(inputLines[0]), parseInt(inputLines[1])));
    });
}

function readLine(): string {
    return inputLines[currentLine++];
}

export function main(a: number, b: number): number {
    return a + b;
}
