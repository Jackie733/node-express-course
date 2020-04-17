const express = require('express')
const app = express()


const mockUserData = [
  {name: 'Mike'},
  {name: 'Jill'}
]

app.get('/users/:id', function(req, res) {
  console.log(req.params.id)
  res.json({
    success: true,
    message: 'got a user',
    users: mockUserData
  })
})


app.listen(8000, function() {
  console.log('server is running')
})