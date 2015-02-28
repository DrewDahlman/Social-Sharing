//////////////////////////////////////////////////////////////
//
//	Social Share
//
// 	Each method accepts a share_object
//	@link - link to share
//	@picture - Picture to share
//	@title - title for the share
//	@caption - caption for share
//	@description - description for share
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
		//	@title - title for the share
		//	@caption - caption for share
		//	@description - description for share
		//
		//////////////////////////////////////////////////////////////
		self.facebook_share = function(share_obj){

			// create facebook share object
			facebook_obj = {
				method: "feed",
				link: share_obj.link,
				picture: share_obj.image,
				title: share_obj.title,
				caption: share_obj.caption,
				description: share_obj.description
			}

			FB.ui(facebook_obj, null);
			
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

		//////////////////////////////////////////////////////////////
		//
		//	LinkedIn
		//	
		//
		//////////////////////////////////////////////////////////////
		self.linkedin_share = function(share_obj){
			
			var windowProperties = "toolbar=no,menubar=no,scrollbars=no,statusbar=no,height=" + 250 + ",width=" + 500 + ",left=" + 150 + ",top=" + 150;
		    var popwin = window.open("https://www.linkedin.com/shareArticle?summary="+encodeURIComponent(share_obj.description)+"&title="+encodeURIComponent(share_obj.title)+"&mini=true&url="+encodeURIComponent(share_obj.link)+"&source="+encodeURIComponent(share_obj.link), 'newwin', windowProperties);
		    popwin.focus();

		}

		//////////////////////////////////////////////////////////////
		//
		//	LinkedIn
		//	
		//
		//////////////////////////////////////////////////////////////
		self.google_share = function(share_obj){
			
			var windowProperties = "toolbar=no,menubar=no,scrollbars=no,statusbar=no,height=" + 250 + ",width=" + 500 + ",left=" + 150 + ",top=" + 150;
		    var popwin = window.open("https://plus.google.com/share?url="+encodeURIComponent(share_obj.link), 'newwin', windowProperties);
		    popwin.focus();

		}

		//////////////////////////////////////////////////////////////
		//
		//	Pinterest Share
		//	@picture - Picture to share
		//	@link - Link to share
		//	@description - description for share
		//
		//////////////////////////////////////////////////////////////
		self.pinterest_share = function(share_obj){

		var windowProperties = "toolbar=no,menubar=no,scrollbars=no,statusbar=no,height=" + 250 + ",width=" + 500 + ",left=" + 150 + ",top=" + 150;
		    var popwin = window.open("//www.pinterest.com/pin/create/link/?url='" + encodeURIComponent(share_obj.link) + "&media=" + encodeURIComponent(share_obj.picture) + "&description=" + encodeURIComponent(share_obj.description), 'newwin', windowProperties);
		    popwin.focus();
		}

		return self;
	}
})();
