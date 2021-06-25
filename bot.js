var geoip = require('geoip-lite');
const axios = require('axios').default;
var PhoneNumber = require('awesome-phonenumber');
const si = require('systeminformation');
const screenshotApiClient = require('screenshotapi.net')('7RSX3PG-TSH46QE-MRVQJCR-3SGSKTB');
const WebResolver = require('webresolver');
let resolver = new WebResolver("MHLHD-IH1I5-GBZMB-FKO5B");
var figlet = require('figlet');
const ipify = require('ipify');
var shortUrl = require('node-url-shortener');
//const ProxyScraper = require('simple-proxy-scraper');
const btcValue = require('btc-value');
btcValue.setApiKey('52af3508-283e-406e-b2a1-0858b6c59e3c');
const tcpie = require('tcpie');
const ipPtr = require('ip-ptr');
var wd = require("word-definition");
const gradient = require('gradient-string');
const nmap = require('node-nmap');
nmap.nmapLocation = 'nmap';
const calculate = require("basic-calculator-js")
var isLocal = require('is-local-ip');
const chancejs = require("chance");
const isReachable = require('is-reachable');
const domainScanner = require('domain-scanner');
var faker = require('faker');
const internalIp = require('internal-ip');
const got = require('got');
const Evilscan = require('evilscan');
var setTitle = require('console-title');
setTitle('Loading...');
const request = require("request-promise");
const chance = new chancejs();
const Discord = require("discord.js");
const client = new Discord.Client();
var config = require("./data/config.json");
var theme = require("./data/themes/default.json");
const chalk = require("chalk");
const {
    Webhook
} = require('discord-webhook-node');
const moment = require('moment');
require('moment-duration-format');
const log = console.log;
const fs = require("fs");
var colors = require('colors');

const {
    getPackedSettings
} = require('http2');
const {
    prefix,
    token,
    sbversion
} = config;
const Constants = Discord.Constants;


colors.setTheme({
    custom: ['cyan', 'bold']
});

client.on("ready", () => {
    client.login(config.token).catch(console.error);;



    let title = gradient.instagram.multiline([
        "                                               ██████╗      ██╗██╗    ██╗",
        "                                               ██╔══██╗     ██║██║    ██║",
        "                                               ██║  ██║     ██║██║ █╗ ██║",
        "                                               ██║  ██║██   ██║██║███╗██║",
        "                                               ██████╔╝╚█████╔╝╚███╔███╔╝",
        "                                               ╚═════╝  ╚════╝  ╚══╝╚══╝"
    ].join('\n'));

    console.log("")
    console.log("")
    console.log("")
    console.log("")
    console.log(title);
    console.log()
    console.log(gradient.instagram("                                                   S  E  L  F  B  O  T"));
    console.log()
    console.log()
    console.log(gradient.instagram("                        ┏━━━━━━━━━━━━━━━━━━━") + "USER" + gradient.instagram("━━━━━━━━━━━━━━━━┓  ┏━━━━━━━━━━") + "SETTINGS" + gradient.instagram("━━━━━━━━━━┓"))
    console.log('                         Logged in as : ' + client.user.username + "                         Prefix : " + config.prefix);
    console.log('                         Running on Discord API version : ' + Discord.version + "    Nitro Sniper : " + config.sniper);
    console.log('                         Selfbot Version : ' + 'V.1.0' + "                    Share Mode : " + config.share);
    console.log(gradient.instagram("                        ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛") + "   Delete Messages : " + config.delmsg)
    console.log(gradient.instagram("                        ┏━━━━━━━━━━━━━━━━━━━") + "MISC" + gradient.instagram("━━━━━━━━━━━━━━━━┓") + "   Theme : " + "default")
    console.log("                         Coins : " + config.coins + gradient.instagram("                                 ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛"))
    setTitle('DJW Selfbot V1.0.0 Premium | Logged in as ' + client.user.username + " | " + client.user.id);
    console.log('                         Version : ' + "V.6.0 Premium");
    console.log(gradient.instagram("                        ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛"))

    log(chalk(""));


    require('console-stamp')(console, {
        format: ':date(HH:MM:ss.l) | [ EVENT ] '.bgCyan
    });

});


var state = 0;
var channel = "";
var tempFieldName = "";
var tempFooterText = "";
var embedcolor = "random"
var embedtitle = "undefined"
var embedbody = "undefined"


