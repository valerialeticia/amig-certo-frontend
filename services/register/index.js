export default ({$axios}) => ({
  createUser: (params) => {
    return $axios.post('/api/cadastrar_usuario', params)
  }
})
