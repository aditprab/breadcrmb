define([], function () {
 	
 	var url = 'http://localhost:3000/';

    var Config = {
        getBaseUrl: function() {
            return url;
        }
    }

    return Config;
});
