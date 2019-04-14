# bam AD plugin
Thank you for testing this plugin! :)<br />
The plugin enables the following shortcode, which will add an AD into a post: <br/>
```sh
[bam_AD type="Pick" title="Our NFL Pick: Vikings +3" end_date="2019-05-24 11:50" ]
```
An iframe with the AD is inserted in the site (to avoid the site css breaks the AD styles)<br/>
The AD is responsive <br />

# Short code props
- type: type of AD, "Pick" is the only available type.
- title: title to be displayed at the AD.
- end_date: will configure a countdown to the given date, it has to have the YYYY-MM-DD HH:SS format

# Background colors
Depending of the post cateogry the following colors will be applied:<br/>
- NFL: #000
- NBA: #ffa500
- MLB: #151550

# Structure
- html folder: the source code for the AD component (html + JS). The index.html can be opened to check the AD functionality<br/>
- bam_test_wp_plugin folder: the wordpress plugin.
