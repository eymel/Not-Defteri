// Import page component files:
import HomePageComponent from '../components/pages/HomePageComponent.vue';
import OtherPageComponent from '../components/pages/OtherPageComponent.vue';

// Define the routes collection as the default export from this module.
export default [
    {
        path: '/home',
        component: HomePageComponent
    },
    {
        path: "/other",
        component: OtherPageComponent
    },

    // Define other routes here using the same pattern:
    //
    //   {
    //       path: '/TestPageComponent1',
    //       component: TestPageComponent1
    //   },

    // Finally, add a default redirect to the home page if a route is not found:
    {
        path: "*",
        redirect: "/home"
    }
];