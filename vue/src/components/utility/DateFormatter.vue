<script>
import { ref } from 'vue'

function formatDate(isoDate)
{
    // Create a date object from the ISO string
    let date = new Date(isoDate);

    // Extract the day, month, year, hours, and minutes
    let day = date.getUTCDate();
    let month = date.getUTCMonth() + 1; // Months are 0-based in JavaScript
    let year = date.getUTCFullYear().toString().substr(-2); // Get last two digits of year
    let hours = date.getUTCHours();
    let minutes = date.getUTCMinutes();

    // Pad single digit day, month, hours and minutes with leading zeros
    day = day < 10 ? '0' + day : day;
    month = month < 10 ? '0' + month : month;
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;

    // Return the formatted date
    return `${day}/${month}-${year} ${hours}:${minutes}`;
}

export default {
    formatDate
}

</script>