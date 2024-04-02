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
      "to": "[ $distinct( data.observedAt ) @ $timestamp .\t(\t    measurementPoints.propertyName @ $key . \t    {\t        \"key\": $key,\t        \"observedAt\": $timestamp,\t        $key: $$.data[ observedAt = $timestamp and type = $key ].value\t    }\t    ~> $merge()\t) ]",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 790,
  "y": 760,
  "wires": [
    [
      "6c319c813ef0163d",
      "9dd56bf07e673af8"
    ]
  ]
}

module.exports = Node;