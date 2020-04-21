const express = require('express')
const authRouter = express.Router()
const passport = require('passport')
const passportConfig = require('../passport')
const AuthController = require('../Controllers/authControllers')

const authenticate = strategy => passport.authenticate(strategy, { session: false })

/**
 *  @summary TEST ROUTE
 *  @route   GET /auth/test
 *  @access  Public
 */
authRouter.get('/test', AuthController.test)

/**
 *  @summary REGISTER
 *  @route   GET /auth/register
 *  @access  Public
 *  @header  { Content-Type: application/json }
 *  @body    { username: String, password: String, role: String }
 */
authRouter.post('/register', AuthController.register)

/**
 *  @summary LOGIN
 *  @route   GET /auth/login
 *  @access  Private
 *  @header  { Content-Type: application/json }
 *  @body    { username: String, password: String }
 */
authRouter.post('/login', authenticate('local'), AuthController.login)

/**
 *  @summary LOGOUT
 *  @route   GET /auth/register
 *  @access  Private
 */
authRouter.get('/logout', authenticate('jwt'), AuthController.logout)

/**
 *  @summary AUTHENTICATED
 *  @route   GET /auth/authenticated
 *  @access  Public
 */
authRouter.get('/authenticated', authenticate('jwt'), AuthController.authenticated)

/**
 *  @summary ADMIN
 *  @route   GET /auth/admin
 *  @access  Private
 */
authRouter.get('/admin', authenticate('jwt'), AuthController.admin)

/**
 *  @summary CREATE A DATA
 *  @route   GET /auth/create_a_data
 *  @access  Public
 *  @header  { Content-Type: application/json }
 *  @body    { data: String }
 */
authRouter.post('/create_a_data', authenticate('jwt'), AuthController.creates_a_data)

/**
 *  @summary GET ALL THE DATAS
 *  @route   GET /auth/get_all_datas
 *  @access  Private
 */
authRouter.get('/get_all_datas', authenticate('jwt'), AuthController.get_all_datas)

module.exports = authRouter
