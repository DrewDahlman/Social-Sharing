//////////////////////////////////////////////////////////////
//
//	Social Share
//
//////////////////////////////////////////////////////////////
(function() {
	SocialShare = function() {
		var self = this;

		//////////////////////////////////////////////////////////////
		//
		//	Facebook Share
		//	@link - link to share
		//	@picture - Picture to share
		//	@name - Name for the share
		//	@caption - caption for share
		//	@description - description for share
		//
		//////////////////////////////////////////////////////////////
		self.facebook_share = function(share_obj){
			FB.init ({
				appId: share_obj.app_id,
				status: true,
				cookie: true,
				xfbml: true
			});

			// create facebook share object
			facebook_obj = {
				method: "feed",
				link: share_obj.link,
				picture: share_obj.image,
				name: share_obj.name,
				caption: share_obj.caption,
				description: share_obj.description
			}

			FB.ui(facebook_obj,self.share_success)
		}

		//////////////////////////////////////////////////////////////
		//
		//	Twitter Share
		//	@link - Link to share
		//	@description - description for share
		//
		//////////////////////////////////////////////////////////////
		self.twitter_share = function(share_obj){
			var windowProperties = "toolbar=no,menubar=no,scrollbars=no,statusbar=no,height=" + 250 + ",width=" + 500 + ",left=" + 150 + ",top=" + 150;
		    var popwin = window.open("http://twitter.com/share?url=" + encodeURIComponent(share_obj.link) + "&text=" + encodeURIComponent(share_obj.description), 'newwin', windowProperties);
		    popwin.focus();
		}
		return self;
	}
})();
