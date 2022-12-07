const { Client, MessageMedia, LocalAuth } = require('whatsapp-web.js');
const express = require('express');
const { body, validationResult } = require('express-validator');
//const socketIO = require('socket.io');
const qrcode = require('qrcode-terminal');
//const http = require('http');
//const http = require("node:http");
const fs = require('fs');
const { phoneNumberFormatter } = require('./helpers/formatter');
const fileUpload = require('express-fileupload');
const axios = require('axios');
const mime = require('mime-types');






const port = process.env.PORT || 3002;

const app = express();
//const server = http.createServer(app);
//const io = socketIO(server);






app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));


app.use(fileUpload({
  debug: false
}));

app.get('/', (req, res) => {
 res.send('inde');
});

app.post('/',(req,res)=>{
console.log('=====>',req.body,'<=====');
res.status(200).json({ message: 'berhasil' })
//let message = req.body.message ;
// const desc =(message.substring(131,144));
// console.log('=====>',desc,'<======');
});




const client = new Client({
  restartOnAuthFail: true,
  puppeteer: {
    headless: true,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-accelerated-2d-canvas',
      '--no-first-run',
      '--no-zygote',
      '--single-process',
      '--disable-gpu'
    ],
  },
  authStrategy: new LocalAuth()
});

// client.on('message', msg => {
//   if (msg.body == '!ping') {
//     msg.reply('pong');
//   } else if (msg.body == 'good morning') {
//     msg.reply('selamat pagi');
//   } else if (msg.body == '!groups') {
//     client.getChats().then(chats => {
//       const groups = chats.filter(chat => chat.isGroup);

//       if (groups.length == 0) {
//         msg.reply('You have no group yet.');
//       } else {
//         let replyMsg = '*YOUR GROUPS*\n\n';
//         groups.forEach((group, i) => {
//           replyMsg += `ID: ${group.id._serialized}\nName: ${group.name}\n\n`;
//         });
//         replyMsg += '_You can use the group id to send a message to the group._'
//         msg.reply(replyMsg);
//       }
//     });
//   }

//   // NOTE!
//   // UNCOMMENT THE SCRIPT BELOW IF YOU WANT TO SAVE THE MESSAGE MEDIA FILES
//   // Downloading media
//   // if (msg.hasMedia) {
//   //   msg.downloadMedia().then(media => {
//   //     // To better understanding
//   //     // Please look at the console what data we get
//   //     console.log(media);

//   //     if (media) {
//   //       // The folder to store: change as you want!
//   //       // Create if not exists
//   //       const mediaPath = './downloaded-media/';

//   //       if (!fs.existsSync(mediaPath)) {
//   //         fs.mkdirSync(mediaPath);
//   //       }

//   //       // Get the file extension by mime-type
//   //       const extension = mime.extension(media.mimetype);
        
//   //       // Filename: change as you want! 
//   //       // I will use the time for this example
//   //       // Why not use media.filename? Because the value is not certain exists
//   //       const filename = new Date().getTime();

//   //       const fullFilename = mediaPath + filename + '.' + extension;

//   //       // Save to file
//   //       try {
//   //         fs.writeFileSync(fullFilename, media.data, { encoding: 'base64' }); 
//   //         console.log('File downloaded successfully!', fullFilename);
//   //       } catch (err) {
//   //         console.log('Failed to save the file:', err);
//   //       }
//   //     }
//   //   });
//   // }
// });

client.initialize();

// Socket IO
// io.on('connection', function(socket) {
//   socket.emit('message', 'Connecting...');

  client.on('qr', (qr) => {
    qrcode.generate(qr, {small: true});
    // qrcode.toDataURL(qr, (err, url) => {
    //   socket.emit('qr', url);
    //   socket.emit('message', 'QR Code received, scan please!');
    //});
  });

    client.on('ready', () => {
//     socket.emit('ready', 'Whatsapp is ready!');
//     socket.emit('message', 'Whatsapp is ready!');
      console.log('Client is ready!');
  });

//   client.on('authenticated', () => {
//     socket.emit('authenticated', 'Whatsapp is authenticated!');
//     socket.emit('message', 'Whatsapp is authenticated!');
//     console.log('AUTHENTICATED');
//   });

//   client.on('auth_failure', function(session) {
//     socket.emit('message', 'Auth failure, restarting...');
//   });

//   client.on('disconnected', (reason) => {
//     socket.emit('message', 'Whatsapp is disconnected!');
//     client.destroy();
//     client.initialize();
//   });
// });


const checkRegisteredNumber = async function(number) {
  const isRegistered = await client.isRegisteredUser(number);
  return isRegistered;
}



