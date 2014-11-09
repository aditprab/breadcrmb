define(['jquery', 'backbone', 'Vent', 'underscore', 'collections/PostCollection', 'views/app-navbar', 'views/post-sidebar-view'],
    function ($, Backbone, Vent, _, PostCollection, AppNavbarView, PostSidebarView) {
        
        var App = new Backbone.Marionette.Application();

        App.addRegions({
            mainRegion:"#page-main",
            sidebarRegion:'#page-sidebar',
            navbarRegion: '#navbar'
        });

        App.addInitializer(function (options) {
        
            App.navbarRegion.show(
                new AppNavbarView()
            );

            App.sidebarRegion.show(
                new PostSidebarView({
                    collection: App.postCollection
                })
            );

        });

        App.postCollection = new PostCollection();
        App.postCollection.fetch({
            async: false
        });

        return App;
        
    });