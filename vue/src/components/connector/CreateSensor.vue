<script>
import { ref } from 'vue'

async function create(metadata)
{
    const status = ref(null)

    const response = fetch('/api/devices/add', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(metadata), // body data type must match "Content-Type" header

    })
    .then(response => {
        status.value = response.status
        response = response.json()
        return response
    })

    return response
}

export default {
    create
}


</script>