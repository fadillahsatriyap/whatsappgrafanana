const msgGroup = `**Firing**
   Value: [ var='total' labels={} value=79 ], [ var='treshold' labels={} value=3.79746835443038 ], [ var='istrue' labels={} value=1 ], [ var='totalsuccess' labels={} value=76 ], [ var='totalerror' labels={} value=3 ]
   Labels:
    - alertname = Gibi
    - grafana_folder = DEVGIBI
   Annotations:
    - Group = Hbj - monitor test&test&pre
    - Org = 5
    - description = Gibi in 5 minutes has = 3.79746835443038% timeout rate transactions
   Error = 3
   Success = 76
   Total = 79
   - summary = Reuters in 5 minutes has no Transactions, please check Monitoring!
   Source: http://dev-middleware-api.hanabank.co.id/mdw-monitoring/alerting/grafana/dNF02Cv4k/view
   Silence: http://dev-middleware-api.hanabank.co.id/mdw-monitoring/alerting/silence/new?alertmanager=grafana&matcher=alertname%3DGibi&matcher=grafana_folder%3DDEVGIBI
   Dashboard: http://dev-middleware-api.hanabank.co.id/mdw-monitoring/d/OeHCtCD4k
   Panel: http://dev-middleware-api.hanabank.co.id/mdw-monitoring/d/OeHCtCD4k?viewPanel=2
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
  const group2 = groupName.split('&');



  let chatsarray = [];
  let promises = [];
  for (i = 0; i < group2.length; i++) {
    console.log(group2.length,`length`)
    console.log(i,`i++`)
    console.log(group2[i],`group2[i]`)
    promises.push(
         (group2[i]))
         console.log(group2[i],`====&/7`)  
  } 

  console.log(promises,`====@>`)
  Promise.all(promises).then(() => console.log(chatsarray));



  console.log(group2,`<=====2`)
  const groupName2 = "TEST";
  console.log( "groupName2 : " + groupName2   );
  console.log(groupName,`=====group`)
  let validImage = true
  if(msgGroup.split(`Org = `)[1]){
    orgId = msgGroup.split(`Org = `)[1].split(`\n`)[0]
    ;
  }
  else{
   validImage = false
  }
  
  console.log(validImage,`=====>><<`)
   
  
  
  
 
const panel = msgGroup.split('/d/')[1].split('\n')[0];
//console.log(panel,`======fileurl2`)
const panel1 = msgGroup.split('viewPanel=')[1].split('\n')[0];
//const fileUrl = str.split('file =')[1].split(`\n`)[0];
const caption0 = msgGroup.split('alertname =')[1].split('\n')[0];
const caption2 = msgGroup.split('summary =')[1].split('\n')[0]
const caption5 = msgGroup.split(`\n`)[0];
const link     = msgGroup.split('Source:')[1].split('\n')[0];
const link1    = msgGroup.split('Silence:')[1].split('\n')[0];
const link2    = msgGroup.split('Dashboard:')[1].split('\n')[0];
const link3    = msgGroup.split('Panel:')[1].split('\n')[0];
// console.log('====>',req,'<======');
if(msgGroup.split('description =')[1]){
  caption1 = msgGroup.split('description =')[1].split('- summary')[0]
}else{
 caption1 = "No Description"
}

// if(msgGroup.split('Summary =')[1]){
//  caption2 = msgGroup.split('Summary =')[1].split('\n')[0]
// }else{
// caption2 = "No Summary"
// }



let caption;
if (caption5 == '**Firing**') {
  let tempMessage = `     *==HANA MDW MONITORING${caption0}==*  \n \n\n*Description*: ${caption1}  \n\n *Summary*: ${caption2} \n\n    *===  Please Check Monitoring!‼️  ===*  
  \nSource      : ${link} \n\nSilence   : ${link1}  \n\nDashboard   : ${link2} \n\nPanel       : ${link3}`;
  // console.log(tempMessage);
  caption = tempMessage
} else {
  let tempMessage = `     *==HANA MDW MONITORING${caption0}==*  \n \n\n*Description*: ${caption1}  \n\n *Summary*: ${caption2} \n\n         *=== Now It's OKayy   ✅===*
  \nSource      : ${link} \n\nSilence   : ${link1}  \n\nDashboard   : ${link2} \n\nPanel       : ${link3}`; 
  // console.log(tempMessage)
  caption = tempMessage
}


  console.log(caption5,`<== buat check alert`)
  console.log(`INI CAPTION ==========>`,caption,`<========`)
 
  const fileUrl = `http://dev-middleware-api.hanabank.co.id/mdw-monitoring/render/d-solo/${panel}/mdw?orgId=${orgId}&refresh=1m&panelId=${panel1}&width=1000&height=500&tz=Asia%2FBangkok`
   
  console.log(fileUrl,`<<<<= check link`)
  let token;
  if(orgId =='5'){
    token = 'eyJrIjoiM2V3VVJlMlFCZnNMRG9kQUtYeGR6THhKUGd0Zm5vWDciLCJuIjoiY2FwdHVyZSIsImlkIjo1fQ=='
  }else if (orgId=='1'){
    token = `glsa_A3LzmJIOMe92vRLuktAwnoqef0RsTtwy_842a36e3`
  }else(
    console.log(`Orgid tidak ditemukan`)
    )
    console.log( "groupName2 : " + groupName2   )
    console.log(groupName,`=====group`)