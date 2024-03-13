const Node = {
  "id": "b90c2c6d969dd151",
  "type": "change",
  "z": "bd0288d62c2263f6",
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
      "b64a200c9dfcec72"
    ]
  ]
}

module.exports = Node;