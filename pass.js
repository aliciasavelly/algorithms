// input: password, string
// good password requirements:
// between 6 & 50 characters long
// contains at least one special character
//                   one number
//                   one lower case
//                 & one upper case letter

// return bool of whether or not string is valid password

function validPassword(password) {
  return /^(?=.{6,50}$)(?=.*\W)(?=.*[A-Z])(?=.*[a-z])(?=.*\d).*$/.test(password);
}

function logValidity(passwords) {
  passwords.forEach( pass => {
    console.log(`${pass}: ${validPassword(pass)}`);
  });
}

let passwords = ["$lkJl800alskfjlskfjlskfjlskfjlskfjlskfjlskfjlskfjlskfj",
                 "abc", "alicia", "%1lA", "#2aAlk",
                 "$lkJl800alskfjlskfjlskfjlskfjlskfjljlskfj"];
logValidity(passwords);
