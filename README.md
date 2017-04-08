[![NPM](https://nodei.co/npm/codechallenge.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/codechallenge/)

# Code Challenge

## Code Examples with NodeJS and Babel

_This project is consumable via EITHER github.com or via NPM._

#### Node / NPM Installation

- Install the latest version of Node from [the Node.js website](https://nodejs.org)

## Github instructions

- Clone this repo to your computer: `git clone git@github.com:JoeCostanzo/codechallenge.git`
- Change directory into the project: `cd codechallenge`
- Install the project: `npm install` (will install babel tools such as `babel-cli`, etc)

#### Run examples

- `babel-node [desired file]` (e.g. `babel-node src/pascalsTriangle.js`)

## NPM instructions

- Install the module into your project via npm: `npm install codechallenge`
- Import as a normal package and access it's exported members.
```js
import * as challenge from 'codechallenge'; // ES 'next' syntax

var challenge = require('codechallenge'); // pre-ES6 syntax

console.log(challenge.katas); // etc.
```

