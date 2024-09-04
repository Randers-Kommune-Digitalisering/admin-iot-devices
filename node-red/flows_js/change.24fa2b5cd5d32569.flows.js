const Node = {
  "id": "24fa2b5cd5d32569",
  "type": "change",
  "z": "1b1f52cac1d78ec2",
  "d": true,
  "name": "Testdata",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "{\"deviceUid\":1,\"name\":\"El-import (T2)\",\"inputenhed\":\"W\",\"enhed\":\"kW\",\"energiartskode\":0,\"typekode\":1,\"propertyName\":\"Active_Energy_Import_T2\",\"pulsEnhedRatio\":1}",
      "tot": "json"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 400,
  "y": 680,
  "wires": [
    [
      "ec0115a36d7e4595"
    ]
  ]
}

module.exports = Node;