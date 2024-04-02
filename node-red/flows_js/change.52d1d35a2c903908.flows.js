const Node = {
  "id": "52d1d35a2c903908",
  "type": "change",
  "z": "d0465df3f1def3b2",
  "name": "Konvertering \\n til CSV",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "(\t    $separator := \";\";\t    $linebreak := \"\\r\\n\";\t    \t    [\t        header @ $col . [ $col.value & $separator ]\t        ~> $join() ,\t\t        body @ $row . [[ $row @ $col . [ $col.value & $separator ] ] ~> $join() ]\t    ]\t    ~> $join($linebreak)\t)",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 1170,
  "y": 500,
  "wires": [
    [
      "59c726871bf3ae10",
      "61820f9f944b9bfc"
    ]
  ]
}

module.exports = Node;