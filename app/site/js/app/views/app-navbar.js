define(['backbone', 'underscore', 'Vent', 'text!templates/app-navbar.html'],
    function (Backbone, _, Vent, template) {

        return Backbone.Marionette.ItemView.extend({

            template: _.template(template),

            events : {
            }

        });
    });