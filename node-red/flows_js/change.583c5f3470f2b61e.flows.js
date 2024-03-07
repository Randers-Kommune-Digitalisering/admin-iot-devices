const Node = {
  "id": "583c5f3470f2b61e",
  "type": "change",
  "z": "7b3a886e00fb2ea6",
  "name": "Create insert \\n statement",
  "rules": [
    {
      "t": "set",
      "p": "valuesString",
      "pt": "msg",
      "to": "( payload ~> $keys() ) @ $key . ( payload ~> $lookup($key) ~> $string() ) ~> $join(\", \")",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "keysString",
      "pt": "msg",
      "to": "payload ~> $keys() ~> $join(\", \")",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "\"INSERT INTO \"\t& $flowContext(\"maaler_metadata_tablename\")\t& \" (\" \t& keysString\t& \") \"\t& \"VALUES (\"\t& valuesString\t& \") \"",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 470,
  "y": 520,
  "wires": [
    [
      "5598fbd836563add"
    ]
  ]
}

module.exports = Node;