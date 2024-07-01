const Node = {
  "id": "b349a5ac91dca97a",
  "type": "debug",
  "z": "87cc1f83fac0bd2e",
  "name": "ENV Checker Output",
  "active": true,
  "tosidebar": true,
  "console": true,
  "tostatus": false,
  "complete": "{\t    \"DEV_ENV\": $env(\"DEV_ENV\"),\t    \"OS2IOT\": {\t        \"OS2IOT_APP_ID\": $env(\"OS2IOT_APP_ID\"),\t        \"OS2IOT_DATATARGET_ID\": $env(\"OS2IOT_DATATARGET_ID\"),\t        \"OS2IOT_SERVICEPROFILE_ID\": $env(\"OS2IOT_SERVICEPROFILE_ID\"),\t        \"OS2IOT_DECODER_IDENTIFIER\": $env(\"OS2IOT_DECODER_IDENTIFIER\"),\t        \"OS2IOT_DEVICEPROFILE_IDENTIFIER\": $env(\"OS2IOT_DEVICEPROFILE_IDENTIFIER\"),\t        \"OS2IOT_API_URL\": $env(\"OS2IOT_API_URL\"),\t        \"OS2IOT_API_KEY\": { \"hasValue\": $env(\"OS2IOT_API_KEY\") != \"\" }\t    },\t    \"SFTP\": {\t        \"SFTP_URL\": $env(\"SFTP_URL\"),\t        \"SFTP_PORT\": $env(\"SFTP_PORT\"),\t        \"SFTP_USER\": $env(\"SFTP_USER\"),\t        \"SFTP_PASS\": { \"hasValue\": $env(\"SFTP_PASS\") != \"\" }\t\t    }\t}",
  "targetType": "jsonata",
  "statusVal": "",
  "statusType": "auto",
  "x": 350,
  "y": 120,
  "wires": []
}

module.exports = Node;