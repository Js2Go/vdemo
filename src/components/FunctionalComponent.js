import { h, resolveDirective, withDirectives } from 'vue'

const DynamicHeading = (props, context) => {
  const focus = resolveDirective('focus')
  console.log(focus)
  return withDirectives(h(`input`, context.attrs, context.slots), [
    [focus]
  ])
}

DynamicHeading.props = ['level']

export default DynamicHeading
