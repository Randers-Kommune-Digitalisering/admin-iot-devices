const Node = {
  "id": "3fae11612faaefd0",
  "type": "change",
  "z": "d0465df3f1def3b2",
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
  "x": 510,
  "y": 500,
  "wires": [
    [
      "64e1beb7c57a8a36"
    ]
  ]
}

module.exports = Node;