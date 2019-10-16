//ES6 spread operator

const userList = ['Robin', 'Andrew', 'Dan'];
const additionalUser = 'Jordan';
const allUsers = [ ...userList, additionalUser ];

//ES6 spread operator ROUND 2

const userList = ['Robin', 'Andrew'];
const additionalUser = ['Jordan', 'Dan'];
const allUsers = [ ...userList, ...additionalUser ];

////////  React Spread operator FOR OBJECTS
    //spreading the object + variable
    const userNames = { firstname: 'Robin', lastname: 'Wieruch'};
    const age = 28;
    const user = { ...userNames, age };

    // => output: {firstname: 'Robin', lastname: 'Wieruch', age: 28 }

    //spreading the object + object
    const userNames = { firstname: 'Robin', lastname: 'Wieruch'};
    const userAge = { age: 28 } ;
    const user = { ...userNames, ...age };

    // => output: {firstname: 'Robin', lastname: 'Wieruch', age: 28 }

