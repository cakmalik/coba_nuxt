<template>
    <div>
        <UContainer>
            <UDropdown :items="[[{ label: 'Edit', shortcuts: ['E'] }]]" />
            <span v-show="isOpen" v-text="query"></span>
            <UInput v-model="query" name="inputNmaa" />
            <UKbd>{{ metaSymbol }} + K</UKbd>
            <UButton loading>Button</UButton>
        </UContainer>
        <UModals />
    </div>
</template>

<script setup lang="ts">
const query = ref<string>('')
const isOpen = ref<Boolean>(false)
const { metaSymbol } = useShortcuts()

const openHelpModal = () => alert('adfsr')

defineShortcuts({
    meta_k: {
        usingInput: true,
        handler: () => {
            isOpen.value = !isOpen.value
        }
    },
    enter: {
        usingInput: 'inputNmaa',
        handler: () => {
            alert(query.value)
        }
    },
    '?': () => openHelpModal()
})
</script>
