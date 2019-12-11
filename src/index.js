import Vue from './core/instance/index.js';


var vm = new Vue({
  el: '#app',
  data: {
    message: 'Hello world',
    isShow: true
  },
  render () {
    return createElement(
      'div',
      {
        attrs: {
          'class': 'wrapper'
        }
      },
      [
        this.isShow
        ? createElement(
          'p',
          {
            attrs: {
              'class': 'inner'
            }
          },
          this.message
        )
        : createElement(
          'h1',
          {
            attrs: {
              'class': 'inner'
            }
          },
          'Hello world'
        )
      ]
    )
  }
})

// test
setTimeout(function () {
  vm.message = 'Hello';
}, 1000)

setTimeout(function () {
  vm.isShow = false;
}, 2000)

export default Vue;