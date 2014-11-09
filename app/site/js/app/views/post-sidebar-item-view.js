define(['app', 'backbone', 'underscore', 'Vent', 'models/PostModel', 'text!templates/post-sidebar-item.html'],
    function (App, Backbone, _, Vent, PostModel, template) {

        return Backbone.Marionette.ItemView.extend({

            template: _.template(template),

            model: PostModel,

            events: {
                'click' : 'showPost',
            },

            showPost: function(){ 
                Backbone.history.navigate('#post/' + this.model.get('id'), {trigger: true, replace: true});
            }

        });
    });