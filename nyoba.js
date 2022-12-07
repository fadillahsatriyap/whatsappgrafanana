// const str = ` Firing

// Value: [ var='totalerror' labels={} value=1 ], [ var='treshold' labels={} value=1.282051282051282 ], [ var='istrue' labels={} value=1 ], [ var='totalsuccess' labels={} value=77 ]
// Labels:
//  - alertname = Gibi
//  - grafana_folder = DEVGIBI
// Annotations:
//  - description = GIBI Transactions
// - number = 089686601193
// - Error = 1
// - Success = 77
// Source: http://dev-middleware-api.hanabank.co.id/mdw-monitoring/alerting/grafana/dNF02Cv4k/view
// Silence: http://dev-middleware-api.hanabank.co.id/mdw-monitoring/alerting/silence/new?alertmanager=grafana&matcher=alertname%3DGibi&matcher=grafana_folder%3DDEVGIBI
// Dashboard: http://dev-middleware-api.hanabank.co.id/mdw-monitoring/d/OeHCtCD4k
// Panel: http://dev-middleware-api.hanabank.co.id/mdw-monitoring/d/OeHCtCD4k?viewPanel=2
// `;

// const number = str.split('=')[16].split('\n')[0];
// const caption0 = str.split('=')[15].split('\n')[0];
// const caption1 = str.split('=')[17].split('\n')[0];
// const caption2 = str.split('=')[18].split('\n')[0];
// const caption4 = str.split(`\n`)[0];


// const message =  `=== HANA MDW MONITORING${caption0} ==\nError = ${caption1}\nSuccess = ${caption2}\n {if($) ==== *Please Check Monitoring!‼️* === ${caption4}}`
// console.log(message)
// console.log(number)


const str = `**F**

Value: [ var='totalsuccess' labels={} value=23 ], [ var='totalerror' labels={} value=11 ], [ var='total' labels={} value=34 ], [ var='treshold' labels={} value=32.35294117647059 ], [ var='istrue' labels={} value=1 ]
Labels:
 - alertname = Gibi
 - grafana_folder = DEVGIBI
Annotations:
 - description = GIBI Transactions
number : 089686601193

Gibi in 5 minutes has 32.35294117647059% timeout rate transactions
Error = 11
Success = 23
Total = 34
Source: http://dev-middleware-api.hanabank.co.id/mdw-monitoring/alerting/grafana/dNF02Cv4k/view
Silence: http://dev-middleware-api.hanabank.co.id/mdw-monitoring/alerting/silence/new?alertmanager=grafana&matcher=alertname%3DGibi&matcher=grafana_folder%3DDEVGIBI
Dashboard: http://dev-middleware-api.hanabank.co.id/mdw-monitoring/d/OeHCtCD4k
Panel: http://dev-middleware-api.hanabank.co.id/mdw-monitoring/d/OeHCtCD4k?viewPanel=2
`;

const number = str.split('number :')[1].split('\n')[0];
const caption0 = str.split('=')[18].split('\n')[0];
const caption1 = str.split('=')[21].split('\n')[0];
const caption2 = str.split('=')[22].split('\n')[0];
const caption3 = str.split(`has`)[1].split(`%`)[0];
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
//console.log("------------------------------");
console.log(message)
console.log(number, caption3)

console.log("------------------------------");
//console.log({link,link1,link2,link3})