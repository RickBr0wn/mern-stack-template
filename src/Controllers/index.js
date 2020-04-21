const Data = require('../Models/Data')

exports.get_all_datas = (req, res) => {
  Data.find((err, docs) => {
    if (err) {
      res.status(500).json({
        message: { msgBody: 'An error has occurred whilst getting the Datas.', msgError: true, err },
      })
      return
    }
    res.status(200).json({ data: docs })
  }).catch(err => {
    res.status(500).json({
      message: { msgBody: 'An error has occurred whilst getting the Datas.', msgError: true, err },
    })
  })
}

exports.get_single_data = (req, res) => {
  Data.findById(req.params.dataId)
    .then((data, err) => {
      if (!data) {
        res
          .status(404)
          .json({ message: 'No data found for provided Data id' })
        return
      }
      if (err) {
        res.status(500).json({
          message: { msgBody: 'An error has occurred whilst getting a single Data.', msgError: true, err },
        })
        return
      }
      res.status(200).json({ data })
    }).catch(err => {
      res.status(500).json({
        message: { msgBody: 'An error has occurred whilst creating a new Data.', msgError: true, err },
      })
    })
}

exports.create_a_data = (req, res) => {
  const newData = new Data({
    data: req.body
  })
  newData.save()
    .then(data => {
      res.status(200).json({
        message: 'A Data was successfully created',
        'created_data': { _id: data._id, data: data.data },
        request: {
          type: 'GET',
          url: 'localhost:5000/api/create_a_data/' + data._id
        }
      })
    }).catch(err => {
      res.status(500).json({
        message: { msgBody: 'An error has occurred whilst creating a new Data.', msgError: true, err },
      })
    })
}

exports.delete_a_data = (req, res) => {
  Data.deleteOne({ _id: req.params.dataId })
    .then(data => {
      if (!data) {
        res
          .status(404)
          .json({ message: 'No data found for provided Data ID' })
        return
      }
      res.status(200).json({
        message: 'Data successfully deleted',
        deletedCount: data.deletedCount,
        request: {
          type: 'POST',
          url: 'localhost:5000/api/delete_a_data',
          body: { data: 'String' }
        }
      })
    }).catch(err => {
      res.status(500).json({
        message: { msgBody: 'An error has occurred whilst deleting a Data.', msgError: true, err },
      })
    })
}

exports.update_a_data = (req, res) => {
  Data.updateOne(req.params.productId, { $set: { data: req.body.data } })
    .then(data => {
      res.status(200).json({
        message: 'Data updated',
        request: {
          type: 'GET',
          url: 'http:localhost:5000/api/update_a_data/'
        }
      })
    }).catch(err => {
      res.status(500).json({
        message: { msgBody: 'An error has occurred whilst updating a Data.', msgError: true, err },
      })
    })
}