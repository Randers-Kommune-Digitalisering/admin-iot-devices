const Node = {
  "id": "3599cd499c7ce2d4",
  "type": "change",
  "z": "b1af099441f07c56",
  "name": "Refactoring \\n af data",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "[ $distinct( payload.observedAt ) @ $timestamp .\t(\t    maalepunkter.key @ $key . \t    {\t        \"observedAt\": $timestamp,\t        $key: $$.payload[ observedAt = $timestamp and type = $key ].value\t    }\t    ~> $merge()\t) ]",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 650,
  "y": 1340,
  "wires": [
    [
      "88af6f771c7f780f"
    ]
  ]
}

module.exports = Node;