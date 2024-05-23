const accountId = 144553
let accountEmail = "malik@gmail.com"
var accountPassword = "12345"
accountCity = "hyderabad"

// accountId = 3454    | TypeError: Assignment to constant variable.

console.log(accountId)

accountEmail = "sohu12@gmail.com"
accountPassword = "54321"
accountCity = "Gopalganj"

console.table([accountId, accountEmail, accountPassword, accountCity])
