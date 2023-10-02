const Node = {
  "id": "fa51ef0d19d2f39e",
  "type": "subflow",
  "name": "Database connector",
  "info": "",
  "category": "",
  "in": [
    {
      "x": 80,
      "y": 100,
      "wires": [
        {
          "id": "e623a28d4079ecc9"
        }
      ]
    }
  ],
  "out": [
    {
      "x": 970,
      "y": 100,
      "wires": [
        {
          "id": "37b427c91f49ec62",
          "port": 0
        },
        {
          "id": "396bcfa72f274450",
          "port": 0
        }
      ]
    }
  ],
  "env": [],
  "meta": {},
  "color": "#3FADB5",
  "inputLabels": [
    "Query input"
  ],
  "outputLabels": [
    "Result output"
  ],
  "icon": "node-red/db.svg",
  "status": {
    "x": 1000,
    "y": 240,
    "wires": [
      {
        "id": "37b427c91f49ec62",
        "port": 0
      },
      {
        "id": "d98aac09357405c2",
        "port": 0
      }
    ]
  },
  "_order": 2
}

module.exports = Node;