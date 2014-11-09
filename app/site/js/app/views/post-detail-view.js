define(['app', 'backbone', 'underscore', 'Vent', 'text!templates/post-detail-view.html'],
    function (App, Backbone, _, Vent, template) {

        return Backbone.Marionette.ItemView.extend({

            template: _.template(template),

            events: {
            	'click #edit': 'editPost',
            	'click #delete': 'deletePost'
            },

            editPost: function() {
            	Backbone.history.navigate('#post/edit/' + this.model.get('id'), {trigger: true, replace: true});
            },	

            deletePost: function() {
                this.model.destroy();
                this.remove();
            }
            
        });
    });