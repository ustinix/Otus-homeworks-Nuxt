const users = [
    {id: 1, name: 'foo'},
    {id: 2, name: 'bar'},
    {id: 3, name: 'baz'},
    {id: 4, name: 'boo'},
    {id: 5, name: 'too'},
]

export default defineEventHandler((event) => {
  const query = getQuery(event);
  return users.find(user => user.id== query.userId)
})