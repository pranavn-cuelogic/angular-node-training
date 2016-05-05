# AngularJS Boilerplate

Follow all the below steps, in sequential order, to set up your Angular project.

***

### INSTALLATION

##### Step 1: Install Git

*On Ubuntu*

1. `sudo apt-get update`
2. `sudo apt-get install git`

##### Step 2: Install Node (npm)

*On Ubuntu*

1. `sudo apt-get update`
2. `sudo apt-get upgrade`
3. `curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash -`
4. `sudo apt-get install -y nodejs`
5. `sudo npm cache clean -f`

*On Mac*

1. Install Homebrew
2. `brew install node`

##### Step 3: Install Bower

*On Ubuntu/Mac*

`sudo npm install -g bower`

##### Step 4: Install Gulp

*On Ubuntu/Mac*

`sudo npm install -g gulp`

***

### PROJECT SETUP

##### Step 1: Clone from Git (Optional)

Note: If you plan to use this boilerplate for a project, then kindly click the "Download Zip" button to download the code. You can then push the downloaded code to your project's repo.

1. `cd <project-directory>`
1. `git clone https://github.com/shitala-cuelogic/angular-boilerplate.git`
2. `git fetch origin [branch]`
3. `git checkout [branch]`

##### Step 2: Install NPM + Bower packages

1. `cd angular-boilerplate`
2. `sudo npm install`
3. `sudo bower install --allow-root`

##### Step 3: Run Gulp

Prerequisite (optional): Run `sudo gulp clean` before running the below command. This will delete all files/sub-directories inside the `build` directory.

Command:

`sudo gulp [--env <environment>] [--minify]`

Description:

Builds the Angular project for a specific environment by minifying all files. Final build files are placed in the `build` directory.

Options:

`[--env <environment>]` <br/>
Build the Angular project for a specific environment. Default is *local*.<br/>
Ex: local, development, staging, production

`[--minify]` <br/>
Minify all HTML, CSS and JS files in the Angular project.

Examples:

`sudo gulp --env production` <br/>
`sudo gulp --env staging --minify`

Note: If successfully built, you will be able to access the Angular project at `http://localhost:3000`.

***

### DIRECTORY STRUCTURE

```

├── app
│   │
│   ├── directives
│   │   │
│   │   ├── menu
│   │   │   ├── views
│   │   │   │   └── sidebar-menu.html
│   │   │   └── sidebar-menu.js
│   │   └── common
│   │       └── views
│   │
│   ├── modules
│   │   │
│   │   ├── base
│   │   │   ├── controllers
│   │   │   │   └── base.js
│   │   │   ├── views
│   │   │   │   ├── base.html
│   │   │   │   ├── header.html
│   │   │   │   ├── sidebar.html
│   │   │   │   └── footer.html
│   │   │   ├── route.js
│   │   │   └── index.js
│   │   │
│   │   ├── auth
│   │   │   ├── controllers
│   │   │   │   └── login.js
│   │   │   │   └── signup.js
│   │   │   ├── views
│   │   │   │   └── login.html
│   │   │   │   └── signup.html
│   │   │   ├── route.js
│   │   │   └── index.js
│   │   │
│   │   └── dashboard
│   │       ├── controllers
│   │       │   └── dashboard.js
│   │       ├── views
│   │       │   └── dashboard.html
│   │       ├── route.js
│   │       └── index.js
│   │
│   ├── services
│   │   │
│   │   ├── api
│   │   │   ├── auth
│   │   │   │   └── login.js
│   │   │   │   └── signup.js
│   │   │   │   └── forgot-password.js
│   │   │   │   └── reset-password.js
│   │   │   └── dashboard
│   │   │       └── dashboard.js
│   │   └── utility
│   │       ├── security
│   │       │   └── security.js
│   │       ├── localstorage
│   │       │   └── localstorage.js
│   │       └── log
│   │           └── log.js
│   │
│   └── app.js
│
├── assets
│   │
│   ├── css
│   │   └── app.css
│   └── images
│
├── build
│   │
│   ├── css
│   │   └── app.css
│   ├── js
│   │   └── app.js
│   ├── images
│   └── index.html
│
├── config
│   │
│   ├── local.js
│   ├── development.js
│   ├── qa.js
│   ├── staging.js
│   └── production.js
│
├── bower.json
├── bower_components
├── package.json
├── node_modules
├── .gitignore
├── gulpfile.js
├── index.html
└── server.js

```

| File/Directory | Description |
| --- | --- |
| `/app` | Core directory of the project. It has all business logic modules, directives and services. |
| `/app/directives` | Custom-made Angular directives used and shared across different modules. |
| `/app/modules/` | Business logic is bifurcated in to single irreducible modules. Each module in turn has routes, controllers and views. |
| `/app/modules/<module>/controllers` | Controllers of the module it is nested within. |
| `/app/modules/<module>/views` | HTML templates (views) of the module it is nested within. |
| `/app/modules/<module>/route.js` | Routes (URL structure) of the module it is nested within. |
| `/app/modules/<module>/index.js` | Helps initiate the module it is nested within. |
| `/app/services/` | Services used in modules. One of the core responsibility of this layer is to connect with the server and fetch/push data. |
| `/app/app.js` | Defines the application level module. |
| `/assets/css` | Stylesheets required to style different views. |
| `/assets/images` | Images, icons, illustrations, sprites used in the application. |
| `/build` | Final build files which are generated post minification for a specific environment. |
| `/config` | Environment specific configuration settings. |
| `/bower.json` | Bower dependencies required in the application. |
| `/bower_components` | Bower components used in the application. |
| `/package.json` | NPM dependencies required in the application. |
| `/node_modules` | NPM components used in the application. |
| `/gulpfile.js` | Set of defined tasks which helps automate and enhance the application build. |
| `/index.html` | Staring point of the application. |
| `/server.js` | Kickstarts the application. |

***

### CREATE A NEW MODULE

1. Create a new module directory under the `app/modules/` directory like `app/modules/<module>`.
2. Create two sub-directories `controllers` and `views` under the `app/modules/<module>/` directory.
3. Create two JavaScript files `index.js` and `route.js` under the `app/modules/<module>/` directory.
4. Open `app/modules/<module>/index.js`, write `angular.module('<module>', []);` & save to create a new Angular module.
5. Open `app/app.js` and inject the newly created module in the main application level module.
