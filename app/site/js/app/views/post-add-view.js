define(['app', 'backbone', 'underscore', 'Vent', 'models/PostModel', 'text!templates/post-edit-view.html', 'summernote', 'codemirror'],
    function (App, Backbone, _, Vent, PostModel, template) {

        return Backbone.Marionette.ItemView.extend({

            template: _.template(template),

            events : {
            	'click #save': 'savePost'
            },

            initialize: function() {
                console.log(App.postCollection);
            },

            savePost: function() {
            	
                tags = [];
                _.each(this.$el.find('input[name=tags]').val().split(','), function(tag) {
                    tags.push({'tag': tag });
                });

                var post = new PostModel({
                    title: this.$el.find('input[name=title]').val(),
                    summary: this.$el.find('#summary').code(),
                    tags: tags
                });

                post.save();

                App.postCollection.add(post);
                Backbone.history.navigate('#post/' + this.model.get('id'), {trigger: true, replace: true});
            },

            onRender: function(){
                this.$el.find('#summary').summernote({height: 300});
            }
            
        });
    });