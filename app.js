/**
 * http://usejsdoc.org/
 */
var TwitterStreamChannels = require('twitter-stream-channels');
var creds  = require('./myTwitterCredentials.json');

var client = new TwitterStreamChannels(creds);


var channels = {
		"sports" : ['cricket', 'sports', 'tennis', 'football', 'kohli'],
		"politics" : ['modi', 'kejriwal', 'demonetization']
};

var stream = client.streamChannels({track:channels});

stream.on('channels/sports',function(tweet){
	console.log(tweet);
});

stream.on('channels/politics',function(tweet){
	console.log(tweet);
});

setTimeout(function(){
	stream.stop();
	console.log('Stream closed');
},10000);

