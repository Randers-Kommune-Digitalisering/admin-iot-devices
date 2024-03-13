const Node = {
  "id": "b7d8f938218d0b30",
  "type": "subflow",
  "name": "DB Connect (3)",
  "info": "",
  "category": "",
  "in": [
    {
      "x": 80,
      "y": 100,
      "wires": [
        {
          "id": "4848d73ca6b3f6e7"
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
          "id": "2306eab80cd7306d",
          "port": 0
        },
        {
          "id": "ea46274e8d84ec4c",
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
        "id": "2306eab80cd7306d",
        "port": 0
      },
      {
        "id": "a40ca2ad6ee2db6c",
        "port": 0
      }
    ]
  }
}

module.exports = Node;