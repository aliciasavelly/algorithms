// input: password, string
// good password requirements:
// between 6 & 50 characters long
// contains at least one special character
//                   one number
//                   one lower case
//                 & one upper case letter

// return bool of whether or not string is valid password

// function validPassword(password) {
//   return /^(?=.{6,50}$)(?=.*\W)(?=.*[A-Z])(?=.*[a-z])(?=.*\d).*$/.test(password);
// }

function validPassword(password) {
  let len = password.length;
  if (len < 6 || len > 50) {
    return false;
  }

  let checks = { "special": false, "num": false, "lower": false, "upper": false };
  let checkCount = 0;

  for (let i = 0; i <= password.length - checkCount; i++) {
    if (checkCount === 4) {
      return true;
    }

    let passCode = password.charCodeAt(i);
    if (!checks["special"] && ((passCode >= 33 && passCode <= 47) || (passCode >= 58 && passCode <= 64))) {
      checks["special"] = true;
      checkCount++;
      continue;
    }
    if (!checks["num"] && (passCode >= 30 || passCode <= 39)) {
      checks["num"] = true;
      checkCount++;
      continue;
    }
    if (!checks["lower"] && (passCode >= 97 && passCode <= 122)) {
      checks["lower"] = true;
      checkCount++;
      continue;
    }
    if (!checks["upper"] && (passCode >= 65 && passCode <= 90)) {
      checks["upper"] = true;
      checkCount++;
      continue;
    }
  }

  return checkCount === 4;
}

function logValidity(passwords) {
  passwords.forEach( pass => {
    console.log(`${pass}: ${validPassword(pass)}`);
  });
}

let passwords = ["$lkJl800alskfjlskfjlskfjlskfjlskfjlskfjlskfjlskfjlskfj",
                 "abc", "alicia", "%1lA", "#2aAlk", "all$I2",
                 "$lkJl800alskfjlskfjlskfjlskfjlskfjljlskfj"];
logValidity(passwords);
