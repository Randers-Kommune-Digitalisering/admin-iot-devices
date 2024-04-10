const Node = {
  "id": "d1772bb6215c0690",
  "type": "change",
  "z": "b05183ed45071965",
  "name": "OS2 Request",
  "rules": [
    {
      "t": "set",
      "p": "endpoint",
      "pt": "msg",
      "to": "'iot-device/' & payload.os2uid",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "requestBody",
      "pt": "msg",
      "to": "/*{\t  \"type\": \"LORAWAN\",\t  \"lorawanSettings\": {\t    \"skipFCntCheck\": false,\t    \"fCntUp\": 0,\t    \"nFCntDown\": 0,\t    \"devEUI\": payload.devEui,\t    \"serviceProfileID\": $globalContext(\"os2config\").serviceProfileId,\t    \"deviceProfileID\": payload.deviceProfileUid,\t    \"OTAAapplicationKey\": payload.appKey,\t    \"activationType\": \"OTAA\"\t  },\t  \"mqttInternalBrokerSettings\": {},\t  \"mqttExternalBrokerSettings\": {},\t  \"applicationId\": $globalContext(\"os2config\").appId,\t  \"name\": payload.name,\t  \"comment\": \"\",\t  \"deviceModelId\": null,\t  \"metadata\": \"{\\\"internalDeviceUid\\\":\\\"\" & payload.uid & \"\\\"}\"\t}*/\t\t{\t    \"name\": payload.name,\t    \"location\": null,\t    \"commentOnLocation\": null,\t    \"comment\": \"\",\t    \"type\": \"LORAWAN\",\t    \"receivedMessagesMetadata\": [],\t    \"id\": 3864,\t    \"applicationId\": 167,\t    \"deviceModelId\": null,\t    \"latestReceivedMessage\": null,\t    \"lorawanSettings\": {\t        \"activationType\": \"OTAA\",\t        \"OTAAapplicationKey\": payload.appKey,\t        \"devEUI\": payload.devEui,\t        \"deviceProfileID\": payload.deviceProfileUid,\t        \"serviceProfileID\": $globalContext(\"os2config\").serviceProfileId,\t        \"skipFCntCheck\": false,\t        \"isDisabled\": false\t    },\t    \"createdBy\": 98,\t    \"updatedBy\": 98,\t    \"createdByName\": \"randers-os2iot-api-key\",\t    \"updatedByName\": \"randers-os2iot-api-key\"\t}",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "method",
      "pt": "msg",
      "to": "PUT",
      "tot": "str"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 400,
  "y": 1200,
  "wires": [
    [
      "c7f9d0b133c78288"
    ]
  ]
}

module.exports = Node;