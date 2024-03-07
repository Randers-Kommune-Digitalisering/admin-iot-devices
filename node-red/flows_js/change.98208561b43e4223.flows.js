const Node = {
  "id": "98208561b43e4223",
  "type": "change",
  "z": "330fa4345482a521",
  "name": "Format",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "payload ~> $lookup(( payload ~> $keys() ) [0] )",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "[ payload @ $tablename . ( $tablename ~> $contains(\"metadata\") = false ? [ $tablename ~> $replace(\"os2iot_\", \"\") ] ) ]",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 900,
  "y": 180,
  "wires": [
    [
      "aa2875bc3c03b82c"
    ]
  ]
}

module.exports = Node;