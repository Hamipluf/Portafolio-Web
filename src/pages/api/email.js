export default async function email(req, res) {
    const SibApiV3Sdk = require('sib-api-v3-sdk');
    let defaultClient = SibApiV3Sdk.ApiClient.instance;

    let apiKey = defaultClient.authentications['api-key'];
    apiKey.apiKey = process.env.API_KEY;
    const { body } = req.body;

    const options = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'api-key': process.env.API_KEY
        },

        

        body: JSON.stringify({
            to: [
                {
                    "email": body.mail,
                    "name": body.name,
                    

                },
                {
                    "email": "ramirogumma@hotmail.com",
                    "name": "Ramiro Gumma",
                    templateId: 7,
                }

            ],
            
            replyTo: { email: 'ramirogumma@hotmail.com' },
            templateId: 2,
            params: { NOMBRE: body.name, ASUNTO: body.asunto, MESSAGE: body.message },
           
        }),
    };


    // CreateContact 
    

    let apiInstance = new SibApiV3Sdk.ContactsApi();
    let createContact = new SibApiV3Sdk.CreateContact();

    createContact.email = body.mail; 
    createContact.FIRSTNAME = body.name;
    createContact.ASUNTO = body.asunto;
    createContact.MESSAGE = body.message;
    createContact.listIds = [2]
    
    apiInstance.createContact(createContact).then(function(data) {
      console.log('API called successfully. Returned data: ' + JSON.stringify(data));
    }, function(error) {
      console.error(error);
    });

    // Peticion de email transaccional
    await fetch('https://api.sendinblue.com/v3/smtp/email', options)
        .then(response => response.json())
        .then((onfulfilled) => {
            res.status(200).json({
                message: 'Mensaje enviado correctamente',
                data: onfulfilled.messageId
            });
        },
            (onrejected) => {
                res.status(400).json({
                    message: 'Error al enviar el mensaje',
                    data: onrejected.code
                });
            })
        .catch(err =>
            res.status(500).json({
                message: 'Error al enviar el mensaje',
            })
        );
}


