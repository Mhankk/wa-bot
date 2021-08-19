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
    var dd = ["ajg","anjg","cok","Cok","asw","asu","Asw","Asu","ajg emg","Ajg emg","bgsd","bgsd emg","Bgsd","lah ajg","Lah ajg","bct","bacot","Bct","Bacot","woi","Woi","woyy"];
        if (dd.includes(message.body)) {
        message.reply('busett ngegadd anjer :v');
    }
    var ee = ["Apa?","apa?","apa","Apa","paan","apaan?","Apaan?","apaan","ada apa?","Ada apa?","mana","Mana","mana?","Mana?","Apanya?","apanya?","lah","lohe","apa ini","apa ini?"];
        if (ee.includes(message.body)) {
        message.reply('lah apa??');
    }
    var ff = ["Yoi","yoi","iya","Iya","iya dong","Iya dong","iyaa","anjay","njerr","bjirr","Bjirr","Anjay","Njerr","Njirr","njirr","njirrr","bjir","Bjir","waduh","gapapa","2","Jgn gtu","gaboleh","gabole","jan gtu","oalah","yoiii","yoii","ada","skip","skipp","nyimak","Nyimak"];
        if (ff.includes(message.body)) {
        message.reply('hmmm');
    }
    var gg = ["hehehe","hehe","xixixi","hihihi","hahaha","wkwkwk","wkwkw","hihi"];
        if (gg.includes(message.body)) {
        message.reply('tawa lu bgsd');
    }
    var hh = ["dc?","Dc?","dc gan","Dc gan","Dc gan?","Discord?","masih pada dc ga?","msh pada dc ga?","dc ga?"];
        if (hh.includes(message.body)) {
        message.reply('Kuyylah');
    }
    var ii = ["Kok tumben sepi","sepii","sepi ","tumben sepi","kok sepi?","Kok sepi?"];
        if (ii.includes(message.body)) {
        message.reply('mesti lu jomblo ya');
    }
    var jj = ["Assalamualaikum","assalamualaikum","Assalamualaikum wr.wb","assalamualaikum wr.wb","assalamualaikum semua","samlekom"];
        if (jj.includes(message.body)) {
        message.reply('Waalaikumsalam');
    }
    var kk = ["salken","salken jg","Salken","Salken jg"];
        if (kk.includes(message.body)) {
        message.reply('Salken saya bot Wibuclips, gunakan *!help* untuk berinteraksi');
    }
    var ll = ["wey","weyy","weyyy","astaga","ehh","hehh","heh","ihh","ih","ish","anjim","anjim emg"];
        if (ll.includes(message.body)) {
        message.reply('awokwkwokwo diketawain bot');
    }

    //With Command
    if (message.body === '!link') {
        message.reply('*Wibuclips Link*\n\nInstagram : https://instagram.com/wibuclips\nDiscord : https://discord.gg/5MJZfBYcvA\nPartner : https://instagram.com/dokteranime');
    }
    if (message.body === '!rules') {
        message.reply('*Wibuclips Rules*\n\n∘ Dont share porn\n∘ Dont share promotion link\n∘ Dont share scam link\n∘ You must 14 y.o+\n∘ Dont spam message');
    }
    if (message.body === '!admin') {
        message.reply(`@${6288228794134}\n@${6285263370991}\n@${6281299385684}\n@${62895355480683}\n@${6285156316414}`, {
            mentions: [user]
        });
    }
    if (message.body === '!help') {
        message.reply('*Bot Commands*\n\n*!rules*\n∘ menampilkan peraturan wibuclips\n*!link*\n∘ menampilkan link wibuclips\n\nJangan lupa follow ig @wibuclips')
    }
});


// Fungsi Async
client.on('message', async (msg) => {
    const mentions = await msg.getMentions();
    
    for(let contact of mentions) {
        console.log(`${contact.pushname} was mentioned`);
    }
});
