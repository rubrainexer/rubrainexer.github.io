var Clay = Clay || {};
Clay.gameKey = "hearthbrain";
Clay.readyFunctions = [];
Clay.ready = function( fn ) {
    Clay.readyFunctions.push( fn );
};

ClayUtils = {};
ClayUtils.isInit = false;
ClayUtils.boards = {};
ClayUtils.addScore = function(id, score){
	var boards = ClayUtils.boards;
	ClayUtils.init();
	function showBoard(){
		boards[id].show( { limit: 1000, filters: ['month', 'year'], best: true, recent: 60*60*24*365 } );
	}
	Clay.ready( function() {
		if(!boards[id]){
			boards[id] = new Clay.Leaderboard( { id: id } );
		}
		if(score > 0){
			boards[id].post( { score: score }, function(){ showBoard(); });
		}else{
			showBoard();
		}
	});
};

ClayUtils.init = function(){
	if(!ClayUtils.isInit){
		ClayUtils.isInit = true;
		( function() {
			var clay = document.createElement("script"); clay.async = true;
			clay.src = ( "https:" == document.location.protocol ? "https://" : "http://" ) + "clay.io/api/api-leaderboard-achievement.js"; 
			var tag = document.getElementsByTagName("script")[0]; tag.parentNode.insertBefore(clay, tag);
		} )();
	}
};

ClayUtils.init();
