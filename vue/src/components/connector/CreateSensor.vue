<script>
import { ref } from 'vue'

function create(metadata)
{
    var response

    fetch('/api/devices/add', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(metadata), // body data type must match "Content-Type" header

    })
    .then(response => response = response.json())
    .then(value => response = "Node-RED status: " + value)

    return response
}

export default {
    create
}


</script>