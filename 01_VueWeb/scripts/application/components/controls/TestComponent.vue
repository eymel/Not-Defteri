<template>
    <div class="test-component-instance">
        <p class="help-block local-css-class">
            {{ message }}
        </p>
        <p class="help-block">
            Text: {{ inputFromTextEntry }}
        </p>
        <input type="text" class="form-control" v-model="inputFromTextEntry" />
        <test-child-component message-from-parent="One"></test-child-component>
        <test-child-component message-from-parent="Two"></test-child-component>
        <test-child-component message-from-parent="Three"></test-child-component>
    </div>
</template>

<script>
    import TestChildComponent from "./TestChildComponent.vue";

    export default {
        name: "test-component",
        props: [ "inputFromTextEntry" ],
        data: {
            inputFromTextEntry: 'Replace me',
            message: "This is a message in a child component's help block."
        },
        components: {
            TestChildComponent
        }
    };
</script>

<style scoped>
    .local-css-class {
        color: #ff0000;
    }
</style>