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
    var aa = ["cek","Cek","tc","Tc"];
    //if(message.body(text)) {
        if (aa.includes(message.body)) {
        message.reply('Online!');
    }
    var bb = ["hai","Hai","halo","Halo"];
        if (bb.includes(message.body)) {
        message.reply('Whatsup?');
    }
    var cc = ["Link","link","link gan","send link","link?","Link?"];
        if (cc.includes(message.body)) {
        message.reply('link apa nih? bagi dong hehe');
    }

    //With Command
    if (message.body === '!link') {
        message.reply('*Wibuclips Link*\n\nInstagram : https://instagram.com/wibuclips\nDiscord : https://discord.gg/5MJZfBYcvA\nPartner : https://instagram.com/dokteranime');
    }
    if (message.body === '!rules') {
        message.reply('*Wibuclips Rules*\n\n◦ Dont share porn\n◦ Dont share promotion link\n◦ Dont share scam link\n◦ You must 14 y.o+\n◦ Dont spam message');
    }
    if (message.body === '!admin') {
        message.reply(`@${6288228794134}\n@${6285263370991}\n@${6281299385684}\n@${62895355480683}\n@${6285156316414}`, {
            mentions: [user]
        });
    }
    if (message.body === '!help') {
        message.reply('*Bot Commands*\n\n*!rules*\n◦ menampilkan peraturan wibuclips\n*!link*\n◦ menampilkan link wibuclips\n\nJangan lupa follow ig @wibuclips')
    }
});


// Fungsi Async
client.on('message', async (msg) => {
    const mentions = await msg.getMentions();
    
    for(let contact of mentions) {
        console.log(`${contact.pushname} was mentioned`);
    }
});
