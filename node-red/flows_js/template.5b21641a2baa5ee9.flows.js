const Node = {
  "id": "5b21641a2baa5ee9",
  "type": "template",
  "z": "7b3a886e00fb2ea6",
  "g": "d775d098207c37e7",
  "name": "Sæt timezone til København",
  "field": "sql",
  "fieldType": "msg",
  "format": "sql",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 480,
  "y": 160,
  "wires": [
    [
      "32c7a57618f2acb5"
    ]
  ],
  "icon": "node-red/timer.svg"
}

Node.template = `
/*SET GLOBAL time_zone = 'GMT';*/
SET GLOBAL time_zone = 'Europe/Copenhagen'; 
`

module.exports = Node;