<script>
export default {
  name: 'Render',
  functional: true,
  props: {
    mes: ''
  },
  render (h, context) {
    console.log('render', context)
    const {mes} = context.props
    const vnodes = []
    vnodes.push(<div>{mes}</div>)
    return vnodes
  }
}
</script>
