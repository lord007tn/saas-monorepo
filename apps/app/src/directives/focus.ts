import type { Directive } from 'vue'

const Focus: Directive = {
  mounted(el, binding) {
    const shouldFocus = binding.value !== undefined ? binding.value : true
    if (shouldFocus) {
      el.focus()
    } else {
      el.blur()
    }
  }
}

export default Focus
