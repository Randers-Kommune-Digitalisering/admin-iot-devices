<script>
import { ref } from 'vue'

// Decoding input
function decode(encodedString)
{
    if(typeof encodedString == "string")
    {
        return encodedString
        .replace(/&#x([0-9a-fA-F]+);/g, function(match, p1) {
            return String.fromCharCode(parseInt(p1, 16))
        })
        .replace(/&amp;/g, "&")
        .replace(/&quot;/g, '"')
    }
    else
        return encodedString
}

export default {
    decode
}

</script>