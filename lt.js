function compareJSON(json1, json2) {
  let len1 = 0;
  let len2 = 0;

  for (let key in json1) len1++;

  for (let key in json2) len2++;

  if (len1 !== len2) return false;

  for (let key in json1) {
    if (typeof json1[key] != object && json2[key] !== json1[key]) {
      return false;
    } else if (json1[key] == object) {
      if (json2[key] == undefined) {
        return false;
      } else {
        let comparison = compareJSON(json1[key], json2[key]);

        if (comparison === false) {
          return false;
        }
      }
    }
  }

  return true;
}

{ a: 42 }
{ a: 42, b: 43 }

{ a: 0 }
{ a: false }

[ 'a', 'b', 'c']




{
    "glossary": {
        "a": null,
        "title": "example glossary",
		"GlossDiv": {
            "title": "S",
			"GlossList": {
          "GlossEntry": {
                    "ID": "SGML",
					"SortAs": "SGML",
					"GlossTerm": "Standard Generalized Markup Language",
					"Acronym": "SGML",
					"Abbrev": "ISO 8879:1986",
					"GlossDef": {
                        "para": "A meta-markup language, used to create markup languages such as DocBook.",
						"GlossSeeAlso": ["GML", "XML"]
                    },
					"GlossSee": "markup"
                }
            }
        }
    }
}
