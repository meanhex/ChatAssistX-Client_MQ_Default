(function(window) {
	var plugin_name = "custom_badge";

	if (typeof window.ChatAssistX.plugins[plugin_name] !== 'undefined') {
		console.log(plugin_name.capFirst() + " plugin is already loaded!");
	} else {
		console.log(plugin_name.capFirst() + " plugin is loaded");
		window.ChatAssistX.plugins[plugin_name] = {};
		window.ChatAssistX.plugins[plugin_name].process = function(args, config) {
			var nickname = args.nickname;
			if(typeof config === 'undefined') {
				console.warn("custom_badge plugin loaded without custom_badge_list. quitting...");
				window.ChatAssistX.plugins[plugin_name].process = function(args, config) {
					return false;
				};
			}
			
			if(typeof config === 'string') {
				var old_config;
				config = [];
				config.push(old_config);
				
				console.warn("custom_badge_list should be array, not string.");
			}
			
			console.log("custom_badge plugin is run");
			for(var findword in config.custom_badge_list) {
				// 닉네임이 있을때
				if (nickname === findword){
					console.log("custom_badge user : " + args.nickname);
					nickname = '<img style="vertical-align: middle; width: 18px;" src="' + config.custom_badge_list[findword] + '" alt="Broadcaster" class="badge">&nbsp;' + nickname;
				}
			}
			
			if(args.nickname != nickname) return nickname;
			else return false;
		};
		
		window.ChatAssistX.plugins[plugin_name].init = function(config) {
			return true;
		};
	}
})(window);
