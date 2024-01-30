const Node = {
  "id": "e1970964296b3ae3",
  "type": "change",
  "z": "b1af099441f07c56",
  "name": "",
  "rules": [
    {
      "t": "set",
      "p": "headers",
      "pt": "msg",
      "to": "{\t    \"Content-Disposition\": \"attachment;filename=\" & req.params.sensor & \".\" & req.params.format\t}",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 405,
  "y": 420,
  "wires": [
    [
      "c8ac74761feddde4"
    ]
  ],
  "l": false
}

module.exports = Node;