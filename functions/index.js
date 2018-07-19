const functions = require('firebase-functions');
const requi = require('requestify');
exports.dolarFunction=functions.https.onRequest((req,res) => {
        let readableversion="";
        console.log("Sen öyle diyorsan");
        
        requi.get("https://www.doviz.com/api/v1/currencies/all/latest")
        .then((response) => {
            let readableversion="<ul>";
            let counter=0;
            let responsel=response.getBody();
            responsel.forEach((element) => {
                // console.log(element.full_name+" "+element.buying);
                readableversion+="<li>"+element.full_name+" "+element.buying+"</li>";
            });
              res.send({content:readableversion+"</ul>"});
              res.end();
              return 1;
        })
        .catch((err) => {
            res.send(err);
           res.end();
        })
        //This functions work only paid plan. 
        //Can't make outbound request with free tier
});
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
