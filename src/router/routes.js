const Login = resolve => {
  import('@/components/login').then(module => {
    resolve(module)
  })
}

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '*',
    redirect: '/computer'
  }
]

export default routes
