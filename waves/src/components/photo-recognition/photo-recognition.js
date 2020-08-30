
import { dashboardEventBus } from '../../main'
export default {
    name: 'photo-recognition',
    components: {
           
    },
    data () {
      return {
        expandNews: false,
        expandSingle: false,
        amount: 99,
        image: '',
      }
      
    },
    methods: {
      onFileChange(e) {
        var files = e.target.files || e.dataTransfer.files;
        if (!files.length)
          return;
        this.createImage(files[0]);
      },
      createImage(file) {
        var image = new Image();
        var reader = new FileReader();
        
  
        reader.onload = (e) => {
          this.image = e.target.result;
          
        };
        reader.readAsDataURL(file);
        
      },
      removeImage: function (e) {
        this.image = '';
        
      }
    }
  }