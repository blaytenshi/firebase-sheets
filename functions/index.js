const functions = require('firebase-functions');
const { google } = require('googleapis');

exports.helloWorld = functions.https.onRequest(async (request, response) => {

    const auth = new google.auth.GoogleAuth({
        scopes: [
            'https://www.googleapis.com/auth/spreadsheets',
            'https://www.googleapis.com/auth/drive'
        ]
    });

    try {
        const authClient = await auth.getClient();
        console.log("AUTH CLIENT", authClient);
    } catch(error) {
        console.log(error);
    }

    response.send("Hello from firebase!");

});