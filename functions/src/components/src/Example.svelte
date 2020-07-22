<script>
    export let name = '<example-component>';
</script>

<template lang="pug">

    svelte:options(tag="example-component")
    .example
        h1 This is custom component : "{name}"
        slot

</template>

<style lang="postcss">

    h1 {
        @apply .text-my-blue .font-bold;
    }

    .example {
        padding-bottom: 2rem;
    }

</style>