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
  const number = str.split('=')[8].split(' ')[1];
  const caption0 = str.split('=')[9].split('file')[0];
  const fileUrl = str.split('file =')[1].split(`\n`)[0];
  console.log(number,'<1')
  console.log(fileUrl,'<2')



//   **Firing**

// Value: [ var='B0' metric='count' labels={} value=0 ]
// Labels:
//  - alertname = Reuters FX Feed
//  - grafana_folder = IDC
//  - idc = reuters
// Annotations:
//  - Group = Hbj - monitor test
//  - Org = 1
//  - description = No Description
//  - summary = Reuters in 5 minutes has no Transactions, please check Monitoring!
// Source: http://dev-middleware-api.hanabank.co.id/mdw-monitoring/alerting/grafana/CxGyRnO4z/view
// Silence: http://dev-middleware-api.hanabank.co.id/mdw-monitoring/alerting/silence/new?alertmanager=grafana&matcher=alertname%3DReuters+FX+Feed&matcher=grafana_folder%3DIDC&matcher=idc%3Dreuters
// Dashboard: http://dev-middleware-api.hanabank.co.id/mdw-monitoring/d/JEj0c6DVk
// Panel: http://dev-middleware-api.hanabank.co.id/mdw-monitoring/d/JEj0c6DVk?viewPanel=10