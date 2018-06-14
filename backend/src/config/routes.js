
const express = require('express')
const auth = require('./auth')
module.exports = function (server) {

    const AuthService = require('../api/user/AuthService')
    const BillingCycle = require('../api/billingCycle/billingCycleService')
    const protectedApi = express.Router()
    const openApi = express.Router()
    /*
    * Rotas protegidas por Token JWT
    */
    server.use('/api', protectedApi)
    protectedApi.use(auth)
    protectedApi.post('/signup', AuthService.signup)
    BillingCycle.register(protectedApi, '/billingCycles')
    /*
    * Rotas abertas
    */
    server.use('/oapi', openApi)
    openApi.post('/login', AuthService.login)
    openApi.post('/validateToken', AuthService.validateToken)
}