const Node = {
  "id": "b9590935812fb132",
  "type": "change",
  "z": "b05183ed45071965",
  "g": "8a834a469e6df311",
  "name": "Find relevante \\n \"Randers\"-profiler",
  "rules": [
    {
      "t": "set",
      "p": "deviceProfileIdentifier",
      "pt": "msg",
      "to": "OS2IOT_DEVICEPROFILE_IDENTIFIER",
      "tot": "str"
    },
    {
      "t": "set",
      "p": "profiles",
      "pt": "msg",
      "to": "payload.result[name ~> $contains($$.deviceProfileIdentifier)]",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "profiles",
      "pt": "msg",
      "to": "profiles ~> | $ | {\t    \"name\": name ~> $replace(\"-\", \" \")\t} |",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 970,
  "y": 2600,
  "wires": [
    [
      "d24b6cbba7415b14"
    ]
  ]
}

module.exports = Node;