const Node = {
  "id": "eecc2bdd5d8ff8a4",
  "type": "change",
  "z": "31eb0ab05cfa21a8",
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
  "x": 1130,
  "y": 400,
  "wires": [
    [
      "a635db4f0df453b0",
      "aa7dda6c92a1c175"
    ]
  ]
}

module.exports = Node;