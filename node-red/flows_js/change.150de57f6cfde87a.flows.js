const Node = {
  "id": "150de57f6cfde87a",
  "type": "change",
  "z": "31eb0ab05cfa21a8",
  "name": "Sæt unik artskode",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "/* Edit each device */\tpayload ~> | $ | {\t    \t    /* Set each measurement point */\t    \"measurementPoints\": measurementPoints @ $measurement # $index .\t    (\t        /* To an edited version of that measurement point */ \t        $measurement ~> | $ | {\t\t            /* to add artskode = 100 + index */\t            \"artskode\": 100 + $index\t            \t        },[] |\t    )\t} |",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 890,
  "y": 520,
  "wires": [
    [
      "1d01c50ff17a6674"
    ]
  ]
}

module.exports = Node;