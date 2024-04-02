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
      "to": "[ $distinct( payload.observedAt ) @ $timestamp .\t(\t    measurementPoint.propertyName @ $key . \t    {\t        \"observedAt\": $timestamp,\t        $key: $$.payload[ observedAt = $timestamp and type = $key ].value\t    }\t    ~> $merge()\t) ]",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 470,
  "y": 500,
  "wires": [
    [
      "6c319c813ef0163d"
    ]
  ]
}

module.exports = Node;