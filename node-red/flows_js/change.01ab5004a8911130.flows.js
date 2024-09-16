const Node = {
  "id": "01ab5004a8911130",
  "type": "change",
  "z": "31eb0ab05cfa21a8",
  "d": true,
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
  "x": 1170,
  "y": 700,
  "wires": [
    []
  ]
}

module.exports = Node;