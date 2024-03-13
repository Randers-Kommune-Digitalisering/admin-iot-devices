const Node = {
  "id": "39f9626aa61eddab",
  "type": "change",
  "z": "fa50bce83191652b",
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
      "df53e884252ae877"
    ]
  ]
}

module.exports = Node;