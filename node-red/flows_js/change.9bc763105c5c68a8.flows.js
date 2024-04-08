const Node = {
  "id": "9bc763105c5c68a8",
  "type": "change",
  "z": "b05183ed45071965",
  "name": "OS2 Request",
  "rules": [
    {
      "t": "set",
      "p": "appId",
      "pt": "msg",
      "to": "os2config.appId",
      "tot": "global"
    },
    {
      "t": "set",
      "p": "endpoint",
      "pt": "msg",
      "to": "iot-device",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "requestBody",
      "pt": "msg",
      "to": "{\t  \"type\": \"LORAWAN\",\t  \"lorawanSettings\": {\t    \"skipFCntCheck\": false,\t    \"fCntUp\": 0,\t    \"nFCntDown\": 0,\t    \"devEUI\": \"test enheds eui\",\t    \"serviceProfileID\": \"142325a4-7941-42c8-bb02-63013a9e4748\",\t    \"deviceProfileID\": \"f11f1f28-dd86-4034-aa1b-5b90aaaf5b35\",\t    \"OTAAapplicationKey\": \"Test AppKey\",\t    \"activationType\": \"OTAA\"\t  },\t  \"mqttInternalBrokerSettings\": {},\t  \"mqttExternalBrokerSettings\": {},\t  \"applicationId\": 167,\t  \"name\": \"Test navn\",\t  \"comment\": \"\",\t  \"deviceModelId\": null,\t  \"metadata\": \"{\\\"deviceUid\\\":\\\"test device UID\\\"}\"\t}",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 680,
  "y": 700,
  "wires": [
    []
  ]
}

module.exports = Node;