export default {
    name: 'navigation',
    data () {
      return {
        menuVisible: false,
        OptionToDisplay:''
      }
    },
    methods: {
      toggleMenu () {
        this.menuVisible = !this.menuVisible
      },
      selectedNavigationOption(selectedValue){
        switch (selectedValue) {
          case 1:
            this.OptionToDisplay='option 1'
            break;
          case 2:
            this.OptionToDisplay='option 2'
            break;
          case 3:
            this.OptionToDisplay='option 3'
            break;
            case 4:
            this.OptionToDisplay='option 4'
            break;
        }
      }
    }
  }