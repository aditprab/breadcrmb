define(['app', 'backbone', 'underscore', 'Vent', 'models/PostModel', 'text!templates/post-edit-view.html', 'summernote', 'codemirror'],
    function (App, Backbone, _, Vent, PostModel, template) {

        return Backbone.Marionette.ItemView.extend({

            template: _.template(template),

            events : {
            	'click #save': 'savePost'
            },

            savePost: function() {
            	
                tags = [];
                _.each(this.$el.find('input[name=tags]').val().split(','), function(tag) {
                    if(tag != null || tag != '') {
                        tags.push({'tag': tag });                        
                    }
                });

                this.model.set({
                    title: this.$el.find('input[name=title]').val(),
                    summary: this.$el.find('#summary').code(),
                    tags: tags
                });

                this.model.save();
                Backbone.history.navigate('#post/' + this.model.get('id'), {trigger: true, replace: true});
            },

            onRender: function(){
                this.$el.find('#summary').summernote({height: 300});
            }
            
        });
    });