const Node = {
  "id": "87678e23512820de",
  "type": "change",
  "z": "dc028cb1b3d1491a",
  "name": "Set response",
  "rules": [
    {
      "t": "set",
      "p": "requestBody",
      "pt": "msg",
      "to": "/* Adds UID to all objects in list */\trequestBody # $index . \t(\t    ( $ ~> $keys() ) @ $key .\t    {\t        $key: $ ~> $lookup($key)\t    } \t    ~> $append({\t        \"uid\": $index\t    })\t    ~> $merge()\t)",
      "tot": "jsonata"
    },
    {
      "t": "set",
      "p": "payload",
      "pt": "msg",
      "to": "{\t    \"dbResponse\": payload,\t    \"requestBody\": [ requestBody ~> | $ | {\t        \"uid\": $.uid + $$.payload.insertId[0]\t    } | ]\t}",
      "tot": "jsonata"
    }
  ],
  "action": "",
  "property": "",
  "from": "",
  "to": "",
  "reg": false,
  "x": 990,
  "y": 420,
  "wires": [
    [
      "ca3559c638357fa9"
    ]
  ]
}

module.exports = Node;