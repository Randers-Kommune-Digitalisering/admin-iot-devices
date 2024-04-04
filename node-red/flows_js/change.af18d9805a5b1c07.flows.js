const Node = {
  "id": "af18d9805a5b1c07",
  "type": "change",
  "z": "31eb0ab05cfa21a8",
  "name": "Refactoring \\n af data",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "[ $distinct( data.observedAt ) @ $timestamp .\t(\t    measurementPoints.name @ $key . \t    {\t        \"observedAt\": $timestamp,\t        $key: $$.data[ observedAt = $timestamp and type = $key ].value\t    }\t    ~> $merge()\t) ]",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 850,
  "y": 660,
  "wires": [
    [
      "eadbee3188bc80e3"
    ]
  ]
}

module.exports = Node;