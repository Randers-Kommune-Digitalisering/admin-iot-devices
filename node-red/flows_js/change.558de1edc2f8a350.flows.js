const Node = {
  "id": "558de1edc2f8a350",
  "type": "change",
  "z": "b1af099441f07c56",
  "name": "Opsætning af \\n EnergyKey standard-format",
  "rules": [
    {
      "t": "set",
      "p": "template",
      "pt": "msg",
      "to": "{}",
      "tot": "json"
    },
    {
      "t": "set",
      "p": "template.header",
      "pt": "msg",
      "to": "[\t   {\t       \"col\": 0,\t       \"type\": \"tekst\",\t       \"description\": \"Benyttes som navn for måler ved oprettelse. Hvis ikke angivet benyttes målernummer som navn.\",\t       \"value\": \"maalerNavn\"\t   },\t   {\t       \"col\": [1, 2, 3, 4, 5],\t       \"description\": \"Benyttes ikke i header\"\t   }\t]",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "template.values",
      "pt": "msg",
      "to": "[\t    {\t        \"col\": 0,\t        \"type\": \"artskode\",\t        \"value\": \"artskode\",\t        \"description\": \"Målepunkts art for værdiserie 1 (valgfrit)\",\t        \"note\": \"Benyttes til målepunktsnøgle for værdiserie 1\"\t    },\t    {\t        \"col\": 1,\t        \"type\": \"tekst\",\t        \"value\": \"title\",\t        \"description\": \"Målepunkts navn for værdiserie 1 (valgfrit)\",\t        \"note\": \"Benyttes som navn for målepunkt ved oprettelse. Hvis ikke angivet benyttes standard navn for værdiserie 1.\"\t    },    \t    {\t        \"col\": 2,\t        \"type\": \"typekode\",\t        \"value\": \"typekode\",\t        \"description\": \"Målepunkts type for værdiserie 1 (valgfrit)\",\t        \"note\": \"Benyttes som type for målepunkt ved oprettelse. Hvis ikke angivet sættes type ud fra enhed for første modtaget værdi for værdiserie 1.\"\t    }\t]",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "template.body",
      "pt": "msg",
      "to": "[\t    {\t       \"col\": 0,\t       \"type\": \"tekst\",\t       \"description\": \"Indstallationsnummer\",\t       \"note\": \"Benyttes som unik nøgle. Hvis installationsnummeret ikke er angivet, benyttes målernummeret alene som unik nøgle i EnergyKey\"\t    },\t    {\t       \"col\": 1,\t       \"type\": \"tekst\",\t       \"description\": \"Målernummer\",\t       \"note\": \"Benyttes som unik nøgle\"\t    },\t    {\t       \"col\": 2,\t       \"type\": \"energiartskode\",\t       \"description\": \"Energiart for måler (valgfrit)\",\t       \"note\": \"Benyttes for kombineret unik nøgle. Det er muligt at benytte energiarten for kombineret unik nøgle i EnergyKey sammen med installations- og/eller målernummeret. Dette kræver speciel konfiguration i EnergyKey løsningen\"\t    },\t    {\t       \"col\": 3,\t       \"type\": \"tidspunkt\",\t       \"description\": \"Tidspunkt for aflæsning\"\t    },\t    {\t       \"col\": 4,\t       \"type\": \"tidspunkt\",\t       \"description\": \"Fra tidspunkt for aflæsning\",\t       \"note\": \"Benyttes hvis værdi er forbrug/produktion/faktor for en periode\"\t    },\t    {\t       \"col\": 5,\t       \"type\": \"tekst\",\t       \"description\": \"Kommentar/mærkning/status til aflæsning\",\t       \"note\": \"Benyttes som `låst` tekst note for aflæsningen i EnergyKey\"\t    }\t]",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 780,
  "y": 760,
  "wires": [
    [
      "3599cd499c7ce2d4"
    ]
  ]
}

module.exports = Node;