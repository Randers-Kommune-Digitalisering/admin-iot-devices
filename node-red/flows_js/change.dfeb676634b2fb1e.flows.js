const Node = {
  "id": "dfeb676634b2fb1e",
  "type": "change",
  "z": "31eb0ab05cfa21a8",
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
      "to": "[\t    {\t        \"col\": 0,\t        \"type\": \"tekst\",\t        \"description\": \"Benyttes som navn for måler ved oprettelse. Hvis ikke angivet benyttes målernummer som navn.\",\t\t        \"value\": {\t            \"obj\": \"device\",\t            \"key\": \"name\"\t        }\t    },\t    {\t        \"col\": [1, 2, 3, 4, 5],\t        \"description\": \"Benyttes ikke i header\"\t    }\t]",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "template.values",
      "pt": "msg",
      "to": "[\t    {\t        \"col\": 0,\t        \"type\": \"artskode\",\t        \"description\": \"Målepunktsart for værdiserie 1 (valgfrit)\",\t        \"note\": \"Benyttes til målepunktsnøgle for værdiserie 1\",\t        \t        \"valueHeader\":\t        {\t            \"obj\": \"@maalepunkt\",\t            \"key\": \"artskode\"\t        },\t        \"valueBody\":\t        {\t            \"obj\": \"@maalepunkt\",\t            \"key\": \"artskode\"\t        }\t    },\t    {\t        \"col\": 1,\t        \"type\": \"tekst/værdi\",\t        \"description\": \"I header: Målepunkts navn for værdiserie 1 (valgfrit). I datakrop: værdi for værdiserie 1\",\t        \"note\": \"Benyttes som navn for målepunkt ved oprettelse. Hvis ikke angivet benyttes standard navn for værdiserie 1.\",\t\t        \"valueHeader\":\t        {\t            \"obj\": \"@maalepunkt\",\t            \"key\": \"name\"\t        },\t        \"valueBody\":\t        {\t            \"obj\": \"@data\",\t            \"key\": \"@key\"\t        }\t    },    \t    {\t        \"col\": 2,\t        \"type\": \"typekode/enhedstekst\",\t        \"description\": \"I header: Målepunkts type for værdiserie 1 (valgfrit). I datakrop: enhed for værdiserie 1\",\t        \"note\": \"Benyttes som type for målepunkt ved oprettelse. Hvis ikke angivet sættes type ud fra enhed for første modtaget værdi for værdiserie 1.\",\t        \t        \"valueHeader\":\t        {\t            \"obj\": \"@maalepunkt\",\t            \"key\": \"typekode\"\t        },\t        \"valueBody\":\t        {\t            \"obj\": \"@maalepunkt\",\t            \"key\": \"enhed\"\t        }\t    }\t]",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "template.body",
      "pt": "msg",
      "to": "[\t    {\t       \"col\": 0,\t       \"type\": \"tekst\",\t       \"description\": \"Installationsnummer\",\t       \"note\": \"Benyttes som unik nøgle. Hvis installationsnummeret ikke er angivet, benyttes målernummeret alene som unik nøgle i EnergyKey\",\t       \t        \"value\": {\t            \"obj\": \"@maaler\",\t            \"key\": \"installationsnummer\"\t        }\t    },\t    {\t       \"col\": 1,\t       \"type\": \"tekst\",\t       \"description\": \"Målernummer\",\t       \"note\": \"Benyttes som unik nøgle\",\t       \t        \"value\": {\t            \"obj\": \"@maaler\",\t            \"key\": \"eui\"\t        }\t    },\t    {\t       \"col\": 2,\t       \"type\": \"energiartskode\",\t       \"description\": \"Energiart for måler (valgfrit)\",\t       \"note\": \"Benyttes for kombineret unik nøgle. Det er muligt at benytte energiarten for kombineret unik nøgle i EnergyKey sammen med installations- og/eller målernummeret. Dette kræver speciel konfiguration i EnergyKey løsningen\",\t       \t        \"value\": {\t            \"obj\": \"@maaler\",\t            \"key\": \"deviceEnergiartskode\"\t        }\t    },\t    {\t       \"col\": 3,\t       \"type\": \"tidspunkt\",\t       \"description\": \"Tidspunkt for aflæsning\",\t       \t        \"value\": {\t            \"obj\": \"@data\",\t            \"key\": \"observedAt\"\t        }\t    },\t    {\t       \"col\": 4,\t       \"type\": \"tidspunkt\",\t       \"description\": \"Fra tidspunkt for aflæsning\",\t       \"note\": \"Benyttes hvis værdi er forbrug/produktion/faktor for en periode\"\t    },\t    {\t       \"col\": 5,\t       \"type\": \"tekst\",\t       \"description\": \"Kommentar/mærkning/status til aflæsning\",\t       \"note\": \"Benyttes som `låst` tekst note for aflæsningen i EnergyKey\"\t    }\t]",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 600,
  "y": 660,
  "wires": [
    [
      "af18d9805a5b1c07"
    ]
  ],
  "icon": "node-red/file.svg"
}

module.exports = Node;