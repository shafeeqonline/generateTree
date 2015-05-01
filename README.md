# generateTree
This is a simple jQuery plugin for my start. Thought I will add it for it might come in handy for someone with minimal requirements.

This plugin takes a JSON object as input loops through them to create a list.
The JSON can be a AJAX result or a normal object
Three inputs are required while using it namely
1) The JSON object
2) The nested key using which we search for its children inturn.
3) The children name that needs to be displayed.

For Example we have the
JSONData = {
	name : "John Doe",
	children :[{
		name : "Sarah"
	},
	{
		name: "Mike",
		children : [{
			name : "Charlie"
		}]
	}]
}
So first parameter is the entire object
Second parameter will be the nested key which is 'children', this is where it will break into its children.
Third parameter will be the key that needs to be displayed which is 'name'.

You can try the sample folder on your local by downloading it.

More CSS and added functionalities will be added with time.
