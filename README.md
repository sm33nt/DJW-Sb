[Please read this, you **will** get this error](https://github.com/D7W/DJW-Sb/blob/main/README.md#why-am-i-getting-typeerror-cannot-read-property-id-of-undefined) 


# DJW Selfbot
> Sweet Discord selfbot with loads of powerful utilities, eye-popping themes, and a nitro sniper

<img src="https://i.imgur.com/ojuj6Gr.png" width="700">


## Intro

[Old, outdated trailer (looks much more polsihed now / handful of more commands)](https://youtu.be/1Vy0K353Vag)

This selfbot was once paid, and boasts over 150 commands. Some commands may resemble Dank Memer's because this project originally started as a Dank Memer clone (but as a selfbot, which can also be found on my GitHub), but this more general purpose bot branched off into it's own project. This bot is finished and will no longer be updated as I am out of ideas and bored of making these.

Selfbots **are** against TOS and you should be warned before using this. I have personally never been banned for selfbotting (though, I was once disabled experimenting, when I had tried to change my profile picture through the bot - simply verfying my number fixed this).

## Setup

Download the selfbot as a zip onto your desktop, extract, then open it. Open command prompt in the repository and run `npm install`. It will take at least 5 minutes for everything to install. Navigate to the folder `data` and open `config.json`. Paste your token where appropriate and edit any other settings to your liking. Finally, run `node bot.js`. If it immediately crashes and you see "TypeError: Cannot read property 'id' of undefined", read on. 

## Why am I getting "TypeError: Cannot read property 'id' of undefined"?

This is a weird kink and I do not know why it happens, but there is a simple fix. Navigate to the folder `node_modules` -> `discord.js` -> `src` -> `client` and crack open the js file `ClientDataManager`. Paste `if(channel != null)` before line 81, like this :


![Fix](https://i.imgur.com/b9hpwjo.png)


You **will** have to do this or the selfbot will not run. I'm too lazy to publish a edited npm module for something small. You should be able to finally run the bot.

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

# Gallary


| Calculator | Geoip | IP Logger (broken now rip) | IP Logger (broken now rip) |
| ------------- | ------------- | ------------- | ------------- | 
| ![calculator](https://i.imgur.com/xT1oRci.png) | ![Geoip](https://i.imgur.com/Ga82cwg.png) | ![logger](https://i.imgur.com/6sK5NRI.png) | ![logger](https://i.imgur.com/6sK5NRI.png) |


 
