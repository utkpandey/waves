
import { dashboardEventBus } from '../../main'
export default {
  name: 'photo-recognition',
  components: {

  },
  data() {
    return {
      expandNews: false,
      expandSingle: false,
      amount: 99,
      image: '',
      showDialog: false,
      dialogMsgToDisplay: 'Uploading...',
      completed: false,
      Person: [
        {
          "Name": "Harsh",
          "visitDate": "14 Feb 2020",
            "BoundingBox": {
              "Width": 0.23427027463912964,
              "Height": 0.5312559008598328,
              "Left": 0.4599301218986511,
              "Top": 0.09354189038276672
            },
            "AgeRange": {
              "Low": 36,
              "High": 54
            },
            "Smile": {
              "Value": true,
              "Confidence": 98.32233428955078
            },
            "Eyeglasses": {
              "Value": false,
              "Confidence": 19.40628051757812
            },
            "Sunglasses": {
              "Value": false,
              "Confidence": 99.82878112792969
            },
            "Gender": {
              "Value": "Male",
              "Confidence": 87.07164764404297
            },
            "Beard": {
              "Value": false,
              "Confidence": 74.59487915039062
            },
            "Mustache": {
              "Value": false,
              "Confidence": 96.55758666992188
            },
            "EyesOpen": {
              "Value": true,
              "Confidence": 70.34419250488281
            },
            "MouthOpen": {
              "Value": true,
              "Confidence": 98.40888977050781
            },
            "Emotions": [
              {
                "Type": "HAPPY",
                "Confidence": 91.18509674072266
              },
              {
                "Type": "FEAR",
                "Confidence": 4.656937122344971
              },
              {
                "Type": "SURPRISED",
                "Confidence": 2.413618564605713
              },
              {
                "Type": "ANGRY",
                "Confidence": 1.509537696838379
              },
              {
                "Type": "CONFUSED",
                "Confidence": 0.08536060899496078
              },
              {
                "Type": "SAD",
                "Confidence": 0.06597905606031418
              },
              {
                "Type": "DISGUSTED",
                "Confidence": 0.06100773438811302
              },
              {
                "Type": "CALM",
                "Confidence": 0.022459903731942177
              }
            ],
            "Landmarks": [
              {
                "Type": "eyeLeft",
                "X": 0.5429227352142334,
                "Y": 0.2679327428340912
              },
              {
                "Type": "eyeRight",
                "X": 0.6389821171760559,
                "Y": 0.2613428831100464
              },
              {
                "Type": "mouthLeft",
                "X": 0.5543867945671082,
                "Y": 0.4420168399810791
              },
              {
                "Type": "mouthRight",
                "X": 0.6344012022018433,
                "Y": 0.4356466829776764
              },
              {
                "Type": "nose",
                "X": 0.6235689520835876,
                "Y": 0.3428371548652649
              },
              {
                "Type": "leftEyeBrowLeft",
                "X": 0.4943738281726837,
                "Y": 0.23700805008411407
              },
              {
                "Type": "leftEyeBrowRight",
                "X": 0.5380414128303528,
                "Y": 0.20650441944599152
              },
              {
                "Type": "leftEyeBrowUp",
                "X": 0.572021484375,
                "Y": 0.21102860569953918
              },
              {
                "Type": "rightEyeBrowLeft",
                "X": 0.6276376843452454,
                "Y": 0.2079957127571106
              },
              {
                "Type": "rightEyeBrowRight",
                "X": 0.649911642074585,
                "Y": 0.1999930739402771
              },
              {
                "Type": "rightEyeBrowUp",
                "X": 0.6621978282928467,
                "Y": 0.2258705347776413
              },
              {
                "Type": "leftEyeLeft",
                "X": 0.5214313268661499,
                "Y": 0.27056846022605896
              },
              {
                "Type": "leftEyeRight",
                "X": 0.5614827871322632,
                "Y": 0.2686067819595337
              },
              {
                "Type": "leftEyeUp",
                "X": 0.5438060164451599,
                "Y": 0.25867000222206116
              },
              {
                "Type": "leftEyeDown",
                "X": 0.5432709455490112,
                "Y": 0.2758884131908417
              },
              {
                "Type": "rightEyeLeft",
                "X": 0.619584858417511,
                "Y": 0.26478147506713867
              },
              {
                "Type": "rightEyeRight",
                "X": 0.6519388556480408,
                "Y": 0.2614664137363434
              },
              {
                "Type": "rightEyeUp",
                "X": 0.640484094619751,
                "Y": 0.2521824836730957
              },
              {
                "Type": "rightEyeDown",
                "X": 0.6385668516159058,
                "Y": 0.2691528797149658
              },
              {
                "Type": "noseLeft",
                "X": 0.5859124660491943,
                "Y": 0.3720302879810333
              },
              {
                "Type": "noseRight",
                "X": 0.6218934059143066,
                "Y": 0.3694647550582886
              },
              {
                "Type": "mouthUp",
                "X": 0.6073852181434631,
                "Y": 0.4103952944278717
              },
              {
                "Type": "mouthDown",
                "X": 0.6037718057632446,
                "Y": 0.4645608365535736
              },
              {
                "Type": "leftPupil",
                "X": 0.5429227352142334,
                "Y": 0.2679327428340912
              },
              {
                "Type": "rightPupil",
                "X": 0.6389821171760559,
                "Y": 0.2613428831100464
              },
              {
                "Type": "upperJawlineLeft",
                "X": 0.43615293502807617,
                "Y": 0.2988714277744293
              },
              {
                "Type": "midJawlineLeft",
                "X": 0.46485966444015503,
                "Y": 0.47985589504241943
              },
              {
                "Type": "chinBottom",
                "X": 0.591579258441925,
                "Y": 0.5592091083526611
              },
              {
                "Type": "midJawlineRight",
                "X": 0.6370946168899536,
                "Y": 0.46806249022483826
              },
              {
                "Type": "upperJawlineRight",
                "X": 0.6475969552993774,
                "Y": 0.28543585538864136
              }
            ],
            "Pose": {
              "Roll": 1.042267918586731,
              "Yaw": 26.295257568359375,
              "Pitch": 8.640826225280762
            },
            "Quality": {
              "Brightness": 93.47408294677734,
              "Sharpness": 86.86019134521484
            },
            "Confidence": 99.98788452148438
          ,


        },
        {
          "Name": "Utkarsh",
          "visitDate": "14 Feb 2020",
            "BoundingBox": {
              "Width": 0.23427027463912964,
              "Height": 0.5312559008598328,
              "Left": 0.4599301218986511,
              "Top": 0.09354189038276672
            },
            "AgeRange": {
              "Low": 36,
              "High": 54
            },
            "Smile": {
              "Value": true,
              "Confidence": 8.32233428955078
            },
            "Eyeglasses": {
              "Value": false,
              "Confidence": 99.40628051757812
            },
            "Sunglasses": {
              "Value": false,
              "Confidence": 99.82878112792969
            },
            "Gender": {
              "Value": "Male",
              "Confidence": 87.07164764404297
            },
            "Beard": {
              "Value": false,
              "Confidence": 74.59487915039062
            },
            "Mustache": {
              "Value": false,
              "Confidence": 96.55758666992188
            },
            "EyesOpen": {
              "Value": true,
              "Confidence": 70.34419250488281
            },
            "MouthOpen": {
              "Value": true,
              "Confidence": 98.40888977050781
            },
            "Emotions": [
              {
                "Type": "HAPPY",
                "Confidence": 91.18509674072266
              },
              {
                "Type": "FEAR",
                "Confidence": 4.656937122344971
              },
              {
                "Type": "SURPRISED",
                "Confidence": 2.413618564605713
              },
              {
                "Type": "ANGRY",
                "Confidence": 1.509537696838379
              },
              {
                "Type": "CONFUSED",
                "Confidence": 0.08536060899496078
              },
              {
                "Type": "SAD",
                "Confidence": 0.06597905606031418
              },
              {
                "Type": "DISGUSTED",
                "Confidence": 0.06100773438811302
              },
              {
                "Type": "CALM",
                "Confidence": 0.022459903731942177
              }
            ],
            "Landmarks": [
              {
                "Type": "eyeLeft",
                "X": 0.5429227352142334,
                "Y": 0.2679327428340912
              },
              {
                "Type": "eyeRight",
                "X": 0.6389821171760559,
                "Y": 0.2613428831100464
              },
              {
                "Type": "mouthLeft",
                "X": 0.5543867945671082,
                "Y": 0.4420168399810791
              },
              {
                "Type": "mouthRight",
                "X": 0.6344012022018433,
                "Y": 0.4356466829776764
              },
              {
                "Type": "nose",
                "X": 0.6235689520835876,
                "Y": 0.3428371548652649
              },
              {
                "Type": "leftEyeBrowLeft",
                "X": 0.4943738281726837,
                "Y": 0.23700805008411407
              },
              {
                "Type": "leftEyeBrowRight",
                "X": 0.5380414128303528,
                "Y": 0.20650441944599152
              },
              {
                "Type": "leftEyeBrowUp",
                "X": 0.572021484375,
                "Y": 0.21102860569953918
              },
              {
                "Type": "rightEyeBrowLeft",
                "X": 0.6276376843452454,
                "Y": 0.2079957127571106
              },
              {
                "Type": "rightEyeBrowRight",
                "X": 0.649911642074585,
                "Y": 0.1999930739402771
              },
              {
                "Type": "rightEyeBrowUp",
                "X": 0.6621978282928467,
                "Y": 0.2258705347776413
              },
              {
                "Type": "leftEyeLeft",
                "X": 0.5214313268661499,
                "Y": 0.27056846022605896
              },
              {
                "Type": "leftEyeRight",
                "X": 0.5614827871322632,
                "Y": 0.2686067819595337
              },
              {
                "Type": "leftEyeUp",
                "X": 0.5438060164451599,
                "Y": 0.25867000222206116
              },
              {
                "Type": "leftEyeDown",
                "X": 0.5432709455490112,
                "Y": 0.2758884131908417
              },
              {
                "Type": "rightEyeLeft",
                "X": 0.619584858417511,
                "Y": 0.26478147506713867
              },
              {
                "Type": "rightEyeRight",
                "X": 0.6519388556480408,
                "Y": 0.2614664137363434
              },
              {
                "Type": "rightEyeUp",
                "X": 0.640484094619751,
                "Y": 0.2521824836730957
              },
              {
                "Type": "rightEyeDown",
                "X": 0.6385668516159058,
                "Y": 0.2691528797149658
              },
              {
                "Type": "noseLeft",
                "X": 0.5859124660491943,
                "Y": 0.3720302879810333
              },
              {
                "Type": "noseRight",
                "X": 0.6218934059143066,
                "Y": 0.3694647550582886
              },
              {
                "Type": "mouthUp",
                "X": 0.6073852181434631,
                "Y": 0.4103952944278717
              },
              {
                "Type": "mouthDown",
                "X": 0.6037718057632446,
                "Y": 0.4645608365535736
              },
              {
                "Type": "leftPupil",
                "X": 0.5429227352142334,
                "Y": 0.2679327428340912
              },
              {
                "Type": "rightPupil",
                "X": 0.6389821171760559,
                "Y": 0.2613428831100464
              },
              {
                "Type": "upperJawlineLeft",
                "X": 0.43615293502807617,
                "Y": 0.2988714277744293
              },
              {
                "Type": "midJawlineLeft",
                "X": 0.46485966444015503,
                "Y": 0.47985589504241943
              },
              {
                "Type": "chinBottom",
                "X": 0.591579258441925,
                "Y": 0.5592091083526611
              },
              {
                "Type": "midJawlineRight",
                "X": 0.6370946168899536,
                "Y": 0.46806249022483826
              },
              {
                "Type": "upperJawlineRight",
                "X": 0.6475969552993774,
                "Y": 0.28543585538864136
              }
            ],
            "Pose": {
              "Roll": 1.042267918586731,
              "Yaw": 26.295257568359375,
              "Pitch": 8.640826225280762
            },
            "Quality": {
              "Brightness": 93.47408294677734,
              "Sharpness": 86.86019134521484
            },
            "Confidence": 99.98788452148438
          ,


        },
       
      ]
    }

  },
  methods: {
    onFileChange(e) {
      self.completed = false;
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length)
        return;
      this.createImage(files[0]);
    },
    createImage(file) {
      this.showDialog = true;
      console.log('uploading')
      var image = new Image();
      var reader = new FileReader();


      reader.onload = (e) => {
        this.image = e.target.result;
        //this.dialogMsgToDisplay='Analysing...'

        var self = this;
        setTimeout(function () {
          self.dialogMsgToDisplay = 'Analysing...';
        }, 2000);

        setTimeout(function () {
          self.dialogMsgToDisplay = 'Completed!';
          self.completed = true;
        }, 10000);
        //   this.dialogMsgToDisplay='Completed!' }, 5000);




      };
      reader.readAsDataURL(file);
      // this.showDialog=false;

    },
    removeImage: function (e) {
      this.image = '';
      self.completed = false;

    },
    dialogClose() {
      this.showDialog = false;
      this.completed = false;
    },
    smilePercent(i){
      return this.Person[i].Smile.Confidence
    },
    eyeglassesPercent(i){
      return this.Person[i].Eyeglasses.Confidence
    },
    genderConfidence(i){
      return this.Person[i].Gender.Confidence
    },
    EyesOpenPercentage(i){
      return this.Person[i].EyesOpen.Confidence 
    }
  }
}