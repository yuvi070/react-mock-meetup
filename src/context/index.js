import React from 'react'

const myContext = React.createContext({
  name: '',
  topic: '',
  registered: false,
  setValues: () => {},
})

export default myContext
