const client = require('twilio')(process.env.ACCOUNT_SID, process.env.AUTH_TOKEN);

module.exports = {
    hello: async (req, res) => {
        try {
            await client.messages
                .create({
                    body: 'Piga Zoezi',
                    from: 'whatsapp:+14155238886',
                    to: 'whatsapp:+254717191119'
                })
                .then(message => console.log(message.sid))
                .done();
            res.json({
                message: 'Hello'
            })
        } catch (err) {
            console.log(err.message)
        }
    }
}
