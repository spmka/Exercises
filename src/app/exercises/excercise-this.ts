import { Exercise } from './exercise';

export class ExerciseThis extends Exercise {
  public constructor() {
    super();
    this.name = 'This';
    this.question = 'What is logged when you call the run() method?';
    this.info = `"this" is not allways what we think it is
`;
    this.infoUrl = null;
    this.infoUrlName = null;
    this.code = `public run() {
  this.doLog('please look into the console log!');
  console.log('the current components this: ', this);
  const obj1 = {
    name: 'obj1',
    func1: function() {
      console.log('Hello from obj1.func1()');
      console.log('func1 this: ', this);
    },
    func2: () => {
      console.log('Hello from obj1.func2()');
      console.log('func2 this: ', this);
    },
    func3: function() {
      console.log('Hello from obj1.func3()');
      console.log('func3 this: ', this);
    }.bind(this)
  };
  obj1.func1();
  obj1.func2();
  obj1.func3();
  const obj2 = {
    name: 'obj2',
    func1: obj1.func1,
    func2: obj1.func2,
    func3: obj1.func3,
    func4: null,
    func5: null,
    func6: null
  };
  obj2.func1();
  obj2.func2();
  obj2.func3();
  obj2.func4 = obj1.func1.bind(obj1);
  obj2.func4();
  obj2.func5 = obj1.func2.bind(obj2);
  obj2.func5();
  obj2.func6 = obj1.func3.bind(obj2);
  obj2.func6();
  }
`;
    this.solutionUrl = null;
    this.solution = `Please run exercise.
`;
  }

  public run() {
    this.doLog('please look into the console log!');
    console.log('the current components this: ', this);
    const obj1 = {
      name: 'obj1',
      func1: function() {
        console.log('Hello from obj1.func1()');
        console.log('func1 this: ', this);
      },
      func2: () => {
        console.log('Hello from obj1.func2()');
        console.log('func2 this: ', this);
      },
      func3: function() {
        console.log('Hello from obj1.func3()');
        console.log('func3 this: ', this);
      }.bind(this)
    };
    obj1.func1();
    obj1.func2();
    obj1.func3();
    const obj2 = {
      name: 'obj2',
      func1: obj1.func1,
      func2: obj1.func2,
      func3: obj1.func3,
      func4: null,
      func5: null,
      func6: null
    };
    obj2.func1();
    obj2.func2();
    obj2.func3();
    obj2.func4 = obj1.func1.bind(obj1);
    obj2.func4();
    obj2.func5 = obj1.func2.bind(obj2);
    obj2.func5();
    obj2.func6 = obj1.func3.bind(obj2);
    obj2.func6();
  }
}
