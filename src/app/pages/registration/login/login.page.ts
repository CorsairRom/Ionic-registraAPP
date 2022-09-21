import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators
} from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario={
    username:'',
    password:''
  }

  frmlogin: FormGroup;
  constructor(public fb: FormBuilder, private router:Router, private alertController:AlertController) {
    this.frmlogin = this.fb.group({
      'usuario': new FormControl("", Validators.required),
      'password': new FormControl("", Validators.required)
    })
   }

  ngOnInit() {
  }

  onSubmit(){
    console.log("hola");
    var f = this.frmlogin.value
    this.usuario['username'] = f.usuario
    this.usuario['password'] = f.password
    var name = this.usuario.username
    var pass = this.usuario.password
    // console.log(name);
    // console.log(pass);

    // dejando la caga

    if (name=="richard" && pass == "1234") {
      console.log("pasaste");
      let navigationExtras:NavigationExtras={
        state:{
          requestUser: name,
          msg: "mensaje"
        }
      }
      this.router.navigate(['/home'], navigationExtras)
      console.log(navigationExtras);
    }
    else{
      this.presentAlert();
      console.log("fallaste, vuelve a intentarlo");
    }
  }
  async presentAlert(){
    const alert = await this.alertController.create({
      header: 'Acceso Denegado',
      subHeader: '',
      message: ' Usuario O contraseña incorrectos',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Alert canceled');
          },
        },
        {
          text: 'Aceptar',
          role: 'confirm',
          handler: () => {
            console.log('Alert canceled');
          },
        },
      ],
      mode: 'ios',
      backdropDismiss: false,
      cssClass: 'miclase', 
    });
    await alert.present();
    const { role } = await alert.onDidDismiss();
    console.log(`Dismissed with role: ${role}`);
  }
}
