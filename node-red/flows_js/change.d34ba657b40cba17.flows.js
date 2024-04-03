const Node = {
  "id": "d34ba657b40cba17",
  "type": "change",
  "z": "1b1f52cac1d78ec2",
  "name": "Testdata",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "{\"id\":\"device-010f65\",\"deviceEui\":\"102ceffffe010f65\",\"observedAt\":\"2024-03-23T09:58:52.710Z\",\"values\":[{\"type\":\"Active_Energy_Import_T1\",\"value\":2015155}],\"rssi\":-94,\"batteryLevel\":-1}",
      "tot": "json"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 640,
  "y": 420,
  "wires": [
    [
      "0b9646d8e3ed38d1"
    ]
  ]
}

module.exports = Node;