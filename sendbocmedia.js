
const msgGroup =    `
**Firing**

Value: [ var='calc_threshold' labels={} value=0 ], [ var='is_true' labels={} value=1 ], [ var='total_success' labels={} value=3 ], [ var='total_failed' labels={} value=0 ], [ var='total_timeout' labels={} value=0 ], [ var='total_all' labels={} value=3 ], [ var='get_time_end' labels={} value=1.671094825004e+12 ], [ var='get_time_start' labels={} value=1.671093925003e+12 ]
Labels:
 - alertname = DEV-CASH
 - grafana_folder = DEVGIBI
Annotations:
 - Group = oi
 - Org = 5
 - TIme = time_start = 1671093925003
time_end = 1671094825004
 - description = Transaction Cash in 5 minutes has <no value>% timeout rate transactions
Timeout: <no value>
Success: <no value>
Failed: <no value>
Total:  <no value>
 - summary = Cash timeout threshold above 5%
Source: http://dev-middleware-api.hanabank.co.id/mdw-monitoring/alerting/grafana/Fp0dY55Vz/view
Silence: http://dev-middleware-api.hanabank.co.id/mdw-monitoring/alerting/silence/new?alertmanager=grafana&matcher=alertname%3DDEV-CASH&matcher=grafana_folder%3DDEVGIBI
Dashboard: http://dev-middleware-api.hanabank.co.id/mdw-monitoring/d/iGW32xv4z
Panel: http://dev-middleware-api.hanabank.co.id/mdw-monitoring/d/iGW32xv4z?viewPanel=2

`;

  //const words = str.split(' ');
 // console.log('====>',str,'<========');
  const groupName = msgGroup.split('Group = ')[1].split('\n')[0];
  const fileUrl1= msgGroup.split('time_start = ')[1].split('\n')[0];
  const fileUrl2= msgGroup.split('time_end = ')[1].split('\n')[0];
  const panel = msgGroup.split('/d/')[1].split('\n')[0];
  const panel1 = msgGroup.split('viewPanel=')[1].split('\n')[0];
  const orgId = msgGroup.split(`Org = `)[1].split(`\n`)[0];
  //const fileUrl = str.split('file =')[1].split(`\n`)[0];
  const caption0 = msgGroup.split('alertname =')[1].split('\n')[0];
  const caption1 = msgGroup.split('description = ')[1].split('- summary')[0];
  const caption2 = msgGroup.split('summary =')[1].split('\n')[0];
  const caption5 = msgGroup.split(`\n`)[0];
  const link     = msgGroup.split('Source:')[1].split('\n')[0];
  const link1    = msgGroup.split('Silence:')[1].split('\n')[0];
  const link2    = msgGroup.split('Dashboard:')[1].split('\n')[0];
  const link3    = msgGroup.split('Panel:')[1].split('\n')[0];
  // const caption =  `=== HANA MDW MONITORING${caption3} ==\nError = ${caption0}\nSuccess = ${caption1}\nTotal = ${caption2} \n==== *Please Check Monitoring!‼️* === }`
  
  
  let caption;
  if (caption5 == '**Firing**') {
    let tempMessage = `     *==HANA MDW MONITORING${caption0}==*  \n \n\n*Decription*: ${caption1}  \n\n *Summary*: ${caption2} \n\n    *===  Please Check Monitoring!‼️  ===*  
    \nSource      : ${link} \n\nSilence   : ${link1}  \n\nDashboard   : ${link2} \n\nPanel       : ${link3}`;
    // console.log(tempMessage);
    caption = tempMessage
  } else {
    let tempMessage = `     *==HANA MDW MONITORING${caption0}==*  \n \n\n*Decription*: ${caption1}  \n\n *Summary*: ${caption2} \n\n         *=== Now It's OKayy!‼️ ✅===*
    \nSource      : ${link} \n\nSilence   : ${link1}  \n\nDashboard   : ${link2} \n\nPanel       : ${link3}`; 
    // console.log(tempMessage)
    caption = tempMessage
  }
  
  console.log(caption,`<21`)
  
  const fileUrl = `http://dev-middleware-api.hanabank.co.id/mdw-monitoring/render/d-solo/${panel}/mdw?orgId=${orgId}&refresh=1m&from=${fileUrl1}&to=${fileUrl2}&panelId=${panel1}&width=1000&height=500&tz=Asia%2FBangkok`
   

  console.log(caption0,`<4`)
  console.log(groupName,'<1')
  console.log(fileUrl,'<2')
  console.log(orgId,'<2')
