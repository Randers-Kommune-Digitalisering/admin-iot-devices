const Node = {
  "id": "51fc02586067098b",
  "type": "change",
  "z": "b1af099441f07c56",
  "name": "Headers",
  "rules": [
    {
      "t": "set",
      "p": "access_token",
      "pt": "msg",
      "to": "",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "headers",
      "pt": "msg",
      "to": "{\t    \"accept\": \"application/json\",\t    \"authorization\": \"Basic \" & access_token,\t    \"content-type\": \"application/json\"\t}",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 760,
  "y": 880,
  "wires": [
    [
      "28740381ed59925f"
    ]
  ]
}

module.exports = Node;