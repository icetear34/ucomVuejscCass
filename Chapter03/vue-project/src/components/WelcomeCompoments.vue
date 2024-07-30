<template>
    <div>
       <label>{{ labelText }}</label>
       <input type="text" v-model="inputText">
       <button v-on:click="$emit('sathello',inputText)">sathello</button>
    </div>
</template>
<script>
export default {
    name: 'WelcomeCompoments',
    props: {
        labelText: {
            type: String,
            default: 'Hello'
        },
        inputText: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            labelText: 'Hello',
            inputText: ''
        }
    }
}
</script>