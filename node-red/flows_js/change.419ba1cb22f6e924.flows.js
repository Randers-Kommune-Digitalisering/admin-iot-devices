const Node = {
  "id": "419ba1cb22f6e924",
  "type": "change",
  "z": "6f89a22d2f227f45",
  "d": true,
  "name": "Tesdata 2",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "{\"id\":\"emu-sensor_0f65\",\"type\":\"energy-monitor\",\"observedAt\":\"2024-02-21T15:28:34.453Z\",\"name\":\"102CEFFFFE010F65\",\"values\":[{\"type\":\"Active_Energy_Import_T1\",\"value\":488543},{\"type\":\"Active_Energy_Import_T2\",\"value\":0},{\"type\":\"Active_Energy_Export_T1\",\"value\":0},{\"type\":\"Active_Energy_Export_T2\",\"value\":0},{\"type\":\"errorcode\",\"value\":0}]}",
      "tot": "json"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 280,
  "y": 60,
  "wires": [
    [
      "3f7d611f923f8a95"
    ]
  ]
}

module.exports = Node;