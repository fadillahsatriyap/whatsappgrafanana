const str = `Firing
Value: [ metric='foo' labels={instance=bar} value=10 ]
Labels:
- alertname = TestAlert
- instance = Grafana
Annotations:
- description = name = oi caption = absasaxdas file = https://cdn.pixabay.com/photo/2020/06/21/18/23/pixabay-5326193_960_720.png
- summary = Notification test
Silence: http://dev-middleware-api.hanabank.co.id/mdw-monitoring/alerting/silence/new?alertmanager=grafana&matcher=alertname%3DTestAlert&matcher=instance%3DGrafana
'`;

const number = str.split('=')[8].split(' ')[1];
const caption = str.split('=')[9].split('file')[0];
const file = str.split('=')[10].split('\n')[0];


console.log({ number,caption,file});


// //const words = str.split(' ');
// const groupName =   msgGroup.split(':')[4].split(' ')[1];
// const message = msgGroup.split(':')[5].split('\n')[0];
// console.log(groupName,'<1')
// console.log(message,'<2')

`*Firing*
  Value: [ metric='foo' labels={instance=bar} value=10 ]
  Labels:
  - alertname = TestAlert
  - instance = Grafana
  Annotations:
  - description = number : 089686601193 message : absasaxdas 
  - summary = Notification test
  Silence: http://dev-middleware-api.hanabank.co.id/mdw-monitoring/alerting/silence/new?alertmanager=grafana&matcher=alertname%3DTestAlert&matcher=instance%3DGrafana
  '`


  `Firing
  Value: [ metric='foo' labels={instance=bar} value=10 ]
  Labels:
  - alertname = TestAlert
  - instance = Grafana
  Annotations:
  - description = number = 089686601193 caption = absasaxdas file = https://cdn.pixabay.com/photo/2020/06/21/18/23/pixabay-5326193_960_720.png
  - summary = Notification test
  Silence: http://dev-middleware-api.hanabank.co.id/mdw-monitoring/alerting/silence/new?alertmanager=grafana&matcher=alertname%3DTestAlert&matcher=instance%3DGrafana
  '`


  `Firing
  Value: [ metric='foo' labels={instance=bar} value=10 ]
  Labels:
  - alertname = TestAlert
  - instance = Grafana
  Annotations:
  - description = name = oi caption = absasaxdas file = https://cdn.pixabay.com/photo/2020/06/21/18/23/pixabay-5326193_960_720.png
  - summary = Notification test
  Silence: http://dev-middleware-api.hanabank.co.id/mdw-monitoring/alerting/silence/new?alertmanager=grafana&matcher=alertname%3DTestAlert&matcher=instance%3DGrafana
  '`