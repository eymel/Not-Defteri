<template>
    <div>
        <p class="help-block">
            This page demonstrates a simple, but functional form using data binding, validation and service access.
        </p>
        <div class="col-sm-6 col-sm-offset-3 well">
            <form @submit.prevent="onButtonClick">
                <p class="help-block">Type a word beginning with the letter "B" into the box below.</p>
                <div :class="{ 'form-group': true, 'has-error': errors.has('word'), 'has-feedback': true }">
                    <label for="word" class="control-label">Enter word:</label>
                    <div class="input-group">
                        <span class="input-group-addon">B-Word</span>
                        <input type="text" v-model="word" name="word" class="form-control" placeholder="Enter word..." v-validate="'required|bWordsOnly'" aria-describedby="wordStatus" />
                    </div>
                    <span :class="{ 'glyphicon glyphicon-error-sign': errors.has('word'), 'form-control-feedback': true }" aria-hidden="true"></span>
                    <span id="wordStatus" class="help-block" v-show="errors.has('word')">{{ errors.first('word') }}</span>
                </div>
                <button type="submit" class="btn btn-primary pull-right">
                    Check Word...
                </button>
            </form>
        </div>
    </div>
</template>

<script>
    import { ExampleService } from "../../services/ExampleService.js";

    // Define a service instance.
    var exampleService = new ExampleService();   

    // Standard component code.
    export default {
        data: function () {
            return {
                word: ""
            }
        },
        methods: {
            /// <summary>
            /// Handles the button click event.
            /// </summary>
            onButtonClick: function () {                
                // Save a reference to the handler to avoid scoping issues.
                var onFormValidHandler = this.onFormValid;
                var onFormInvalidHandler = this.onFormInvalid;

                // Validate the form, then process the result if there are no errors.
                this.$validator.validateAll()
                    .then(function(success) {
                        // Invoke the handler defined above.
                        onFormValidHandler();
                        return;
                    }).catch(function (failure) {                    
                        // Invoke the handler defined above.
                        onFormInvalidHandler();
                        return;
                    });
            },

            /// <summary>
            /// Callback to be fired when the form is found to be valid.
            /// </summary>
            onFormValid: function () {
                // Use our example service to alert the user.
                exampleService.displayAlert("Congratulations - you typed a word beginning with 'B'!");
            },

            /// <summary>
            /// Callback to be fired when the form is found to be invalid.
            /// </summary>
            onFormInvalid: function () {
                // Use our example service to alert the user.
                if (this.word.length) {
                    exampleService.displayAlert("Disaster! You typed a word beginning with '" + this.word[0].toUpperCase() + "'!");
                } else {
                    exampleService.displayAlert("Catastrophe! You didn't type a word at all!");
                }
            }
        },
        created: function() {
            // Create a custom validator for the form.
            const bValidator = {
                getMessage: function (field, args) {
                    debugger;
                    return "The word does not begin with the letter 'B'.";
                },
                validate: function (value, args) {
                    debugger;
                    if (value.length) {
                        return (value.substr(0, 1).toUpperCase() == "B");
                    }
                    return false;
                }
            };

            // Extend the local validator instance with the new validation rule.
            this.$validator.extend("bWordsOnly", bValidator);
            this.$validator.attach("word", "bWordsOnly");
        }
    }
</script>