const Node = {
  "id": "ede7c513c5aa3449",
  "type": "inject",
  "z": "b05183ed45071965",
  "name": "test",
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
  "payload": "{\"dbResponse\":{\"fieldCount\":0,\"affectedRows\":1,\"insertId\":0,\"serverStatus\":2,\"warningCount\":0,\"message\":\"(Rows matched: 1  Changed: 1  Warnings: 0\",\"protocol41\":true,\"changedRows\":1},\"requestBody\":[{\"uid\":0,\"appKey\":\"de9ad4f466f45536d13e9527787ce8aa\",\"devEui\":\"1234567890987654\",\"name\":\"Emu El-måler Grønhøjskolens\",\"energiart\":0,\"installationsnummer\":\"\",\"deviceProfile\":1,\"payloadDecoder\":1,\"isTemplate\":0,\"templateUid\":-1}]}",
  "payloadType": "json",
  "x": 110,
  "y": 900,
  "wires": [
    [
      "eb7b7449d004ec78"
    ]
  ]
}

module.exports = Node;