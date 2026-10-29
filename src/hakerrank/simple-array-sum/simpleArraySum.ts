'use strict';

import { WriteStream, createWriteStream } from "fs";
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

        main();
    });
}

function readLine(): string {
    return inputLines[currentLine++];
}

/*
 * Complete the 'simpleArraySum' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY ar as parameter.
 */

export function simpleArraySum(ar: number[]): number {
    let sum = ar.reduce((acc, curr) => acc + curr, 0);
    return sum;
}

function main() {
    const ws: WriteStream = createWriteStream(process.env['OUTPUT_PATH']);

    const arCount: number = parseInt(readLine().trim(), 10);

    const ar: number[] = readLine().replace(/\s+$/g, '').split(' ').map(arTemp => parseInt(arTemp, 10));

    const result: number = simpleArraySum(ar);

    ws.write(result + '\n');

    ws.end();
}
