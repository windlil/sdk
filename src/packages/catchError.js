export function catchError() {
  console.log('catch error')
  window.addEventListener('error', (ErrorEvent) => {
    console.log(ErrorEvent)
  })
}