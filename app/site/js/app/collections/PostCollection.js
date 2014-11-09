define(["jquery","backbone","models/PostModel", "Config"],
  function($, Backbone, PostModel, Config) {
    var PostCollection = Backbone.Collection.extend({
     
	    url: Config.getBaseUrl() + 'api/v1/posts',

	    model: PostModel

    });

    return PostCollection;

  });