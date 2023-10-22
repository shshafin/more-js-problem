const friends = [1, 2, 3, 4, 545, 6, 7, 788, 9];

// splice : ("which index" , "how many index" , "adding items ")
let partial = friends.splice(4, 4, 100, 200, 300, 400, 500);
console.log(partial);

console.log(friends);
