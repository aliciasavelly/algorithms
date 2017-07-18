def flatten(dictionary = -1):
    if dictionary == -1 or dictionary == {} or type(dictionary) != dict:
        return -1

    output = {}
    flattenHelper("", dictionary, output)
    return output

def flattenHelper(prefix, input, output):
    if (type(input) != dict):
        output[prefix[1:len(prefix)]] = input
        return

    for key in input:
        newPrefix = prefix + "." + str(key)
        flattenHelper(newPrefix, input[key], output)

dictionary = {
    "a": 1,
    "b": 2,
    "c": 3,
    "d": 4,
    "e": {
        "f": 5,
        "g": 6,
        "h": {
            "i": 7,
            "j": {
                "k": 8
            }
        }
    }
}

dictionary2 = {
    "a": 1,
    "b": 2,
    "c": 3,
    "d": 4,
    "e": {
        "f": 5,
        "g": 6,
        "h": {
            "i": 7,
            "j": {
                "k": 8
            }
        }
    },
    9: 10
}

print flatten(dictionary)
print flatten(dictionary) == {'a': 1, 'e.h.i': 7, 'c': 3, 'b': 2, 'd': 4, 'e.f': 5, 'e.g': 6, 'e.h.j.k': 8}

print flatten(dictionary2)
print flatten(dictionary2) == {'a': 1, 'e.h.i': 7, 'c': 3, 'b': 2, 'd': 4, 'e.f': 5, 'e.g': 6, '9': 10, 'e.h.j.k': 8}

print flatten() == -1
print flatten({}) == -1
print flatten([1, 2, 3, 4]) == -1
