const Node = {
  "id": "f635612008c85757",
  "type": "change",
  "z": "b1af099441f07c56",
  "name": "Konvertering til \\n EnergyKey standard-format",
  "rules": [
    {
      "t": "set",
      "p": "header",
      "pt": "msg",
      "to": "(\t$n := header.col ~> $count;\t\t/* Set base header */\t( header.col ) @ $col .\t{\t    \"col\": $col,\t    \"value\": $.header[$col in col].value\t}\t\t/* Set headers for values */\t~> $append(\t    \t    maalepunkter @ $val # $id .\t    [\t    {\t        \"col\": $n + ($id * 3)\t    },\t    {\t        \"col\": $n + 1 + ($id * 3),\t        \"value\": $val.title\t    },\t    {\t        \"col\": $n + 2 +($id * 3)\t    }\t    ]\t    \t)\t)",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1280,
  "y": 760,
  "wires": [
    []
  ]
}

module.exports = Node;