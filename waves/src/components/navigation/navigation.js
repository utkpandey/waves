import photorecognition from '../photo-recognition/photo-recognition.vue'
import videoRecognition from '../video-recognition/video-recognition.vue'
export default {
    name: 'navigation',
    components: {
      photorecognition,
      videoRecognition
     
    },
    data () {
      return {
        menuVisible: false,
        OptionToDisplay:'',
        isPhotoRecognitionSelected:true,
        isVideoRecognitionSelected:false

      }
    },
    methods: {
      toggleMenu () {
        this.menuVisible = !this.menuVisible
      },
      selectedNavigationOption(selectedValue){
        switch (selectedValue) 
        {
          case 1:
            this.isPhotoRecognitionSelected=true;
            this.isVideoRecognitionSelected=false
            break;
          case 2:
            this.isPhotoRecognitionSelected=false;
            this.isVideoRecognitionSelected=true
            break;
          
        }
      }
    }
  }