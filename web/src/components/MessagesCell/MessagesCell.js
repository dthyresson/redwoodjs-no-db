export const QUERY = gql`
  query MessagesQuery {
    messages {
      content
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ messages }) => {
  return (
    <ul>
      {messages.map((message, index) => {
        return <li key={`li-${index}`}>{message.content}</li>
      })}
    </ul>
  )
}
