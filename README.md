## Chat Bot API Template
### A simple chat bot API template using express with typescript.
---
### About
This template comes with: 
* Basic eslint configuration
* Typescript support
* An example request/response API route using express

To use the recommended settings for VS Code, copy the contents of .vscode/settings.suggested.json to a new file .vscode/settings.json or simply run the following script in the command line:
```
cp .vscode/settings.suggested.json .vscode/settings.json
``` 
##### _To make eslint format code automatically on save, the VS Code extension will need to be installed._
---
### How to use this API with a twitch bot
1. Deploy this bot to a hosting service (heroku is generally recommended)
2. Make sure your bot is reachable  
  a. [Postman](https://www.postman.com) is a great tool for this  
  b. Your API should be as easy as a GET request to an endpoint - `https://your-hosted-api.example.com/id` etc.
3. Using your chosen twitch chat bot API, you can add a command like this:

| Bot       | Command                                                           |
|:--------- |:----------------------------------------------------------------- |
| Nightbot  | !addcom !id $(urlfetch https://your-hosted-api.example.com/id)    |
| WizeBot   | !cmd add !id $urlcall(https://your-hosted-api.example.com/id)     |
| SteamLabs | !command add !id $readapi(https://your-hosted-api.example.com/id) |
##### _Examples for adding commands to twitch bots_