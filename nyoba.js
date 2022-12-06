const str = ` Firing

Value: [ var='totalerror' labels={} value=1 ], [ var='treshold' labels={} value=1.282051282051282 ], [ var='istrue' labels={} value=1 ], [ var='totalsuccess' labels={} value=77 ]
Labels:
 - alertname = Gibi
 - grafana_folder = DEVGIBI
Annotations:
 - description = GIBI Transactions
- number = 089686601193
- Error = 1
- Success = 77
Source: http://dev-middleware-api.hanabank.co.id/mdw-monitoring/alerting/grafana/dNF02Cv4k/view
Silence: http://dev-middleware-api.hanabank.co.id/mdw-monitoring/alerting/silence/new?alertmanager=grafana&matcher=alertname%3DGibi&matcher=grafana_folder%3DDEVGIBI
Dashboard: http://dev-middleware-api.hanabank.co.id/mdw-monitoring/d/OeHCtCD4k
Panel: http://dev-middleware-api.hanabank.co.id/mdw-monitoring/d/OeHCtCD4k?viewPanel=2
`;

const number = str.split('=')[16].split('\n')[0];
const caption0 = str.split('=')[15].split('\n')[0];
const caption1 = str.split('=')[17].split('\n')[0];
const caption2 = str.split('=')[18].split('\n')[0];

const message =  `=== HANA MDW MONITORING${caption0} ==\nError = ${caption1}\nSuccess = ${caption2}`
console.log(message)
console.log(number)