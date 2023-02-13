'reach 0.1';

const [isTeam, EAGLES, CHIEFS] = makeEnum(2);
//const [isOutcome, CHIEFS_WIN, EAGLES_WIN] = makeEnum(2);

//const outcome = Math.floor(Math.random() * 2);
//const outcomeA = "Eagles Win";
//const outcomeB = "Chiefs Win";
//const outcomesCount = 2;

const winner = (teamAlice, teamBob) =>
    ((teamAlice + (1 - teamBob)) % 2);
    // 1 + (1-0) % 2 = 1
    // 0 + (1-1) % 2 = 0

//assert(winner(EAGLES, CHIEFS) == EAGLES_WIN);
//assert(winner(CHIEFS, EAGLES) == CHIEFS_WIN);

//forall(UInt, teamAlice =>
    //forall(UInt, teamBob =>
        //assert(isOutcome(winner(teamAlice, teamBob)))));
//No draws. Must have 
//forall(UInt, (hand) =>
//assert(winner(hand, hand) == DRAW));

const Player = {
    ...hasRandom,
    getTeam: Fun([], UInt),
    seeOutcome: Fun([UInt], Null),
    informTimeout: Fun([], Null),
};

export const main = Reach.App(() => {
    const Alice = Participant('Alice', {
        ...Player,
        wager: UInt, // atomic units of currency
        deadline: UInt, // time delta (blocks/rounds)
    });
    const Bob = Participant('Bob', {
        ...Player,
        acceptWager: Fun([UInt], Null),
    });
    init();

    const informTimeout = () => {
        each([Alice, Bob], () => {
            interact.informTimeout();
        });
    };

    Alice.only(() => {
        const wager = declassify(interact.wager);
        const deadline = declassify(interact.deadline);
    });
    Alice.publish(wager, deadline)
        .pay(wager);
    commit();

    Bob.only(() => {
        interact.acceptWager(wager);
    });
    Bob.pay(wager)
        .timeout(relativeTime(deadline), () => closeTo(Alice, informTimeout));

    //var outcome = EAGLES_WIN;
    //invariant(balance() == 2 * wager && isOutcome(outcome));
    //while (outcome == EAGLES_WIN) {
        commit();


        Alice.only(()=> {
            const teamAlice = declassify(interact.getTeam());
        });

        /*Alice.only(() => {
            const _teamAlice = interact.getTeam();
            const [_commitAlice, _saltAlice] = makeCommitment(interact, _teamAlice);
            const commitAlice = declassify(_teamAlice);
        });
        */
        //Alice.publish(commitAlice)
        Alice.publish(teamAlice)
          .timeout(relativeTime(deadline), () => closeTo(Bob, informTimeout));
        commit();
        //unknowable(Bob, Alice(commitAlice));
        Bob.only(() => {
            const teamBob = declassify(interact.getTeam());
        });
        Bob.publish(teamBob)
            .timeout(relativeTime(deadline), () => closeTo(Alice, informTimeout));
        //commit();

        /*
        Alice.only(() => {
            const saltAlice = declassify(_saltAlice);
            const teamAlice = declassify(_teamAlice);
        });
        Alice.publish(saltAlice, teamAlice)
            .timeout(relativeTime(deadline), () => closeTo(Bob, informTimeout));
        checkCommitment(commitAlice, saltAlice, teamAlice);
        */
        //outcome = winner(teamAlice, teamBob);
        //continue;
    //}

    //assert(outcome == EAGLES_WIN || outcome == CHIEFS_WIN);
    //transfer(2 * wager).to(outcome == EAGLES_WIN ? Alice : Bob);
    //commit();


    const outcome = ((teamAlice + (1 - teamBob)) % 2);
    
    const            [forAlice, forBob] =
    outcome == 1 ? [       2,      0] :
    outcome == 0 ? [       0,      2] :
    /* tie      */ [       1,      1];
  transfer(forAlice * wager).to(Alice);
  transfer(forBob   * wager).to(Bob);
  commit();

    each([Alice, Bob], () => {
        interact.seeOutcome(outcome);
    });
});
