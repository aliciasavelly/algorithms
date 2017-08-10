function pangram(sentence) {
    let chars = sentence.split("");
    let charsSet = new Set;

    for (let i = 0; i < chars.length; i++) {
        if (chars[i] !== " ") {
            charsSet.add(chars[i].toLowerCase());
        }
        if (charsSet.size > 26) {
            return "not pangram";
        }
    }

    if (charsSet.size != 26) {
        return "not pangram";
    }
    return "pangram";
}

console.log(pangram("We promptly judged antique ivory buckles for the next prize") === "pangram");
console.log(pangram("We promptly judged antique ivory buckles for the prize") === "not pangram");
