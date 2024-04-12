const Node = {
  "id": "da52c9e0bca69b41",
  "type": "inject",
  "z": "b05183ed45071965",
  "d": true,
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
  "payload": "{\"dbResponse\":{\"fieldCount\":0,\"affectedRows\":1,\"insertId\":1,\"serverStatus\":2,\"warningCount\":0,\"message\":\"\",\"protocol41\":true,\"changedRows\":0},\"requestBody\":[{\"appKey\":\"de9ad4f466f45536d13e9527787ce8aa\",\"devEui\":\"102ceffffe010f64001123\",\"name\":\"Emu El-måler Grønhøjskolen\",\"energiart\":0,\"deviceProfile\":1,\"payloadDecoder\":3,\"isTemplate\":false,\"templateUid\":-1,\"uid\":1}]}",
  "payloadType": "json",
  "x": 110,
  "y": 740,
  "wires": [
    [
      "de0820800c17b1dd"
    ]
  ]
}

module.exports = Node;