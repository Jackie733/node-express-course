const express = require('express')
const app = express()


const mockUserData = [
  {name: 'Mike'},
  {name: 'Jill'}
]

app.get('/user', function(req, res) {
  res.json({
    success: true,
    message: 'Successfully got users.Nice',
    user: mockUserData
  })
})


app.listen(8000, function() {
  console.log('server is running')
})