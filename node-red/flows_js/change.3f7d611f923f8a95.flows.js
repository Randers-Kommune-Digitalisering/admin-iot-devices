const Node = {
  "id": "3f7d611f923f8a95",
  "type": "change",
  "z": "1b1f52cac1d78ec2",
  "name": "Tesdata 3",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "{\"id\":\"new-sensor_1234\",\"type\":\"energy-monitor\",\"observedAt\":\"2024-02-21T15:28:34.453Z\",\"name\":\"102CEFFFFE011234\",\"values\":[{\"type\":\"Active_Energy_Import_T1\",\"value\":488543},{\"type\":\"Active_Energy_Import_T2\",\"value\":0},{\"type\":\"Active_Energy_Export_T1\",\"value\":0},{\"type\":\"Active_Energy_Export_T2\",\"value\":0},{\"type\":\"errorcode\",\"value\":0}]}",
      "tot": "json"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 480,
  "y": 760,
  "wires": [
    []
  ]
}

module.exports = Node;