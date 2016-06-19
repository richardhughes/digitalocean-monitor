# Basic Electron Template [![Build Status](https://travis-ci.org/richardhughes/electron-basic-template.svg?branch=master)](https://travis-ci.org/richardhughes/electron-basic-template)

This application should be enough to get you started when writing an Electron application. I've designed this so hopefully you'll
only have to write HTML, JavaScript and CSS for your pages rather than NodeJS or Electron.

## Install
You'll need to install the dependencies to do this:
```
npm install electron-prebuilt -g
npm install
```

## Run

As you installed electron-prebuilt with the `-g` option you should be able to run the application using the following: 
```
electron main.js
```

## Adding new pages
To add new pages you'll need to add this to the templates folder. To link these new files you can use the `a` tag. When you navigate between the pages it will automatically load your CSS files as defined in the `config.js` file.

## Adding new styles
To add new styles to your templates you need to add a `css` property to the object. This is an `array` and can contain any amount of CSS files.
```
css: [
    "../styles/default.css",
    "../styles/sample.css",
    "../styles/test.css"
]
```


## Adding new Templates
To add a new template you need to add a new property to the `module.exports.themes` object in the `config.js` file.
```
default: {
        properties: {
            width: 500,
            height: 500,

        },
        css: [
            "../styles/default.css"
        ]
    }
```
