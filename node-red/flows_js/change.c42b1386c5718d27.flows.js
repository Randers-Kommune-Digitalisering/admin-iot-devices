const Node = {
  "id": "c42b1386c5718d27",
  "type": "change",
  "z": "1b1f52cac1d78ec2",
  "name": "Testdata",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "{\"deviceUid\":1,\"name\":\"El-import (T1)\",\"inputenhed\":\"W\",\"enhed\":\"kW\",\"energiartskode\":0,\"typekode\":1,\"propertyName\":\"Active_Energy_Import_T1\",\"pulsEnhedRatio\":1}",
      "tot": "json"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 400,
  "y": 640,
  "wires": [
    [
      "29e7d43764c0825e"
    ]
  ]
}

module.exports = Node;