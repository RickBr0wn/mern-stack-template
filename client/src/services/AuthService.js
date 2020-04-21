// REMEMBER: All of these methods return a promise, and are as such `then-able`
// with the callbacks single argument being the data
// eg:
//  AuthService.login({username:'x',password:'x'}).then(data => // do stuff with your data)
const header = user => ({
  method: 'post',
  body: JSON.stringify(user),
  headers: { 'Content-Type': 'application/json' },
})

export default {
  login: user =>
    fetch('http://localhost:5000/auth/login', header(user)).then(res =>
      res.status !== 401
        ? res.json().then(json => json)
        : { isAuthenticated: false, user: { username: '', role: '' } }
    ),

  register: user =>
    fetch('http://localhost:5000/auth/register', header(user))
      .then(res => res.json())
      .then(json => json),

  logout: () =>
    fetch('http://localhost:5000/auth/logout')
      .then(res => res.json())
      .then(json => json),

  isAuthenticated: () =>
    fetch('http://localhost:5000/auth/authenticated').then(res =>
      res.status !== 401
        ? res.json().then(json => json)
        : { isAuthenticated: false, user: { username: '', role: '' } }
    ),

  test: () =>
    fetch('http://localhost:5000/auth/test')
      .then(res => res)
      .catch(err => err),
}
