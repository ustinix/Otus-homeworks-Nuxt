export default eventHandler(() => {
  throw createError({
    statusCode: 404,
    statusMessage: 'API endpoint not found'
  })
})