// app.get('/send',(req,res)=>
// {
//   let tujuan = req.query.tujuan;
//   let pesan  = req.query.pesan;

//   tujuan= tujuan.substring(1);
//   tujuan= '62${tujuan}@c.us';
//   console.log(tujuan);
//   client.sendMessage (tujuan, pesan);
//   res.json({status: false});
//   console.log(pesan);

  
// });



// Create the endpoint for your webhook

// app.post("/webhook", (req, res) => {
//   let body = req.body;

//   console.log(`\u{1F7EA} Received webhook:`);
//   console.dir(body, { depth: null });
// });

// Send message
app.post('/send-message', [

  body('number'),
  body('message'),
], async (req, res) => {
  console.log ('====>',req.body,`<====`)
  const errors = validationResult(req).formatWith(({
    msg
  }) => {
    return msg;
  });

  if (!errors.isEmpty()) {
    return res.status(422).json({
      status: false,
      message: errors.mapped()
    });
  }
  const str = `**Firing**

  Value: [ var='totalsuccess' labels={} value=23 ], [ var='totalerror' labels={} value=11 ], [ var='total' labels={} value=34 ], [ var='treshold' labels={} value=32.35294117647059 ], [ var='istrue' labels={} value=1 ]
  Labels:
   - alertname = Gibi
   - grafana_folder = DEVGIBI
  Annotations:
   - description = GIBI Transactions
  number = 089686601193
  
  Gibi in 5 minutes has = 32.35294117647059% timeout rate transactions
  Error = 11
  Success = 23
  Total = 34
  Source: http://dev-middleware-api.hanabank.co.id/mdw-monitoring/alerting/grafana/dNF02Cv4k/view
  Silence: http://dev-middleware-api.hanabank.co.id/mdw-monitoring/alerting/silence/new?alertmanager=grafana&matcher=alertname%3DGibi&matcher=grafana_folder%3DDEVGIBI
  Dashboard: http://dev-middleware-api.hanabank.co.id/mdw-monitoring/d/OeHCtCD4k
  Panel: http://dev-middleware-api.hanabank.co.id/mdw-monitoring/d/OeHCtCD4k?viewPanel=2
  `;
  
  //const words = str.split(' ');
  // console.log('====>',str,'<========');
  // const number = phoneNumberFormatter(str.split('=')[16].split('\n')[0]);
  // const message0 = str.split('=')[15].split('\n')[0];
  // const message1 = str.split('=')[17].split('\n')[0];
  // const message2 = str.split('=')[18].split('\n')[0];

  // const message =  `=== HANA MDW MONITORING${message0} ==\nError = ${message1}\nSuccess = ${message2}`

   console.log('====>',str,'<========');
   const number = phoneNumberFormatter(str.split('=')[19].split('\n')[0]);
   const caption0 = str.split('=')[18].split('\n')[0];
   const caption1 = str.split('=')[21].split('\n')[0];
   const caption2 = str.split('=')[22].split('\n')[0];
   const caption3 = str.split(`=`)[20].split(`%`)[0];
   const caption4 = str.split('=')[23].split('\n')[0];
   const caption5 = str.split(`\n`)[0];
   const link     = str.split('Source:')[1].split('\n')[0];
   const link1    = str.split('Silence:')[1].split('\n')[0];
   const link2    = str.split('Dashboard:')[1].split('\n')[0];
   const link3    = str.split('Panel:')[1].split('\n')[0];

  let message;
  if (caption5 == '**Firing**') {
    let tempMessage = `*=== HANA MDW MONITORING${caption0} ==*\n \n\n*Decription*: ${caption0} in 5 minutes has ${caption3}% timeout rate transactions\n \n\n Error   = ${caption1}\n Success = ${caption2} \n Total   = ${caption4} \n\n *Summary*: ${caption0} timeout treshold above 5%\n\n  *====  Please Check Monitoring!‼️  ===*  
    \nSource      : ${link} \n\nSilence     : ${link1} \n\nDashboard   : ${link2} \n\nPanel       : ${link3}`;
    // console.log(tempMessage);
    message = tempMessage
  } else {
    let tempMessage = `=== HANA MDW MONITORING${caption0} ==\n \n\n*Decription*: ${caption0} in 5 minutes has ${caption3}% timeout rate transactions\n \n\n Error   = ${caption1}\n Success = ${caption2} \n Total   = ${caption4} \n\n *Summary*: ${caption0} timeout treshold above 5%\n\n *==== Now It's OKayy!‼️ ===*
    \nSource      : ${link} \n\nSilence     : ${link1} \n\nDashboard   : ${link2} \n\nPanel       : ${link3}`; 
    // console.log(tempMessage)
    message = tempMessage
  }
  console.log(number,'<1')
  console.log(message,'<2')

  // const number2 = phoneNumberFormatter(req.body.number);
  // const message2 = req.body.message;
  // console.log(number2)
  // console.log(message2)


  const isRegisteredNumber = await checkRegisteredNumber(number);

  if (!isRegisteredNumber) {
    return res.status(422).json({
      status: false,
      message: 'The number is not registered'
    });
  }
//l
  client.sendMessage(number, message).then(response => {
    res.status(200).json({
      status: true,
      response: response
    });
  }).catch(err => {
    res.status(500).json({
      status: false,
      response: err
    });
  });
});


