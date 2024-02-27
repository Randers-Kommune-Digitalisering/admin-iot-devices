const Node = {
  "id": "78ead266c4a86ed3",
  "type": "change",
  "z": "b1af099441f07c56",
  "name": "Opsætning af datasæt (Emu)",
  "rules": [
    {
      "t": "set",
      "p": "maaler",
      "pt": "msg",
      "to": "{\t   \"navn\": \"emu-sensor_0f65\",\t   \"installationsnummer\": \"\",\t   \"nummer\": \"emu-sensor_0f65\",\t   \"energiartskode\": 1\t}",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "maalepunkter",
      "pt": "msg",
      "to": "[\t    {\t        \"title\": \"Energi\",\t        \"key\": \"Active_Energy_Import_T1\",\t        \"type\": \"Wh\",\t        \"artskode\": 1,\t        \"typekode\": 1\t    }\t]",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 340,
  "y": 180,
  "wires": [
    [
      "61eeecae2bf70623"
    ]
  ]
}

module.exports = Node;