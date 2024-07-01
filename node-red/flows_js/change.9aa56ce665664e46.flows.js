const Node = {
  "id": "9aa56ce665664e46",
  "type": "change",
  "z": "b05183ed45071965",
  "g": "8a834a469e6df311",
  "name": "Find relevante \\n \"Randers [2]\"-dekodere",
  "rules": [
    {
      "t": "set",
      "p": "decoderIdentifier",
      "pt": "msg",
      "to": "OS2IOT_DECODER_IDENTIFIER",
      "tot": "env"
    },
    {
      "t": "set",
      "p": "decoders",
      "pt": "msg",
      "to": "payload.data[name ~> $contains($$.decoderIdentifier)]",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "decoders",
      "pt": "msg",
      "to": "decoders ~> | $ | {\t    \"name\": name ~> $substring(11) ~> $trim()\t} |",
      "tot": "jsonata"
    },
    {
      "t": "delete",
      "p": "payload",
      "pt": "msg"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 970,
  "y": 1820,
  "wires": [
    [
      "0754a8045dd921cf"
    ]
  ]
}

module.exports = Node;