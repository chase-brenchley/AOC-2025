import * as fs from 'fs';

export function readInput(file: string): string {
    return fs.readFileSync(file,'utf8');
} 
