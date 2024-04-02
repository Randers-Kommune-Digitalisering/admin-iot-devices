const Node = {
  "id": "8ddbaacc7ca980d4",
  "type": "change",
  "z": "31eb0ab05cfa21a8",
  "name": "Saml målepunkter fra samme devices",
  "rules": [
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "( payload.measurementPoint.deviceUid ~> $distinct() ) @ $deviceUid .  (\t\t{\t        \"device\": {\t        \"uid\": $deviceUid,\t        \"eui\": payload[measurementPoint.deviceUid = $deviceUid][0].measurementPoint.deviceEui,\t        \"name\": payload[measurementPoint.deviceUid = $deviceUid][0].measurementPoint.deviceName,\t        \"installationsnummer\": payload[measurementPoint.deviceUid = $deviceUid][0].measurementPoint.installationsnummer,\t        \"energiartskode\": payload[measurementPoint.deviceUid = $deviceUid][0].measurementPoint.deviceEnergiartskode\t    },\t    \"measurementPoints\": payload.measurementPoint[deviceUid = $deviceUid] ~> | $ | {\t    }, [\"deviceUid\", \"deviceName\", \"deviceEui\", \"dataTablename\", \"deviceEnergiartskode\"] |,\t    \"data\": payload[measurementPoint.deviceUid = $deviceUid].data\t   \t} )",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "payload ~> $type() = \"object\" ? [ payload ] : payload",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 630,
  "y": 500,
  "wires": [
    [
      "a12db41216e5d144",
      "28e095d114d603f6"
    ]
  ]
}

module.exports = Node;