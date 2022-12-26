const accountId = 144553;
let accountEmail = 'singhshiv0001@gmail.com';
var accountPassword = "12345";
accountCity = "Lucknow";
let accountState;

// accountId =123;

accountEmail = 'ss123@gmail.com';
accountPassword = "321";
accountCity = "Sitapur"

/*
prefer not to use var because of issue in block scope and functional scope
*/

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])