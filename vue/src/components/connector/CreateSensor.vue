<script>
import { ref } from 'vue'

function create(metadata)
{
    const data = ref(null)
    const status = ref(null)

    fetch('/api/devices/add', {
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
    .then(value => data.value = value)

    return data
}

export default {
    create
}


</script>