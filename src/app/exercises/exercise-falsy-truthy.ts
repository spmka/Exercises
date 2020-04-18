import { Exercise } from './exercise';

export class ExerciseFalsyTruthy extends Exercise {
  private x: number;

  public constructor() {
    super();
    this.name = 'Falsy-Thruthy';
    this.question = 'What is logged when you call the run() method?';
    this.info = `falsy = false, 0, "", null, undefined, NaN
Truthy = ! falsy
`;
    this.infoUrl = null;
    this.infoUrlName = null;
    this.code = `public run() {
  let x = {
    y: {
      z: 1
    },
    b: 0
  };
  this.doLog('!undefined          -> ' + !undefined);
  this.doLog('!null               -> ' + !null);
  this.doLog('!0                  -> ' + !0);
  this.doLog('!x                  -> ' + !x);
  this.doLog('!!x                 -> ' + !!x);
  this.doLog('x.a                 -> ' + x.a);
  this.doLog('!x.a                -> ' + !x.a);
  this.doLog('!!x.a               -> ' + !!x.a);
  this.doLog('x.a || 1            -> ' + (x.a || 1));
  this.doLog('x.a ?? 1            -> ' + (x.a ?? 1) + '     (Typescript 3.7)');
  this.doLog('x.b                 -> ' + x.b);
  this.doLog('!x.b                -> ' + !x.b);
  this.doLog('!!x.b               -> ' + !!x.b);
  this.doLog('x.b || 1            -> ' + (x.b || 1));
  this.doLog('x.b ?? 1            -> ' + (x.b ?? 1) + '     (Typescript 3.7)');
  this.doLog('x.y.z               -> ' + x.y.z);
  this.doLog('x.y?.a              -> ' + (x.y?.a)     + '   (Typescript 3.7)');
  this.doLog('x?.a?.b?.c          -> ' + (x?.a?.b?.c) + '   (Typescript 3.7)');
  this.doLog('0 == true           -> ' + (0 == true));
  this.doLog('0 === true          -> ' + (0 === true));
  this.doLog('0 == false          -> ' + (0 == false));
  this.doLog('0 === false         -> ' + (0 === false));
  this.doLog('undefined == true   -> ' + (undefined == true));
  this.doLog('undefined === true  -> ' + (undefined === true));
  this.doLog('undefined == false  -> ' + (undefined == false));
  this.doLog('undefined === false -> ' + (undefined === false));
  this.doLog('null == true        -> ' + (null == true));
  this.doLog('null === true       -> ' + (null === true));
  this.doLog('null == false       -> ' + (null == false));
  this.doLog('null === false      -> ' + (null === false));
  this.doLog('null === true       -> ' + (null === true));
  this.doLog('null == false       -> ' + (null == false));
  this.doLog('null === false      -> ' + (null === false));
  this.doLog('null == 0           -> ' + (null == 0));
  this.doLog('null === 0          -> ' + (null === 0));
  this.doLog('null >  0           -> ' + (null > 0));
  this.doLog('null <  0           -> ' + (null < 0));
  this.doLog('null >= 0           -> ' + (null >= 0));
  this.doLog('null <= 0           -> ' + (null <= 0));
  this.doLog('0 == "0"            -> ' + (0 == '0'));
  this.doLog('0 === "0"           -> ' + (0 === '0'));
  this.doLog('true >  false       -> ' + (true > false));
  this.doLog('true >= false       -> ' + (true >= false));
  this.doLog('true >  0           -> ' + (true > 0));
  this.doLog('true >= 0           -> ' + (true >= 0));
  this.doLog('true <  0           -> ' + (true < 0));
  this.doLog('true <= 0           -> ' + (true <= 0));
}
`;
    this.solutionUrl = null;
    this.solution = `Please run exercise.
`;
  }

  public run() {
    let x = {
      y: {
        z: 1
      },
      b: 0
    };
    this.doLog('!undefined          -> ' + !undefined);
    this.doLog('!null               -> ' + !null);
    this.doLog('!0                  -> ' + !0 + '        !!! Attention !!!');
    this.doLog('!x                  -> ' + !x);
    this.doLog('!!x                 -> ' + !!x);
    this.doLog('x.a                 -> ' + x.a);
    this.doLog('!x.a                -> ' + !x.a);
    this.doLog('!!x.a               -> ' + !!x.a);
    this.doLog('x.a || 1            -> ' + (x.a || 1));
    this.doLog('x.a ?? 1            -> ' + (x.a ?? 1) + '           (Typescript 3.7)');
    this.doLog('x.b                 -> ' + x.b);
    this.doLog('!x.b                -> ' + !x.b + '        !!! Attention !!!');
    this.doLog('!!x.b               -> ' + !!x.b);
    this.doLog('x.b || 1            -> ' + (x.b || 1) + '           !!! Attention !!!');
    this.doLog('x.b ?? 1            -> ' + (x.b ?? 1) + '           (Typescript 3.7)');
    this.doLog('x.y.z               -> ' + x.y.z);
    this.doLog('x.y?.a              -> ' + (x.y?.a)     + '   (Typescript 3.7)');
    this.doLog('x?.a?.b?.c          -> ' + (x?.a?.b?.c) + '   (Typescript 3.7)');
    this.doLog('0 == true           -> ' + (0 == true));
    this.doLog('0 === true          -> ' + (0 === true));
    this.doLog('0 == false          -> ' + (0 == false) +  '        !!! Attention !!!');
    this.doLog('0 === false         -> ' + (0 === false));
    this.doLog('undefined == true   -> ' + (undefined == true));
    this.doLog('undefined === true  -> ' + (undefined === true));
    this.doLog('undefined == false  -> ' + (undefined == false) +  '       !!! Attention !!!');
    this.doLog('undefined === false -> ' + (undefined === false));
    this.doLog('null == true        -> ' + (null == true));
    this.doLog('null === true       -> ' + (null === true));
    this.doLog('null == false       -> ' + (null == false) +  '       !!! Attention !!!');
    this.doLog('null === false      -> ' + (null === false));
    this.doLog('null === true       -> ' + (null === true));
    this.doLog('null == false       -> ' + (null == false));
    this.doLog('null === false      -> ' + (null === false));
    this.doLog('null == 0           -> ' + (null == 0));
    this.doLog('null === 0          -> ' + (null === 0));
    this.doLog('null >  0           -> ' + (null > 0));
    this.doLog('null <  0           -> ' + (null < 0));
    this.doLog('null >= 0           -> ' + (null >= 0) +  '        !!! Attention !!!');
    this.doLog('null <= 0           -> ' + (null <= 0) +  '        !!! Attention !!!');
    this.doLog('0 == "0"            -> ' + (0 == '0'));
    this.doLog('0 === "0"           -> ' + (0 === '0'));
    this.doLog('true >  false       -> ' + (true > false));
    this.doLog('true >= false       -> ' + (true >= false));
    this.doLog('true >  0           -> ' + (true > 0));
    this.doLog('true >= 0           -> ' + (true >= 0));
    this.doLog('true <  0           -> ' + (true < 0));
    this.doLog('true <= 0           -> ' + (true <= 0));
  }
}
