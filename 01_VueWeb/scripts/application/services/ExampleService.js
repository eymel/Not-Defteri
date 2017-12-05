// ExampleService.js

export function ExampleService() {
    return {
        /// <summary>
        /// Example service method which displays a message to the user.
        /// </summary>
        /// <param name="alertMessage">The message which should be displayed to the user.</param>
        displayAlert: function (alertMessage) {
            alert(alertMessage);
        }
    };
}