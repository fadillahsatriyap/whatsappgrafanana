
// console.log(new Date().getTime())
// console.log(new Date().getTime()- 5*60*1000)




// var fiveMinuteAgo = new Date( Date.now() - 1000 * (60 * 5) )
// console.log(fiveMinuteAgo)

// var original = new Date();
// var subtract5min = new Date();
// console.log("before : " + original);
// subtract5min.setTime(original.getTime() - 5*60*1000);
// console.log("after : " + subtract5min);



//console.log( datetime.datetime.now() - datetime.timedelta(minutes=15))
const str =    `**Firing**

Value: [ var='totalerror' labels={} value=1 ], [ var='total' labels={} value=60 ], [ var='get_time_start' labels={} value=1.670818070015e+12 ], [ var='treshold' l
abels={} value=1.6666666666666667 ], [ var='totalsuccess' labels={} value=59 ], [ var='get_time_end' labels={} value=1.670818970003e+12 ], [ var='istrue' labels={
} value=1 ]
Labels:
 - alertname = Gibi
 - grafana_folder = DEVGIBI
Annotations:
 - description = GIBI Transactions
number = 089686601193

Gibi in 5 minutes has = 1.6666666666666667% timeout rate transactions
Error = 1
Success = 59
Total = 60
time_start = 1670818070015
time_end = 1670818970003
Source: http://dev-middleware-api.hanabank.co.id/mdw-monitoring/alerting/grafana/dNF02Cv4k/view
Silence: http://dev-middleware-api.hanabank.co.id/mdw-monitoring/alerting/silence/new?alertmanager=grafana&matcher=alertname%3DGibi&matcher=grafana_folder%3DDEVGIBI
Dashboard: http://dev-middleware-api.hanabank.co.id/mdw-monitoring/d/OeHCtCD4k

`;
  //const words = str.split(' ');
  console.log('====>',str,'<========');
  const number = str.split('=')[25].split('\n')[0];
  const fileUrl1= str.split('time_start = ')[1].split('\n')[0];
  const fileUrl2= str.split('time_end = ')[1].split('\n')[0];
  //const fileUrl = str.split('file =')[1].split(`\n`)[0];
  const caption0 = str.split('=')[27].split('\n')[0];
  const caption1 = str.split('=')[28].split('\n')[0];
  const caption2 = str.split('=')[28].split('\n')[0];
  const caption3 = str.split('=')[24].split('\n')[0];
  const caption =  `=== HANA MDW MONITORING${caption3} ==\nError = ${caption0}\nSuccess = ${caption1}\nTotal = ${caption2} \n==== *Please Check Monitoring!‼️* === }`
  const fileUrl = `http://dev-middleware-api.hanabank.co.id/mdw-monitoring/render/d-solo/OeHCtCD4k/dev?from=${fileUrl1}&height=500&orgId=5&panelId=2&to=${fileUrl2}&tz=Asia%2FBangkok&width=1000`
  
  console.log(number,'<1')
  console.log(fileUrl,'<2')
  console.log(fileUrl2,'<2')



  
  
//   `**Firing**

//   Value: [ var='istrue' labels={} value=1 ], [ var='totalsuccess' labels={} value=54 ], [ var='treshold' labels={} value=0 ], [ var='totalerror' labels={} value=0 ], [ var='get_time_end' labels={} value=1.670568810002e+12 ], [ var='get_time_start' labels={} value=1.670567910003e+12 ], [ var='total' labels={} value=54 ]
//   Labels:
//    - alertname = Gibi
//    - grafana_folder = DEVGIBI
//   Annotations:
//    - description = GIBI Transactions
//   number = 089686601193
  
//   Gibi in 5 minutes has = 0% timeout rate transactions
//   Error = 0
//   Success = 54
//   Total = 54
//   time_start = 1670567910003
//   time_end = 1670568810002
//   Source: http://dev-middleware-api.hanabank.co.id/mdw-monitoring/alerting/grafana/dNF02Cv4k/view
//   Silence: http://dev-middleware-api.hanabank.co.id/mdw-monitoring/alerting/silence/new?alertmanager=grafana&matcher=alertname%3DGibi&matcher=grafana_folder%3DDEVGIBI
//   Dashboard: http://dev-middleware-api.hanabank.co.id/mdw-monitoring/d/OeHCtCD4k
//   Panel: http://dev-middleware-api.hanabank.co.id/mdw-monitoring/d/OeHCtCD4k?viewPanel=2`