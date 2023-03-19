- Create a Firebase Project
A Firebase project is a container for Google Cloud infrastructure. A project can have multiple apps
it is common for web, iOS, and Android apps to share the same project. Create a new project from the dashboard.

-Add Firebase to a Web App
In order to use Firebase in a frontend web or mobile app, you must add an app to your project
this step generates credentials that will connect your app to the cloud. Navigate to ⚙️ settings and
click the Add app button.
This will generate a config snippet that can be added to any Firebase project.
Let’s create an extremely simple web app that consists of an public/index.html file and public/app.js file.
In the <head> of the HTML file, paste the snippet. Also, include script tags for the Auth and Firestore SDKs 
  because they will be needed in the upcoming section. Including these script tags extends the core SDK with the features
  we plan on using (firestore and auth).
💡 In VS Code you can type the ! followed by tab to quickly generate HTML boilerplate.
  In your JavaScript code, you can now reference firebaseas a global variable.
  Log it out to make sure everything works.

  -Firebase CLI Tools
Now we’re ready to connect our local code to the cloud via the Firebase Tools CLIs. 
  Run the following commands to connect your terminal to the cloud.
  npm install -g firebase-tools

firebase login

firebase init

firebase serve
  
When initializing the project, select hosting and emulators. Select YES for single page application, 
  then choose the defaults for all other options. After running the serve command,
  you should see your site on http://localhost:5000 in the browser.

💡 Optional. It’s also a good idea to install the Firebase Explorer VS Code extension.

🔥 Also checkout the Advanced Firebase Emulator Guide

  - Deploy to Hosting
It’s very satisfying to launch your stuff to the Internet - Firebase makes deployment dead simple.
command line
  
firebase deploy

  Your app is now available on the web at the domains listed in the hosting console.





