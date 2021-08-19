const qrcode = require('qrcode-terminal');
const fs = require('fs');
const { Client } = require('whatsapp-web.js');

// Path where the session data will be stored
const SESSION_FILE_PATH = './session.json';

// Load the session data if it has been previously saved
let sessionData;
if(fs.existsSync(SESSION_FILE_PATH)) {
    sessionData = require(SESSION_FILE_PATH);
}

// Use the saved values
const client = new Client({
    session: sessionData
});

// Save session values to the file upon successful auth
client.on('authenticated', (session) => {
    sessionData = session;
    fs.writeFile(SESSION_FILE_PATH, JSON.stringify(session), (err) => {
        if (err) {
            console.error(err);
        }
    });
});


client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.initialize();

client.on('message', message => {

    //Random Chat
    var aa = ["cek","Cek","tc","Tc","p","P"];
    //if(message.body('text')) {
        if (aa.includes(message.body)) {
        message.reply('Online!');
    }
    var bb = ["hai","Hai","halo","Halo","hallo","Hallo"];
        if (bb.includes(message.body)) {
        message.reply('Whatsup?');
    }
    var cc = ["Link","link","link gan","send link","link?","Link?"];
        if (cc.includes(message.body)) {
        message.reply('link apa nih? bagi dong hehe');
    }
    var dd = ["ajg","anjg","cok","Cok","asw","asu","Asw","Asu","ajg emg","Ajg emg","bgsd","bgsd emg","Bgsd"];
        if (dd.includes(message.body)) {
        message.reply('busett ngegadd anjer :v');
    }
    var ee = ["Apa?","apa?","apa","Apa","paan","apaan?","Apaan?","apaan","ada apa?","Ada apa?"];
        if (ee.includes(message.body)) {
        message.reply('lah apa??');
    }
    var ff = ["Yoi","yoi","iya","Iya","iya dong","Iya dong"];
        if (ff.includes(message.body)) {
        message.reply('hmmmm');
    }
    var gg = ["hehehe","hehe","xixixi","hihihi","hahaha","wkwkwk"];
        if (gg.includes(message.body)) {
        message.reply('tawa lu bgsd');
    }
    var hh = ["dc?","Dc?","dc gan","Dc gan","Dc gan?","Discord?"];
        if (hh.includes(message.body)) {
        message.reply('Kuyylah');
    }

    //With Command
    if (message.body === '!link') {
        message.reply('*Wibuclips Link*\n\nInstagram : https://instagram.com/wibuclips\nDiscord : https://discord.gg/5MJZfBYcvA\nPartner : https://instagram.com/dokteranime');
    }
    if (message.body === '!rules') {
        message.reply('*Wibuclips Rules*\n\nâ—¦ Dont share porn\nâ—¦ Dont share promotion link\nâ—¦ Dont share scam link\nâ—¦ You must 14 y.o+\nâ—¦ Dont spam message');
    }
    if (message.body === '!admin') {
        message.reply(`@${6288228794134}\n@${6285263370991}\n@${6281299385684}\n@${62895355480683}\n@${6285156316414}`, {
            mentions: [user]
        });
    }
    if (message.body === '!help') {
        message.reply('*Bot Commands*\n\n*!rules*\nâ—¦ menampilkan peraturan wibuclips\n*!link*\nâ—¦ menampilkan link wibuclips\n\nJangan lupa follow ig @wibuclips')
    }
});


// Fungsi Async
client.on('message', async (msg) => {
    const mentions = await msg.getMentions();
    
    for(let contact of mentions) {
        console.log(`${contact.pushname} was mentioned`);
    }
});
