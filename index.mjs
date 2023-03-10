import { loadStdlib, ask } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib();

const isAlice = await ask.ask(
  `Are you Alice?`,
  ask.yesno
);
const who = isAlice ? 'Alice' : 'Bob';

console.log(`Starting Super Bowl Game! as ${who}`);

let acc = null;
const createAcc = await ask.ask(
  `Would you like to create an account? (only possible on devnet)`,
  ask.yesno
);
if (createAcc) {
  acc = await stdlib.newTestAccount(stdlib.parseCurrency(1000));
} else {
  const secret = await ask.ask(
    `What is your account secret?`,
    (x => x)
  );
  acc = await stdlib.newAccountFromSecret(secret);
}

let ctc = null;
if (isAlice) {
  ctc = acc.contract(backend);
  ctc.getInfo().then((info) => {
    console.log(`The contract is deployed as = ${JSON.stringify(info)}`); });
} else {
  const info = await ask.ask(
    `Please paste the contract information:`,
    JSON.parse
  );
  ctc = acc.contract(backend, info);
}

const fmt = (x) => stdlib.formatCurrency(x, 4);
const getBalance = async () => fmt(await stdlib.balanceOf(acc));

const before = await getBalance();
console.log(`Your balance is ${before}`);

const interact = { ...stdlib.hasRandom };

interact.informTimeout = () => {
  console.log(`There was a timeout.`);
  process.exit(1);
};

if (isAlice) {
  const amt = await ask.ask(
    `How much do you want to wager?`,
    stdlib.parseCurrency
  );
  interact.wager = amt;
  interact.deadline = { ETH: 100, ALGO: 100, CFX: 1000 }[stdlib.connector];
} else {
  interact.acceptWager = async (amt) => {
    const accepted = await ask.ask(
      `Do you accept the wager of ${fmt(amt)}?`,
      ask.yesno
    );
    if (!accepted) {
      process.exit(0);
    }
  };
}

const TEAM = ['EAGLES', 'CHIEFS'];
const TEAMS = {
  'EAGLES': 0, 'E': 0, 'e': 0, 'Eagles': 0, 'eagles':0, 'Philadelphia':0,
  'CHIEFS': 1, 'C': 1, 'c': 1, 'Chiefs': 0, 'chiefs':0, 
};

interact.getTeam = async () => {
  const team = await ask.ask(`Which team will you choose to win the SuperBowl?`, (x) => {
    const team = TEAMS[x];
    if ( team === undefined ) {
      throw Error(`Not a valid team ${team}`);
    }
    return team;
  });
  console.log(`You played ${TEAM[team]}`);
  return team;
};

//const OUTCOME = ['Eagles win', 'Chiefs win'];
interact.seeOutcome = async (outcome) => {
  //const outcome = Math.floor(Math.random() * 2);
  console.log(`The outcome is: ${OUTCOME[outcome]}`);
  console.log()
  //return outcome;
};

const part = isAlice ? ctc.p.Alice : ctc.p.Bob;
await part(interact);

const after = await getBalance();
console.log(`Your balance is now ${after}`);

ask.done();
