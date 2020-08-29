export default {
    name: 'navigation',
    data () {
      return {
        menuVisible: false
      }
    },
    methods: {
      toggleMenu () {
        this.menuVisible = !this.menuVisible
      }
    }
  }