def flatten(dictionary):
    output = {}
    flattenHelper("", dictionary, output)
    return output

def flattenHelper(prefix, input, output):
    if (type(input) != dict):
        output[prefix] = input
        return

    
