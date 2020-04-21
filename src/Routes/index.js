const express = require('express')
const router = express.Router()
const TemplateController = require('../Controllers')

/**
 *  @summary GET ALL DATAS 
 *  @route   GET /api/get-all-datas
 *  @access  Public
 *  @header  { Content-Type: application/json }
 */
router.get('/get-all-datas', TemplateController.get_all_datas)

/**
 *  @summary GET A SINGLE DATA BASED ON ID
 *  @route   GET /api/get_single_data/:dataId
 *  @access  Public
 *  @header  { Content-Type: application/json }
 */
router.get('/get_single_data/:dataId', TemplateController.get_single_data)

/**
 *  @summary CREATE A SINGLE DATA
 *  @route   POST /api/create_a_data
 *  @access  Public
 *  @header  { Content-Type: application/json }
 *  @body    { "data": String }
 */
router.post('/create_a_data', TemplateController.create_a_data)

/**
 *  @summary DELETE A SINGLE DATA
 *  @route   DELETE /api/create_a_data
 *  @access  Public
 *  @header  { Content-Type: application/json }
 */
router.delete('/delete_a_data/:dataId', TemplateController.delete_a_data)

/**
 *  @summary UPDATE A SINGLE DATA
 *  @route   PATCH /api/update_a_data/:dataId
 *  @access  Public
 *  @header  { Content-Type: application/json }
 *  @body    { "data": String }
 */
router.patch('/update_a_data/:dataId', TemplateController.update_a_data)

module.exports = router

