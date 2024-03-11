<script>
import { ref } from 'vue'

function create(metadata)
{
    const data = ref(null)

    fetch('/api/devices/add', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(metadata), // body data type must match "Content-Type" header

    })
    .then(response => response = response.json())
    .then(value => data.value = value)

    return data
}

export default {
    create
}


</script>