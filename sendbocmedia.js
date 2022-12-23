let orgId, caption1
try {
const msgGroup =  `**Firing**

 Value: [ var='B0' metric='count' labels={} value=0 ]
 Labels:
  - alertname = Reuters FX Feed
  - grafana_folder = IDC
  - idc = reuters
 Annotations:
  - Org = 1
  - description = No Description
  - summary = Reuters in 5 minutes has no Transactions, please check Monitoring!
 Source: http://dev-middleware-api.hanabank.co.id/mdw-monitoring/alerting/grafana/CxGyRnO4z/view
 Silence: http://dev-middleware-api.hanabank.co.id/mdw-monitoring/alerting/silence/new?alertmanager=grafana&matcher=alertname%3DReuters+FX+Feed&matcher=grafana_folder%3DIDC&matcher=idc%3Dreuters
 Dashboard: http://dev-middleware-api.hanabank.co.id/mdw-monitoring/d/JEj0c6DVk
 Panel: http://dev-middleware-api.hanabank.co.id/mdw-monitoring/d/JEj0c6DVk?viewPanel=10

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
  if(msgGroup.split(`Org = `)[1]){
    orgId = msgGroup.split(`Org = `)[1].split(`\n`)[0]
    ;
  }
  else{
   validImage = false
  }
  
  console.log(validImage,`=====>><<`)
  const caption5 = msgGroup.split(`\n`)[0];
  console.log(caption5,`======caption5`)
const panel = msgGroup.split('/d/')[1].split('\n')[0];
console.log(panel,`======fileurl2`)
const panel1 = msgGroup.split('viewPanel=')[1].split('\n')[0];
//const fileUrl = str.split('file =')[1].split(`\n`)[0];
const caption0 = msgGroup.split('alertname =')[1].split('\n')[0];
const caption2 = msgGroup.split('summary =')[1].split('\n')[0]

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



  const fileUrl = `http://dev-middleware-api.hanabank.co.id/mdw-monitoring/render/d-solo/${panel}/mdw?orgId=${orgId}&refresh=1m&panelId=${panel1}&width=1000&height=500&tz=Asia%2FBangkok`
   

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
