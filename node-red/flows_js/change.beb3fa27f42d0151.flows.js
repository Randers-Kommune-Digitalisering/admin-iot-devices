const Node = {
  "id": "beb3fa27f42d0151",
  "type": "change",
  "z": "e4e3eef16c2dc327",
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
  "x": 220,
  "y": 1400,
  "wires": [
    [
      "e32b026e33fee87c"
    ]
  ]
}

module.exports = Node;