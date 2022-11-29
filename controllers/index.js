const client = require('twilio')(process.env.ACCOUNT_SID, process.env.AUTH_TOKEN);

module.exports = {
    hello: async (req, res) => {
        try {
            await client.messages
                .create({
                    body: req.body.message,
                    from: 'whatsapp:+14155238886',
                    to: 'whatsapp:+254717191119'
                })
                .then(message => {
                    res.json({
                        message
                    })
                })
                .done();
        } catch (err) {
            res.status(400).json({
                code: 400,
                message: err.message
            })
        }
    },
    reply: async (req, res) => {
        try {
            res.json({
                data: req.body
            })
        } catch (err) {
            res.status(400).json({
                code: 400,
                message: err.message
            })
        }
    },
    callback: async (req, res) => {
        try {
            res.json({
                data: req.body
            })
        } catch (err) {
            res.status(400).json({
                code: 400,
                message: err.message
            })
        }
    }
}
