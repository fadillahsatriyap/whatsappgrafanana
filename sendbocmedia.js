const str =    ` **Firing**

Value: [ var='get_time_start' labels={} value=1.67091742002e+12 ], [ var='treshold' labels={} value=21.428571428571427 ], [ var='totalerror' labels={} value=12 ], [ var='get_time_end' labels={} value=1.670918320032e+12 ], [ var='istrue' labels={} value=1 ], [ var='total' labels={} value=56 ], [ var='totalsuccess' labels={} value=44 ]
Labels:
 - alertname = Gibi
 - grafana_folder = DEVGIBI
Annotations:
 - Org = 5
 - description = GIBI Transactions
number = 089686601193
name = oi

Gibi in 5 minutes has = 21.428571428571427% timeout rate transactions
Error = 12
Success = 44
Total = 56
time_start = 1670917420020
time_end = 1670918320032
Source: http://dev-middleware-api.hanabank.co.id/mdw-monitoring/alerting/grafana/dNF02Cv4k/view
Silence: http://dev-middleware-api.hanabank.co.id/mdw-monitoring/alerting/silence/new?alertmanager=grafana&matcher=alertname%3DGibi&matcher=grafana_folder%3DDEVGIBI
Dashboard: http://dev-middleware-api.hanabank.co.id/mdw-monitoring/d/OeHCtCD4k
Panel: http://dev-middleware-api.hanabank.co.id/mdw-monitoring/d/OeHCtCD4k?viewPanel=2
`;

  //const words = str.split(' ');
  console.log('====>',str,'<========');
  const groupName = str.split('= ')[6].split('\n')[0];
  const fileUrl1= str.split('time_start = ')[1].split('\n')[0];
  const fileUrl2= str.split('time_end = ')[1].split('\n')[0];
  const panel = str.split('/d/')[1].split('\n')[0];
  const panel1 = str.split('viewPanel=')[1].split('\n')[0];
  const orgId = str.split(`Org = `)[1].split(`\n`)[0];
  //const fileUrl = str.split('file =')[1].split(`\n`)[0];
  const caption0 = str.split('=')[25].split('\n')[0];
  const caption1 = str.split('=')[28].split('%')[0];
  const caption2 = str.split('=')[29].split('\n')[0];
  const caption3 = str.split('=')[30].split('\n')[0];
  const caption4 = str.split('=')[31].split('\n')[0];
  const caption5 = str.split(`\n`)[0];
  const link     = str.split('Source:')[1].split('\n')[0];
  const link2    = str.split('Dashboard:')[1].split('\n')[0];
  const link3    = str.split('Panel:')[1].split('\n')[0];
  // const caption =  `=== HANA MDW MONITORING${caption3} ==\nError = ${caption0}\nSuccess = ${caption1}\nTotal = ${caption2} \n==== *Please Check Monitoring!‼️* === }`
  
  
  let caption;
  if (caption5 == ' **Firing**') {
    let tempMessage = `*=== HANA MDW MONITORING${caption0} ==*\n \n\n*Decription*: ${caption0} in 5 minutes has ${caption1}% timeout rate transactions\n \n\n Error   = ${caption2}\n Success = ${caption3} \n Total   = ${caption4} \n\n *Summary*: ${caption0} timeout treshold above 5%\n\n  *====  Please Check Monitoring!‼️  ===*  
    \nSource      : ${link}  \n\nDashboard   : ${link2} \n\nPanel       : ${link3}`;
    // console.log(tempMessage);
    caption = tempMessage
  } else {
    let tempMessage = `=== HANA MDW MONITORING${caption0} ==\n \n\n*Decription*: ${caption0} in 5 minutes has ${caption1}% timeout rate transactions\n \n\n Error   = ${caption2}\n Success = ${caption3} \n Total   = ${caption4} \n\n *Summary*: ${caption0} timeout treshold above 5%\n\n *==== Now It's OKayy!‼️ ===*
    \nSource      : ${link}  \n\nDashboard   : ${link2} \n\nPanel       : ${link3}`; 
    // console.log(tempMessage)
    caption = tempMessage
  }
  
  console.log(caption,`<21`)
  
  const fileUrl = `http://dev-middleware-api.hanabank.co.id/mdw-monitoring/render/d-solo/${panel}/mdw?orgId=${orgId}&refresh=1m&from=${fileUrl1}&to=${fileUrl2}&panelId=${panel1}&width=1000&height=500&tz=Asia%2FBangkok`
   

  console.log(panel,panel1,`<4`)
  console.log(groupName,'<1')
  console.log(fileUrl,'<2')
  console.log(orgId,'<2')
