# Kata Starter - Node/Jest

Starter project for katas using node and jest with code coverage.

Classes/fucntions/etc should be placed in `src/`.

Tests should be placed in `test/`.

## Usage
* Install node v18
    * Recommended to use [nvm](https://github.com/nvm-sh/nvm)
    * `nvm install v18`
* Switch to node v18 for current project
    * `nvm use`
* Install dependencies
    * `npm install`
* Run tests
    * `npm test`
* Execute TypeScript file(s)
    * `npx tsx src/index.ts`

### [Advent of Code](https://adventofcode.com) (AoC)

This starter includes a scaffolding script that can be used to generate the files required to read input provided for Advent of Code style problems. 

Example of scaffolding script usage: `./scripts/scaffoldAdvent.sh 2` where `2` is the day you want to scaffold files for.

Problem input files (`.txt` files) are ignored in `.gitignore` since AoC asks that you not make them public.

Partial inputs for smaller test cases can be placed in `/src/day#/partialInput.txt`

Larger (complete) inputs can be placed in `/src/day#/completeInput.txt`

## Bitbucket Pipeline
This repo contains a `bitbucket-pipelines.yml` file that is configured to run the tests provided for the application.

For the pipeline to be ran on commits you will need to manually run the initial pipeline after forking the kata starter.

## Debugging

### VS Code

- Set a breakpoint in your code or tests
- Create a [JavaScript debugging terminal](https://code.visualstudio.com/docs/nodejs/nodejs-debugging#_javascript-debug-terminal)
- Execute your tests from within the terminal, i.e. `npm run test:watch`

### JetBrains IDE's (PHPStorm)

- Set a breakpoint and execute tests (it just works)