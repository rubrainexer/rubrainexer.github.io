var runnerHtml = " <div id='unityPlayer'> <div class='unity-missing'> <a href='http://unity3d.com/webplayer/' title='Unity Web Player. Install now!'> <img alt='Unity Web Player. Install now!' src='http://webplayer.unity3d.com/installation/getunity.png' width='193' height='63' /> </a> </div> <div class='unity-broken'> <a href='http://unity3d.com/webplayer/' title='Unity Web Player. Install now! Restart your browser after install.'> <img alt='Unity Web Player. Install now! Restart your browser after install.' src='http://webplayer.unity3d.com/installation/getunityrestart.png' width='193' height='63' /> </a> </div> </div> ";

var unityObjectUrl = "http://webplayer.unity3d.com/download_webplayer-3.x/3.0/uo/UnityObject2.js";
if (document.location.protocol == 'https:')
unityObjectUrl = unityObjectUrl.replace("http://", "https://ssl-");
document.write('<script type="text\/javascript" src="' + unityObjectUrl + '"><\/script>');
var UnityUtl = {};

UnityUtl.init = function () {

	jQuery(function() {
		var config = {
			width: 1100, 
		height: 600,
		params: { enableDebugging:"0" }

		};
		var u = new UnityObject2(config);
		jQuery("#main-container").append(runnerHtml);
		var $missingScreen = jQuery("#unityPlayer").find(".unity-missing");
		var $brokenScreen = jQuery("#unityPlayer").find(".unity-broken");
		$missingScreen.hide();
		$brokenScreen.hide();

		u.observeProgress(function (progress) {
			switch(progress.pluginStatus) {
				case "broken":
					$brokenScreen.find("a").click(function (e) {
						e.stopPropagation();
						e.preventDefault();
						u.installPlugin();
						return false;
					});
					$brokenScreen.show();
					break;
				case "missing":
					$missingScreen.find("a").click(function (e) {
						e.stopPropagation();
						e.preventDefault();
						u.installPlugin();
						return false;
					});
					$missingScreen.show();
					break;
				case "installed":
					$missingScreen.remove();
					break;
				case "first":
					break;
			}
		});
		u.initPlugin(jQuery("#unityPlayer")[0], "unity/runner.unity3d");
	});

};
UnityUtl.init();
