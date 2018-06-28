const { getTransport, sendEmail } = require('./mailerService')
const env = require('../../../.env')

const config = {
    service: env.service,
    email: env.email,
    password: env.password
}

notification = (email, ip) => {
    destination = {
        remetente: email,
        email: email,
        subject: '[LoginSystem] Successful Login'
    }
    html = `<h1> Successful Login From New IP ${ip}`

    transport = getTransport(config)

    sendEmail(transport)(destination, html)
}

module.exports = { notification }