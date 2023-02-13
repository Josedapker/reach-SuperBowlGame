'reach 0.1';

const winner = (teamAlice, teamBob) =>
    ((teamAlice + (1 - teamBob)) % 2);
// 1 + (1-0) % 2 = 1
// 0 + (1-1) % 2 = 0

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
    commit();

    Alice.only(() => {
        const teamAlice = declassify(interact.getTeam());
    });
    Alice.publish(teamAlice)
        .timeout(relativeTime(deadline), () => closeTo(Bob, informTimeout));
    commit();
    Bob.only(() => {
        const teamBob = declassify(interact.getTeam());
    });
    Bob.publish(teamBob)
        .timeout(relativeTime(deadline), () => closeTo(Alice, informTimeout));

    const outcome = ((teamAlice + (1 - teamBob)) % 2);

    const [forAlice, forBob] =
        outcome == 1 ? [2, 0] :
        outcome == 0 ? [0, 2] :
        /* tie      */[1, 1];
    transfer(forAlice * wager).to(Alice);
    transfer(forBob * wager).to(Bob);
    commit();

    each([Alice, Bob], () => {
        interact.seeOutcome(outcome);
    });
});
