[Please read this, you **will** get this error](https://github.com/D7W/DJW-Sb/blob/main/README.md#why am i getting "typeError: cannot read property 'id' of undefined"?)


# DJW Selfbot
> Sweet Discord selfbot with loads of powerful utilities

## Intro

Powerful selfbot with over 150 commands

## Why am I getting "TypeError: Cannot read property 'id' of undefined"?

This is a weird kink and I do not know why it happens, but there is a simple fix. Navigate to the folder `node_modules` -> `discord.js` -> `src` -> `client`and crack open the js file `ClientDataManager`. Paste `if(channel != null)` before line 81, like this :

![Fix](https://i.imgur.com/b9hpwjo.png)

You **will** have to do this or the selfbot will not run. I'm too lazy to publish a edited npm module for something small.
