let fileUrl2, fileUrl1, orgId, caption1
try {
const msgGroup =  `**Firing**
  
Value: [ var='calc_threshold' labels={} value=0 ], [ var='is_true' labels={} value=1 ], [ var='total_success' labels={} value=3 ], [ var='total_failed' labels={} value=0 ], [ var='total_timeout' labels={} value=0 ], [ var='total_all' labels={} value=3 ], [ var='get_time_end' labels={} value=1.671094825004e+12 ], [ var='get_time_start' labels={} value=1.671093925003e+12 ]
Labels:
 - alertname = DEV-CASH
 - grafana_folder = DEVGIBI
Annotations:
 - Group = Hbj - monitor test
 - Org = 5
 - TIme = time_start = 1671432445018
   time_end = 1671433345004
 - Description = Transaction PATK in 15 minutes has  0 % timeout rate transactions
 Timeout: 0
 Failed : 1
 Success : 3
 Total : 4
 - Summary = Gibi timeout threshold above 5%

Source: http://dev-middleware-api.hanabank.co.id/mdw-monitoring/alerting/grafana/Fp0dY55Vz/view
Silence: http://dev-middleware-api.hanabank.co.id/mdw-monitoring/alerting/silence/new?alertmanager=grafana&matcher=alertname%3DDEV-CASH&matcher=grafana_folder%3DDEVGIBI
Dashboard: http://dev-middleware-api.hanabank.co.id/mdw-monitoring/d/OeHCtCD4k
Panel: http://dev-middleware-api.hanabank.co.id/mdw-monitoring/d/iGW32xv4z?viewPanel=2	
`;
  
//const words = str.split(' ');
// const groupName =   msgGroup.split('=')[8].split(' ')[1];
// const caption = msgGroup.split('=')[9].split('file')[0];
// const fileUrl = msgGroup.split('=')[10].split('\n')[0];
// console.log(groupName,'<1')
// console.log(caption,'<2')
// console.log(fileUrl,'<3')
//const words = str.split(' ');

  const groupName = msgGroup.split('Group = ')[1].split('\n')[0];
  let validImage = true
  if(msgGroup.split('time_end = ')[1] && msgGroup.split('time_start = ')[1]&& msgGroup.split(`Org = `)[1]){
    fileUrl2= msgGroup.split('time_end = ')[1].split('\n')[0]
    fileUrl1= msgGroup.split('time_start = ')[1].split('\n')[0]
    orgId = msgGroup.split(`Org = `)[1].split(`\n`)[0]
    ;
  }
  else{
   validImage = false
  }
  
  console.log(validImage,`=====>><<`)

const panel = msgGroup.split('/d/')[1].split('\n')[0];
console.log(panel,`======fileurl2`)
const panel1 = msgGroup.split('viewPanel=')[1].split('\n')[0];
//const fileUrl = str.split('file =')[1].split(`\n`)[0];
const caption0 = msgGroup.split('=')[25].split('\n')[0];
const caption2 = msgGroup.split('Summary =')[1].split('\n')[0]
const caption5 = msgGroup.split(`\n`)[0];
const link     = msgGroup.split('Source:')[1].split('\n')[0];
const link1    = msgGroup.split('Silence:')[1].split('\n')[0];
const link2    = msgGroup.split('Dashboard:')[1].split('\n')[0];
const link3    = msgGroup.split('Panel:')[1].split('\n')[0];
// console.log('====>',req,'<======');
if(msgGroup.split('Description =')[1]){
  caption1 = msgGroup.split('Description =')[1].split('- Summary')[0]
}else{
 caption1 = "No Description"
}

// if(msgGroup.split('summary =')[1]){
//  caption2 = msgGroup.split('summary =')[1].split('\n')[0]
// }else{
// caption2 = "No Summary"
// }




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
  console.log(caption5,`<<4`)
  //console.log(caption,`<21`)



  const fileUrl = `http://dev-middleware-api.hanabank.co.id/mdw-monitoring/render/d-solo/${panel}/mdw?orgId=${orgId}&refresh=1m&from=${fileUrl1}&to=${fileUrl2}&panelId=${panel1}&width=1000&height=500&tz=Asia%2FBangkok`
   
  console.log(fileUrl,`<<<<=5`)
  let token;
  if(orgId =='5'){
    token = 'eyJrIjoiM2V3VVJlMlFCZnNMRG9kQUtYeGR6THhKUGd0Zm5vWDciLCJuIjoiY2FwdHVyZSIsImlkIjo1fQ=='
  }else if (orgId=='1'){
    token = `glsa_A3LzmJIOMe92vRLuktAwnoqef0RsTtwy_842a36e3`
  }else(
    console.log(`Orgid tidak ditemukan`)
    )

  console.log(token,`<3`)
  console.log(groupName,`<4`)
  console.log(caption2,`<4.5`)
  console.log(caption,`cap`)
  console.log(panel1,`panelll---1`)
} catch (error) {
  console.log(error,`<+++++`)
}
