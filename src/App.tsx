import React from 'react'
import { hot } from 'react-hot-loader/root'
import Rich from 'rich-markdown-editor'

const App = () => {
  return (
    <div className="app">
      this is react-simple webpack template
      <Rich />
    </div>
  )
}

export default hot(App)
