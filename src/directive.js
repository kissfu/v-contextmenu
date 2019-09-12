/* eslint-disable no-param-reassign */
export default {
  // 之所以用 inserted 而不是 bind，是需要确保 contentmenu mounted 后才进行 addRef 操作
  inserted (el, binding, vnode) {
    const contextmenu = vnode.context.$refs[binding.arg]
    if (!contextmenu || typeof (contextmenu.addRef) !== 'function') {
      const inner = contextmenu.$refs.contextmenu
      inner.addRef({ el, vnode })
      inner.$contextmenuId = el.id || inner._uid // eslint-disable-line no-underscore-dangle
      return
    }
    contextmenu.addRef({ el, vnode })
    contextmenu.$contextmenuId = el.id || contextmenu._uid // eslint-disable-line no-underscore-dangle
  },
}
