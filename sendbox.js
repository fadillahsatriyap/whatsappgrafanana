
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
  
    if (!errors.isEmpty()) {
      return res.status(422).json({
        status: false,
        message: errors.mapped()
      });
    }
     
    
    const msgGroup = `Firing
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
    const message = msgGroup.split('=')[9].split('file')[0];
    const fileUrl = msgGroup.split('=')[10].split('\n')[0];
    console.log(groupName,'<1')
    console.log(message,'<2')
    console.log(fileUrl,'<2')
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
    
  
    client.sendMessage(chatId, media, message ).then(response => {
      res.status(200).json({
        status: true,
        response: response
      });
      console.log(message,'<2')
    }).catch(err => {
      res.status(500).json({
        status: false,
        response: err
      });
    });
  });


//   app.post('/send-group-message', [
//     body('id').custom((value, { req }) => {
  
//     //   // console.log('====>',req,'<======');
//       // if (!value && !name) {
//       //   throw new Error('Invalid value, you can use `id` or `name`');
//       // }
  
     
  
//     return true;
//     }),
//     body('message').notEmpty(),
    
//   ]
  
  
  
//   // body('number').notEmpty(),
//   //   body('message').notEmpty(),
//   // ], async (req, res) => {
//   //   const errors = validationResult(req).formatWith(({
//   //     msg
//   //   }) => {
//   //     return msg;
//   //   });
  
//   , async (req, res) => {
//     const errors = validationResult(req).formatWith(({
//       msg
//     }) => {
//       return msg;
//     });
  
//     if (!errors.isEmpty()) {
//       return res.status(422).json({
//         status: false,
//         message: errors.mapped()
//       });
//     }
     
    
//     const msgGroup = `*Firing*
//     Value: [ metric='foo' labels={instance=bar} value=10 ]
//     Labels:
//     - alertname = TestAlert
//     - instance = Grafana
//     Annotations:
//     - description = name : oi message : absasaxdas 
//     - summary = Notification test
//     Silence: http://dev-middleware-api.hanabank.co.id/mdw-monitoring/alerting/silence/new?alertmanager=grafana&matcher=alertname%3DTestAlert&matcher=instance%3DGrafana
//     '`;
//     //const words = str.split(' ');
//     const groupName =   msgGroup.split(':')[4].split(' ')[1];
//     const message = msgGroup.split(':')[5].split('\n')[0];
//     console.log(groupName,'<1')
//     console.log(message,'<2')
//     // console.log('====>',req,'<======');
  
//     let chatId = req.body.id;
//     // const groupName = req.body.name;
//     // const message = req.body.message;
  
//     // Find the group by name
//     if (!chatId) {
//       const group = await findGroupByName(groupName);
//       if (!group) {
//         return res.status(422).json({
//           status: false,
//           message: 'No group found with name: ' + groupName
//         });
//       }
//       chatId = group.id._serialized;
//     }
  
//     client.sendMessage(chatId, message).then(response => {
//       res.status(200).json({
//         status: true,
//         response: response
//       });
//     }).catch(err => {
//       res.status(500).json({
//         status: false,
//         response: err
//       });
//     });
//   });