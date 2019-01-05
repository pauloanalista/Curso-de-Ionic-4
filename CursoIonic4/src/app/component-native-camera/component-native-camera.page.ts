import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-component-native-camera',
  templateUrl: './component-native-camera.page.html',
  styleUrls: ['./component-native-camera.page.scss'],
})
export class ComponentNativeCameraPage implements OnInit {

  foto : any;
  constructor(private camera : Camera) { }

  ngOnInit() {
  }

  tirarFoto(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType : this.camera.MediaType.PICTURE
    };

    this.camera.getPicture(options).then((imageData)=>{
            
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      
      this.foto = base64Image;
    },(err)=>{
      alert('Não foi possível tirar a foto!');
      alert(err);
    });
  }
}
