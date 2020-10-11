export const schema = gql`
  type Message {
    content: String!
  }

  type Query {
    messages: [Message!]!
    message(id: String!): Message!
  }
`
