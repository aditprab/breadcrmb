require.config({
    baseUrl:"./js/app",
    paths:{
        "jquery":"../libs/jquery/jquery-1.11.1.min",
        "jquery.cookie": "../libs/jquery/jquery.cookie",
        "lodash":"../libs/lodash",
        "summernote": "../libs/summernote/dist/summernote",
        "codemirror": "../libs/codemirror/lib/codemirror",
        "underscore":"../libs/underscore/underscore",
        "backbone":"../libs/backbone/backbone",
        "backbone.pageable": "../libs/plugins/backbone.paginator",
        "backbone.loading": "../libs/plugins/backbone.loading",
        "spin": "../libs/plugins/spin",
        "moment": "../libs/momentjs/moment",
        "Vent": "vent",
        "App": "app",
        "datepicker": "../libs/plugins/bootstrap-datepicker",
        "chart": "../libs/highcharts/highcharts",
        "numeral": "../libs/plugins/numeral",
        "bootstrap":"../libs/plugins/bootstrap",
        "text":"../libs/plugins/text",
        "Config": "../config/config",
        'backbone.marionette': '../libs/backbone/backbone.marionette',
        'backbone.wreqr': '../libs/backbone/backbone.wreqr',
        'backbone.babysitter': '../libs/backbone/backbone.babysitter'
    },
    shim:{
        underscore: {
          exports: '_'
        },
        "bootstrap":["jquery"],
        "backbone":{
            "deps":["underscore", "jquery"],
            "exports":"Backbone"
        }
    }
});

require(['app', 'backbone', 'Router', 'bootstrap'],
    function (App, Backbone, Router) {
        "use strict";

        window.App = App;
        App.start();
        
        App.router = new Router();

        Backbone.history.start({pushState: false});

        console.log('Application has started!');
    });