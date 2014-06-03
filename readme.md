## Social Sharing
An easy javascript class for easy custom social sharing.

## Requirements
<b>Facebook</b><br/>
Register an app with facebook http://developer.facebook.com<br/>
Get the App ID<br/>
Be sure to include the Facebook Javascript SDK<br/>
Set the App domain in the Facebook app settings.<br/>
You need to set your app to public for normal users to use the facebook share

## FORMATTING AND DATA
<b>Facebook:</b> Accepts custom inputs and formatting

<b>Twitter:</b> Accepts custom inputs and formatting, link will always be the last part of the tweet. If you want the link to be within the tweet don't include a link.

<b>LinkedIn:</b> Accepts custom inputs and formatting

<b>g+:</b> Scrapes your page according to the URL passed. This looks at the meta tags.

<pre>
	`<meta property="og:title" content="PAGE TITLE" />
	<meta property="og:site_name" content="SITE NAME"/>
	<meta property="og:description" content="PAGE DESCRIPTION" />
	<meta property="og:type" content="website" />
	<meta property="og:image" content="DEFAULT IMAGE ABSOLUTE URL" />
	<meta property="og:url" content="FULL SITE URL" />`
</pre>

## How to use
Create the sharer
<pre>
var sharer = new SocialShare();
</pre>

Create a share object which will look like this - 
<pre>
var share_obj = {
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

For LinkedIn:
<pre>
sharer.linkedin_share(share_obj)
</pre>

For g+:
<pre>
sharer.google_share(share_obj)
</pre>
