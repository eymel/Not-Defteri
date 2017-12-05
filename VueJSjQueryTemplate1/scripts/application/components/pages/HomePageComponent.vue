<template>
    <div>
        <p>
            Welcome to the home page! If you're seeing this, you've got Vue and the Vue Router playing together nicely, as well as the WebPack deployment script to tie
            everything together.
        </p>
        <h3>About this template</h3>
        <p>
            This template was designed by Adam J.R. Herrick in February 2017 as a means of quickly initializing a Vue.js, jQuery and Bootstrap UI project in Visual Studio.
        </p>
        <h4>License</h4>
        <p>
            This template is made available under the MIT open source licence. See license.txt in the root directory of the project for details.
        </p>
        <h4>Requirements</h4>
        <p>
            To use this template out of the box, you'll need the following:
        </p>
        <ul>
            <li>Visual Studio 2015 (or newer)</li>
            <li>NPM Package Manager (V3.x or newer)</li>
            <li>NPM Task Runner Extension for Visual Studio</li>
            <li>WebPack Runner Extension for Visual Studio</li>
        </ul>
        <h4>Functionality</h4>
        <p>
            The template includes (or retrieves from CDN) the following libraries.
        </p>
        <ul>
            <li>Vue.js Core (v2.1.0)</li>
            <li>Vue.js Router (v2.2.0)</li>
            <li>Vee Validate for Vue.js (V2.0.0-beta.23)</li>
            <li>jQuery (v3.1.1)</li>
            <li>Boostrap (v3.3.7)</li>
        </ul>
        <p>It has the following additional features.</p>
        <ul>
            <li>It's a single page application.</li>
            <li>Automatic installation of NPM packages on project load (NPM required)</li>
            <li>Automatic rebuild of JavaScript / Vue.js code on project rebuild.</li>
            <li>WebPack compilation, bundling and - optionally - minification / uglification of *.vue single-file components, plain JS, CSS and HTML templates.</li>
            <li>Custom Stylesheet</li>
            <li>As little of the crap which Visual Studio creates / includes during the build process as I could get away with.</li>
            <li>A final deployment process that involves copying three files - index.html, application.js and style.css - to the destination server.</li>
        </ul>
        <h4>Things Worth Mentioning...</h4>
        <ul>
            <li>
                There's no "watcher" process for recompilation of the Vue/JS code. If you make changes, you'll need to Rebuild the solution from the option of that name on
                the "Build" menu before they're reflected in the compiled application.
            </li>
            <li>
                I give no guarantees or assurances that this code will work. It's certainly not production quality and I accept no responsibility for its use, misuse or any damages or
                liabilities arising from its use.
            </li>
        </ul>
        <h4>FAQ's</h4>
        <dl>
            <dt>Why Vue.js?</dt>
            <dd>
                I tried Angular. I tried Angular 2. I tried React. I even tried writing my own framework, which ate up a whole load of time, mostly worked and - when it got
                to the point of writing the (not one, but) two UI projects I then had on the go, seemed like an unnecessary complication and got binned. In short, nothing
                worked, except for the thing I wrote myself and didn't like. Then I tried Vue.js. Vue.js <i>did</i> work. I tried it in Notepad++ and it seemed straightforward.
                I pulled the project files into Visual Studio (I'm a C# developer in my day job) and it <i>still</i> seemed straightforward. I pulled in the routing and
                validation libraries, integrated the WebPack deployment process with Visual Studio and <b><i>still</i></b> it worked. So far, since putting the template
                together, I've spent most of my time building UI and not constantly tweaking configuration or compilation and deployment processes just to get a screen with
                a bit of text on it. Like Angular. Like Angular 2. Like React...
            </dd>
        </dl>
        <dl>
            <dt>Why include jQuery when there are lighter-weight alternatives for AJAX functionality?</dt>
            <dd>
                There were lots of reasons for not disposing of jQuery, not least many years' experience of working with it and familiarity with the library. One always needs
                an AJAX library in these days of modern, responsive web applications, but given that Boostrap depends on jQuery anyway (there are
                <a href="https://yuche.github.io/vue-strap/" target="_new">alternatives</a>, of course), it seemed a little redundant to learn and import another library for
                AJAX operations when there was a perfectly good API available already.
            </dd>
        </dl>
        <dl>
            <dt>Why publish?</dt>
            <dd>
                If you're reading this, you probably thought it looked interesting or potentially useful too! Go figure!
            </dd>
        </dl>
    </div>
</template>