const Node = {
  "id": "9bc763105c5c68a8",
  "type": "change",
  "z": "b05183ed45071965",
  "name": "OS2 Request (Add device)",
  "rules": [
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
      "to": "{\t  \"type\": \"LORAWAN\",\t  \"lorawanSettings\": {\t    \"skipFCntCheck\": false,\t    \"fCntUp\": 0,\t    \"nFCntDown\": 0,\t    \"devEUI\": payload.devEui,\t    \"serviceProfileID\": $globalContext(\"os2config\").serviceProfileId,\t    \"deviceProfileID\": payload.deviceProfileOs2Uid,\t    \"OTAAapplicationKey\": payload.appKey,\t    \"activationType\": \"OTAA\"\t  },\t  \"mqttInternalBrokerSettings\": {},\t  \"mqttExternalBrokerSettings\": {},\t  \"applicationId\": $globalContext(\"os2config\").appId,\t  \"name\": payload.name,\t  \"comment\": \"\",\t  \"deviceModelId\": null,\t  \"metadata\": \"{\\\"internalDeviceUid\\\":\\\"\" & payload.uid & \"\\\"}\"\t}",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "method",
      "pt": "msg",
      "to": "POST",
      "tot": "str"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 440,
  "y": 780,
  "wires": [
    [
      "cf39cb337407d753"
    ]
  ]
}

module.exports = Node;