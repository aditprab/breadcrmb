define(['backbone', 'models/PostModel', 'views/post-add-view', 'views/post-edit-view', 'views/post-detail-view'],
    function (Backbone, PostModel, PostAddView, PostEditView, PostDetailView) {
        'use strict';

        var AppRouter = Backbone.Router.extend({
            
            routes: {
            	'': 'index',
                'add': 'add',
                'post/:id': 'showPost',
                'post/edit/:id': 'editPost',
                '*action': 'logAction'
            },

            logAction: function (action) {
            },

            index: function() {

            },

            add: function() {
                App.mainRegion.show(
                    new PostAddView({
                        model: new PostModel()
                    })
                );
            },

            showPost: function(id) {
                App.mainRegion.show(
                    new PostDetailView({
                        model: App.postCollection.get(id)
                    })
                );
            },

            editPost: function(id) {
                App.mainRegion.show(
                    new PostEditView({
                        model: App.postCollection.get(id)
                    })
                );
            }

        });

        return AppRouter;
    });
