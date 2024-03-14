const Node = {
  "id": "cfe472f46471d577",
  "type": "inject",
  "z": "1b1f52cac1d78ec2",
  "name": "Testdata",
  "props": [
    {
      "p": "payload"
    }
  ],
  "repeat": "",
  "crontab": "",
  "once": false,
  "onceDelay": 0.1,
  "topic": "",
  "payload": "{\"deviceEui\":\"102ceffffe010f65\",\"observedAt\":\"2024-03-13T12:24:26.017Z\",\"values\":[{\"type\":\"Active_Energy_Import_T1\",\"value\":1699523},{\"type\":\"Active_Energy_Import_T2\",\"value\":0},{\"type\":\"Active_Energy_Export_T1\",\"value\":0},{\"type\":\"Active_Energy_Export_T2\",\"value\":0},{\"type\":\"errorcode\",\"value\":0}]}",
  "payloadType": "json",
  "x": 160,
  "y": 520,
  "wires": [
    [
      "0b9646d8e3ed38d1"
    ]
  ]
}

module.exports = Node;