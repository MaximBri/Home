import React from 'react'
import axios from 'axios'

import '../scss/Auth/form.scss'

const AuthPage: React.FC = () => {
  const [option, setOption] = React.useState<boolean>(false)
  const [name, setName] = React.useState<string>('')
  const [login, setLogin] = React.useState<string>('')
  const [pass, setPass] = React.useState<string>('')
  const setRegister = () => {
    setOption(false)
    setLogin('')
    setPass('')
  }
  const setLog = () => {
    setOption(true)
    setLogin('')
    setPass('')
  }
  const entrance = () => {
    // Логика для входа
  }
  const sendForm = async (e: any) => {
    e.preventDefault()
    if (pass.length < 4) {
      alert('Пароль должен быть длиннее 4 символов')
    } else {
      const body = {
        name,
        login,
        password: pass,
      }
      // try {
      //   const res = await fetch(
      //     'http://192.168.242.203:7178/api/Auth/Registration',
      //     {
      //       method: 'POST',
      //       headers: {
      //         'Content-Type': 'application/json',
      //       },
      //       body: JSON.stringify(obj),
      //     }
      //   )
      //   console.log(res)
      // } catch (err) {
      //   console.log(err)
      // }

      axios
        .post('http://192.168.242.203:7178/api/Auth/Registration', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(body),
        })
        .then((res) => console.log(res))
        .catch((err) => console.log(err))

      // axios
      //   .post('http://192.168.242.203:7178/api/Auth/Registration', { data })
      //   .then((res) => console.log(res))
      //   .catch((err) => console.log(err))

      // axios
      //   .get('http://192.168.242.203:7178/api/Account/hello')
      //   .then((res) => console.log(res))
      //   .catch((err) => console.log(err))
    }
  }
  return (
    <div className='auth'>
      <div className='auth_switch'>
        <div
          onClick={() => setRegister()}
          className={!option ? 'auth_authoriz active-right' : 'auth_authoriz'}
        >
          Зарегистрироваться
        </div>
        <div
          onClick={() => setLog()}
          className={option ? 'auth_login active-left' : 'auth_login'}
        >
          Войти
        </div>
      </div>
      <form action='#' className='auth__body'>
        {!option && (
          <>
            <h2 className='auth_title'>Заполните все поля для регистрации</h2>
            <div className='auth__container'>
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                type='text'
                className='auth_input'
                placeholder='Имя'
                required
              />
              <input
                onChange={(e) => setLogin(e.target.value)}
                value={login}
                type='text'
                className='auth_input'
                placeholder='Логин'
                required
              />
              <input
                onChange={(e) => setPass(e.target.value)}
                value={pass}
                type='password'
                className='auth_input'
                placeholder='Пароль'
                required
              />
            </div>
            <button onClick={(e) => sendForm(e)} className='form_btn'>
              Зарегистрироваться
            </button>
          </>
        )}
        {option && (
          <>
            <h2 className='auth_title'>Введите логин и пароль для входа</h2>
            <div className='auth__container'>
              <input
                onChange={(e) => setLogin(e.target.value)}
                value={login}
                type='text'
                className='auth_input'
                placeholder='Логин'
                required
              />
              <input
                onChange={(e) => setPass(e.target.value)}
                value={pass}
                type='password'
                className='auth_input'
                placeholder='Пароль'
                required
              />
            </div>
            <button onClick={() => entrance()} className='form_btn'>
              Войти
            </button>
          </>
        )}
      </form>
    </div>
  )
}

export default AuthPage
