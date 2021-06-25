[Please read this, you **will** get this error](https://github.com/D7W/DJW-Sb/blob/main/README.md#why-am-i-getting-typeerror-cannot-read-property-id-of-undefined) 


# DJW Selfbot
> Sweet Discord selfbot with loads of powerful utilities, eye-popping themes, and a nitro sniper

<img src="https://i.imgur.com/ojuj6Gr.png" width="700">


## Intro

[Old, outdated trailer (looks much more polsihed now / handful of more commands)](https://youtu.be/1Vy0K353Vag)

This selfbot was once paid, and boasts over 150 commands. Some commands may resemble Dank Memer's because this project originally started as a Dank Memer clone (but as a selfbot, which can also be found on my GitHub), but this more general purpose bot branched off into it's own project. This bot is finished and will no longer be updated as I am out of ideas and bored of making these.

Selfbots **are** against TOS and you should be warned before using this. I have personally never been banned for selfbotting (though, I was once disabled experimenting, when I had tried to change my profile picture through the bot - simply verfying my number fixed this).

## Why am I getting "TypeError: Cannot read property 'id' of undefined"?

This is a weird kink and I do not know why it happens, but there is a simple fix. Navigate to the folder `node_modules` -> `discord.js` -> `src` -> `client` and crack open the js file `ClientDataManager`. Paste `if(channel != null)` before line 81, like this :


![Fix](https://i.imgur.com/b9hpwjo.png)


You **will** have to do this or the selfbot will not run. I'm too lazy to publish a edited npm module for something small.

## Themes

Themes are one of this bot's more unique features, and comes with 8 pre-made themes. It's very easy to create your own theme using the format : 

```
{
"title":"title",
"color":"hex_code_color",
"thumbnail":"image_address,
"footer":"footer"
}
```
The bot comes with the following pre-made themes :

  - 1337
  - Allah
  - Default
  - KFC
  - Lambo
  - McDonalds
  - Mercedes
  - Starbucks

## Commands

Watch the video [here](https://youtu.be/1Vy0K353Vag), too lazy to list all the commands here.
 
