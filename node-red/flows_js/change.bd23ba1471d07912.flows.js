const Node = {
  "id": "bd23ba1471d07912",
  "type": "change",
  "z": "7597822579cc59c2",
  "name": "Set msg.data",
  "rules": [
    {
      "t": "set",
      "p": "data.values",
      "pt": "msg",
      "to": "(((payload.decodingInfo ~> $split(\"[\") ) [1] \t                        ~> $split(\"]\") ) [0]\t                        ~> $split(\",\") )\t@ $key # $index .\t{\t    \"type\": $key ~> $trim(),\t    \"value\": payload.counterValues[$index]\t}",
      "tot": "jsonata"
    },
    {
      "t": "delete",
      "p": "data.data",
      "pt": "msg"
    },
    {
      "t": "delete",
      "p": "data.productType",
      "pt": "msg"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 190,
  "y": 160,
  "wires": [
    [
      "fbae56af4d27fb1e"
    ]
  ]
}

module.exports = Node;