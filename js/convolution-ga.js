(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

var GA_LOCAL_STORAGE_KEY = 'ga:clientId';
ga('create', 'UA-35739567-4', {
	'storage': 'none',
	'clientId': localStorage.getItem(GA_LOCAL_STORAGE_KEY)
});
ga('set', 'checkProtocolTask', null); 
ga('set', 'checkStorageTask',null);
ga(function(tracker) {
	localStorage.setItem(GA_LOCAL_STORAGE_KEY, tracker.get('clientId'));
});
ga('send', 'pageview');

