const Node = {
  "id": "810f8a0326e8916f",
  "type": "change",
  "z": "6f89a22d2f227f45",
  "name": "Forbered SQL \\n insert statement",
  "rules": [
    {
      "t": "set",
      "p": "data",
      "pt": "msg",
      "to": "data ~> | $ | {\t    \"observedAt\": observedAt ~> $toMillis() ~> $fromMillis(\"[Y0001]-[M01]-[D01] [H01]:[m01]:[s01]\")\t} |",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "sqlvalues",
      "pt": "msg",
      "to": "data.values\t~> $map(\t    function($v, $k, $i)\t    {\t        \"('\"  & $$.data.observedAt & \"', \"\t        & \"'\" & $v.type & \"', \"\t        & \"'\" & $v.value & \"')\"\t    })\t~> $join(\", \")",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 580,
  "y": 1360,
  "wires": [
    [
      "1389004c174aa262"
    ]
  ],
  "_order": 58
}

module.exports = Node;