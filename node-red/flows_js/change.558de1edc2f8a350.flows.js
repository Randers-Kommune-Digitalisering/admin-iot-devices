const Node = {
  "id": "558de1edc2f8a350",
  "type": "change",
  "z": "b1af099441f07c56",
  "name": "Opsætning af \\n EnergyKey standard-format",
  "rules": [
    {
      "t": "set",
      "p": "header",
      "pt": "msg",
      "to": "[\t   {\t       \"col\": 0,\t       \"type\": \"tekst\",\t       \"description\": \"Benyttes som navn for måler ved oprettelse. Hvis ikke angivet benyttes målernummer som navn.\",\t       \"value\": maalerNavn\t   },\t   {\t       \"col\": [1, 2, 3, 4, 5],\t       \"description\": \"Benyttes ikke i header\"\t   }\t]",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "values",
      "pt": "msg",
      "to": "[\t    {\t        \"col\": 0,\t        \"type\": \"artskode\",\t        \"description\": \"Målepunkts art for værdiserie 1 (valgfrit)\",\t        \"note\": \"Benyttes til målepunktsnøgle for værdiserie 1\"\t    },\t    {\t        \"col\": 1,\t        \"type\": \"tekst\",\t        \"description\": \"Målepunkts navn for værdiserie 1 (valgfrit)\",\t        \"note\": \"Benyttes som navn for målepunkt ved oprettelse. Hvis ikke angivet benyttes standard navn for værdiserie 1.\"\t    },    \t    {\t        \"col\": 2,\t        \"type\": \"typekode\",\t        \"description\": \"Målepunkts type for værdiserie 1 (valgfrit)\",\t        \"note\": \"Benyttes som type for målepunkt ved oprettelse. Hvis ikke angivet sættes type ud fra enhed for første modtaget værdi for værdiserie 1.\"\t    }\t]",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 940,
  "y": 760,
  "wires": [
    [
      "f635612008c85757",
      "608fa82e404a9071"
    ]
  ]
}

module.exports = Node;