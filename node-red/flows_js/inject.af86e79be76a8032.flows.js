const Node = {
  "id": "af86e79be76a8032",
  "type": "inject",
  "z": "dc028cb1b3d1491a",
  "name": "",
  "props": [
    {
      "p": "payload"
    }
  ],
  "repeat": "",
  "crontab": "",
  "once": false,
  "onceDelay": 0.1,
  "topic": "",
  "payload": "{\"payload\":{\"fieldCount\":0,\"affectedRows\":1,\"insertId\":24,\"serverStatus\":2,\"warningCount\":0,\"message\":\"\",\"protocol41\":true,\"changedRows\":0},\"requestBody\":[{\"appKey\":\"123\",\"devEui\":\"123\",\"name\":\"123\",\"energiart\":5,\"serviceProfile\":-1,\"payloadDecoder\":-1,\"isTemplate\":false,\"templateUid\":3}],\"_msgid\":\"789e22cb1ce2fe34\",\"_event\":\"node:78d77be38d59d605\",\"req\":{\"_readableState\":{\"objectMode\":false,\"highWaterMark\":16384,\"buffer\":{\"head\":null,\"tail\":null,\"length\":0},\"length\":0,\"pipes\":[],\"flowing\":true,\"ended\":true,\"endEmitted\":true,\"reading\":false,\"constructed\":true,\"sync\":false,\"needReadable\":false,\"emittedReadable\":false,\"readableListening\":false,\"resumeScheduled\":false,\"errorEmitted\":false,\"emitClose\":true,\"autoDestroy\":true,\"destroyed\":true,\"errored\":null,\"closed\":true,\"closeEmitted\":true,\"defaultEncoding\":\"utf8\",\"awaitDrainWriters\":null,\"multiAwaitDrain\":false,\"readingMore\":false,\"dataEmitted\":true,\"decoder\":null,\"encoding\":null},\"_events\":{},\"_eventsCount\":1,\"socket\":\"[internal]\",\"httpVersionMajor\":1,\"httpVersionMinor\":1,\"httpVersion\":\"1.1\",\"complete\":true,\"rawHeaders\":[\"content-length\",\"135\",\"content-type\",\"application/json\",\"proxy-connection\",\"Keep-Alive\",\"x-original-proto\",\"https\",\"sec-fetch-dest\",\"empty\",\"sec-fetch-mode\",\"cors\",\"sec-fetch-site\",\"same-origin\",\"sec-ch-ua-mobile\",\"?0\",\"sec-ch-ua-platform\",\"\\\"Windows\\\"\",\"sec-ch-ua\",\"\\\"Not A(Brand\\\";v=\\\"99\\\", \\\"Opera\\\";v=\\\"107\\\", \\\"Chromium\\\";v=\\\"121\\\"\",\"x-scheme\",\"https\",\"x-original-uri\",\"/api/devices/add\",\"x-forwarded-scheme\",\"https\",\"x-forwarded-port\",\"443\",\"x-forwarded-host\",\"crispy-space-yodel-76q9jg56x7jhwvg-5173.app.github.dev\",\"x-forwarded-proto\",\"https\",\"x-real-ip\",\"10.240.4.161\",\"x-request-id\",\"e8e5c6338ff325436ddd8fd5f0ec1b6e\",\"referer\",\"https://crispy-space-yodel-76q9jg56x7jhwvg-5173.app.github.dev/newsensor\",\"origin\",\"http://localhost:5173\",\"x-forwarded-for\",\"10.240.4.161\",\"accept-language\",\"en-US,en;q=0.9,da-DK;q=0.8,da;q=0.7\",\"accept-encoding\",\"gzip, deflate, br\",\"user-agent\",\"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36 OPR/107.0.0.0\",\"host\",\"localhost:1880\",\"accept\",\"*/*\",\"connection\",\"close\"],\"rawTrailers\":[],\"aborted\":false,\"upgrade\":false,\"url\":\"/devices/add\",\"method\":\"POST\",\"statusCode\":null,\"statusMessage\":null,\"client\":\"[internal]\",\"_consuming\":true,\"_dumped\":false,\"baseUrl\":\"\",\"originalUrl\":\"/devices/add\",\"_parsedUrl\":{\"protocol\":null,\"slashes\":null,\"auth\":null,\"host\":null,\"port\":null,\"hostname\":null,\"hash\":null,\"search\":null,\"query\":null,\"pathname\":\"/devices/add\",\"path\":\"/devices/add\",\"href\":\"/devices/add\",\"_raw\":\"/devices/add\"},\"params\":{},\"query\":{},\"res\":\"[internal]\",\"body\":[{\"appKey\":\"123\",\"devEui\":\"123\",\"name\":\"123\",\"energiart\":5,\"serviceProfile\":-1,\"payloadDecoder\":-1,\"isTemplate\":false,\"templateUid\":3}],\"_body\":true,\"route\":{\"path\":\"/devices/add\",\"stack\":[{\"name\":\"cookieParser\",\"keys\":[],\"regexp\":{\"__enc__\":true,\"type\":\"regexp\",\"data\":\"/^\\\\/?$/i\"},\"method\":\"post\"},{\"name\":\"httpMiddleware\",\"keys\":[],\"regexp\":{\"__enc__\":true,\"type\":\"regexp\",\"data\":\"/^\\\\/?$/i\"},\"method\":\"post\"},{\"name\":\"corsHandler\",\"keys\":[],\"regexp\":{\"__enc__\":true,\"type\":\"regexp\",\"data\":\"/^\\\\/?$/i\"},\"method\":\"post\"},{\"name\":\"metricsHandler\",\"keys\":[],\"regexp\":{\"__enc__\":true,\"type\":\"regexp\",\"data\":\"/^\\\\/?$/i\"},\"method\":\"post\"},{\"name\":\"jsonParser\",\"keys\":[],\"regexp\":{\"__enc__\":true,\"type\":\"regexp\",\"data\":\"/^\\\\/?$/i\"},\"method\":\"post\"},{\"name\":\"urlencodedParser\",\"keys\":[],\"regexp\":{\"__enc__\":true,\"type\":\"regexp\",\"data\":\"/^\\\\/?$/i\"},\"method\":\"post\"},{\"name\":\"multipartParser\",\"keys\":[],\"regexp\":{\"__enc__\":true,\"type\":\"regexp\",\"data\":\"/^\\\\/?$/i\"},\"method\":\"post\"},{\"name\":\"rawBodyParser\",\"keys\":[],\"regexp\":{\"__enc__\":true,\"type\":\"regexp\",\"data\":\"/^\\\\/?$/i\"},\"method\":\"post\"},{\"name\":\"<anonymous>\",\"keys\":[],\"regexp\":{\"__enc__\":true,\"type\":\"regexp\",\"data\":\"/^\\\\/?$/i\"},\"method\":\"post\"},{\"name\":\"<anonymous>\",\"keys\":[],\"regexp\":{\"__enc__\":true,\"type\":\"regexp\",\"data\":\"/^\\\\/?$/i\"},\"method\":\"post\"}],\"methods\":{\"post\":true}},\"cookies\":{},\"signedCookies\":{}},\"res\":{}}",
  "payloadType": "json",
  "x": 710,
  "y": 340,
  "wires": [
    [
      "c05a98f8e26a71fc"
    ]
  ]
}

module.exports = Node;