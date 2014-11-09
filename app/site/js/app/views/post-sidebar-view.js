define(['app', 'backbone', 'Vent', 'text!templates/post-sidebar-view.html', 'views/post-sidebar-item-view'],
    function (App, Backbone, Vent, template, PostItemView) {
        
        return Backbone.Marionette.CompositeView.extend({

		    template: _.template(template),

		    childView: PostItemView,

		    childViewContainer: '#list_view',

		    initialize: function(){
                this.listenTo(this.collection, 'change', this.render);
            },

            events: {
                'click #add': 'addPost'
            },

            addPost: function() {
                Backbone.history.navigate('#add', {trigger: true, replace: true});
            }

		  });

    });