## Social Sharing
An easy javascript class for easy social sharing.

## Requirements
<b>Facebook</b><br/>
Register an app with facebook http://developer.facebook.com<br/>
Get the App ID<br/>
Be sure to include the Facebook Javascript SDK

## How to use
Create the sharer
<pre>
var sharer = new SocialShare();
</pre>

Create a share object which will look like this - 
<pre>
var share_obj = {
	app_id: YOUR_FACEBOOK_APP_ID,
	method: "feed",
	link: "LINK TO SHARE",
	picture: "URL TO IMAGE MUST BE ABSOLUTE PATH",
	name: "THE NAME DISPLAYED",
	caption: "THE CAPTION",
	description: "THE DESCRIPTION"
}
</pre>

For Facebook:
<pre>
sharer.facebook_share(share_obj);
</pre>

For Twitter:
<pre>
sharer.twitter_share(share_obj)
</pre>