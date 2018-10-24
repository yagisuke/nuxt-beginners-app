export default() => {
  if (process.browser) {
    console.log('browser')
  } else {
    console.log('ssr')
  }
}
