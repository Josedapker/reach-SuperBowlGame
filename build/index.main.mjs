// Automatically generated with Reach 0.1.13 (c44a1544)
/* eslint-disable */
export const _version = '0.1.13';
export const _versionHash = '0.1.13 (c44a1544)';
export const _backendVersion = 27;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc1, ctc1],
      3: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1],
      5: [ctc0, ctc1, ctc0, ctc1, ctc1, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Address;
  
  
  const v198 = stdlib.protect(ctc0, interact.deadline, 'for Alice\'s interact field deadline');
  const v199 = stdlib.protect(ctc0, interact.wager, 'for Alice\'s interact field wager');
  
  const txn1 = await (ctc.sendrecv({
    args: [v199, v198],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:55:11:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [v199, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v203, v204], secs: v206, time: v205, didSend: v31, from: v202 } = txn1;
      
      sim_r.txns.push({
        amt: v203,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v215 = stdlib.safeAdd(v205, v204);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v203, v204], secs: v206, time: v205, didSend: v31, from: v202 } = txn1;
  ;
  const v215 = stdlib.safeAdd(v205, v204);
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: ['time', v215],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v202, v203, v204, v215],
      evt_cnt: 0,
      funcNum: 2,
      lct: v205,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v322, time: v321, didSend: v173, from: v320 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v202,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc2, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v322, time: v321, didSend: v173, from: v320 } = txn3;
    ;
    ;
    stdlib.protect(ctc1, await interact.informTimeout(), {
      at: './index.rsh:47:35:application',
      fs: ['at ./index.rsh:46:13:application call to [unknown function] (defined at: ./index.rsh:46:31:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:45:30:function exp)', 'at ./index.rsh:63:55:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
      msg: 'informTimeout',
      who: 'Alice'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v221, time: v220, didSend: v40, from: v219 } = txn2;
    const v223 = stdlib.add(v203, v203);
    ;
    const v230 = stdlib.safeAdd(v220, v204);
    const v234 = stdlib.protect(ctc0, await interact.getTeam(), {
      at: './index.rsh:72:58:application',
      fs: ['at ./index.rsh:71:19:application call to [unknown function] (defined at: ./index.rsh:71:22:function exp)'],
      msg: 'getTeam',
      who: 'Alice'
      });
    
    const txn3 = await (ctc.sendrecv({
      args: [v202, v203, v204, v219, v223, v230, v234],
      evt_cnt: 1,
      funcNum: 3,
      lct: v220,
      onlyIf: true,
      out_tys: [ctc0],
      pay: [stdlib.checkedBigNumberify('./index.rsh:82:15:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [v236], secs: v238, time: v237, didSend: v50, from: v235 } = txn3;
        
        ;
        const v246 = stdlib.safeAdd(v237, v204);
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: ['time', v230],
      tys: [ctc2, ctc0, ctc0, ctc2, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.sendrecv({
        args: [v202, v203, v204, v219, v223, v230],
        evt_cnt: 0,
        funcNum: 4,
        lct: v220,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [], secs: v304, time: v303, didSend: v142, from: v302 } = txn4;
          
          ;
          sim_r.txns.push({
            kind: 'from',
            to: v219,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          
          return sim_r;
          }),
        soloSend: false,
        timeoutAt: undefined /* mto */,
        tys: [ctc2, ctc0, ctc0, ctc2, ctc0, ctc0],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v304, time: v303, didSend: v142, from: v302 } = txn4;
      ;
      const v305 = stdlib.addressEq(v202, v302);
      const v306 = stdlib.addressEq(v219, v302);
      const v307 = v305 ? true : v306;
      stdlib.assert(v307, {
        at: 'reach standard library:197:11:dot',
        fs: ['at ./index.rsh:83:57:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
        msg: 'sender correct',
        who: 'Alice'
        });
      ;
      stdlib.protect(ctc1, await interact.informTimeout(), {
        at: './index.rsh:47:35:application',
        fs: ['at ./index.rsh:46:13:application call to [unknown function] (defined at: ./index.rsh:46:31:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:45:30:function exp)', 'at ./index.rsh:83:57:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
        msg: 'informTimeout',
        who: 'Alice'
        });
      
      return;
      
      }
    else {
      const {data: [v236], secs: v238, time: v237, didSend: v50, from: v235 } = txn3;
      ;
      const v239 = stdlib.addressEq(v202, v235);
      stdlib.assert(v239, {
        at: './index.rsh:82:15:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Alice'
        });
      const v246 = stdlib.safeAdd(v237, v204);
      const txn4 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 5,
        out_tys: [ctc0],
        timeoutAt: ['time', v246],
        waitIfNotPresent: false
        }));
      if (txn4.didTimeout) {
        const txn5 = await (ctc.sendrecv({
          args: [v202, v203, v219, v223, v236, v246],
          evt_cnt: 0,
          funcNum: 6,
          lct: v237,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v286, time: v285, didSend: v108, from: v284 } = txn5;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v202,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined /* mto */,
          tys: [ctc2, ctc0, ctc2, ctc0, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v286, time: v285, didSend: v108, from: v284 } = txn5;
        ;
        const v287 = stdlib.addressEq(v202, v284);
        const v288 = stdlib.addressEq(v219, v284);
        const v289 = v287 ? true : v288;
        stdlib.assert(v289, {
          at: 'reach standard library:197:11:dot',
          fs: ['at ./index.rsh:90:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'sender correct',
          who: 'Alice'
          });
        ;
        stdlib.protect(ctc1, await interact.informTimeout(), {
          at: './index.rsh:47:35:application',
          fs: ['at ./index.rsh:46:13:application call to [unknown function] (defined at: ./index.rsh:46:31:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:45:30:function exp)', 'at ./index.rsh:90:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'informTimeout',
          who: 'Alice'
          });
        
        return;
        
        }
      else {
        const {data: [v252], secs: v254, time: v253, didSend: v60, from: v251 } = txn4;
        ;
        const v255 = stdlib.addressEq(v219, v251);
        stdlib.assert(v255, {
          at: './index.rsh:89:13:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Alice'
          });
        const v256 = stdlib.safeSub(stdlib.checkedBigNumberify('./index.rsh:111:36:decimal', stdlib.UInt_max, '1'), v252);
        const v257 = stdlib.safeAdd(v236, v256);
        const v258 = stdlib.safeMod(v257, stdlib.checkedBigNumberify('./index.rsh:111:52:decimal', stdlib.UInt_max, '2'));
        const v259 = stdlib.eq(v258, stdlib.checkedBigNumberify('./index.rsh:114:16:decimal', stdlib.UInt_max, '1'));
        const v260 = stdlib.eq(v258, stdlib.checkedBigNumberify('./index.rsh:115:16:decimal', stdlib.UInt_max, '0'));
        const v261 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2')];
        const v262 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
        const v263 = v260 ? v261 : v262;
        const v264 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v265 = v259 ? v264 : v263;
        const v266 = v265[stdlib.checkedBigNumberify('./index.rsh:113:22:array', stdlib.UInt_max, '0')];
        const v267 = v265[stdlib.checkedBigNumberify('./index.rsh:113:22:array', stdlib.UInt_max, '1')];
        const v268 = stdlib.safeMul(v266, v203);
        ;
        const v273 = stdlib.safeMul(v267, v203);
        ;
        stdlib.protect(ctc1, await interact.seeOutcome(v258), {
          at: './index.rsh:122:28:application',
          fs: ['at ./index.rsh:121:9:application call to [unknown function] (defined at: ./index.rsh:121:27:function exp)'],
          msg: 'seeOutcome',
          who: 'Alice'
          });
        
        return;
        }
      
      }
    
    }
  
  
  
  };
export async function Bob(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v203, v204], secs: v206, time: v205, didSend: v31, from: v202 } = txn1;
  ;
  const v215 = stdlib.safeAdd(v205, v204);
  stdlib.protect(ctc1, await interact.acceptWager(v203), {
    at: './index.rsh:60:29:application',
    fs: ['at ./index.rsh:59:13:application call to [unknown function] (defined at: ./index.rsh:59:17:function exp)'],
    msg: 'acceptWager',
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v202, v203, v204, v215],
    evt_cnt: 0,
    funcNum: 1,
    lct: v205,
    onlyIf: true,
    out_tys: [],
    pay: [v203, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v221, time: v220, didSend: v40, from: v219 } = txn2;
      
      const v223 = stdlib.add(v203, v203);
      sim_r.txns.push({
        amt: v203,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v230 = stdlib.safeAdd(v220, v204);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: ['time', v215],
    tys: [ctc2, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v202, v203, v204, v215],
      evt_cnt: 0,
      funcNum: 2,
      lct: v205,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v322, time: v321, didSend: v173, from: v320 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v202,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc2, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v322, time: v321, didSend: v173, from: v320 } = txn3;
    ;
    ;
    stdlib.protect(ctc1, await interact.informTimeout(), {
      at: './index.rsh:47:35:application',
      fs: ['at ./index.rsh:46:13:application call to [unknown function] (defined at: ./index.rsh:46:31:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:45:30:function exp)', 'at ./index.rsh:63:55:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
      msg: 'informTimeout',
      who: 'Bob'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v221, time: v220, didSend: v40, from: v219 } = txn2;
    const v223 = stdlib.add(v203, v203);
    ;
    const v230 = stdlib.safeAdd(v220, v204);
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc0],
      timeoutAt: ['time', v230],
      waitIfNotPresent: false
      }));
    if (txn3.didTimeout) {
      const txn4 = await (ctc.sendrecv({
        args: [v202, v203, v204, v219, v223, v230],
        evt_cnt: 0,
        funcNum: 4,
        lct: v220,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [], secs: v304, time: v303, didSend: v142, from: v302 } = txn4;
          
          ;
          sim_r.txns.push({
            kind: 'from',
            to: v219,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          
          return sim_r;
          }),
        soloSend: false,
        timeoutAt: undefined /* mto */,
        tys: [ctc2, ctc0, ctc0, ctc2, ctc0, ctc0],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v304, time: v303, didSend: v142, from: v302 } = txn4;
      ;
      const v305 = stdlib.addressEq(v202, v302);
      const v306 = stdlib.addressEq(v219, v302);
      const v307 = v305 ? true : v306;
      stdlib.assert(v307, {
        at: 'reach standard library:197:11:dot',
        fs: ['at ./index.rsh:83:57:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
        msg: 'sender correct',
        who: 'Bob'
        });
      ;
      stdlib.protect(ctc1, await interact.informTimeout(), {
        at: './index.rsh:47:35:application',
        fs: ['at ./index.rsh:46:13:application call to [unknown function] (defined at: ./index.rsh:46:31:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:45:30:function exp)', 'at ./index.rsh:83:57:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
        msg: 'informTimeout',
        who: 'Bob'
        });
      
      return;
      
      }
    else {
      const {data: [v236], secs: v238, time: v237, didSend: v50, from: v235 } = txn3;
      ;
      const v239 = stdlib.addressEq(v202, v235);
      stdlib.assert(v239, {
        at: './index.rsh:82:15:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Bob'
        });
      const v246 = stdlib.safeAdd(v237, v204);
      const v250 = stdlib.protect(ctc0, await interact.getTeam(), {
        at: './index.rsh:87:56:application',
        fs: ['at ./index.rsh:86:17:application call to [unknown function] (defined at: ./index.rsh:86:21:function exp)'],
        msg: 'getTeam',
        who: 'Bob'
        });
      
      const txn4 = await (ctc.sendrecv({
        args: [v202, v203, v219, v223, v236, v246, v250],
        evt_cnt: 1,
        funcNum: 5,
        lct: v237,
        onlyIf: true,
        out_tys: [ctc0],
        pay: [stdlib.checkedBigNumberify('./index.rsh:89:13:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v252], secs: v254, time: v253, didSend: v60, from: v251 } = txn4;
          
          ;
          const v256 = stdlib.safeSub(stdlib.checkedBigNumberify('./index.rsh:111:36:decimal', stdlib.UInt_max, '1'), v252);
          const v257 = stdlib.safeAdd(v236, v256);
          const v258 = stdlib.safeMod(v257, stdlib.checkedBigNumberify('./index.rsh:111:52:decimal', stdlib.UInt_max, '2'));
          const v259 = stdlib.eq(v258, stdlib.checkedBigNumberify('./index.rsh:114:16:decimal', stdlib.UInt_max, '1'));
          const v260 = stdlib.eq(v258, stdlib.checkedBigNumberify('./index.rsh:115:16:decimal', stdlib.UInt_max, '0'));
          const v261 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2')];
          const v262 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
          const v263 = v260 ? v261 : v262;
          const v264 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
          const v265 = v259 ? v264 : v263;
          const v266 = v265[stdlib.checkedBigNumberify('./index.rsh:113:22:array', stdlib.UInt_max, '0')];
          const v267 = v265[stdlib.checkedBigNumberify('./index.rsh:113:22:array', stdlib.UInt_max, '1')];
          const v268 = stdlib.safeMul(v266, v203);
          sim_r.txns.push({
            kind: 'from',
            to: v202,
            tok: undefined /* Nothing */
            });
          const v273 = stdlib.safeMul(v267, v203);
          sim_r.txns.push({
            kind: 'from',
            to: v219,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: ['time', v246],
        tys: [ctc2, ctc0, ctc2, ctc0, ctc0, ctc0, ctc0],
        waitIfNotPresent: false
        }));
      if (txn4.didTimeout) {
        const txn5 = await (ctc.sendrecv({
          args: [v202, v203, v219, v223, v236, v246],
          evt_cnt: 0,
          funcNum: 6,
          lct: v237,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn5) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v286, time: v285, didSend: v108, from: v284 } = txn5;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v202,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined /* mto */,
          tys: [ctc2, ctc0, ctc2, ctc0, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v286, time: v285, didSend: v108, from: v284 } = txn5;
        ;
        const v287 = stdlib.addressEq(v202, v284);
        const v288 = stdlib.addressEq(v219, v284);
        const v289 = v287 ? true : v288;
        stdlib.assert(v289, {
          at: 'reach standard library:197:11:dot',
          fs: ['at ./index.rsh:90:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'sender correct',
          who: 'Bob'
          });
        ;
        stdlib.protect(ctc1, await interact.informTimeout(), {
          at: './index.rsh:47:35:application',
          fs: ['at ./index.rsh:46:13:application call to [unknown function] (defined at: ./index.rsh:46:31:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:45:30:function exp)', 'at ./index.rsh:90:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'informTimeout',
          who: 'Bob'
          });
        
        return;
        
        }
      else {
        const {data: [v252], secs: v254, time: v253, didSend: v60, from: v251 } = txn4;
        ;
        const v255 = stdlib.addressEq(v219, v251);
        stdlib.assert(v255, {
          at: './index.rsh:89:13:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Bob'
          });
        const v256 = stdlib.safeSub(stdlib.checkedBigNumberify('./index.rsh:111:36:decimal', stdlib.UInt_max, '1'), v252);
        const v257 = stdlib.safeAdd(v236, v256);
        const v258 = stdlib.safeMod(v257, stdlib.checkedBigNumberify('./index.rsh:111:52:decimal', stdlib.UInt_max, '2'));
        const v259 = stdlib.eq(v258, stdlib.checkedBigNumberify('./index.rsh:114:16:decimal', stdlib.UInt_max, '1'));
        const v260 = stdlib.eq(v258, stdlib.checkedBigNumberify('./index.rsh:115:16:decimal', stdlib.UInt_max, '0'));
        const v261 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2')];
        const v262 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
        const v263 = v260 ? v261 : v262;
        const v264 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v265 = v259 ? v264 : v263;
        const v266 = v265[stdlib.checkedBigNumberify('./index.rsh:113:22:array', stdlib.UInt_max, '0')];
        const v267 = v265[stdlib.checkedBigNumberify('./index.rsh:113:22:array', stdlib.UInt_max, '1')];
        const v268 = stdlib.safeMul(v266, v203);
        ;
        const v273 = stdlib.safeMul(v267, v203);
        ;
        stdlib.protect(ctc1, await interact.seeOutcome(v258), {
          at: './index.rsh:122:28:application',
          fs: ['at ./index.rsh:121:9:application call to [unknown function] (defined at: ./index.rsh:121:27:function exp)'],
          msg: 'seeOutcome',
          who: 'Bob'
          });
        
        return;
        }
      
      }
    
    }
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [`_reachp_0((uint64,uint64,uint64))void`, `_reachp_1((uint64))void`, `_reachp_2((uint64))void`, `_reachp_3((uint64,uint64))void`, `_reachp_4((uint64))void`, `_reachp_5((uint64,uint64))void`, `_reachp_6((uint64))void`],
    pure: [],
    sigs: [`_reachp_0((uint64,uint64,uint64))void`, `_reachp_1((uint64))void`, `_reachp_2((uint64))void`, `_reachp_3((uint64,uint64))void`, `_reachp_4((uint64))void`, `_reachp_5((uint64,uint64))void`, `_reachp_6((uint64))void`]
    },
  GlobalNumByteSlice: 2,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `CCAKAAEIBSgDIAJQWCYCAAEAMRhBAxAoZEkiWzUBJFs1AilkggcEdQ7kBgSMQIC6BJlAQQYEmnhhEASkcTyWBN/ZIygE8TfIRDYaAI4HApQCwAK1Ap8CdQKJAqoAMQA1EDQMIls1DTQMJFs1ETQMgRBbNQuABPdxE000DRZQNBEWUDQLFlCwNA2IAuw0EYgC9TIGNAsINQ40EDQRFlA0CxZQNA4WUCEEr1AjMgY1AjUBKUxXAGBnKDQBFjQCFlBnMRkiEkSIAxY0A0AACoAEFR98dTQEULAjQzEANQ8jNAESRIgC4TQMFzUNgATVFRkUNA0WULA0DYgCfjIGNA4MRDQRSQg1DjQRiAJ7MgY0Cwg1EzQQNBEWUDQLFlA0D1A0DhZQNBMWUCEFMgZC/38jNAESRIgCkDQMFzULgASXTvcXNAsWULA0C4gCLTIGNA4PRDQRNBCIAioxGSUSRIgCfiIyCjIJiAKmQv9dIQU0ARJEiAIuNA0iWzUSNA0kWzUMgASkpfCINBIWUDQMFlCwNBKIAeQyBjQTDEQ0EDEAEkQyBjQLCDUNNBA0ERZQNA9QNA4WUDQMFlA0DRZQJTIGQv7rIQU0ARJEiAHXNAwXNQuABPmLr3g0CxZQsDQLiAGYMgY0Ew9ENBAxABI0DzEAEhFENA40D4gBiUL/XCU0ARJEiAHmNAsiWzUONAskWzUSgASzUfePNA4WUDQSFlCwNA6IAVQyBjQNDEQ0DzEAEkQ0DCM0EgkIIQcYNQuAEAAAAAAAAAABAAAAAAAAAAGAEAAAAAAAAAAAAAAAAAAAAAI0CyISTYAQAAAAAAAAAAIAAAAAAAAAADQLIxJNSTUMIls0EQs0EIgA+TQMJFs0EQs0D4gA7UL+wCU0ARJEiAFKNAsXNQyABHDt73o0DBZQsDQMiADDMgY0DQ9ENBAxABI0DzEAEhFENA40EIgAtEL+h4gAoIGgjQY0Bgg1BjYaATUMQv14iACMNhoBNQxC/emIAIE2GgE1DEL+M4gAdjYaATUNQv5liABrNhoBNQxC/rGIAGA2GgE1C0L+4IgAVTYaATULQv9xIjE0EkQhBzE1EkQiMTYSRCIxNxJEiAA1gWCvIiJC/WYxGSISREL9fiKyASOyELIHsgiziUiJTAlJNQYyCYgAG4kJSUH/7kk1BogAE4kjNQOJSSISTDQCEhFEibFC/8kxFjQAIwhJNQAJRwI4BzIKEkQ4ECMSRDgIEkSJSVcAIDUQSSEGWzURSSEEWzULSVcwIDUPSSEIWzUOIQlbNROJSVcAIDUQSSEGWzURSSEEWzULgTBbNQ6JNAY0B0oPQf92Qv9+SVcAIDUQSSEGWzURSVcoIDUPSYFIWzUOSSEIWzUMIQlbNQ2JsbIJQv87`,
  appApprovalMap: {
    0: `2`,
    1: `2`,
    10: `2`,
    100: `28`,
    1000: `585`,
    1001: `585`,
    1002: `587`,
    1003: `588`,
    1004: `588`,
    1005: `588`,
    1006: `589`,
    1007: `589`,
    1008: `590`,
    1009: `591`,
    101: `29`,
    1010: `591`,
    1011: `592`,
    1012: `593`,
    1013: `593`,
    1014: `594`,
    1015: `595`,
    1016: `595`,
    1017: `595`,
    1018: `596`,
    1019: `596`,
    102: `29`,
    1020: `597`,
    1021: `598`,
    1022: `598`,
    1023: `599`,
    1024: `600`,
    1025: `600`,
    1026: `601`,
    1027: `602`,
    1028: `602`,
    1029: `603`,
    103: `30`,
    1030: `604`,
    1031: `604`,
    1032: `605`,
    1033: `605`,
    1034: `606`,
    1035: `607`,
    1036: `607`,
    1037: `608`,
    1038: `610`,
    1039: `611`,
    104: `30`,
    1040: `611`,
    1041: `612`,
    105: `31`,
    106: `32`,
    107: `33`,
    108: `33`,
    109: `34`,
    11: `2`,
    110: `34`,
    111: `35`,
    112: `35`,
    113: `36`,
    114: `37`,
    115: `37`,
    116: `38`,
    117: `38`,
    118: `38`,
    119: `38`,
    12: `2`,
    120: `38`,
    121: `38`,
    122: `39`,
    123: `39`,
    124: `40`,
    125: `41`,
    126: `42`,
    127: `42`,
    128: `43`,
    129: `44`,
    13: `2`,
    130: `45`,
    131: `45`,
    132: `46`,
    133: `47`,
    134: `48`,
    135: `50`,
    136: `50`,
    137: `51`,
    138: `51`,
    139: `51`,
    14: `2`,
    140: `52`,
    141: `52`,
    142: `53`,
    143: `53`,
    144: `53`,
    145: `56`,
    146: `56`,
    147: `57`,
    148: `57`,
    149: `58`,
    15: `2`,
    150: `59`,
    151: `59`,
    152: `61`,
    153: `61`,
    154: `62`,
    155: `62`,
    156: `63`,
    157: `64`,
    158: `65`,
    159: `65`,
    16: `2`,
    160: `66`,
    161: `67`,
    162: `68`,
    163: `68`,
    164: `69`,
    165: `70`,
    166: `71`,
    167: `71`,
    168: `72`,
    169: `73`,
    17: `2`,
    170: `74`,
    171: `75`,
    172: `75`,
    173: `77`,
    174: `77`,
    175: `78`,
    176: `78`,
    177: `79`,
    178: `80`,
    179: `81`,
    18: `4`,
    180: `81`,
    181: `81`,
    182: `82`,
    183: `83`,
    184: `84`,
    185: `84`,
    186: `85`,
    187: `86`,
    188: `86`,
    189: `87`,
    19: `4`,
    190: `88`,
    191: `89`,
    192: `90`,
    193: `90`,
    194: `91`,
    195: `92`,
    196: `93`,
    197: `95`,
    198: `95`,
    199: `95`,
    2: `2`,
    20: `5`,
    200: `97`,
    201: `97`,
    202: `98`,
    203: `98`,
    204: `98`,
    205: `100`,
    206: `100`,
    207: `100`,
    208: `100`,
    209: `100`,
    21: `5`,
    210: `100`,
    211: `101`,
    212: `101`,
    213: `102`,
    214: `103`,
    215: `105`,
    216: `106`,
    217: `108`,
    218: `108`,
    219: `109`,
    22: `5`,
    220: `109`,
    221: `110`,
    222: `111`,
    223: `111`,
    224: `112`,
    225: `113`,
    226: `114`,
    227: `114`,
    228: `114`,
    229: `115`,
    23: `6`,
    230: `115`,
    231: `116`,
    232: `117`,
    233: `117`,
    234: `118`,
    235: `118`,
    236: `118`,
    237: `118`,
    238: `118`,
    239: `118`,
    24: `7`,
    240: `119`,
    241: `119`,
    242: `120`,
    243: `121`,
    244: `122`,
    245: `124`,
    246: `124`,
    247: `125`,
    248: `125`,
    249: `125`,
    25: `8`,
    250: `126`,
    251: `126`,
    252: `127`,
    253: `127`,
    254: `128`,
    255: `129`,
    256: `130`,
    257: `130`,
    258: `131`,
    259: `132`,
    26: `9`,
    260: `133`,
    261: `133`,
    262: `134`,
    263: `134`,
    264: `135`,
    265: `135`,
    266: `135`,
    267: `138`,
    268: `138`,
    269: `139`,
    27: `10`,
    270: `139`,
    271: `140`,
    272: `141`,
    273: `141`,
    274: `143`,
    275: `143`,
    276: `144`,
    277: `144`,
    278: `145`,
    279: `146`,
    28: `11`,
    280: `147`,
    281: `147`,
    282: `148`,
    283: `149`,
    284: `150`,
    285: `150`,
    286: `151`,
    287: `152`,
    288: `152`,
    289: `153`,
    29: `11`,
    290: `154`,
    291: `155`,
    292: `155`,
    293: `156`,
    294: `157`,
    295: `158`,
    296: `158`,
    297: `159`,
    298: `159`,
    299: `160`,
    3: `2`,
    30: `12`,
    300: `160`,
    301: `160`,
    302: `162`,
    303: `163`,
    304: `163`,
    305: `164`,
    306: `165`,
    307: `166`,
    308: `166`,
    309: `166`,
    31: `13`,
    310: `167`,
    311: `167`,
    312: `168`,
    313: `169`,
    314: `169`,
    315: `170`,
    316: `170`,
    317: `170`,
    318: `170`,
    319: `170`,
    32: `14`,
    320: `170`,
    321: `171`,
    322: `171`,
    323: `172`,
    324: `173`,
    325: `174`,
    326: `176`,
    327: `176`,
    328: `177`,
    329: `177`,
    33: `14`,
    330: `177`,
    331: `178`,
    332: `178`,
    333: `179`,
    334: `179`,
    335: `180`,
    336: `181`,
    337: `182`,
    338: `182`,
    339: `184`,
    34: `15`,
    340: `184`,
    341: `185`,
    342: `185`,
    343: `185`,
    344: `187`,
    345: `187`,
    346: `188`,
    347: `189`,
    348: `190`,
    349: `192`,
    35: `16`,
    350: `192`,
    351: `192`,
    352: `194`,
    353: `195`,
    354: `195`,
    355: `196`,
    356: `196`,
    357: `197`,
    358: `197`,
    359: `197`,
    36: `18`,
    360: `198`,
    361: `198`,
    362: `198`,
    363: `200`,
    364: `200`,
    365: `201`,
    366: `201`,
    367: `202`,
    368: `203`,
    369: `204`,
    37: `18`,
    370: `204`,
    371: `204`,
    372: `205`,
    373: `205`,
    374: `206`,
    375: `207`,
    376: `208`,
    377: `208`,
    378: `209`,
    379: `209`,
    38: `18`,
    380: `210`,
    381: `211`,
    382: `212`,
    383: `212`,
    384: `213`,
    385: `213`,
    386: `213`,
    387: `213`,
    388: `213`,
    389: `213`,
    39: `18`,
    390: `214`,
    391: `214`,
    392: `215`,
    393: `216`,
    394: `217`,
    395: `217`,
    396: `218`,
    397: `219`,
    398: `220`,
    399: `222`,
    4: `2`,
    40: `18`,
    400: `222`,
    401: `223`,
    402: `223`,
    403: `223`,
    404: `224`,
    405: `224`,
    406: `225`,
    407: `225`,
    408: `226`,
    409: `227`,
    41: `18`,
    410: `228`,
    411: `228`,
    412: `229`,
    413: `229`,
    414: `230`,
    415: `231`,
    416: `234`,
    417: `234`,
    418: `235`,
    419: `235`,
    42: `18`,
    420: `236`,
    421: `237`,
    422: `237`,
    423: `239`,
    424: `239`,
    425: `240`,
    426: `240`,
    427: `241`,
    428: `242`,
    429: `243`,
    43: `18`,
    430: `243`,
    431: `244`,
    432: `245`,
    433: `245`,
    434: `246`,
    435: `247`,
    436: `248`,
    437: `248`,
    438: `249`,
    439: `250`,
    44: `18`,
    440: `251`,
    441: `251`,
    442: `252`,
    443: `253`,
    444: `254`,
    445: `255`,
    446: `255`,
    447: `256`,
    448: `256`,
    449: `256`,
    45: `18`,
    450: `258`,
    451: `258`,
    452: `259`,
    453: `259`,
    454: `260`,
    455: `261`,
    456: `262`,
    457: `262`,
    458: `262`,
    459: `263`,
    46: `18`,
    460: `263`,
    461: `264`,
    462: `265`,
    463: `265`,
    464: `266`,
    465: `266`,
    466: `266`,
    467: `266`,
    468: `266`,
    469: `266`,
    47: `18`,
    470: `267`,
    471: `267`,
    472: `268`,
    473: `269`,
    474: `270`,
    475: `272`,
    476: `272`,
    477: `273`,
    478: `273`,
    479: `273`,
    48: `18`,
    480: `274`,
    481: `274`,
    482: `275`,
    483: `275`,
    484: `276`,
    485: `277`,
    486: `278`,
    487: `278`,
    488: `279`,
    489: `279`,
    49: `18`,
    490: `280`,
    491: `281`,
    492: `281`,
    493: `282`,
    494: `282`,
    495: `283`,
    496: `284`,
    497: `285`,
    498: `289`,
    499: `289`,
    5: `2`,
    50: `18`,
    500: `291`,
    501: `291`,
    502: `292`,
    503: `292`,
    504: `292`,
    505: `293`,
    506: `293`,
    507: `293`,
    508: `295`,
    509: `296`,
    51: `18`,
    510: `296`,
    511: `297`,
    512: `298`,
    513: `299`,
    514: `299`,
    515: `299`,
    516: `300`,
    517: `300`,
    518: `301`,
    519: `302`,
    52: `18`,
    520: `303`,
    521: `303`,
    522: `304`,
    523: `304`,
    524: `305`,
    525: `306`,
    526: `307`,
    527: `307`,
    528: `308`,
    529: `308`,
    53: `18`,
    530: `308`,
    531: `308`,
    532: `308`,
    533: `308`,
    534: `309`,
    535: `309`,
    536: `310`,
    537: `311`,
    538: `312`,
    539: `312`,
    54: `18`,
    540: `313`,
    541: `314`,
    542: `315`,
    543: `317`,
    544: `317`,
    545: `318`,
    546: `318`,
    547: `318`,
    548: `319`,
    549: `319`,
    55: `18`,
    550: `320`,
    551: `320`,
    552: `321`,
    553: `322`,
    554: `323`,
    555: `323`,
    556: `324`,
    557: `324`,
    558: `325`,
    559: `326`,
    56: `18`,
    560: `329`,
    561: `329`,
    562: `330`,
    563: `331`,
    564: `331`,
    565: `332`,
    566: `333`,
    567: `334`,
    568: `334`,
    569: `335`,
    57: `18`,
    570: `336`,
    571: `336`,
    572: `337`,
    573: `337`,
    574: `337`,
    575: `337`,
    576: `337`,
    577: `337`,
    578: `337`,
    579: `337`,
    58: `18`,
    580: `337`,
    581: `337`,
    582: `337`,
    583: `337`,
    584: `337`,
    585: `337`,
    586: `337`,
    587: `337`,
    588: `337`,
    589: `337`,
    59: `18`,
    590: `338`,
    591: `338`,
    592: `338`,
    593: `338`,
    594: `338`,
    595: `338`,
    596: `338`,
    597: `338`,
    598: `338`,
    599: `338`,
    6: `2`,
    60: `18`,
    600: `338`,
    601: `338`,
    602: `338`,
    603: `338`,
    604: `338`,
    605: `338`,
    606: `338`,
    607: `338`,
    608: `339`,
    609: `339`,
    61: `18`,
    610: `340`,
    611: `341`,
    612: `342`,
    613: `343`,
    614: `343`,
    615: `343`,
    616: `343`,
    617: `343`,
    618: `343`,
    619: `343`,
    62: `18`,
    620: `343`,
    621: `343`,
    622: `343`,
    623: `343`,
    624: `343`,
    625: `343`,
    626: `343`,
    627: `343`,
    628: `343`,
    629: `343`,
    63: `18`,
    630: `343`,
    631: `344`,
    632: `344`,
    633: `345`,
    634: `346`,
    635: `347`,
    636: `348`,
    637: `349`,
    638: `349`,
    639: `350`,
    64: `18`,
    640: `351`,
    641: `352`,
    642: `352`,
    643: `353`,
    644: `355`,
    645: `355`,
    646: `356`,
    647: `356`,
    648: `356`,
    649: `357`,
    65: `18`,
    650: `357`,
    651: `358`,
    652: `359`,
    653: `360`,
    654: `360`,
    655: `361`,
    656: `363`,
    657: `363`,
    658: `364`,
    659: `364`,
    66: `18`,
    660: `364`,
    661: `365`,
    662: `365`,
    663: `365`,
    664: `367`,
    665: `368`,
    666: `368`,
    667: `369`,
    668: `370`,
    669: `371`,
    67: `18`,
    670: `371`,
    671: `371`,
    672: `372`,
    673: `372`,
    674: `373`,
    675: `374`,
    676: `374`,
    677: `375`,
    678: `375`,
    679: `375`,
    68: `18`,
    680: `375`,
    681: `375`,
    682: `375`,
    683: `376`,
    684: `376`,
    685: `377`,
    686: `378`,
    687: `379`,
    688: `381`,
    689: `381`,
    69: `18`,
    690: `382`,
    691: `382`,
    692: `382`,
    693: `383`,
    694: `383`,
    695: `384`,
    696: `384`,
    697: `385`,
    698: `386`,
    699: `387`,
    7: `2`,
    70: `18`,
    700: `387`,
    701: `388`,
    702: `388`,
    703: `389`,
    704: `390`,
    705: `390`,
    706: `391`,
    707: `391`,
    708: `392`,
    709: `393`,
    71: `18`,
    710: `394`,
    711: `398`,
    712: `398`,
    713: `400`,
    714: `400`,
    715: `401`,
    716: `401`,
    717: `401`,
    718: `402`,
    719: `402`,
    72: `18`,
    720: `402`,
    721: `404`,
    722: `404`,
    723: `404`,
    724: `405`,
    725: `405`,
    726: `405`,
    727: `405`,
    728: `407`,
    729: `407`,
    73: `19`,
    730: `408`,
    731: `409`,
    732: `409`,
    733: `410`,
    734: `410`,
    735: `410`,
    736: `411`,
    737: `411`,
    738: `412`,
    739: `412`,
    74: `19`,
    740: `412`,
    741: `414`,
    742: `414`,
    743: `414`,
    744: `415`,
    745: `415`,
    746: `415`,
    747: `416`,
    748: `416`,
    749: `417`,
    75: `19`,
    750: `417`,
    751: `417`,
    752: `419`,
    753: `419`,
    754: `419`,
    755: `420`,
    756: `420`,
    757: `420`,
    758: `421`,
    759: `421`,
    76: `20`,
    760: `422`,
    761: `422`,
    762: `422`,
    763: `424`,
    764: `424`,
    765: `424`,
    766: `425`,
    767: `425`,
    768: `425`,
    769: `426`,
    77: `20`,
    770: `426`,
    771: `427`,
    772: `427`,
    773: `427`,
    774: `429`,
    775: `429`,
    776: `429`,
    777: `430`,
    778: `430`,
    779: `430`,
    78: `20`,
    780: `431`,
    781: `431`,
    782: `432`,
    783: `432`,
    784: `432`,
    785: `434`,
    786: `434`,
    787: `434`,
    788: `435`,
    789: `435`,
    79: `20`,
    790: `435`,
    791: `436`,
    792: `436`,
    793: `437`,
    794: `437`,
    795: `437`,
    796: `439`,
    797: `439`,
    798: `439`,
    799: `440`,
    8: `2`,
    80: `20`,
    800: `440`,
    801: `440`,
    802: `441`,
    803: `441`,
    804: `442`,
    805: `442`,
    806: `442`,
    807: `444`,
    808: `445`,
    809: `445`,
    81: `20`,
    810: `446`,
    811: `447`,
    812: `448`,
    813: `448`,
    814: `449`,
    815: `449`,
    816: `450`,
    817: `451`,
    818: `452`,
    819: `453`,
    82: `20`,
    820: `453`,
    821: `454`,
    822: `455`,
    823: `456`,
    824: `457`,
    825: `457`,
    826: `458`,
    827: `459`,
    828: `460`,
    829: `460`,
    83: `20`,
    830: `460`,
    831: `461`,
    832: `461`,
    833: `462`,
    834: `463`,
    835: `464`,
    836: `465`,
    837: `465`,
    838: `465`,
    839: `467`,
    84: `20`,
    840: `467`,
    841: `468`,
    842: `469`,
    843: `470`,
    844: `472`,
    845: `472`,
    846: `472`,
    847: `474`,
    848: `475`,
    849: `475`,
    85: `20`,
    850: `476`,
    851: `477`,
    852: `477`,
    853: `478`,
    854: `478`,
    855: `479`,
    856: `479`,
    857: `480`,
    858: `481`,
    859: `483`,
    86: `20`,
    860: `484`,
    861: `486`,
    862: `487`,
    863: `488`,
    864: `489`,
    865: `489`,
    866: `490`,
    867: `490`,
    868: `491`,
    869: `491`,
    87: `20`,
    870: `491`,
    871: `492`,
    872: `494`,
    873: `495`,
    874: `496`,
    875: `496`,
    876: `496`,
    877: `497`,
    878: `498`,
    879: `498`,
    88: `20`,
    880: `499`,
    881: `499`,
    882: `499`,
    883: `500`,
    884: `502`,
    885: `503`,
    886: `503`,
    887: `504`,
    888: `506`,
    889: `507`,
    89: `20`,
    890: `508`,
    891: `509`,
    892: `510`,
    893: `510`,
    894: `511`,
    895: `512`,
    896: `513`,
    897: `514`,
    898: `516`,
    899: `517`,
    9: `2`,
    90: `20`,
    900: `517`,
    901: `517`,
    902: `520`,
    903: `520`,
    904: `521`,
    905: `521`,
    906: `522`,
    907: `523`,
    908: `524`,
    909: `525`,
    91: `20`,
    910: `525`,
    911: `526`,
    912: `527`,
    913: `527`,
    914: `528`,
    915: `528`,
    916: `529`,
    917: `529`,
    918: `530`,
    919: `531`,
    92: `22`,
    920: `532`,
    921: `532`,
    922: `533`,
    923: `534`,
    924: `535`,
    925: `536`,
    926: `536`,
    927: `537`,
    928: `538`,
    929: `539`,
    93: `24`,
    930: `541`,
    931: `542`,
    932: `542`,
    933: `542`,
    934: `543`,
    935: `543`,
    936: `544`,
    937: `545`,
    938: `545`,
    939: `546`,
    94: `24`,
    940: `547`,
    941: `547`,
    942: `548`,
    943: `549`,
    944: `549`,
    945: `550`,
    946: `551`,
    947: `551`,
    948: `552`,
    949: `553`,
    95: `25`,
    950: `553`,
    951: `553`,
    952: `554`,
    953: `554`,
    954: `555`,
    955: `556`,
    956: `556`,
    957: `557`,
    958: `558`,
    959: `558`,
    96: `25`,
    960: `559`,
    961: `559`,
    962: `560`,
    963: `561`,
    964: `561`,
    965: `562`,
    966: `564`,
    967: `565`,
    968: `565`,
    969: `565`,
    97: `26`,
    970: `566`,
    971: `566`,
    972: `567`,
    973: `568`,
    974: `568`,
    975: `569`,
    976: `570`,
    977: `570`,
    978: `571`,
    979: `572`,
    98: `26`,
    980: `572`,
    981: `573`,
    982: `574`,
    983: `574`,
    984: `575`,
    985: `575`,
    986: `576`,
    987: `577`,
    988: `577`,
    989: `578`,
    99: `27`,
    990: `580`,
    991: `580`,
    992: `581`,
    993: `581`,
    994: `582`,
    995: `583`,
    996: `584`,
    997: `584`,
    998: `584`,
    999: `585`
    },
  appClear: `CA==`,
  appClearMap: {
    },
  companionInfo: null,
  extraPages: 0,
  stateKeys: 1,
  stateSize: 96,
  unsupported: [],
  version: 13,
  warnings: []
  };
const _ETH = {
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"uint256","name":"elem2","type":"uint256"}],"internalType":"struct T0","name":"v441","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"},{"internalType":"uint256","name":"elem2","type":"uint256"}],"indexed":false,"internalType":"struct T0","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T2","name":"_a","type":"tuple"}],"name":"_reach_e1","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T2","name":"_a","type":"tuple"}],"name":"_reach_e2","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"indexed":false,"internalType":"struct T4","name":"_a","type":"tuple"}],"name":"_reach_e3","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T2","name":"_a","type":"tuple"}],"name":"_reach_e4","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"indexed":false,"internalType":"struct T4","name":"_a","type":"tuple"}],"name":"_reach_e5","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T2","name":"_a","type":"tuple"}],"name":"_reach_e6","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T2","name":"v444","type":"tuple"}],"name":"_reachp_1","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T2","name":"v447","type":"tuple"}],"name":"_reachp_2","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T4","name":"v450","type":"tuple"}],"name":"_reachp_3","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T2","name":"v453","type":"tuple"}],"name":"_reachp_4","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T4","name":"v456","type":"tuple"}],"name":"_reachp_5","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T2","name":"v459","type":"tuple"}],"name":"_reachp_6","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x6080620016839081380391601f1980601f85011683019360018060401b0392848610848711176200036f578160609286926040988952833981010312620003855783519260608401848110848211176200036f5785528051845260209385858301519286830193845201519486820195865243600355865191818301838110878211176200036f578852600080935260049060ff82541662000358577f4f453854b6a90dba7951e2aeeb8854b2b5f80576fe444dd363a967d18d9175e460808a5133815283518682015287518c8201528a516060820152a15180159081156200034b575b50156200033457835134036200031d5787519360808501858110888211176200030a57895282850197848952898601908582526060870192868452338852518a5280518252514301804311620002f757438110620002f357825260018086554381558a5196516001600160a01b0316858801529851868b015251606086015251608080860191909152845260a0840186811185821017620002e05788528351958611620002cd57600254908782811c92168015620002c2575b83831014620002af5750601f811162000263575b508093601f8611600114620001fb57505091839491849394620001ef575b50501b916000199060031b1c1916176002555b516112f890816200038b8239f35b015192503880620001ce565b600283528183209493928692918316915b888383106200024857505050106200022e575b505050811b01600255620001e1565b015160001960f88460031b161c191690553880806200021f565b8587015188559096019594850194879350908101906200020c565b60028352818320601f870160051c810191838810620002a4575b601f0160051c019087905b82811062000298575050620001b0565b84815501879062000288565b90915081906200027d565b634e487b7160e01b845260229052602483fd5b91607f16916200019c565b634e487b7160e01b835260419052602482fd5b634e487b7160e01b845260418252602484fd5b8580fd5b634e487b7160e01b865260118452602486fd5b634e487b7160e01b855260418352602485fd5b602490600989519163100960cb60e01b8352820152fd5b602490600889519163100960cb60e01b8352820152fd5b90506001541438620000e3565b885163100960cb60e01b8152600781840152602490fd5b634e487b7160e01b600052604160045260246000fd5b600080fdfe6080604081815260048036101561001e575b505050361561001c57005b005b600092833560e01c9081631e93b0f114610e0a575080632e92842114610c765780634b2f7b42146109a6578063573b85101461071e57806383230757146106ff578063952f22b314610408578063ab53f2c614610398578063d3c64a7a146102005763f5a239bc036100115760203660031901126101fc578282516100a281610e60565b526100ac36610f7c565b9060018454036101e5576100d06100c1610ec7565b60208082518301019101610fc5565b9160ff8254166101ce577f794b69bffed607ab45148da3c7f9c613ba8e4d2d82b625153563a3a2f536190a84518061010984338361101a565b0390a15180159081156101c2575b50156101ab5760608201514310610194573461017d57508280808093602060018060a01b0382511691015190828215610174575bf11561016a5790602091818055816001556101646110a7565b51908152f35b51903d90823e3d90fd5b506108fc61014b565b602490601384519163100960cb60e01b8352820152fd5b602490601284519163100960cb60e01b8352820152fd5b602490601184519163100960cb60e01b8352820152fd5b90506001541438610117565b835163100960cb60e01b8152601081840152602490fd5b602490600f84519163100960cb60e01b8352820152fd5b8280fd5b5060203660031901126101fc5782825161021981610e60565b5261022336610f7c565b90600384540361038157610247610238610ec7565b60208082518301019101611157565b9160ff82541661036a577fa02f9e9e84cc99a78168965468765447ea5d90bf01d61078964695bb27c512d484518061028084338361101a565b0390a151801590811561035e575b50156103475760a0820151431061033057346103195781516001600160a01b0391908216330361030b5760015b156102f457508380836080829594606084960151169101519082821561017457f11561016a5790602091818055816001556101646110a7565b602490601f85519163100960cb60e01b8352820152fd5b3382606085015116146102bb565b602490601e84519163100960cb60e01b8352820152fd5b602490601d84519163100960cb60e01b8352820152fd5b602490601c84519163100960cb60e01b8352820152fd5b9050600154143861028e565b835163100960cb60e01b8152601b81840152602490fd5b602490601a84519163100960cb60e01b8352820152fd5b50503461040457816003193601126104045781546103b4610ec7565b91805193849283526020828185015284518093850152815b8381106103ed57505060608094508284010152601f80199101168101030190f35b8086018201518782016060015286945081016103cc565b5080fd5b509190806003193601126104045781815161042281610e60565b5261042c3661111f565b60038354036106e85761043d610ec7565b93610452602095868082518301019101611157565b60ff8254166106d1577f96f2af55ece43786e26847d05832d9f91ffae7a8d817c12bd4071763bf894d8884518061048a8633836111b5565b0390a1825180159081156106c5575b50156106ae5760a081015143101561069757346106805780516001600160a01b03903390821603610669576104cc611034565b9181815116835287810151948884019586528260608301511692878501938452610510888b608086015194606089019586520151946080880195865201514361107d565b9360a0860194855260058a55600197438955828a519751168c8801525189870152511660608501525160808401525160a08301525160c082015260c0815261055781610eac565b8051916001600160401b0383116106565750610574600254610e26565b601f811161061c575b508590601f83116001146105bb5792829391839287946105b0575b50501b916000199060031b1c19161760025551908152f35b015192503880610598565b60028652868620919083601f198116885b8a8883831061060557505050106105ec575b505050811b01600255610164565b015160001960f88460031b161c191690553880806105de565b8686015188559096019594850194879350016105cc565b6106469060028752878720601f850160051c81019189861061064c575b601f0160051c0190611066565b3861057d565b9091508190610639565b634e487b7160e01b865260419052602485fd5b845163100960cb60e01b8152601981850152602490fd5b835163100960cb60e01b8152601881840152602490fd5b835163100960cb60e01b8152601781840152602490fd5b835163100960cb60e01b8152601681840152602490fd5b90506001541438610499565b835163100960cb60e01b8152601581840152602490fd5b815163100960cb60e01b8152601481860152602490fd5b5050346104045781600319360112610404576020906001549051908152f35b509190602092836003193601126101fc5782825161073b81610e60565b5261074536610f7c565b906001918285540361098f5761076a61075c610ec7565b878082518301019101610fc5565b9060ff835416610978577fcf0e8bec53cd91fa87ecf8f6f405ac75914a22acdb92a3553ee5c294fee815968551806107a384338361101a565b0390a151801590811561096d575b501561095657606081015143101561093f578581019081513403610928576107d7611034565b9160018060a01b03808351168452868251938a86019485520191825188860190815261081660608701923384525194608088019580018652514361107d565b9460a0870195865260038b55438955838a519751168c8801525189870152516060860152511660808401525160a08301525160c082015260c0815261085a81610eac565b8051916001600160401b0383116106565750610877600254610e26565b601f81116108f9575b508590601f83116001146108b25792829391839287946105b05750501b916000199060031b1c19161760025551908152f35b60028652868620919083601f198116885b8a888383106108e257505050106105ec57505050811b01600255610164565b8686015188559096019594850194879350016108c3565b6109229060028752878720601f850160051c81019189861061064c57601f0160051c0190611066565b38610880565b845163100960cb60e01b8152600e81850152602490fd5b835163100960cb60e01b8152600d81840152602490fd5b835163100960cb60e01b8152600c81840152602490fd5b9050835414386107b1565b845163100960cb60e01b8152600b81850152602490fd5b835163100960cb60e01b8152600a81840152602490fd5b50919080600319360112610404578181516109c081610e60565b526109ca3661111f565b81519360a085016001600160401b03811186821017610c63578352838552602094858101916109f76111dc565b835284820191610a056111dc565b835260608101610a136111dc565b81526080820194610a226111dc565b86526005895403610c4c57610a46610a38610ec7565b8b8082518301019101611205565b9460ff855416610c35577ff410ae3157431721924ef1b12812af4e6e901fb5ee3d00e646d08375df1ca362895180610a7f8b33836111b5565b0390a187518015908115610c29575b5015610c125760a0860151431015610bfb5734610be4578886019360018060a01b0395338787511603610bcd578c60808901519a01519960019a8b03918b8311610bba5750938c9591938695938f8796908e80610aee8a99948a9561107d565b1684528286515260028287510152808551528185510152600286515285510152518c8114600014610ba357505050515b808952610b368d888a51169251990198895190611263565b90828215610b9a575bf115610b90578693610b5f85948a86958695511693510151905190611263565b90828215610b87575bf115610b7c578290818055556101646110a7565b5051903d90823e3d90fd5b506108fc610b68565b85513d88823e3d90fd5b506108fc610b3f565b91925090610bb2575051610b1e565b905051610b1e565b634e487b7160e01b8e526011905260248dfd5b60249060258c519163100960cb60e01b8352820152fd5b885163100960cb60e01b8152602481870181905290fd5b885163100960cb60e01b8152602381870152602490fd5b885163100960cb60e01b8152602281870152602490fd5b90506001541438610a8e565b885163100960cb60e01b8152602181870152602490fd5b875163100960cb60e01b81528085018b9052602490fd5b634e487b7160e01b855260418252602485fd5b5060203660031901126101fc57828251610c8f81610e60565b52610c9936610f7c565b906005845403610df357610cbd610cae610ec7565b60208082518301019101611205565b9160ff825416610ddc577f85bba4f12ee548563e5364ae202a127c474a1931b802b9f898e735963540adcd845180610cf684338361101a565b0390a1518015908115610dd0575b5015610db95760a08201514310610da25734610d8b5781516001600160a01b03919082163303610d7e5760015b15610d6757508380836060829594839551169101519082821561017457f11561016a5790602091818055816001556101646110a7565b602490602b85519163100960cb60e01b8352820152fd5b3382858501511614610d31565b602490602a84519163100960cb60e01b8352820152fd5b602490602984519163100960cb60e01b8352820152fd5b602490602884519163100960cb60e01b8352820152fd5b90506001541438610d04565b835163100960cb60e01b8152602781840152602490fd5b602490602684519163100960cb60e01b8352820152fd5b8490346104045781600319360112610404576020906003548152f35b90600182811c92168015610e56575b6020831014610e4057565b634e487b7160e01b600052602260045260246000fd5b91607f1691610e35565b602081019081106001600160401b03821117610e7b57604052565b634e487b7160e01b600052604160045260246000fd5b60c081019081106001600160401b03821117610e7b57604052565b60e081019081106001600160401b03821117610e7b57604052565b604051906000600254610ed981610e26565b808552600191808316908115610f5d5750600114610f17575b5050829003601f01601f191682016001600160401b03811183821017610e7b57604052565b600260009081526020935091836000805160206112cc8339815191525b838510610f4957505050508301013880610ef2565b805488860183015293019284908201610f34565b919250506020925060ff191682850152151560051b8301013880610ef2565b6020906003190112610fac5760405190602082016001600160401b03811183821017610e7b576040526004358252565b600080fd5b51906001600160a01b0382168203610fac57565b90816080910312610fac576040519060808201906001600160401b03821183831017610e7b57606091604052610ffa81610fb1565b835260208101516020840152604081015160408401520151606082015290565b6001600160a01b0390911681529051602082015260400190565b6040519061104182610e91565b8160a06000918281528260208201528260408201528260608201528260808201520152565b818110611071575050565b60008155600101611066565b9190820191828111611091578210610fac57565b634e487b7160e01b600052601160045260246000fd5b6110b2600254610e26565b806110ba5750565b601f81116001146110cd57506000600255565b600260005261111290601f0160051c6000805160206112cc833981519152017f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf611066565b6000602081208160025555565b6040906003190112610fac5760408051919082016001600160401b03811183821017610e7b5760405260043582526024356020830152565b908160c0910312610fac5760a06040519161117183610e91565b61117a81610fb1565b8352602081015160208401526040810151604084015261119c60608201610fb1565b606084015260808101516080840152015160a082015290565b6001600160a01b039091168152815160208083019190915290910151604082015260600190565b60408051919082016001600160401b03811183821017610e7b5760405260006020838281520152565b908160c0910312610fac5760a06040519161121f83610e91565b61122881610fb1565b83526020810151602084015261124060408201610fb1565b60408401526060810151606084015260808101516080840152015160a082015290565b6000929183918115918215611280575b50501561127d5750565b80fd5b818192939650028281048214831517156112b75780956112a35704143880611273565b634e487b7160e01b84526012600452602484fd5b634e487b7160e01b84526011600452602484fdfe405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acea164736f6c6343000811000a`,
  BytecodeLen: 5763,
  version: 9,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:57:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:63:55:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:68:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:83:57:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:84:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:90:59:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:119:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Alice": Alice,
  "Bob": Bob
  };
export const _APIs = {
  };
