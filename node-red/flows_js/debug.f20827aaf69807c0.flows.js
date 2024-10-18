const Node = {
  "id": "f20827aaf69807c0",
  "type": "debug",
  "z": "b05183ed45071965",
  "name": "Added os2uid",
  "active": true,
  "tosidebar": true,
  "console": true,
  "tostatus": false,
  "complete": "{\t    \"os2uid\": response.id,\t    \"deviceEui\": response.deviceEUI,\t    \"affectedDeviceCount\": payload.affectedRows\t}",
  "targetType": "jsonata",
  "statusVal": "",
  "statusType": "auto",
  "x": 1560,
  "y": 780,
  "wires": []
}

module.exports = Node;