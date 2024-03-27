
export function catchError() {
  console.log('catch error(): 监听全局未被捕获到的事件')
  window.addEventListener('error', (ErrorEvent) => {
    console.log(ErrorEvent)
    const sendData = {
      // 类型
      type: 'error',
      // 文件
      filename: ErrorEvent.filename,
      // url地址
      url: '',
      // 位置
      position: `line:${ErrorEvent.lineno};colno:${ErrorEvent.colno}`,
      // 信息
      message: ErrorEvent.message,
      // 报错堆栈
      errorStack: ErrorEvent.error
    }
    console.log(sendData)
  })
}

//TypeError: Cannot set properties of undefined (setting 'name')\n    at HTMLButtonElement.<anonymous> (http://localhost:8080/:16:25)