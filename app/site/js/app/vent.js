define([
    'backbone',
    'backbone.marionette'
], function(Backbone){
    'use strict';
    return new Backbone.Wreqr.EventAggregator();
});