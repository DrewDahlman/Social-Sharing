## Social Sharing
An easy javascript class for easy social sharing.

## Requirements
<b>Facebook</b><br/>
Register an app with facebook http://developer.facebook.com<br/>
Get the App ID

## How to use
Create a share object which will look like this - 
<pre>
var share_obj = {
	method: "feed"
	link: "LINK TO SHARE"
	picture: "URL TO IMAGE MUST BE ABSOLUTE PATH"
	name: "THE NAME DISPLAYED"
	caption: "THE CAPTION"
	description: "THE DESCRIPTION"
}
</pre>

For Facebook:
<pre>
socialShare.facebook_share(share_obj);
</pre>

For Twitter:
<pre>
socialShare.twitter_share(share_obj)
</pre>