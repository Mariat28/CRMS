<template>
    <span>{{ actionMessage }}</span>
</template>

<script>
export default {
    name: "TicketAction",
    props: [
        'actionMessage',
        'bgColor',
        'color'
    ]
}
</script>

<style scoped>
span {
    border-radius: 5px;
    padding: 1px 5px 1px 0;
    margin-left: 4px
}
</style>