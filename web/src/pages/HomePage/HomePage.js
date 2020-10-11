// import { Link, routes } from '@redwoodjs/router'

import MessageCell from 'src/components/MessageCell'
import MessagesCell from 'src/components/MessagesCell'

const HomePage = () => {
  return (
    <>
      <h1>Home</h1>
      <MessageCell id="there"></MessageCell>
      <MessagesCell></MessagesCell>
      <p>
        <a href=".netlify/functions/hello">Click to Invoke Lamba</a>
      </p>
    </>
  )
}

export default HomePage