// app.get("/image", function(req, res){
//   const url = "http://dev-middleware-api.hanabank.co.id/mdw-monitoring/render/d-solo/1YPm51H4z/mdw?from=1670387670795&height=500&orgId=1&panelId=2&refresh=1m&to=1670388564026&tz=Asia%2FBangkok&width=1000";

//   https.get(url, function(response){

//     response.on("data", function(data){
//       const weatherData = JSON.parse(data)
//       const icon = weatherData.weather[0].icon
//       const imageUrl = "http://dev-middleware-api.hanabank.co.id" + icon + "@2x.png"

//       res.write("<img src=" + imageUrl + " ></img>")
//       res.send();
//     })
//   });
//})

// Send media
app.post('/send-media', async (req, res) => {
  const str =    `Firing
    Value: [ metric='foo' labels={instance=bar} value=10 ]
    Labels:
    - alertname = TestAlert
    - instance = Grafana
    Annotations:
    - description = number = 089686601193 caption = absasaxdas file = http://dev-middleware-api.hanabank.co.id/mdw-monitoring/render/d-solo/1YPm51H4z/mdw?from=1670387670795&height=500&orgId=1&panelId=2&refresh=1m&to=1670388564026&tz=Asia%2FBangkok&width=1000
    - summary = Notification test
    Silence: http://dev-middleware-api.hanabank.co.id/mdw-monitoring/alerting/silence/new?alertmanager=grafana&matcher=alertname%3DTestAlert&matcher=instance%3DGrafana
    '`
  ;
  //const words = str.split(' ');
  console.log('====>',str,'<========');
  const number = phoneNumberFormatter(str.split('=')[8].split(' ')[1]);
  const caption = str.split('=')[9].split('file')[0];
  const fileUrl = str.split('file =')[1].split('\n')[0];
  console.log(number,'<1')
  console.log(fileUrl,'<2')



  // const number = phoneNumberFormatter(req.body.number);
  // console.log(req.body.number)
  // const caption = req.body.caption;
  // const fileUrl = req.body.file;

  // const media = MessageMedia.fromFilePath('./image-example.png');
  // const file = req.files.file;
  // const media = new MessageMedia(file.mimetype, file.data.toString('base64'), file.name);
  let mimetype;
  const attachment = await axios.get(fileUrl, {
    responseType: 'arraybuffer'
  }).then(response => {
    mimetype = response.headers['content-type'];
    return response.data.toString('base64');
  });

  const media = new MessageMedia(mimetype, attachment, 'Media');

  client.sendMessage(number, media, {
    caption: caption
  }).then(response => {
    res.status(200).json({
      status: true,
      response: response
    });
  }).catch(err => {
    res.status(500).json({
      status: false,
      response: err
    });
  });
});

const findGroupByName = async function(name) {
  const group = await client.getChats().then(chats => {
    return chats.find(chat => 
      chat.isGroup && chat.name.toLowerCase() == name.toLowerCase()
    );
  });
  return group;
}

// app.post('/send-group-message', [
//   body('id').custom((value, { req }) => {
//   return true;
//   }),
//   body('message').notEmpty(),
// ]
// , async (req, res) => {
//   const errors = validationResult(req).formatWith(({
//     msg
//   }) => {
//     return msg;
//   });

//   if (!errors.isEmpty()) {
//     return res.status(422).json({
//       status: false,
//       message: errors.mapped()
//     });
//   }
   
//   const msgGroup =  `Firing
//     Value: [ metric='foo' labels={instance=bar} value=10 ]
//     Labels:
//     - alertname = TestAlert
//     - instance = Grafana
//     Annotations:
//     - description = name = oi caption = absasaxdas file = https://cdn.pixabay.com/photo/2020/06/21/18/23/pixabay-5326193_960_720.png
//     - summary = Notification test
//     Silence: http://dev-middleware-api.hanabank.co.id/mdw-monitoring/alerting/silence/new?alertmanager=grafana&matcher=alertname%3DTestAlert&matcher=instance%3DGrafana
//     '`;
//   //const words = str.split(' ');
//   const groupName =   msgGroup.split('=')[8].split(' ')[1];
//   const caption = msgGroup.split('=')[9].split('file')[0];
//   const fileUrl = msgGroup.split('=')[10].split('\n')[0];
//   console.log(groupName,'<1')
//   console.log(caption,'<2')
//   console.log(fileUrl,'<3')
//   // console.log('====>',req,'<======');

