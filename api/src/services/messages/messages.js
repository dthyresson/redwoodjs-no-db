export const messages = () => {
  return [{ content: 'hello' }, { content: 'world' }]
}

export const message = ({ id }) => {
  return { content: `hello ${id}` }
}
