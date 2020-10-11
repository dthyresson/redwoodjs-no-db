export const QUERY = gql`
  query MessageQuery($id: String!) {
    message(id: $id) {
      content
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ message }) => {
  return <p>{message.content}</p>
}
