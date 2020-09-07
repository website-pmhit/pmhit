const client = require('@sendgrid/mail');

function sendEmail(client, formBody, senderEmail, senderName) {
  return new Promise((fulfill, reject) => {
    const data = {
      from: {
        email: senderEmail,
        name: senderName,
      },
      subject: `Contact from ${formBody.name}`,
      to: 'website.pmhit@gmail.com',
      html: `<h3><em>${formBody.name}</em> has contacted you</h3><br>Email : ${formBody.email}<br>Contact Number : ${formBody.number}<br>Company : ${formBody.company}<br>Message : ${formBody.message}`,
    };

    client
      .send(data)
      .then(([response, body]) => {
        fulfill(response);
      })
      .catch(error => reject(error));
  });
}

exports.handler = function (event, context, callback) {
  const {
    SENDGRID_API_KEY,
    SENDGRID_SENDER_EMAIL,
    SENDGRID_SENDER_NAME,
  } = process.env;

  const formBody = JSON.parse(event.body);

  client.setApiKey(SENDGRID_API_KEY);

  sendEmail(client, formBody, SENDGRID_SENDER_EMAIL, SENDGRID_SENDER_NAME)
    .then(response => callback(null, { statusCode: response.statusCode }))
    .catch(err => callback(err, null));
};
