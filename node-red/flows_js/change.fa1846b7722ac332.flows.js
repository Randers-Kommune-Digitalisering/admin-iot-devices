const Node = {
  "id": "fa1846b7722ac332",
  "type": "change",
  "z": "330fa4345482a521",
  "name": "",
  "rules": [
    {
      "t": "set",
      "p": "headers",
      "pt": "msg",
      "to": "{\t    \"Content-Disposition\": \"attachment;filename=\" & req.params.device & \".\" & req.params.format\t}",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 465,
  "y": 540,
  "wires": [
    [
      "ea4f17499382e8ea"
    ]
  ],
  "l": false
}

module.exports = Node;