//   let chatId = req.body.id;
//   // const groupName = req.body.name;
//   // const message = req.body.message;

//   // Find the group by name
//   if (!chatId) {
//     const group = await findGroupByName(groupName);
//     if (!group) {
//       return res.status(422).json({
//         status: false,
//         message: 'No group found with name: ' + groupName
//       });
//     }
//     chatId = group.id._serialized;
//   }

//   let mimetype;
//   const attachment = await axios.get(fileUrl, {
//     responseType: 'arraybuffer'
//   }).then(response => {
//     mimetype = response.headers['content-type'];
//     return response.data.toString('base64');
//   });

//   const media = new MessageMedia(mimetype, attachment, 'Media');
  

//   client.sendMessage(chatId, media,  {
//     caption: caption
//   } ).then(response => {
//     res.status(200).json({
//       status: true,
//       response: response
//     });
//     console.log(caption,'<4')
//   }).catch(err => {
//     res.status(500).json({
//       status: false,
//       response: err
//     });
//   });
// });


// Clearing message on spesific chat



app.post('/send-group-message', [
  body('id').custom((value, { req }) => {
  return true;
  }),
  body('message').notEmpty(),
]
, async (req, res) => {
  const errors = validationResult(req).formatWith(({
    msg
  }) => {
    return msg;
  });

  // if (!errors.isEmpty()) {
  //   return res.status(422).json({
  //     status: false,
  //     message: errors.mapped()
  //   });
  // }
   
  const msgGroup =  `Firing
    Value: [ metric='foo' labels={instance=bar} value=10 ]
    Labels:
    - alertname = TestAlert
    - instance = Grafana
    Annotations:
    - description = name = oi caption = absasaxdas file = https://cdn.pixabay.com/photo/2020/06/21/18/23/pixabay-5326193_960_720.png
    - summary = Notification test
    Silence: http://dev-middleware-api.hanabank.co.id/mdw-monitoring/alerting/silence/new?alertmanager=grafana&matcher=alertname%3DTestAlert&matcher=instance%3DGrafana
    '`;
  //const words = str.split(' ');
  const groupName =   msgGroup.split('=')[8].split(' ')[1];
  const caption = msgGroup.split('=')[9].split('file')[0];
  const fileUrl = msgGroup.split('=')[10].split('\n')[0];
  console.log(groupName,'<1')
  console.log(caption,'<2')
  console.log(fileUrl,'<3')
  // console.log('====>',req,'<======');

  let chatId = req.body.id;
  // const groupName = req.body.name;
  // const message = req.body.message;

  // Find the group by name
  if (!chatId) {
    const group = await findGroupByName(groupName);
    if (!group) {
      return res.status(422).json({
        status: false,
        message: 'No group found with name: ' + groupName
      });
    }
    chatId = group.id._serialized;
  }

  let mimetype;
  const attachment = await axios.get(fileUrl, {
    responseType: 'arraybuffer'
  }).then(response => {
    mimetype = response.headers['content-type'];
    return response.data.toString('base64');
  });

  const media = new MessageMedia(mimetype, attachment, 'Media');
  

  client.sendMessage(chatId, media,  {
    caption: caption
  } ).then(response => {
    res.status(200).json({
      status: true,
      response: response
    });
    console.log(caption,'<4')
  }).catch(err => {
    res.status(500).json({
      status: false,
      response: err
    });
  });
});







app.post('/clear-message', [
  body('number').notEmpty(),
], async (req, res) => {
  const errors = validationResult(req).formatWith(({
    msg
  }) => {
    return msg;
  });

  if (!errors.isEmpty()) {
    return res.status(422).json({
      status: false,
      message: errors.mapped()
    });
  }

  const number = phoneNumberFormatter(req.body.number);

  const isRegisteredNumber = await checkRegisteredNumber(number);

  if (!isRegisteredNumber) {
    return res.status(422).json({
      status: false,
      message: 'The number is not registered'
    });
  }

  const chat = await client.getChatById(number);
  
  chat.clearMessages().then(status => {
    res.status(200).json({
      status: true,
      response: status
    });
  }).catch(err => {
    res.status(500).json({
      status: false,
      response: err
    });
  })
});

app.listen(port,()=> {
  console.log('App running on *: ' + port);
});