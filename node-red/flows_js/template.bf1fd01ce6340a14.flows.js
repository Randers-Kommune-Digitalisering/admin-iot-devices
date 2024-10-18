const Node = {
  "id": "bf1fd01ce6340a14",
  "type": "template",
  "z": "b05183ed45071965",
  "g": "8a834a469e6df311",
  "name": "Indsæt profiler",
  "field": "sql",
  "fieldType": "msg",
  "format": "handlebars",
  "syntax": "mustache",
  "template": "",
  "output": "str",
  "x": 680,
  "y": 2840,
  "wires": [
    [
      "81f145696168c870"
    ]
  ]
}

Node.template = `
INSERT INTO {{global.metadataTablename.deviceprofile}}
    (os2uid, name)
VALUES {{{values}}}
`

module.exports = Node;