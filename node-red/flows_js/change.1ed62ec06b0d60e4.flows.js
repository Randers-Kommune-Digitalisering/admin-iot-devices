const Node = {
  "id": "1ed62ec06b0d60e4",
  "type": "change",
  "z": "b05183ed45071965",
  "g": "3693f92d86c2d588",
  "name": "Data",
  "rules": [
    {
      "t": "set",
      "p": "os2config",
      "pt": "global",
      "to": "{}",
      "tot": "json"
    },
    {
      "t": "set",
      "p": "os2config.url",
      "pt": "global",
      "to": "OS2IOT_API_URL",
      "tot": "env"
    },
    {
      "t": "set",
      "p": "os2config.appId",
      "pt": "global",
      "to": "OS2IOT_APP_ID",
      "tot": "env"
    },
    {
      "t": "set",
      "p": "os2config.appId",
      "pt": "global",
      "to": "$globalContext(\"os2config\").appId ~> $number()",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "os2config.dataTargetId",
      "pt": "global",
      "to": "OS2IOT_DATATARGET_ID",
      "tot": "env"
    },
    {
      "t": "set",
      "p": "os2config.dataTargetId",
      "pt": "global",
      "to": "$globalContext(\"os2config\").dataTargetId~> $number()",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "os2config.serviceProfileId",
      "pt": "global",
      "to": "OS2IOT_SERVICEPROFILE_ID",
      "tot": "env"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 390,
  "y": 60,
  "wires": [
    [
      "b2e962250d1c6f55"
    ]
  ]
}

module.exports = Node;