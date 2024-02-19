const Node = {
  "id": "099cbfe3705e3105",
  "type": "change",
  "z": "5f6ef472b7d9e1e9",
  "name": "Saml målere til enkelt CSV",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "(\t    $linebreak := \"\\r\\n\";\t    \t    payload ~> $join($linebreak)\t)",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 360,
  "y": 1120,
  "wires": [
    [
      "e52d80fed6524176",
      "6b5c39c64499ad0e"
    ]
  ]
}

module.exports = Node;