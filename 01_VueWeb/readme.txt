# Example Vue.js, jQuery & Bootstrap Application
- A VSIX template for quick-start development with Vue.js, jQuery and Bootstrap.

# About this template
This template was designed by Adam J.R. Herrick in February 2017 as a means of 
quickly initializing a Vue.js, jQuery and Bootstrap UI project in Visual 
Studio.

# License
This template is made available under the MIT open source licence. See 
license.txt in the root directory of the project for details.

# Requirements
To use this template out of the box, you'll need the following:
- Visual Studio 2015 (or newer)
- NPM Package Manager (V3.x or newer)
- NPM Task Runner Extension for Visual Studio
- WebPack Runner Extension for Visual Studio

# Functionality
The template includes (or retrieves from CDN) the following libraries.
- Vue.js Core (v2.1.0)
- Vue.js Router (v2.2.0)
- Vee Validate for Vue.js (V2.0.0-beta.23)
- jQuery (v3.1.1)
- Boostrap (v3.3.7)

It has the following additional features.
- It's a single page application.
- Automatic installation of NPM packages on project load (NPM required)
- Automatic rebuild of JavaScript / Vue.js code on project rebuild.
- WebPack compilation, bundling and - optionally - minification / uglification 
of *.vue single-file components, plain JS, CSS and HTML templates.
- Custom Stylesheet
- As little of the crap which Visual Studio creates / includes during the build
process as I could get away with.
- A final deployment process that involves copying three files - index.html, 
application.js and style.css - to the destination server.

# Things Worth Mentioning...
- There's no "watcher" process for recompilation of the Vue/JS code. If you 
make changes, you'll need to Rebuild the solution from the option of that 
name on the "Build" menu before they're reflected in the compiled application.
- I give no guarantees or assurances that this code will work. It's certainly 
not production quality and I accept no responsibility for its use, misuse or 
any damages or liabilities arising from its use.

# FAQ's
## Why Vue.js?
I tried Angular. I tried Angular 2. I tried React. I even tried writing my own 
framework, which ate up a whole load of time, mostly worked and - when it got 
to the point of writing the (not one, but) two UI projects I then had on the 
go, seemed like an unnecessary complication and got binned. In short, nothing 
worked, except for the thing I wrote myself and didn't like. 

Then I tried Vue.js. Vue.js did work. I tried it in Notepad++ and it seemed 
straightforward. I pulled the project files into Visual Studio (I'm a C# 
developer in my day job) and it still seemed straightforward. I pulled in the 
routing and validation libraries, integrated the WebPack deployment process 
with Visual Studio and still it worked. So far, since putting the template 
together, I've spent most of my time building UI and not constantly tweaking 
configuration or compilation and deployment processes just to get a screen 
with a bit of text on it. Like Angular. Like Angular 2. Like React...

## Why include jQuery when there are lighter-weight alternatives for AJAX 
## functionality?
There were lots of reasons for not disposing of jQuery, not least many years' 
experience of working with it and familiarity with the library. One always 
needs an AJAX library in these days of modern, responsive web applications, 
but given that Boostrap depends on jQuery anyway (there are alternatives, of 
course), it seemed a little redundant to learn and import another library for
AJAX operations when there was a perfectly good API available already.

## Why publish?
If you're reading this, you probably thought it looked interesting or 
potentially useful too! Go figure!