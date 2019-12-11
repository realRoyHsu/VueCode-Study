let uid = 0
export default function initMixin(Vue) {
  Vue.prototype._init = function(options) {
    const vm = this;
    // a uid
    vm._uid = uid++

    // a flag to avoid this being observed
    vm._isVue = true

    // merge options
    resolveConstructorOptions(vm.constructor)
    // vm.$options = mergeOptions(
    //   options || {},
    //   vm
    // )

    console.log(Vue,options)
  }
}

export function resolveConstructorOptions (Ctor) {
  console.log(Ctor,'ctor')
  let options = Ctor.options
  console.log(options,'000')
  if (Ctor.super) {
    const superOptions = resolveConstructorOptions(Ctor.super)
    const cachedSuperOptions = Ctor.superOptions
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions
      // check if there are any late-modified/attached options (#4976)
      const modifiedOptions = resolveModifiedOptions(Ctor)
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions)
      }
      // options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions)
      if (options.name) {
        options.components[options.name] = Ctor
      }
    }
  }
  return options
}