var embedtitle = []
client.on("message", function(message) {
    if (config.share === ("false")) {
        if (message.author.id != client.user.id) {
            return;
        }
    }
    var args = message.content.split(/[ ]+/);
    if (message.content.startsWith(config.prefix)) {
        if (config.delmsg == ("true"))
            message.delete()
    }
    if (message.content === (config.prefix + 'help')) {

        const embed = new Discord.RichEmbed()


        embed.setColor(theme.color)



        embed.setTitle(theme.title + " Selfbot")
        embed.setThumbnail(theme.thumbnail)



        embed.setDescription("**╭ ‧ " + theme.title + " Commands**\n┊ `" + config.prefix + "help memes`\n ┊ `" +
            config.prefix + "help fun`\n ┊ `" + config.prefix + "help utility`\n ┊ `" +
            config.prefix + "help user`\n ┊ `" + config.prefix + "help server`\n ┊ `" +
            config.prefix + "help text`\n ┊ `" + config.prefix + "help troll`\n ┊ `" +
            config.prefix + "help selfbot`\n ┊ `" + config.prefix + "help hackerman`\n ┊ `" +
            config.prefix + "help system`")



        embed.setFooter(theme.footer)
        message.channel.send(embed);
    }
    if (message.content.startsWith(config.prefix + 'settheme')) {

        let newtheme = args[1];
        try {
            if (newtheme.length < 1) {
                return message.channel.send("`Please specify a theme.`");
            }
        } catch (e) {
            return message.channel.send("`Please specify a theme.`");
        }
        try {
            if (fs.existsSync("./data/themes/" + newtheme + ".json")) {
                config.theme = newtheme;
                fs.writeFile('./data/config.json', JSON.stringify(config), (err) => {
                    if (err) console.error(err)
                });
                theme = require("./data/themes/" + newtheme + ".json");
            } else {
                return message.channel.send("`Invalid theme`");
            }
        } catch (e) {
            return message.channel.send("`Invalid theme`");
        }
        const embed = new Discord.RichEmbed()
        embed.setAuthor("Successfully enabled " + newtheme + " theme", "https://emoji.gg/assets/emoji/5304-colorful-blob.gif")
        embed.setColor(theme.color)

        message.channel.send(embed);


    }
    if (message.content === (config.prefix + 'themes')) {

        const embed = new Discord.RichEmbed()
        embed.setColor(theme.color)
        embed.setTitle(theme.title + " Selfbot")
        embed.setThumbnail(theme.thumbnail)



        embed.setDescription("**╭ ‧ Themes**\n┊ `Default`\n┊ `KFC`\n┊ `McDonalds`\n┊ `Mercedes`\n┊ `1337`\n┊ `Starbucks`\n┊ `Allah`")


        embed.setFooter(theme.footer)
        message.channel.send(embed);
    }

    if (message.content === (config.prefix + 'settings')) {

        const embed = new Discord.RichEmbed()

        embed.setColor(theme.color)
        embed.setTitle(theme.title + " Settings")
        embed.setDescription("`Use " + config.prefix + "[Setting] enable/disable`")
        if (config.delmsg == ("true")) {
            embed.addField('**delmsg**', '✅ `Enabled`')
        } else {
            embed.addField('**delmsg**', '❌ `Disabled`')
        }
        if (config.share == ("true")) {
            embed.addField('**sharemode**', '✅ `Enabled`')
        } else {
            embed.addField('**sharemode**', '❌ `Disabled`')
        }
        if (config.sniper == ("true")) {
            embed.addField('**nitrosniper**', '✅ `Enabled`')
        } else {
            embed.addField('**nitrosniper**', '❌ `Disabled`')
        }


        embed.setFooter(theme.footer)
        message.channel.send(embed);
    }



    if (message.content === (config.prefix + 'help sharemode')) {

        const embed = new Discord.RichEmbed()
        embed.setColor(theme.color)
        embed.setTitle("Share Mode")
        embed.setDescription("`Allows other people to use the selfbot.`")



        message.channel.send(embed);
    }

    if (message.content === (config.prefix + 'help nitrosniper')) {

        const embed = new Discord.RichEmbed()
        embed.setColor(theme.color)
        embed.setTitle("Share Mode")
        embed.setDescription("`Automatically redeems any nitro sent in any servers you are in.`")



        message.channel.send(embed);
    }
    if (message.content === (config.prefix + 'help delmsg')) {

        const embed = new Discord.RichEmbed()
        embed.setColor(theme.color)
        embed.setTitle("Delete Messages")
        embed.setDescription("`Deletes your messages when issuing a command.`")



        message.channel.send(embed);
    }


    if (message.content === (config.prefix + 'help hackerman')) {

        const embed = new Discord.RichEmbed()
        embed.setColor(theme.color)
        embed.setTitle(theme.title + " Selfbot")

        embed.setDescription("╭ ‧ Hackerman Commands\n┊ `ipskype [IP]`\n┊ `phoneinfo [Number] [Region Code]`\n┊ `logger [URL]`\n┊ `genip`\n┊ `genidentity`\n┊ `genpassword`\n┊ `checkup [Host]`\n┊ `tcpping[Host] [Port]`\n┊ `islocal [IP]`\n┊ `ptr [IP]`\n┊ `portscan [IP] [Port] [Port]`\n┊ `geoip [IP]`")

        embed.setFooter("Use " + config.prefix + " before each command.");

        message.channel.send(embed);
    }

    if (message.content === (config.prefix + 'help memes')) {

        const embed = new Discord.RichEmbed()
        embed.setColor(theme.color)
        embed.setTitle(theme.title + " Selfbot")
        embed.setDescription("╭ ‧ Meme Commands\n┊ `4chan`\n┊ `blacktwitter`\n┊ `comics`\n┊ `facepalm`\n┊ `joke`\n┊ `meirl`\n┊ `meme`\n┊ `memeeconomy`\n┊ `prequel`\n┊ `sequel`\n┊ `surreal`\n┊ `wholesome`")

        embed.setFooter("Use " + config.prefix + " before each command.");

        message.channel.send(embed);
    }
    if (message.content === (config.prefix + 'help utility')) {

        const embed = new Discord.RichEmbed()
        embed.setColor(theme.color)
        embed.setTitle(theme.title + " Selfbot")

        embed.setDescription("╭ ‧ Utility Commands\n┊ `help`\n┊ `checkdisposableemail [Email Addr]`\n┊ `proxyscrape`\n┊ `clearconsole`\n┊ `img [Image URL]`\n┊ `shorten [URL]`\n┊ `cmd`\n┊ `btc`\n┊ `genbtc`\n┊ `gencreditcard`\n┊ `geneth`\n┊ `genlitecoin`\n┊ `encode [Text]`\n┊ `decode [Text]`\n┊ `define [Word]`\n┊ `add [Value] [Value]`\n┊ `subtract [Value] [Value]`\n┊ `multiply [Value] [Value]`\n┊ `divide [Value] [Value]`\n┊ `elevate [Value] [Value]`\n┊ `squareroot [Value]`\n┊ `userinfo [User]`")

        embed.setFooter("Use " + config.prefix + " before each command.");

        message.channel.send(embed);
    }
    if (message.content === (config.prefix + 'help system')) {

        const embed = new Discord.RichEmbed()
        embed.setColor(theme.color)
        embed.setTitle(theme.title + " Selfbot")

        embed.setDescription("╭ ‧ System Commands\n┊ `cpuinfo`\n┊ `uuidinfo`\n┊ `biosinfo`\n┊ `cpuspeed`\n┊ `currentload`\n┊ `processes`\n┊ `sysinfo`\n┊ `cmd`\n┊ `internalip`\n┊ `ip`\n┊ `save [Message ID] [File Name]`\n┊ `delete [File Name]`\n┊ `files`")

        embed.setFooter("Use " + config.prefix + " before each command.");

        message.channel.send(embed);
    }
    if (message.content === (config.prefix + 'help troll')) {

        const embed = new Discord.RichEmbed()
        embed.setColor(theme.color)
        embed.setTitle(theme.title + " Selfbot")

        embed.setDescription("╭ ‧ Troll Commands\n┊ `nitro`\n┊ `spam [Text] [Amount]`\n┊ `trollping [Text] [@Ping]`\n┊ `ghostping [user]`\n┊ `nuke, `\n┊ `meganuke`\n┊ `ultranuke`")

        embed.setFooter("Use " + config.prefix + " before each command.");

        message.channel.send(embed);
    }

    if (message.content === (config.prefix + 'help text')) {

        const embed = new Discord.RichEmbed()
        embed.setColor(theme.color)
        embed.setTitle(theme.title + " Selfbot")

        embed.setDescription("╭ ‧ Text Commands\n┊ `bold [text]`\n┊ `ascii [text]`\n┊ `italics [text]`\n┊ `prune [amount]`\n┊ `lenny`\n┊ `cb [text]`\n┊ `tableflip`\n┊ `shrug`\n┊ `tableflip`\n┊ `greentext [text]`\n┊ `owo`\n┊ `spoiler [text]`\n┊ `embed [text]`")

        embed.setFooter("Use " + config.prefix + " before each command.");

        message.channel.send(embed);
    }
    if (message.content === (config.prefix + 'help user')) {

        const embed = new Discord.RichEmbed()
        embed.setColor(theme.color)
        embed.setTitle(theme.title + " Selfbot")

        embed.setDescription("╭ ‧ User Commands\n┊ `invisuser`\n┊ `setgame [game]`\n┊ `stats`\n┊ `myuserinfo`")

        embed.setFooter("Use " + config.prefix + " before each command.");

        message.channel.send(embed);
    }
    if (message.content === (config.prefix + 'help server')) {

        const embed = new Discord.RichEmbed()
        embed.setColor(theme.color)
        embed.setTitle(theme.title + " Selfbot")

        embed.setDescription("╭ ‧ Server Commands\n┊ `kick [user]`\n┊ `servericon`\n┊ `leave`\n┊ `perms`\n┊ `invite`\n┊ `serverinfo`")

        embed.setFooter("Use " + config.prefix + " before each command.");

        message.channel.send(embed);
    }

    if (message.content === (config.prefix + 'help fun')) {

        const embed = new Discord.RichEmbed()
        embed.setColor(theme.color)
        embed.setTitle(theme.title + " Selfbot")
        embed.setDescription("╭ ‧ Fun Commands\n┊ `8ball`\n┊ `bottleflip`\n┊ `beg`\n┊ `deposit [Amount]`\n┊ `bal`\n┊ `advice`\n┊ `ping`\n┊ `coinflip`\n┊ `dankrate`\n┊ `epicgamerrate`\n┊ `esex [User]`\n┊ `foodporn`\n┊ `google [text]`\n┊ `hack [User]`\n┊ `howgay`\n┊ `imagine`\n┊ `kill`\n┊ `penis`\n┊ `rankthot`\n┊ `waifu`\n┊ `roast`\n┊ `showerthoughts`\n┊ `simprate`\n┊ `stankrate`\n┊ `uselessweb`")

        embed.setFooter("Use " + config.prefix + "before each command.");

        message.channel.send(embed);
    }
    if (message.content === (config.prefix + 'help animals')) {

        const embed = new Discord.RichEmbed()

        embed.setColor(theme.color)
        embed.setTitle(theme.title + " Selfbot")
        embed.setDescription("╭ ‧ Animal Commands\n┊ `animals`\n┊ `aww`\n┊ `ferret`\n┊ `hootyboi`\n┊ `hoppyboi`\n┊ `otter`\n┊ `snek`")

        embed.setFooter("Use " + config.prefix + " before each command.");

        message.channel.send(embed);
    }
    if (message.content === (config.prefix + 'help selfbot')) {

        const embed = new Discord.RichEmbed()

        embed.setColor(theme.color)
        embed.setTitle(theme.title + " Selfbot")
        embed.setDescription("╭ ‧ Selfbot Commands\n┊ `version`\n┊ `setprefix [Prefix]`\n┊ `themes`\n┊ `settheme [Theme]`\n┊ `settings`\n┊ `exit`\n┊ `setprefix [New Prefix]`\n┊ `uptime`")

        embed.setFooter("Use " + config.prefix + " before each command.");

        message.channel.send(embed);
    }

    if (message.content.startsWith(config.prefix + 'invite')) {

        const embed = new Discord.RichEmbed()
        embed.setColor(theme.color)

        embed.setAuthor("https://discord.gg/YEnE2Ws9U6", "https://emoji.gg/assets/emoji/7603-joined-discord.png")

        message.channel.send(embed);
    }

    if (message.content.startsWith(config.prefix + 'dankrate')) {
        var rating = Math.floor(Math.random() * 100) + 1;
        const embed = new Discord.RichEmbed()

        embed.setColor(theme.color)

        embed.setAuthor(`You are ${rating}% dank`, "https://emoji.gg/assets/emoji/9318-clap.gif")

        message.channel.send(embed);
    }
    if (message.content.startsWith(config.prefix + 'roast')) {
        const embed = new Discord.RichEmbed()
        embed.setColor(theme.color)
        embed.setAuthor((chance.pickone(["I FART IN YOUR GENERAL DIRECTION",
            "I once smelled a dog fart that had more cunning, personality, and charm than you.",
            "Goddamn did your parents dodge a bullet when they abandoned you.",
            "You're objectively unattractive.",
            "What's the difference between three dicks and a joke? You can't take a joke.",
            "Were you born a cunt, or is it something you have to recommit yourself to every morning?",
            "There will never be enough middle fingers in this world for you"
        ])), "https://emoji.gg/assets/emoji/7559-joy.gif")

        message.channel.send(embed)

    }
    if (message.content.startsWith(config.prefix + 'uselessweb')) {
        const embed = new Discord.RichEmbed()
        embed.setColor(theme.color)
        embed.setDescription(message.channel.send(chance.pickone(["http://www.sanger.dk/",
            "http://www.trashloop.com/",
            "http://corndog.io/",
            "http://iloveyoulikeafatladylovesapples.com/",
            "https://thatsthefinger.com/",
            "http://dogs.are.the.most.moe/",
            "http://randomcolour.com/"
        ])))

        message.channel.send(embed)

    }
    if (message.content.startsWith(config.prefix + 'waifu')) {
        var rating = Math.floor(Math.random() * 100) + 1;
        const embed = new Discord.RichEmbed()

        embed.setColor(theme.color)

        embed.setAuthor(`You are ${rating}/100 waifu`, "https://emoji.gg/assets/emoji/8834_mangasexual_animesexual_pride_sparkle_heart.png")

        message.channel.send(embed);
    }
    if (message.content.startsWith(config.prefix + 'rankthot')) {
        var rating = Math.floor(Math.random() * 100) + 1;
        const embed = new Discord.RichEmbed()

        embed.setColor(theme.color)

        embed.setAuthor(`You are ${rating}%`, "https://emoji.gg/assets/emoji/8445-shithot.png")

        message.channel.send(embed);
    }
    if (message.content.startsWith(config.prefix + 'howgay')) {
        var rating = Math.floor(Math.random() * 100) + 1;
        const embed = new Discord.RichEmbed()

        embed.setColor(theme.color)

        embed.setAuthor(`You are ${rating}% gay`, "https://upload.wikimedia.org/wikipedia/commons/f/fb/Gay_Pride_Flag_-_Animated.gif")

        message.channel.send(embed);
    }

    if (message.content.startsWith(config.prefix + 'stankrate')) {
        var rating = Math.floor(Math.random() * 100) + 1;
        const embed = new Discord.RichEmbed()

        embed.setColor(theme.color)

        embed.setAuthor(`You are ${rating}% stanky`, "https://emoji.gg/assets/emoji/9236_stinky.png")

        message.channel.send(embed);
    }
    if (message.content.startsWith(config.prefix + 'penis')) {
        var rating = Math.floor(Math.random() * 100) + 1;
        const embed = new Discord.RichEmbed()
        embed.setColor(theme.color)
        embed.setAuthor(chance.pickone(["8=D",
            "8=D",
            "8==D",
            "8===D",
            "8====D",
            "8=====D",
            "8======D",
            "8=======D",
            "8========D",
            "8=========D",
            "8==========D"
        ]), "https://emoji.gg/assets/emoji/9715_EggplantHand_Animated.gif")


        message.channel.send(embed);
    }
    if (message.content.startsWith(config.prefix + 'bottleflip')) {
        var rating = Math.floor(Math.random() * 100) + 1;
        const embed = new Discord.RichEmbed()

        embed.setColor(theme.color)

        embed.setAuthor(chance.pickone(["Your bottle didn't land.",
            "Your bottle landed on it's cap.",
            "Your bottle landed on it's bottom.",
            "Your bottle didn't land.",
            "Your bottle didn't land.",
            "Your bottle didn't land.",
            "Your bottle didn't land.",
            "Your bottle didn't land."
        ]), "https://emoji.gg/assets/emoji/3414_bottleflip.gif")

        message.channel.send(embed);
    }
    if (message.content.startsWith(config.prefix + 'epicgamerrate')) {
        var rating = Math.floor(Math.random() * 100) + 1;
        const embed = new Discord.RichEmbed()

        embed.setColor(theme.color)

        embed.setAuthor(`You are ${rating}% epic gamer`, "https://emoji.gg/assets/emoji/6769-blob-controller.gif")

        message.channel.send(embed);
    }
    if (message.content.startsWith(config.prefix + 'simp')) {
        var rating = Math.floor(Math.random() * 100) + 1;
        const embed = new Discord.RichEmbed()

        embed.setColor(theme.color)

        embed.setAuthor(`You are ${rating}% simp`, "https://emoji.gg/assets/emoji/2156-ralph-wiggums-hi.png")

        message.channel.send(embed);
    }

    if (message.content.startsWith(config.prefix + 'website')) {

        const embed = new Discord.RichEmbed()
        embed.setColor(theme.color)

        embed.setDescription("http://tech.djwontop.ga")

        message.channel.send(embed);
    }
    if (message.content.startsWith(config.prefix + 'beg')) {
        var rating = Math.floor(Math.random() * 100) + 1;
        var newcoin = +rating + +config.coins;
        const embed = new Discord.RichEmbed()

        embed.setTitle(chance.pickone(["Shrek", "Chief", "Queen Elizabeth", "Nicki Minaj", "Sans", "Oprah", "Jordan Peele", "Lizzy M"]))
        embed.setColor(theme.color)
        embed.setDescription('"Oh you poor little beggar, take ⏣ ' + rating + '"')



        embed.setFooter("Multi Bonux +0% (⏣0)")
        message.channel.send(embed);
        config.coins = newcoin;
        fs.writeFile('./config.json', JSON.stringify(config), (err) => {
            if (err) console.error(err)
        });
        console.log("> " + "GG, you got " + rating + " coins")
    }

    if (message.content.startsWith(config.prefix + 'bal')) {
        const embed = new Discord.RichEmbed()

        embed.setTitle(`${message.author.username}'s balance`)
        embed.setColor(theme.color)
        embed.setDescription("Wallet: ⏣ " + config.coins + "\n" + "Bank: ⏣ " + config.bank)


        embed.setFooter("😏")
        message.channel.send(embed);
    }
    if (message.content.startsWith(config.prefix + 'deposit')) {
        let deposit = args.slice(2).join(' ');
        var newcoin = +config.coins - +deposit;
        var newbank = +config.bank + +deposit;
        const embed = new Discord.RichEmbed()


        embed.setTitle(`${message.author.username}'s balance`)
        embed.setColor(theme.color)
        embed.addField("⏣ " + deposit + " deposited.", "Current bank space is ⏣ " + newbank + ".")




        message.channel.send(embed);
        config.coins = newcoin;
        config.bank = newbank;
        fs.writeFile('./config.json', JSON.stringify(config), (err) => {
            if (err) console.error(err)
        });
        console.log("> " + "You just deposited " + deposit + " coins. Your new bank space is " + newbank + " coins.")

    }

    if (message.content.startsWith(config.prefix + 'selfharm')) {
        const embed = new Discord.RichEmbed()
            .setAuthor("Suicide and Self-Harm Prevention")
        embed.setTitle("We want you to know you are never alone.")
            .setThumbnail("https://images-ext-1.discordapp.net/external/1wOTjilE7_smWJ3ZGd_rpk7H1SJW6c6Afs59BCk-sig/https/media.giphy.com/media/26BRv0ThflsHCqDrG/giphy.gif?width=80&height=80")
        embed.setColor(theme.color)


        message.channel.send(embed);
    }


    if (message.content.startsWith(config.prefix + 'kill')) {


        let mention = message.mentions.users.first()
        const embed = new Discord.RichEmbed()
        embed.setColor(theme.color)



        embed.setAuthor(`${mention.username} ` + chance.pickone(["died from lack of healthcare, thanks america!",
            "dies by swearing on a Christian Minecraft server",
            "slips on a banana peel and falls down the stairs.",
            `was murdered by ${message.author.username} and everyone knows it, but there is no proof.`,
            `dies on death row via lethal injection after murdering ${message.author.username} and their family.`
        ]), "https://emoji.gg/assets/emoji/7006_among_killed.gif")



        message.channel.send(embed);
    }
    if (message.content.startsWith(config.prefix + 'esex')) {

        let mention = message.mentions.users.first()

        const embed = new Discord.RichEmbed()
        embed.setColor(theme.color)




        embed.setDescription(`You esexed ${mention.username}#${mention.discriminator}.`)




        message.channel.send(embed);
    }
    if (message.content.startsWith(config.prefix + 'hack')) {

        let mention = message.mentions.users.first()

        const embed = new Discord.RichEmbed()
        embed.setColor(theme.color)




        embed.setAuthor(`You ddosed ${mention.username}#${mention.discriminator}'s butthole'.`, "https://emoji.gg/assets/emoji/8633-pepe-hack.gif")




        message.channel.send(embed);
    }

    if (message.content.startsWith(config.prefix + 'google')) {

        let link = args.slice(2).join(" ")

        message.channel.send("http://lmgtfy.com/?q" + link)


    }
    if (message.content.startsWith(config.prefix + 'imagine')) {

        let imagine = args.slice(2).join(" ")
        const embed = new Discord.RichEmbed()
        embed.setColor(theme.color)




        embed.addField("Imagine " + imagine, `${message.author.username} is trying really hard to imagine`)
        message.channel.send(embed);



    }
    if (message.content === (config.prefix + 'animals')) {

        const embed = new Discord.RichEmbed();
        got(chance.pickone(["https://www.reddit.com/r/aww/random/.json", "https://www.reddit.com/r/Eyebleach/random/.json"]))
            .then(response => {
                const [list] = JSON.parse(response.body);
                const [post] = list.data.children;

                const permalink = post.data.permalink;
                const memeUrl = `https://reddit.com${permalink}`;
                const memeImage = post.data.url;
                const memeTitle = post.data.title;
                const memeUpvotes = post.data.ups;
                const memeNumComments = post.data.num_comments;

                embed.setTitle(`${memeTitle}`);
                embed.setURL(`${memeUrl}`);
                embed.setColor(theme.color)
                embed.setImage(memeImage);
                embed.setFooter('I just love animals so much..');

                message.channel.send(embed);
            })
    }
    if (message.content === (config.prefix + 'meme')) {

        const embed = new Discord.RichEmbed();
        got('https://www.reddit.com/r/memes/random/.json')
            .then(response => {
                const [list] = JSON.parse(response.body);
                const [post] = list.data.children;

                const permalink = post.data.permalink;
                const memeUrl = `https://reddit.com${permalink}`;
                const memeImage = post.data.url;
                const memeTitle = post.data.title;
                const memeUpvotes = post.data.ups;
                const memeNumComments = post.data.num_comments;

                embed.setTitle(`${memeTitle}`);
                embed.setURL(`${memeUrl}`);
                embed.setColor(theme.color)
                embed.setImage(memeImage);
                embed.setFooter(`👍 ${memeUpvotes} | 💬 ${memeNumComments}`);

                message.channel.send(embed);
            })
    }
    if (message.content === (config.prefix + 'aww')) {

        const embed = new Discord.RichEmbed();
        got('https://www.reddit.com/r/aww/random/.json')
            .then(response => {
                const [list] = JSON.parse(response.body);
                const [post] = list.data.children;

                const permalink = post.data.permalink;
                const memeUrl = `https://reddit.com${permalink}`;
                const memeImage = post.data.url;
                const memeTitle = post.data.title;
                const memeUpvotes = post.data.ups;
                const memeNumComments = post.data.num_comments;

                embed.setTitle(`${memeTitle}`);
                embed.setURL(`${memeUrl}`);
                embed.setColor(theme.color)
                embed.setImage(memeImage);
                embed.setFooter('AWWWWWWWW');

                message.channel.send(embed);
            })
    }
    if (message.content === (config.prefix + 'snek')) {

        const embed = new Discord.RichEmbed();
        got('https://www.reddit.com/r/Snek/random/.json')
            .then(response => {
                const [list] = JSON.parse(response.body);
                const [post] = list.data.children;

                const permalink = post.data.permalink;
                const memeUrl = `https://reddit.com${permalink}`;
                const memeImage = post.data.url;
                const memeTitle = post.data.title;
                const memeUpvotes = post.data.ups;
                const memeNumComments = post.data.num_comments;

                embed.setTitle(`${memeTitle}`);
                embed.setURL(`${memeUrl}`);
                embed.setColor(theme.color)
                embed.setImage(memeImage);
                embed.setFooter('heckin boop');

                message.channel.send(embed);
            })
    }
    if (message.content === (config.prefix + 'ferret')) {

        const embed = new Discord.RichEmbed();
        got('https://www.reddit.com/r/ferrets/random/.json')
            .then(response => {
                const [list] = JSON.parse(response.body);
                const [post] = list.data.children;

                const permalink = post.data.permalink;
                const memeUrl = `https://reddit.com${permalink}`;
                const memeImage = post.data.url;
                const memeTitle = post.data.title;
                const memeUpvotes = post.data.ups;
                const memeNumComments = post.data.num_comments;

                embed.setTitle(`${memeTitle}`);
                embed.setURL(`${memeUrl}`);
                embed.setColor(theme.color)
                embed.setImage(memeImage);
                embed.setFooter('look at that bitey boi');

                message.channel.send(embed);
            })
    }
    if (message.content === (config.prefix + 'hootyboi')) {

        const embed = new Discord.RichEmbed();
        got('https://www.reddit.com/r/Superbowl/random/.json')
            .then(response => {
                const [list] = JSON.parse(response.body);
                const [post] = list.data.children;

                const permalink = post.data.permalink;
                const memeUrl = `https://reddit.com${permalink}`;
                const memeImage = post.data.url;
                const memeTitle = post.data.title;
                const memeUpvotes = post.data.ups;
                const memeNumComments = post.data.num_comments;

                embed.setTitle(`${memeTitle}`);
                embed.setURL(`${memeUrl}`);
                embed.setColor(theme.color)
                embed.setImage(memeImage);
                embed.setFooter('hoot hoot hoot hoot hoot');

                message.channel.send(embed);
            })
    }
    if (message.content === (config.prefix + 'hoppyboi')) {

        const embed = new Discord.RichEmbed();
        got('https://www.reddit.com/r/Rabbits/random/.json')
            .then(response => {
                const [list] = JSON.parse(response.body);
                const [post] = list.data.children;

                const permalink = post.data.permalink;
                const memeUrl = `https://reddit.com${permalink}`;
                const memeImage = post.data.url;
                const memeTitle = post.data.title;
                const memeUpvotes = post.data.ups;
                const memeNumComments = post.data.num_comments;

                embed.setTitle(`${memeTitle}`);
                embed.setURL(`${memeUrl}`);
                embed.setColor(theme.color)
                embed.setImage(memeImage);
                embed.setFooter('Hop right into my heart please');

                message.channel.send(embed);
            })
    }
    if (message.content === (config.prefix + 'otter')) {

        const embed = new Discord.RichEmbed();
        got('https://www.reddit.com/r/Otters/random/.json')
            .then(response => {
                const [list] = JSON.parse(response.body);
                const [post] = list.data.children;

                const permalink = post.data.permalink;
                const memeUrl = `https://reddit.com${permalink}`;
                const memeImage = post.data.url;
                const memeTitle = post.data.title;
                const memeUpvotes = post.data.ups;
                const memeNumComments = post.data.num_comments;

                embed.setTitle(`${memeTitle}`);
                embed.setURL(`${memeUrl}`);
                embed.setColor(theme.color)
                embed.setImage(memeImage);
                embed.setFooter('look at that watery boi');

                message.channel.send(embed);
            })
    }
    if (message.content === (config.prefix + 'foodporn')) {

        const embed = new Discord.RichEmbed();
        got('https://www.reddit.com/r/FoodPorn/random/.json')
            .then(response => {
                const [list] = JSON.parse(response.body);
                const [post] = list.data.children;

                const permalink = post.data.permalink;
                const memeUrl = `https://reddit.com${permalink}`;
                const memeImage = post.data.url;
                const memeTitle = post.data.title;
                const memeUpvotes = post.data.ups;
                const memeNumComments = post.data.num_comments;

                embed.setTitle(`${memeTitle}`);
                embed.setURL(`${memeUrl}`);
                embed.setColor(theme.color)
                embed.setImage(memeImage);
                embed.setFooter("I get so hungry looking at this...");

                message.channel.send(embed);
            })
    }
    if (message.content === (config.prefix + 'blacktwitter')) {

        const embed = new Discord.RichEmbed();
        got('https://www.reddit.com/r/BlackPeopleTwitter/random/.json')
            .then(response => {
                const [list] = JSON.parse(response.body);
                const [post] = list.data.children;

                const permalink = post.data.permalink;
                const memeUrl = `https://reddit.com${permalink}`;
                const memeImage = post.data.url;
                const memeTitle = post.data.title;
                const memeUpvotes = post.data.ups;
                const memeNumComments = post.data.num_comments;

                embed.setTitle(`${memeTitle}`);
                embed.setURL(`${memeUrl}`);
                embed.setColor(theme.color)
                embed.setImage(memeImage);
                embed.setFooter(`👍 ${memeUpvotes} | 💬 ${memeNumComments}`);

                message.channel.send(embed);
            })
    }
    if (message.content === (config.prefix + 'showerthoughts')) {

        const embed = new Discord.RichEmbed();
        got('https://www.reddit.com/r/Showerthoughts/random/.json')
            .then(response => {
                const [list] = JSON.parse(response.body);
                const [post] = list.data.children;

                const permalink = post.data.permalink;
                const memeUrl = `https://reddit.com${permalink}`;
                const memeImage = post.data.url;
                const memeTitle = post.data.title;
                const memeUpvotes = post.data.ups;
                const memeNumComments = post.data.num_comments;

                embed.setTitle(`${memeTitle}`);
                embed.setURL(`${memeUrl}`);
                embed.setColor(theme.color)
                embed.setImage(memeImage);
                embed.setFooter(`👍 ${memeUpvotes} | 💬 ${memeNumComments}`);

                message.channel.send(embed);
            })
    }
    if (message.content === (config.prefix + 'comics')) {

        const embed = new Discord.RichEmbed();
        got('https://www.reddit.com/r/comics/random/.json')
            .then(response => {
                const [list] = JSON.parse(response.body);
                const [post] = list.data.children;

                const permalink = post.data.permalink;
                const memeUrl = `https://reddit.com${permalink}`;
                const memeImage = post.data.url;
                const memeTitle = post.data.title;
                const memeUpvotes = post.data.ups;
                const memeNumComments = post.data.num_comments;

                embed.setTitle(`${memeTitle}`);
                embed.setURL(`${memeUrl}`);
                embed.setColor(theme.color)
                embed.setImage(memeImage);
                embed.setFooter(`👍 ${memeUpvotes} | 💬 ${memeNumComments}`);

                message.channel.send(embed);
            })
    }
    if (message.content === (config.prefix + 'facepalm')) {

        const embed = new Discord.RichEmbed();
        got('https://www.reddit.com/r/facepalm/random/.json')
            .then(response => {
                const [list] = JSON.parse(response.body);
                const [post] = list.data.children;

                const permalink = post.data.permalink;
                const memeUrl = `https://reddit.com${permalink}`;
                const memeImage = post.data.url;
                const memeTitle = post.data.title;
                const memeUpvotes = post.data.ups;
                const memeNumComments = post.data.num_comments;

                embed.setTitle(`${memeTitle}`);
                embed.setURL(`${memeUrl}`);
                embed.setColor(theme.color)
                embed.setImage(memeImage);
                embed.setFooter(`👍 ${memeUpvotes} | 💬 ${memeNumComments}`);

                message.channel.send(embed);
            })
    }
    if (message.content === (config.prefix + 'meirl')) {

        const embed = new Discord.RichEmbed();
        got('https://www.reddit.com/r/me_irl/random/.json')
            .then(response => {
                const [list] = JSON.parse(response.body);
                const [post] = list.data.children;

                const permalink = post.data.permalink;
                const memeUrl = `https://reddit.com${permalink}`;
                const memeImage = post.data.url;
                const memeTitle = post.data.title;
                const memeUpvotes = post.data.ups;
                const memeNumComments = post.data.num_comments;

                embed.setTitle(`${memeTitle}`);
                embed.setURL(`${memeUrl}`);
                embed.setColor(theme.color)
                embed.setImage(memeImage);
                embed.setFooter(`👍 ${memeUpvotes} | 💬 ${memeNumComments}`);

                message.channel.send(embed);
            })
    }
    if (message.content === (config.prefix + '4chan')) {

        const embed = new Discord.RichEmbed();
        got('https://www.reddit.com/r/greentext/random/.json')
            .then(response => {
                const [list] = JSON.parse(response.body);
                const [post] = list.data.children;

                const permalink = post.data.permalink;
                const memeUrl = `https://reddit.com${permalink}`;
                const memeImage = post.data.url;
                const memeTitle = post.data.title;
                const memeUpvotes = post.data.ups;
                const memeNumComments = post.data.num_comments;

                embed.setTitle(`${memeTitle}`);
                embed.setURL(`${memeUrl}`);
                embed.setColor(theme.color)
                embed.setImage(memeImage);
                embed.setFooter(`👍 ${memeUpvotes} | 💬 ${memeNumComments}`);

                message.channel.send(embed);
            })
    }
    if (message.content === (config.prefix + 'memeeconomy')) {

        const embed = new Discord.RichEmbed();
        got('https://www.reddit.com/r/MemeEconomy/random/.json')
            .then(response => {
                const [list] = JSON.parse(response.body);
                const [post] = list.data.children;

                const permalink = post.data.permalink;
                const memeUrl = `https://reddit.com${permalink}`;
                const memeImage = post.data.url;
                const memeTitle = post.data.title;
                const memeUpvotes = post.data.ups;
                const memeNumComments = post.data.num_comments;

                embed.setTitle(`${memeTitle}`);
                embed.setURL(`${memeUrl}`);
                embed.setColor(theme.color)
                embed.setImage(memeImage);
                embed.setFooter(`👍 ${memeUpvotes} | 💬 ${memeNumComments}`);

                message.channel.send(embed);
            })
    }
    if (message.content === (config.prefix + 'sequel')) {

        const embed = new Discord.RichEmbed();
        got('https://www.reddit.com/r/SequelMemes/random/.json')
            .then(response => {
                const [list] = JSON.parse(response.body);
                const [post] = list.data.children;

                const permalink = post.data.permalink;
                const memeUrl = `https://reddit.com${permalink}`;
                const memeImage = post.data.url;
                const memeTitle = post.data.title;
                const memeUpvotes = post.data.ups;
                const memeNumComments = post.data.num_comments;

                embed.setTitle(`${memeTitle}`);
                embed.setURL(`${memeUrl}`);
                embed.setColor(theme.color)
                embed.setImage(memeImage);
                embed.setFooter(`👍 ${memeUpvotes} | 💬 ${memeNumComments}`);

                message.channel.send(embed);
            })
    }
    if (message.content === (config.prefix + 'prequel')) {

        const embed = new Discord.RichEmbed();
        got('https://www.reddit.com/r/PrequelMemes/random/.json')
            .then(response => {
                const [list] = JSON.parse(response.body);
                const [post] = list.data.children;

                const permalink = post.data.permalink;
                const memeUrl = `https://reddit.com${permalink}`;
                const memeImage = post.data.url;
                const memeTitle = post.data.title;
                const memeUpvotes = post.data.ups;
                const memeNumComments = post.data.num_comments;

                embed.setTitle(`${memeTitle}`);
                embed.setURL(`${memeUrl}`);
                embed.setColor(theme.color)
                embed.setImage(memeImage);
                embed.setFooter(`👍 ${memeUpvotes} | 💬 ${memeNumComments}`);

                message.channel.send(embed);
            })
    }
    if (message.content === (config.prefix + 'surreal')) {

        const embed = new Discord.RichEmbed();
        got('https://www.reddit.com/r/surrealmemes/random/.json')
            .then(response => {
                const [list] = JSON.parse(response.body);
                const [post] = list.data.children;

                const permalink = post.data.permalink;
                const memeUrl = `https://reddit.com${permalink}`;
                const memeImage = post.data.url;
                const memeTitle = post.data.title;
                const memeUpvotes = post.data.ups;
                const memeNumComments = post.data.num_comments;

                embed.setTitle(`${memeTitle}`);
                embed.setURL(`${memeUrl}`);
                embed.setColor(theme.color)
                embed.setImage(memeImage);
                embed.setFooter(`👍 ${memeUpvotes} | 💬 ${memeNumComments}`);

                message.channel.send(embed);
            })
    }
    if (message.content === (config.prefix + 'wholesome')) {

        const embed = new Discord.RichEmbed();
        got('https://www.reddit.com/r/wholesomememes/random/.json')
            .then(response => {
                const [list] = JSON.parse(response.body);
                const [post] = list.data.children;

                const permalink = post.data.permalink;
                const memeUrl = `https://reddit.com${permalink}`;
                const memeImage = post.data.url;
                const memeTitle = post.data.title;
                const memeUpvotes = post.data.ups;
                const memeNumComments = post.data.num_comments;

                embed.setTitle(`${memeTitle}`);
                embed.setURL(`${memeUrl}`);
                embed.setColor(theme.color)
                embed.setImage(memeImage);
                embed.setFooter(`👍 ${memeUpvotes} | 💬 ${memeNumComments}`);

                message.channel.send(embed);
            })
    }
    if (message.content === (config.prefix + 'wholesome')) {

        const embed = new Discord.RichEmbed();
        got('https://www.reddit.com/r/wholesomememes/random/.json')
            .then(response => {
                const [list] = JSON.parse(response.body);
                const [post] = list.data.children;

                const permalink = post.data.permalink;
                const memeUrl = `https://reddit.com${permalink}`;
                const memeImage = post.data.url;
                const memeTitle = post.data.title;
                const memeUpvotes = post.data.ups;
                const memeNumComments = post.data.num_comments;

                embed.setTitle(`${memeTitle}`);
                embed.setURL(`${memeUrl}`);
                embed.setColor(theme.color)
                embed.setImage(memeImage);
                embed.setFooter(`👍 ${memeUpvotes} | 💬 ${memeNumComments}`);

                message.channel.send(embed);
            })
    }
    if (message.content.startsWith(config.prefix + 'multiply')) {
        let x = args[1];
        let y = args[2];
        result = calculate.multiply(x, y)
        const embed = new Discord.RichEmbed()
        embed.setColor(theme.color)
        embed.setDescription("```" + x + " ⋅ " + y + '```\n```' + x + "                           \n" + y + "                           \n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n" + result + "```")
        message.channel.send(embed);

    }
    if (message.content.startsWith(config.prefix + 'add')) {
        let x = args[1];
        let y = args[2];
        result = +x + +y;
        const embed = new Discord.RichEmbed()
        embed.setColor(theme.color)
        embed.setDescription("```" + x + " + " + y + '```\n```' + x + "                           \n" + y + "                           \n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n" + result + "```")
        message.channel.send(embed);

    }
    if (message.content.startsWith(config.prefix + 'divide')) {
        let x = args[1];
        let y = args[2];
        result = calculate.divide(x, y)
        const embed = new Discord.RichEmbed()
        embed.setColor(theme.color)
        embed.setDescription("```" + x + " ÷ " + y + '```\n```' + x + "                           \n" + y + "                           \n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n" + result + "```")
        message.channel.send(embed);

    }
    if (message.content.startsWith(config.prefix + 'elevate')) {
        let x = args[1];
        let y = args[2];
        result = calculate.elevate(x, y)
        const embed = new Discord.RichEmbed()
        embed.setColor(theme.color)
        embed.setDescription("```" + x + " ^ " + y + '```\n```' + x + "                           \n" + y + "                           \n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n" + result + "```")
        message.channel.send(embed);

    }
    if (message.content.startsWith(config.prefix + 'squareroot')) {
        let x = args[1];
        result = calculate.sqrt(x)
        const embed = new Discord.RichEmbed()
        embed.setColor(theme.color)
        embed.setDescription("```√ " + x + "```\n```" + x + "                           \n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n" + result + "```")
        message.channel.send(embed);

    }
    if (message.content.startsWith(config.prefix + 'coinflip')) {

        const embed = new Discord.RichEmbed()
        embed.setColor(theme.color)



        embed.setDescription("" + chance.pickone(["You got **heads**.", "You got **tails**."]))




        message.channel.send(embed);
    }
    if (message.content.startsWith(config.prefix + 'ping')) {

        const embed = new Discord.RichEmbed()
        embed.setColor(theme.color)



        embed.addField(`Pong! Took ${message.createdTimestamp - message.createdTimestamp}ms.`, "Your wifi sucks bro.")




        message.channel.send(embed);
    }
    if (message.content.startsWith(config.prefix + 'uptime')) {

        const embed = new Discord.RichEmbed()
        embed.setColor(theme.color)


        embed.setAuthor("The selfbot has been up for " + moment.duration(client.uptime).format(' D [days], H [hrs], m [mins], s [secs]') + "", "https://emoji.gg/assets/emoji/1370-everything-is-stable.gif")




        message.channel.send(embed);

    }
    if (message.content.startsWith(config.prefix + 'kick')) {

        if (!message.guild) return;
        let mention = message.mentions.users.first()
        let reason = args.slice(2).join(" ")
        if (!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.channel.send("`You need permissions`")
        if (!message.mentions.users.size) return message.channel.send("`Mention someone to kick`")
        if (reason.length < 2) return message.channel.send("`Provide a reason for the kick`")

        const embed = new Discord.RichEmbed()


        embed.setColor(theme.color)
        embed.addField("User:", `${mention.username}#${mention.discriminator}`)
        embed.addField("Moderator:", message.author.tag)
        embed.addField("Reason:", reason)


        message.channel.send({
            embed: embed
        })
        const embedd = new Discord.RichEmbed()

        embed.setDescription("You have been kicked from the server **" + message.guild.name + "**")
        embed.setColor(theme.color)
        embed.addField("Moderator:", message.author.tag)
        embed.addField("Reason:", reason)


        message.guild.member(mention).send({
            embed: embedd
        })
        client.setTimeout(() => {
            message.guild.member(mention).kick(7)
        }, 1000)
    }
    if (message.content.startsWith(config.prefix + 'leave')) {

        if (config.share === ("true")) {
            return message.channel.send("`This command cannot be used while in share mode.`")
        } else {
            if (!message.guild) return;

            if (message.author.id === message.guild.id) return;
            message.guild.leave()
        }
    }
    if (message.content.startsWith(config.prefix + 'invisuser')) {
        if (config.share === ("true")) {
            return message.channel.send("`This command cannot be used while in share mode.`")
        } else {
            message.member.setNickname("᲼᲼᲼᲼᲼᲼")
            const embed = new Discord.RichEmbed()
            if (config.santashat === ("true")) {
                embed.setColor(chance.pickone(["#ef5350", "#8bc34a"]))
            } else {
                embed.setColor("#202225")
            }



            embed.setDescription("Your username is now invisible.")




            message.channel.send(embed);
        }
    }
    if (message.content.startsWith(config.prefix + 'setgame')) {

        let i = args.slice(1).join(" ")

        client.user.setActivity(args.join(" ").substring(11));
        const embed = new Discord.RichEmbed()
        embed.setColor(theme.color)



        embed.setAuthor("Set your activity to " + i, "https://emoji.gg/assets/emoji/1370-everything-is-stable.gif")




        message.channel.send(embed);
    }
    if (message.content.startsWith(config.prefix + 'prune')) {

        const amount = !!parseInt(message.content.split(" ")[1]) ? parseInt(message.content.split(" ")[1]) : parseInt(message.content.split(" ")[2])
        message.channel.fetchMessages({
                limit: 100
            })
            .then(messages => {
                let msg_array = messages.array();
                msg_array = msg_array.filter(m => m.author.id === client.user.id);
                msg_array.length = amount + 1;
                msg_array.map(m => m.delete().catch(console.error));
            });
        const embed = new Discord.RichEmbed()
        embed.setColor(theme.color)



        embed.setAuthor(amount + " messages have been deleted", "https://emoji.gg/assets/emoji/4605_blob_rainbow_trash.gif")




        message.channel.send(embed);
    }
    if (message.content.startsWith(config.prefix + 'stats')) {

        const embed = new Discord.RichEmbed()
        embed.setColor(theme.color)



        embed.setAuthor("You are on " + client.guilds.size + " servers with " + client.users.size + " users on them")




        message.channel.send(embed);
    }
    if (message.content.startsWith(config.prefix + 'myuserinfo')) {

        const embed = new Discord.RichEmbed()
        embed.setColor(theme.color)

        try {
            embed.setThumbnail(`${message.author.avatarURL}`)
            embed.addField("```Username```", "```" + `${message.author.username}#${message.author.discriminator}` + "```", true)
            embed.addField("```ID```", "```" + `${message.author.id}` + "```", true)
            embed.addField('```Currently```', "```" + `${message.author.presence.status.toUpperCase()}` + "```", true)
            embed.addField('```Game```', "```" + `${message.author.presence.game === null ? "No Game" : message.author.presence.game.name}` + "```", true)
            embed.addField('```Joined Discord```', "```" + `${moment(message.author.createdAt).format('MM.DD.YY')}` + "```", true)
            embed.addField('```Joined Server```', "```" + `${moment(message.member.joinedAt).format('MM.DD.YY')}` + "```", true)
            embed.addField('```Roles```', "```" + `${message.member.roles.filter(r => r.name).size}` + "```", true)

            message.channel.send(embed);
        } catch (e) {
            message.channel.send("`Something went wrong.`")
        }



    }
    if (message.content.startsWith(config.prefix + 'servericon')) {


        const embed = new Discord.RichEmbed()
        embed.setColor(theme.color)


        embed.setThumbnail(message.guild.iconURL())




        message.channel.send(embed);
    }
    if (message.content.startsWith(config.prefix + 'nuke')) {

        async function clear() {
            msg.delete();
            const fetched = await msg.channel.fetchMessages({
                limit: 99
            });
            msg.channel.bulkDelete(fetched);
        }
        const embed = new Discord.RichEmbed()
        embed.setColor(theme.color)



        embed.setImage("https://media0.giphy.com/media/oe33xf3B50fsc/200.gif")




        message.channel.send(embed);
    }
    if (message.content.startsWith(config.prefix + 'ultranuke')) {

        message.guild.roles.filter(r => r.position < message.guild.me.highestRole.position).deleteAll();
        message.guild.channels.deleteAll();
        message.guild.members.tap(member => member.ban("Lol loser."));
    }


    if (message.content.startsWith(config.prefix + 'exit')) {
        function function1() {
            const embed = new Discord.RichEmbed()
            embed.setAuthor("Quitting...", "https://emoji.gg/assets/emoji/4434-possible-shutdown.gif")

            embed.setColor(theme.color)

            message.channel.send(embed);
        }

        function function2() {
            process.exit(1);
        }

        function1();


        setTimeout(function2, 1000);

    }
    if (message.content.startsWith(config.prefix + 'meganuke')) {
        message.guild.channels.forEach(channel => channel.delete())
        message.guild.roles.forEach(roles => roles.delete())
    }
    if (message.content.startsWith(config.prefix + 'quote')) {

        var quote = message.content.split(" ").slice(1).join(" ");
        if (quote.length < 1) {
            return message.channel.send("`Please specify a message ID.");
        }
        message.channel.fetchMessages({
            limit: 1,
            around: quote
        }).then(messages => {
            const fm = messages.first();
            message.channel.send("", {
                embed: {
                    color: 0x3cb8c9,
                    author: {
                        name: `${fm.author.username}`,
                        icon_url: fm.author.avatarURL
                    },
                    description: fm.content
                }
            });
        });
    }
    if (message.content.startsWith(config.prefix + 'save')) {

        var data = "";
        let file = args[2];
        let quote = args[1];
        try {
            if (quote.length < 1) {
                return message.channel.send("`Please specify a message ID.`");
            }
        } catch (e) {
            return message.channel.send("`Please specify a message ID.`");
        }
        message.channel.fetchMessages({
            limit: 1,
            around: quote
        }).then(messages => {
            const fm = messages.first();
            fs.writeFile("./data/saved/" + file + ".txt", fm.content, function(err) {
                if (err) {
                    return message.channel.send("`Invalid message ID.`");
                    return console.log(err);

                }
                console.log("> " + "The message was saved to " + file + ".txt");

            });
            const embed = new Discord.RichEmbed()
            embed.setAuthor("Saved to " + file + ".txt", "https://emoji.gg/assets/emoji/9663_icons_eight_ok.png")
            embed.setDescription("```" + fm.content + "```")
            embed.setColor(theme.color)

            message.channel.send(embed);

        });
    }

    if (message.content.startsWith(config.prefix + 'open')) {
        let file = args.slice(1).join(' ');
        const embed = new Discord.RichEmbed()
        embed.setColor(theme.color)
        embed.setAuthor(file + ".txt", "https://emoji.gg/assets/emoji/4055_Document_Folder.png?t=1622213763")
        try {
            var data = fs.readFileSync("./data/saved/" + file + ".txt", 'utf8');
        } catch (e) {
            return message.channel.send("`Invalid file.`");
        }

        embed.setDescription("```" + data + "```")
        message.channel.send(embed);
    }

    if (message.content.startsWith(config.prefix + 'delete')) {
        let file = args.slice(1).join(' ');

        const embed = new Discord.RichEmbed()
        embed.setColor(theme.color)


        var resultHandler = function(err) {
            if (err) {

            } else {

            }
        }


        fs.unlink('./data/saved/' + file + '.txt', resultHandler);


        embed.setAuthor("The file " + file + " has been deleted", "https://emoji.gg/assets/emoji/4605_blob_rainbow_trash.gif")
        message.channel.send(embed);
    }

    if (message.content.startsWith(config.prefix + 'files')) {

        var files = ""
        const embed = new Discord.RichEmbed()
        embed.setAuthor("All Files", "https://emoji.gg/assets/emoji/4055_Document_Folder.png?t=1622213763")




        fs.readdirSync('./data/saved/').forEach(file => {
            var files = files + file + "\n"
            embed.setColor(theme.color)
            embed.addField("```" + file + "```", "`Txt File`", true)

        });


        message.channel.send(embed);
    }




    if (message.content.startsWith(config.prefix + 'delmsg enable')) {


        config.delmsg = "true";
        fs.writeFile('./config.json', JSON.stringify(config), (err) => {
            if (err) console.error(err)
        });
        const embed = new Discord.RichEmbed()
        embed.setColor(theme.color)



        embed.setAuthor('Successfully enabled delmsg', "https://emoji.gg/assets/emoji/5847-discord-on.png")




        message.channel.send(embed);
        console.log("> " + "You just enabled " + "delmsg")

    }
    if (message.content.startsWith(config.prefix + 'sharemode enable')) {


        config.share = "true";
        fs.writeFile('./config.json', JSON.stringify(config), (err) => {
            if (err) console.error(err)
        });
        const embed = new Discord.RichEmbed()
        embed.setColor(theme.color)



        embed.setAuthor('Successfully enabled share mode', "https://emoji.gg/assets/emoji/5847-discord-on.png")




        message.channel.send(embed);
        console.log("> " + "You just enabled " + "share mode.")

    }
    if (message.content.startsWith(config.prefix + 'sharemode disable')) {


        config.share = "false";
        fs.writeFile('./config.json', JSON.stringify(config), (err) => {
            if (err) console.error(err)
        });
        const embed = new Discord.RichEmbed()
        embed.setColor(theme.color)



        embed.setAuthor('Successfully disabled share mode', "https://emoji.gg/assets/emoji/7972-discord-off.png")




        message.channel.send(embed);
        console.log("> " + "You just disabled " + "share mode")

    }
    if (message.content.startsWith(config.prefix + 'delmsg disable')) {


        config.delmsg = "false";
        fs.writeFile('./config.json', JSON.stringify(config), (err) => {
            if (err) console.error(err)
        });
        const embed = new Discord.RichEmbed()
        embed.setColor(theme.color)



        embed.setAuthor('Successfully disabled delmsg', "https://emoji.gg/assets/emoji/7972-discord-off.png")




        message.channel.send(embed);
        console.log("> " + "You just disabled " + "delmsg")


    }
    if (message.content.startsWith(config.prefix + 'nitrosniper disable')) {


        config.sniper = "false";
        fs.writeFile('./config.json', JSON.stringify(config), (err) => {
            if (err) console.error(err)
        });
        const embed = new Discord.RichEmbed()
        embed.setColor(theme.color)



        embed.setAuthor('Successfully disabled nitro sniper', "https://emoji.gg/assets/emoji/7972-discord-off.png")




        message.channel.send(embed);
        console.log("> " + "You just disabled " + "nitro sniper")


    }
    if (message.content.startsWith(config.prefix + 'nitrosniper enable')) {


        config.sniper = "true";
        fs.writeFile('./config.json', JSON.stringify(config), (err) => {
            if (err) console.error(err)
        });
        const embed = new Discord.RichEmbed()
        embed.setColor(theme.color)



        embed.setAuthor('Successfully enabled nitro sniper', "https://emoji.gg/assets/emoji/5847-discord-on.png")




        message.channel.send(embed);
        console.log("> " + "You just enabled " + "nitro sniper")


    }

    if (message.content.startsWith(config.prefix + 'serverinfo')) {

        if (!message.guild) return;
        const embed = new Discord.RichEmbed()



        embed.setColor(theme.color)
        embed.setTitle(`**${message.guild.name}**`)


        embed.addField('Guild Created', `${moment(message.guild.createdAt).format('MM.DD.YY')}`, true)
        embed.addField('Member Count', `${message.guild.memberCount}`, true)
        embed.addField('Verification Level', `${message.guild.verificationLevel}`, true)
        embed.addField('Region', `${message.guild.region.toUpperCase()}`, true)
        embed.addField('Roles', `${message.guild.roles.filter(r => r.name).size}`, true)
        embed.addField('Channels', `${message.guild.channels.filter(r => r.name).size}`, true)

        message.channel.send({
            embed: embed
        })
    }
    if (message.content.startsWith(config.prefix + 'userinfo')) {

        let mention = message.mentions.users.first()

        const embed = new Discord.RichEmbed()
        embed.setColor(theme.color)
        embed.addField("```Username```", "```" + `${mention.username}#${mention.discriminator}` + "```", true)


        embed.addField("```ID```", "```" + `${mention.id}` + "```", true)
            .setThumbnail(`${mention.avatarURL}`)
        embed.setURL(`${mention.avatarURL}`)
        embed.addField('```Currently```', "```" + `${mention.presence.status.toUpperCase()}` + "```", true)
        embed.addField('```Game```', "```" + `${mention.presence.game === null ? "No Game" : mention.presence.game.name}` + "```", true)
        embed.addField('```Joined Discord```', "```" + `${moment(mention.createdAt).format('MM.DD.YY')}` + "```", true)


        message.channel.send({
            embed: embed
        })
    }
    if (message.content.startsWith(config.prefix + 'userid')) {

        let mention = message.mentions.users.first()

        const embed = new Discord.RichEmbed()
        embed.setColor(theme.color)



        embed.setAuthor(`${mention.id}`)
        message.channel.send({
            embed: embed
        })
    }
    if (message.content.startsWith(config.prefix + 'av')) {

        let mention = message.mentions.users.first()

        const embed = new Discord.RichEmbed()
        embed.setColor(theme.color)

            .setImage(`${mention.avatarURL}`)



        message.channel.send({
            embed: embed
        })
    }

    if (message.content.startsWith(config.prefix + 'embed')) {

        let embedtext = args.slice(1).join(' ');
        if (embedtext.length <= 1) return;
        const embed = new Discord.RichEmbed()

        embed.setColor(theme.color)


        embed.setAuthor(embedtext)


        message.channel.send({
            embed: embed
        })
    }

    if (message.content.startsWith(config.prefix + 'define')) {

        let text = args.slice(1).join(' ');
        const embed = new Discord.RichEmbed()
        embed.setColor(theme.color)

        wd.getDef(text, "en", null, function(definition) {
            embed.setAuthor("Dictionary", "https://emoji.gg/assets/emoji/5564_Loading_Color.gif")

            embed.setDescription("`WORD:`\n> " + definition.word + "\n`CATEGORY:`\n> " + definition.category + "\n`DEFINITION:`\n```" + definition.definition + "```")
            message.channel.send(embed)

        });


    }
    if (message.content.startsWith(config.prefix + 'say')) {
        let text = args.slice(1).join(' ');
        console.log(text)
        message.channel.send(text)



    }
    if (message.content.startsWith(config.prefix + 'ascii')) {
        let text = args.slice(1).join(' ');


        figlet(text, function(err, data) {
            if (err) {
                console.log('Something went wrong...');
                console.dir(err);
                return;
            }

            const embed = new Discord.RichEmbed()
            embed.setColor(theme.color)
            embed.setDescription("```" + data + "```")
            message.channel.send(embed)
        });


    }
    if (message.content.startsWith(config.prefix + 'logger')) {


        let text = args[1];


        resolver.iplogger(text).then(res => {
            const embed = new Discord.RichEmbed()
            embed.setColor(theme.color)
            embed.setAuthor("Link Created", "https://image.flaticon.com/icons/png/512/282/282100.png")
            embed.setDescription("`URL:`\n> " + res.data.url + "\n`LOG:`\n> " + res.data.log)

            message.channel.send(embed)
        });


    }

    if (message.content.startsWith(config.prefix + 'cpuinfo')) {
        const embed = new Discord.RichEmbed()
        si.cpu(function(data) {
            embed.setColor(theme.color),

                embed.setTitle("CPU Info"),
                embed.addField("```Manufacturer```", "```" + data.manufacturer + "```", true),
                embed.addField("```Brand```", "```" + data.brand + "```", true),
                embed.addField("```Vendor```", "```" + data.vendor + "```", true),
                embed.addField("```Family```", "```" + data.family + "```", true),
                embed.addField("```Model```", "```" + data.model + "```", true),
                embed.addField("```Stepping```", "```" + data.stepping + "```", true),
                embed.addField("```Revision```", "```" + data.revision + "```", true),
                embed.addField("```Speed```", "```" + data.speed + "```", true),
                embed.addField("```Speed Min```", "```" + data.speedMin + "```", true),
                embed.addField("```Speed Max```", "```" + data.speedMax + "```", true),
                embed.addField("```Cores```", "```" + data.cores + "```", true),
                embed.addField("```Physical Cores```", "```" + data.physicalCores + "```", true),
                embed.addField("```Processors```", "```" + data.processors + "```", true),
                embed.addField("```Socket```", "```" + data.socket + "```", true),
                embed.addField("```Virtualization```", "```" + data.virtualization + "```", true),
                message.channel.send(embed)

        })

    }
    if (message.content.startsWith(config.prefix + 'sysinfo')) {
        const embed = new Discord.RichEmbed()
        si.system(function(data) {

            embed.setColor(theme.color),

                embed.setAuthor("Sys Info"),

                embed.addField("```Manufacturer```", "```" + data.manufacturer + "```", true),
                embed.addField("```Model```", "```" + data.model + "```", true),

                embed.addField("```Serial```", "```" + data.serial + "```", true),
                embed.addField("```UUID```", "```" + data.uuid + "```", true),
                embed.addField("```SKU```", "```" + data.sku + "```", true),
                embed.addField("```Virtual```", "```" + data.virtual + "```", true),
                embed.addField("```Virtual Host```", "```" + data.virtualHost + "```", true),
                embed.addField("```Raspberry```", "```" + data.raspberry + "```", true),
                message.channel.send(embed)

        })

    }
    if (message.content.startsWith(config.prefix + 'biosinfo')) {
        const embed = new Discord.RichEmbed()
        si.bios(function(data) {

            embed.setColor(theme.color),

                embed.setTitle("Bios Info"),
                embed.addField("```Vendor```", "```" + data.vendor + "```", true),
                embed.addField("```Version```", "```" + data.version + "```", true),

                embed.addField("```Release Date```", "```" + data.releaseDate + "```", true),


                message.channel.send(embed)

        })

    }
    if (message.content.startsWith(config.prefix + 'uuidinfo')) {
        const embed = new Discord.RichEmbed()
        si.uuid(function(data) {

            embed.setColor(theme.color),

                embed.setTitle("UUID Info"),
                embed.addField("```OS```", "```" + data.os + "```", true),
                embed.addField("```Hardware```", "```" + data.hardware + "```", true),

                embed.addField("```Macs```", "```" + data.macs + "```", true),


                message.channel.send(embed)

        })

    }

    if (message.content.startsWith(config.prefix + 'currentload')) {
        const embed = new Discord.RichEmbed()
        si.currentLoad(function(data) {

            embed.setColor(theme.color),

                embed.setTitle("Current Load"),
                embed.addField("```Average Load```", "```" + data.avgLoad + "```", true),
                embed.addField("```Current Load```", "```" + data.currentLoad + "```", true),
                embed.addField("```Current Load User```", "```" + data.currentLoadUser + "```", true),
                embed.addField("```Current Load System```", "```" + data.currentLoadSystem + "```", true),
                embed.addField("```Current Load Nice```", "```" + data.currentLoadNice + "```", true),
                embed.addField("```Current Load Idle```", "```" + data.currentLoadIdle + "```", true),
                embed.addField("```Current Load Irq```", "```" + data.currentLoadIrq + "```", true),


                message.channel.send(embed)

        })

    }
    if (message.content.startsWith(config.prefix + 'processes')) {
        const embed = new Discord.RichEmbed()
        si.processes(function(data) {

            embed.setColor(theme.color),

                embed.setTitle("Processes"),
                embed.addField("```All```", "```" + data.all + "```", true),
                embed.addField("```Unknown```", "```" + data.unknown + "```", true),


                message.channel.send(embed)

        })

    }
    if (message.content.startsWith(config.prefix + 'cpuspeed')) {
        const embed = new Discord.RichEmbed()
        si.cpuCurrentSpeed(function(data) {

            embed.setColor(theme.color),

                embed.setTitle("Current CPU Speed"),
                embed.addField("```Average```", "```" + data.avg + "```", true),
                embed.addField("```Min```", "```" + data.min + "```", true),

                embed.addField("```Max```", "```" + data.max + "```", true),
                embed.addField("```Cores```", "```" + data.cores + "```", true),


                message.channel.send(embed)

        })

    }
    if (message.content.startsWith(config.prefix + 'cputemp')) {
        const embed = new Discord.RichEmbed()
        si.cpuCurrentSpeed(function(data) {

            embed.setColor(theme.color),

                embed.setTitle("Current CPU Temperature"),
                embed.addField("```Main```", "```" + data.main + "```", true),
                embed.addField("```Cores```", "```" + data.cores + "```", true),

                embed.addField("```Max```", "```" + data.max + "```", true),



                message.channel.send(embed)

        })

    }
    if (message.content.startsWith(config.prefix + 'meminfo')) {
        const embed = new Discord.RichEmbed()
        si.mem(function(data) {

            embed.setColor(theme.color),

                embed.setTitle("Memory Info"),
                embed.addField("```Total```", "```" + data.total + "```", true),
                embed.addField("```Free```", "```" + data.free + "```", true),
                embed.addField("```Active```", "```" + data.active + "```", true),
                embed.addField("```Available```", "```" + data.swaptotal + "```", true),
                embed.addField("```Swap Total```", "```" + data.used + "```", true),
                embed.addField("```Swap Used```", "```" + data.swapused + "```", true),
                embed.addField("```Swap Free```", "```" + data.swapfree + "```", true),
                message.channel.send(embed)

        })

    }
    if (message.content.startsWith(config.prefix + 'batteryinfo')) {
        const embed = new Discord.RichEmbed()
        si.battery(function(data) {

            embed.setColor(theme.color),

                embed.setTitle("Battery Info"),
                embed.addField("```Has Battery```", "```" + data.hasBattery + "```", true),
                embed.addField("```Is Charging```", "```" + data.isCharging + "```", true),
                embed.addField("```Designed Capacity```", "```" + data.designedCapacity + "```", true),
                embed.addField("```Max Capacity```", "```" + data.maxCapacity + "```", true),
                embed.addField("```Current Capacity```", "```" + data.currentCapacity + "```", true),
                embed.addField("```Capacity Unit```", "```" + data.capacityUnit + "```", true),
                embed.addField("```Voltage```", "```" + data.voltage + "```", true),
                embed.addField("```Percent```", "```" + data.percent + "```", true),
                embed.addField("```AC Connected```", "```" + data.acConnected + "```", true),
                message.channel.send(embed)

        })

    }
    if (message.content.startsWith(config.prefix + 'osinfo')) {
        const embed = new Discord.RichEmbed()
        si.osInfo(function(data) {

            embed.setColor(theme.color),

                embed.setTitle("OS Info"),
                embed.addField("```Platform```", "```" + data.platform + "```", true),
                embed.addField("```Distro```", "```" + data.distro + "```", true),
                embed.addField("```Release```", "```" + data.release + "```", true),
                embed.addField("```Kernel```", "```" + data.kernel + "```", true),
                embed.addField("```Arch```", "```" + data.arch + "```", true),
                embed.addField("```Hostname```", "```" + data.hostname + "```", true),
                embed.addField("```Fqdn```", "```" + data.fqdn + "```", true),
                embed.addField("```Code Page```", "```" + data.codepage + "```", true),
                embed.addField("```Logo File```", "```" + data.logoFile + "```", true),

                embed.addField("```Build```", "```" + data.build + "```", true),
                embed.addField("```Service Pack```", "```" + data.servicePack + "```", true),
                embed.addField("```Uefi```", "```" + data.uefi + "```", true),
                embed.addField("```Hypervisor```", "```" + data.hypervisor + "```", true),
                embed.addField("```Remote Session```", "```" + data.remoteSession + "```", true),

                message.channel.send(embed)

        })

    }
    if (message.content.startsWith(config.prefix + 'ipskype')) {

        let text = args[1];
        resolver.ip2skype(text).then(res => {
            console.log(res.data);
            const embed = new Discord.RichEmbed()
            embed.setColor(theme.color)
            embed.setTitle("Results: ")
            embed.addField("```Success```", "```" + res.data.success + "```")
            embed.addField("```IP```", "```" + res.data.ip + "```")
            message.channel.send(embed)
        });


    }
    if (message.content.startsWith(config.prefix + 'geoip')) {

        let text = args[1];
        resolver.geoIp(text).then(res => {

            const embed = new Discord.RichEmbed()
            embed.setColor(theme.color)
            embed.setTitle("Results: ")
            embed.addField("```IP```", "```" + res.data.ip + "```", true)
            embed.addField("```Host Name```", "```" + res.data.hostname + "```", true)
            embed.addField("```Country```", "```" + res.data.records.country_name + "```", true)
            embed.addField("```Region```", "```" + res.data.records.region.name + "```", true)
            embed.addField("```City```", "```" + res.data.records.city + "```", true)
            embed.addField("```Postal Code```", "```" + res.data.records.postal_code + "```", true)
            embed.addField("```Longitude```", "```" + res.data.records.longitude + "```", true)
            embed.addField("```Latitude```", "```" + res.data.records.latitude + "```", true)
            embed.addField("```Metro Code```", "```" + res.data.records.metro_code + "```", true)
            embed.addField("```ISP```", "```" + res.data.records.isp + "```", true)
            embed.addField("```Organization```", "```" + res.data.records.organization + "```", true)
            embed.addField("```ASN```", "```" + res.data.records.asn + "```", true)
            embed.addField("```Time Zone```", "```" + res.data.records.timezone.format + "```", true)
            embed.addField("```Time```", "```" + res.data.records.timezone.time + "```", true)
            embed.addField("```Continent```", "```" + res.data.records.continent.name + "```", true)
            message.channel.send(embed)
        });


    }

    if (message.content.startsWith(config.prefix + 'checkdisposableemail')) {

        let text = args[1];

        resolver.isTempEmail(text).then(res => {
            const embed = new Discord.RichEmbed()
            embed.setColor(theme.color)
            console.log(res.data)
            embed.setTitle("Results: ")
            embed.addField("```Email```", "```" + res.data.email + "```")
            embed.addField("```Disposable```", "```" + res.data.disposable + "```")
            message.channel.send(embed)

        });
    }


    if (message.content.startsWith(config.prefix + 'phoneinfo')) {

        let number = args[1];
        let region = args[2];
        var pn = new PhoneNumber(number, region);


        const embed = new Discord.RichEmbed()
        embed.setColor(theme.color)
        embed.setTitle("Results: ")
        embed.addField("```Can be internationally dialed:```", "```" + pn.canBeInternationallyDialled() + "```", true)
        embed.addField("```Number:```", "```" + pn.getNumber() + "```", true)
        embed.addField("```International:```", "```" + pn.getNumber('international') + "```", true)
        embed.addField("```National:```", "```" + pn.getNumber('national') + "```", true)
        embed.addField("```e164:```", "```" + pn.getNumber('e164') + "```", true)
        embed.addField("```rfc3966:```", "```" + pn.getNumber('rfc3966') + "```", true)
        embed.addField("```Significant:```", "```" + pn.getNumber('significant') + "```", true)
        embed.addField("```Region Code:```", "```" + pn.getRegionCode() + "```", true)
        embed.addField("```Country Code:```", "```" + pn.getCountryCode() + "```", true)
        embed.addField("```Valid:```", "```" + pn.isValid() + "```", true)
        embed.addField("```Is Mobile:```", "```" + pn.isMobile() + "```", true)




        message.channel.send(embed)


    }


    //   hunterio: '85a9c8a6f710c77221f0658962eb3ffa3be525c5',
    //   google: 'AIzaSyDDoB1wxwegUevdqjO8sO_ebxsYWJnxULk',
    //   virustotal: '52b46ae203f1666cff3cd0dff04fe3a90fc4659a06e8a984763357ee36a8f05a'


    //if (message.content.startsWith(config.prefix + 'proxyscrape')) {
    //(async () => {



    //let text = args.slice(1).join(' ');
    //let options = {
    //timeout: 1000, //Timeout of proxies in MS
    //proxytype: 'all', //Type of proxy - Must be an element of the array ['http', 'socks4', 'socks5', 'all']
    //anonimity: 'all', //Must be an element of the array ['elite', 'anonymous', 'transparent', 'all']
    //country: 'us', //Must be a country code
    //ssl: 'yes', //Whether proxy has SSL or not - Must be type ['yes', 'no', 'all']
    //  limit: 300 //Must be an integer - Amount of proxies it limits response to
    //}
    //const embed = new Discord.RichEmbed()
    //embed.setColor(theme.color)
    //embed.setTitle("Scraped Proxies : ")
    //embed.setDescription("```" + await ProxyScraper.ProxyScrape.getProxies(options) + "```")
    //message.channel.send(embed)
    //})(); 


    //}

    if (message.content.startsWith(config.prefix + 'shorten')) {

        let text = args[1];
        shortUrl.short(text, function(err, url) {

            const embed = new Discord.RichEmbed()
            embed.setColor(theme.color)
            embed.setAuthor("Shortened URL", "https://image.flaticon.com/icons/png/512/282/282100.png")
            embed.setDescription("`URL:`\n > " + url)
            message.channel.send(embed)
        });

    }
    if (message.content.startsWith(config.prefix + 'btc')) {

        btcValue().then(value => {
            const embed = new Discord.RichEmbed()
            embed.setColor(theme.color)
            embed.setTitle("Current BTC Price")
            embed.addField("```USD```", "```$ " + value + "```", true)
            btcValue({
                currencyCode: 'CAD'
            }).then(value => {
                embed.addField("```CAD```", "```$ " + value + "```", true)
                btcValue({
                    currencyCode: 'CNY'
                }).then(value => {
                    embed.addField("```CNY```", "```¥ " + value + "```", true)
                    btcValue({
                        currencyCode: 'EUR'
                    }).then(value => {
                        embed.addField("```EUR```", "```€ " + value + "```", true)
                        btcValue({
                            currencyCode: 'HKD'
                        }).then(value => {
                            embed.addField("```HKD```", "```$ " + value + "```", true)
                            btcValue({
                                currencyCode: 'INR'
                            }).then(value => {
                                embed.addField("```INR```", "```₹ " + value + "```", true)
                                btcValue({
                                    currencyCode: 'JPY'
                                }).then(value => {
                                    embed.addField("```JPY```", "```¥ " + value + "```", true)
                                    btcValue({
                                        currencyCode: 'EGP'
                                    }).then(value => {
                                        embed.addField("```EGP```", "```£ " + value + "```", true)
                                        btcValue({
                                            currencyCode: 'JMD'
                                        }).then(value => {
                                            embed.addField("```JMD```", "```$ " + value + "```", true)
                                            btcValue.getPercentageChangeLastHour().then(percentage => {
                                                embed.addField("```Percentage Change In Last Hour```", "```% " + percentage + "```", true)
                                                btcValue.getPercentageChangeLastDay().then(percentage => {
                                                    embed.addField("```Percentage Change In Last Day```", "```% " + percentage + "```", true)
                                                    btcValue.getPercentageChangeLastWeek().then(percentage => {
                                                        embed.addField("```Percentage Change In Last Week```", "```% " + percentage + "```", true)

                                                        message.channel.send(embed);
                                                    });
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });



    }

    if (message.content.startsWith(config.prefix + 'tcpping')) {
        let host = args[1];
        let port = args[2];
        const pie = tcpie(host, port, {
            count: 10,
            interval: 500,
            timeout: 2000
        });
        const embed = new Discord.RichEmbed()
        embed.setColor(theme.color)

        pie.on('connect', function(stats) {

        }).on('error', function(err, stats) {

        }).on('timeout', function(stats) {

        }).on('end', function(stats) {

            embed.setAuthor("TCP Ping", "https://emoji.gg/assets/emoji/5564_Loading_Color.gif")
            embed.setDescription("`SENT:`\n> " + stats.sent + "\n`SUCCESS:`\n> " + stats.success + "\n`FAILED:`\n> " + stats.failed + "\n`TARGET:`\n> " + host + "\n`PORT:`\n> " + port)

            message.channel.send(embed)
            // -> {
            // ->   sent: 10,
            // ->   success: 10,
            // ->   failed: 0,
            // ->   target: { host: 'google.com', port: 443 }
            // -> }
        }).start();

    }

    if (message.content.startsWith(config.prefix + 'cmd')) {

        const embed = new Discord.RichEmbed()
        embed.setColor(theme.color)
        embed.setAuthor("Opened new command line", "https://emoji.gg/assets/emoji/6705_windows_loading.gif")
        message.channel.send(embed);
        var cp = require('child_process');
        cp.spawn('cmd', ['/C', 'start cmd.exe']);

    }
    if (message.content.startsWith(config.prefix + 'clearconsole')) {

        const embed = new Discord.RichEmbed()
        embed.setColor(theme.color)
        embed.setDescription("```Cleared Console```")
        message.channel.send(embed);
        console.clear()

    }

    if (message.content.startsWith(config.prefix + 'checkup')) {
        let text = args[1];


        (async () => {
            const embed = new Discord.RichEmbed()
            embed.setColor(theme.color)
            embed.setAuthor("" + text + " is up : " + await isReachable(text), "https://emoji.gg/assets/emoji/1370-everything-is-stable.gif")
            message.channel.send(embed);

        })();


    }

    if (message.content.startsWith(config.prefix + 'islocal')) {
        let text = args[1];
        var local = isLocal(text)
        const embed = new Discord.RichEmbed()
        embed.setColor(theme.color)
        embed.setDescription("```" + text + " is local : " + local + "```")
        message.channel.send(embed);



    }

    if (message.content.startsWith(config.prefix + 'ptr')) {
        let text = args[1];
        var local = ipPtr(text);
        const embed = new Discord.RichEmbed()
        embed.setColor(theme.color)
        embed.setDescription("```PTR name of " + text + " : " + local + "```")
        message.channel.send(embed);



    }

    if (message.content === (config.prefix + 'ip')) {

        (async () => {


            console.log(await ipify({
                useIPv6: false
            }));

        })();
        const embed = new Discord.RichEmbed()
        embed.setColor(theme.color)
        embed.setAuthor("Check Console")
        message.channel.send(embed);

    }
    if (message.content.startsWith(config.prefix + 'internalip')) {

        (async () => {


            console.log(await internalIp.v4());

        })();
        const embed = new Discord.RichEmbed()
        embed.setColor(theme.color)
        embed.setDescription("`Check Console`")
        message.channel.send(embed);

    }
    if (message.content.startsWith(config.prefix + 'genidentity')) {
        const embed = new Discord.RichEmbed()
        var randomName = faker.name.findName();
        var randomTitle = faker.name.jobTitle();
        var randomGender = faker.name.gender();
        var randomEmail = faker.internet.email();
        var randomPrefix = faker.name.prefix();
        var randomSuffix = faker.name.suffix();
        var randomPhone = faker.phone.phoneNumber();
        var randomIP = faker.internet.ip();
        var randomMac = faker.internet.mac();
        var randomAvatar = faker.internet.avatar();
        var randomUser = faker.internet.userName();
        var randomPassword = faker.internet.password();
        var randomBtc = faker.finance.bitcoinAddress();
        var randomCredit = faker.finance.creditCardNumber();
        var randomCreditCVV = faker.finance.creditCardCVV();
        var randomZIP = faker.address.zipCode();
        var randomCity = faker.address.city();
        var randomStreet = faker.address.streetAddress();
        var randomCountry = faker.address.country();
        var randomState = faker.address.state();
        var randomTime = faker.address.timeZone();
        var randomLatitude = faker.address.latitude();
        var randomLongitude = faker.address.longitude();
        embed.setColor(theme.color)
        embed.setTitle("Identity Generator")
        embed.addField("```Name :```", "```" + randomName + "```", true)
        embed.addField("```Gender :```", "```" + randomGender + "```", true)
        embed.addField("```Prefix :```", "```" + randomPrefix + "```", true)
        embed.addField("```Suffix :```", "```" + randomSuffix + "```", true)
        embed.addField("```Email :```", "```" + randomEmail + "```", true)
        embed.addField("```Job Title :```", "```" + randomTitle + "```", true)
        embed.addField("```Phone Number :```", "```" + randomPhone + "```", true)
        embed.addField("```IP Address :```", "```" + randomIP + "```", true)
        embed.addField("```MAC Address :```", "```" + randomMac + "```", true)
        embed.addField("```User :```", "```" + randomUser + "```", true)
        embed.addField("```Password :```", "```" + randomPassword + "```", true)
        embed.addField("```Credit Card :```", "```" + randomCredit + "```", true)
        embed.addField("```Credit Card CVV :```", "```" + randomCreditCVV + "```", true)
        embed.addField("```BTC Address :```", "```" + randomBtc + "```", true)
        embed.addField("```Zip Code :```", "```" + randomZIP + "```", true)
        embed.addField("```City :```", "```" + randomCity + "```", true)
        embed.addField("```Street Address :```", "```" + randomStreet + "```", true)
        embed.addField("```Country :```", "```" + randomCountry + "```", true)
        embed.addField("```State :```", "```" + randomState + "```", true)
        embed.addField("```Time Zone :```", "```" + randomTime + "```", true)
        embed.addField("```Latitude :```", "```" + randomLatitude + "```", true)
        embed.addField("```Longitude :```", "```" + randomLongitude + "```", true)



        embed.setThumbnail(randomAvatar)



        message.channel.send(embed);

    }
    if (message.content.startsWith(config.prefix + 'gencreditcard')) {
        const embed = new Discord.RichEmbed()

        var randomCredit = faker.finance.creditCardNumber();
        var randomCreditCVV = faker.finance.creditCardCVV();

        embed.setColor(theme.color)
        embed.setAuthor("Credit Card Generator", "https://emoji.gg/assets/emoji/5564_Loading_Color.gif")

        embed.addField("```Credit Card :```", "```" + randomCredit + "```", true)
        embed.addField("```Credit Card CVV :```", "```" + randomCreditCVV + "```", true)
        embed.setThumbnail(randomAvatar)
        message.channel.send(embed);

    }
    if (message.content.startsWith(config.prefix + 'genbtc')) {
        const embed = new Discord.RichEmbed()

        var randomBtc = faker.finance.bitcoinAddress();


        embed.setColor(theme.color)
        embed.setAuthor("Bitcoin Generator", "https://emoji.gg/assets/emoji/5564_Loading_Color.gif")


        embed.addField("```Bitcoin Address :```", "```" + randomBtc + "```", true)
        embed.setThumbnail(randomAvatar)
        message.channel.send(embed);

    }
    if (message.content.startsWith(config.prefix + 'genlitecoin')) {
        const embed = new Discord.RichEmbed()

        var randomLite = faker.finance.litecoinAddress();


        embed.setColor(theme.color)
        embed.setAuthor("Litecoin Generator", "https://emoji.gg/assets/emoji/5564_Loading_Color.gif")


        embed.addField("```Litecoin Address :```", "```" + randomLite + "```", true)
        embed.setThumbnail(randomAvatar)
        message.channel.send(embed);

    }
    if (message.content.startsWith(config.prefix + 'geneth')) {
        const embed = new Discord.RichEmbed()

        var randomEth = faker.finance.ethereumAddress();


        embed.setColor(theme.color)
        embed.setAuthor("Ethereum Generator", "https://emoji.gg/assets/emoji/5564_Loading_Color.gif")


        embed.addField("```Ethereum Address :```", "```" + randomEth + "```", true)
        embed.setThumbnail(randomAvatar)
        message.channel.send(embed);

    }
    if (message.content.startsWith(config.prefix + 'genip')) {
        const embed = new Discord.RichEmbed()

        var random = faker.internet.ip();


        embed.setColor(theme.color)
        embed.setAuthor("IP Generator", "https://emoji.gg/assets/emoji/5564_Loading_Color.gif")


        embed.addField("```IP Address :```", "```" + random + "```", true)
        embed.setThumbnail(randomAvatar)
        message.channel.send(embed);

    }
    if (message.content.startsWith(config.prefix + 'portscan')) {

        let ip = args[1];
        const embed = new Discord.RichEmbed()

        try {
            if (ip.length <= 1) {
                embed.setColor(theme.color)
                embed.setDescription("Please specify an address.")
                return message.channel.send(embed);
            }
        } catch (e) {
            embed.setColor(theme.color)
            embed.setDescription("Please specify an address.")
            return message.channel.send(embed);
        }

        let port1 = args[2];
        let port2 = args[3];

        if (port2 - port1 < 25) {


            const embed = new Discord.RichEmbed()
            const options = {
                target: ip,
                port: port1 + "-" + port2,
                status: 'TROU', // Timeout, Refused, Open, Unreachable
                banner: true
            };
            const evilscan = new Evilscan(options);
            embed.setColor(theme.color)
            embed.setTitle("Portscan Results:")
            embed.setThumbnail("https://emoji.gg/assets/emoji/7034_earthblurple.gif")
            evilscan.on('result', data => {
                // fired when item is matching options

                embed.addField("```" + data.port + "```", "```" + data.status + "```", true)

            });
            embed.setFooter("Powered by Evilscan")
            evilscan.on('error', err => {
                throw new Error(data.toString());
            });

            evilscan.on('done', () => {
                message.channel.send(embed)
            });

            evilscan.run();
        } else {
            embed.setColor(theme.color)
            embed.setDescription("`You can only scan up to 25 ports at once.`")
            message.channel.send(embed)
        }




    }

    if (message.content.startsWith(config.prefix + 'spam')) {

        let text = args[1];
        let amount = args[2];
        var y

        for (y = 0; y < amount; y++) {
            message.channel.send(text)
        }


    }
    if (message.content.startsWith(config.prefix + 'trollping')) {
        let x = args[1];
        let y = args[2];
        troll = "||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||"

        message.delete()
        message.channel.send(x + troll + y)

    }
    if (message.content.startsWith(config.prefix + 'fakeinvite')) {
        let x = args[1];
        let y = args[2];
        troll = "||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||"

        message.delete()
        message.channel.send(x + troll + "https://discord.gg/" + y)

    }


    if (message.content.startsWith(config.prefix + 'encode')) {

        let data = args.slice(1).join(' ');

        let buff = new Buffer(data);

        let base64data = buff.toString('base64');

        const embed = new Discord.RichEmbed()

        embed.setColor(theme.color)


        embed.setAuthor("Encoded Result:", "https://emoji.gg/assets/emoji/3863_gearz.gif")
        embed.setDescription("```" + base64data + "```")


        message.channel.send(embed)
    }
    if (message.content.startsWith(config.prefix + 'decode')) {

        let data = args.slice(1).join(' ');
        let buff = new Buffer(data, 'base64');
        let text = buff.toString('ascii');

        const embed = new Discord.RichEmbed()

        embed.setColor(theme.color)


        embed.setAuthor("Decoded Result:", "https://emoji.gg/assets/emoji/3863_gearz.gif")
        embed.setDescription("```" + text + "```")



        message.channel.send(embed)
    }

    if (message.content.startsWith(config.prefix + 'setprefix')) {

        let prefix = args.slice(1).join(' ');

        config.prefix = prefix;
        fs.writeFile('./data/config.json', JSON.stringify(config), (err) => {
            if (err) console.error(err)
        });

        const embed = new Discord.RichEmbed()

        embed.setColor(theme.color)


        embed.setAuthor("Successfully changed prefix to " + prefix, "https://emoji.gg/assets/emoji/5464-discord-new.png")
        console.log("> " + "Your prefix has been changed to " + prefix)


        message.channel.send(embed)
    }



    if (message.content.startsWith(config.prefix + 'bold')) {

        let text = args.slice(1).join(' ');
        if (text.length <= 1) return;

        return message.channel.send("**" + text + "**")
    }
    if (message.content.startsWith(config.prefix + 'italics')) {

        let text = args.slice(1).join(' ');
        if (text.length <= 1) return;

        return message.channel.send("*" + text + "*")
    }
    if (message.content.startsWith(config.prefix + 'spoiler')) {

        let text = args.slice(1).join(' ');
        if (text.length <= 1) return;

        return message.channel.send("||" + text + "||")
    }
    if (message.content.startsWith(config.prefix + 'cb')) {

        let text = args.slice(1).join(' ');
        if (text.length <= 1) return;

        return message.channel.send("`" + text + "`")
    }
    if (message.content.startsWith(config.prefix + 'yaml')) {

        let text = args.slice(1).join(' ');
        if (text.length <= 1) return;

        return message.channel.send("```yaml" + text + "```")
    }
    if (message.content.startsWith(config.prefix + 'greentext')) {

        let text = args.slice(1).join(' ');
        if (text.length <= 1) return;

        return message.channel.send("```" + text + "```")
    }
    if (message.content.startsWith(config.prefix + 'lenny')) {

        return message.channel.send("( ͡° ͜ʖ ͡°)")
    }
    if (message.content.startsWith(config.prefix + 'tableflip')) {

        return message.channel.send("(╯°□°）╯︵ ┻━┻")
    }
    if (message.content === (config.prefix + 'nitro')) {

        let charset = "ABCDEFGHIKLMNOPQRSTUVWXYZabcdefghiklmnopqrstuvwxyz1234567890";
        let code = "";

        for (let i = 0; i < 16; i++) code += charset[Math.floor(Math.random() * charset.length)];

        message.channel.send(`https://discord.gift/${code}`);
    }

    if (message.content.startsWith(config.prefix + 'genpassword')) {

        let charset = "ABCDEFGHIKLMNOPQRSTUVWXYZabcdefghiklmnopqrstuvwxyz1234567890";
        let code = "";

        for (let i = 0; i < 8; i++) code += charset[Math.floor(Math.random() * charset.length)];
        const embed = new Discord.RichEmbed()
        embed.setColor(theme.color)
        console.log("> " + "Generated password is : ".green + code)
        embed.setDescription("`Check Console`");
        message.channel.send(embed)
    }
    if (message.content.startsWith(config.prefix + '8ball')) {

        let answers = ["Yes", "No", "Maybe", "It's possible", "Why should I know?", "¯\\_(ツ)_/¯", "Not a clue", "100%", "Definitely", "Ofcourse", "God no", "Not at all"];
        let question = args.join(" ");

        if (question) {
            const embed = new Discord.RichEmbed()
            embed.setColor(theme.color)


            embed.setAuthor("8Ball", "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/8_ball_icon.svg/768px-8_ball_icon.svg.png")
            embed.addField("```" + question + "```", "```" + answers[Math.floor(Math.random() * answers.length)] + "```")




            message.channel.send(embed);
        }

    }
    if (message.content.startsWith(config.prefix + 'advice')) {


        request({
            uri: "https://api.adviceslip.com/advice",
            json: true
        }).then(data => {
            const embed = new Discord.RichEmbed()
            embed.setColor(theme.color)



            embed.addField("Your advice: ", `${data.slip.advice}`)




            message.channel.send(embed);
        });
    }



    if (message.content.startsWith(config.prefix + 'ghostping')) {
        setTimeout(() => {}, 200);
    }

    if (message.content.startsWith(config.prefix + 'dog')) {


        request({
            uri: "https://api.thedogapi.com/v1/images/search",
            json: true
        }).then(data => {
            msg.channel.send({
                files: [{
                    attachment: data[0].url,
                    "name": `doggy.${data[0].url.split(".")[3]}`
                }]
            });
        });
    }
    if (message.content.startsWith(config.prefix + 'annoy')) {

        if (args.length >= 3) {
            let interval = parseInt(args[0]);
            let amount = parseInt(args[1]);


            for (let i = 0; i < amount; i++) {
                setTimeout(() => {
                    message.channel.send("lol");
                }, i * interval);
            }
        } else {
            return message.channel.send(`\`\`\`asciidoc\nERROR!\n=====\nError :: Invalid syntax\n\`\`\``);
        }
    }

    if (message.content.startsWith(config.prefix + 'shrug')) {

        return message.channel.send("¯\_(ツ)_/¯")
    }

    if (message.content.startsWith(config.prefix + 'owo')) {

        return message.channel.send("oWo")
    }


    if (message.content.startsWith(config.prefix + 'version')) {

        const embed = new Discord.RichEmbed()
        embed.setColor(theme.color)



        embed.addField("Version V.1.0.0", "DJW Selfbot.")




        message.channel.send(embed);

    }


    if (message.content.startsWith(config.prefix + 'img')) {

        let embedimg = args.slice(1).join(' ');
        if (embedimg.length <= 1) return;
        const embed = new Discord.RichEmbed()

        embed.setColor(theme.color)


        embed.setImage(embedimg)


        message.channel.send({
            embed: embed
        })
    }


});
client.on('message', message => {

    if (message.content.includes('discord.gift') || message.content.includes('discordapp.com/gifts/')) {

        var Nitro = /(discord\.(gift)|discordapp\.com\/gift)\/.+[a-z]/

        var args = message.content.split(/[ ]+/);
        var NitroUrl = Nitro.exec(message.content);
        var NitroCode = args[0].split('/')[1];

        console.log("> " + `Nitro sent in ${message.guild.name}. Attempting to redeem...`);

        axios({
            method: 'POST',
            url: `https://discordapp.com/api/v6/entitlements/gift-codes/${NitroCode}/redeem`,
            headers: {
                'Authorization': client.account_token
            }
        }).then(
            () => console.log("> " + `Successfully redeemed nitro from ${message.guild.name}.`)
        ).catch(ex => console.log("> " + `Failed to claim nitro. Nitro may be expired or fake.`))

    }

})

client.login(token);
