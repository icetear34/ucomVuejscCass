export default {
    props: ['tittle'],
    // Add an event listener to the button element
    emits:['remove'],
    template: ` <li>{{ tittle }}
    <button @click="$emit('remove')">Remove</button>
    </li>  `
}