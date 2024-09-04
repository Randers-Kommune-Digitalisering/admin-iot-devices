const Node = {
  "id": "01ab5004a8911130",
  "type": "change",
  "z": "31eb0ab05cfa21a8",
  "name": "Refactoring \\n af data",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "[ $distinct( payload.observedAt ) @ $timestamp .\t(\t    measurementPoints.name @ $key . \t    (\t        $data :=  $$.payload[ observedAt = $timestamp and type = $key ].value;\t    {\t        \"observedAt\": $timestamp,\t        $key: $data ~> $type() = \"array\" ? $data[0] : $data\t    }\t    )\t    ~> $merge()\t) ]",
      "tot": "jsonata"
    },
    {
      "t": "delete",
      "p": "data",
      "pt": "msg"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 750,
  "y": 660,
  "wires": [
    [
      "eadbee3188bc80e3"
    ]
  ]
}

module.exports = Node;