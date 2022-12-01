import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  pageTitle = 'ingresa';

  formularioLogin: FormGroup;

  user: any ={
    email: '',
    password: ''
  }

  field: string ='';

  constructor(public fb: FormBuilder, public alertController: AlertController, private toastCtrl: ToastController, private router: Router) { 

    this.formularioLogin = this.fb.group({

      "correo" : new FormControl("", Validators.required),
      "password" : new FormControl("", Validators.required)

    })

  }

  ngOnInit() {
  }


  /*async ingresar(){
    var f = this.formularioLogin.value;

    var usuario = JSON.parse(localStorage.getItem('usuario'));

    if(usuario.nombre == f.nombre && usuario.password == f.password){
      console.log('Ingresado');
    }
    else{
      const alert = await this.alertController.create({
        header: 'Datos Incorrectos',
        message: 'Su correo y contraseña no son correctas',
        buttons: ['Aceptar'],
      });
  
      await alert.present();
    }
  }*/

  login(){
    if(this.validateModel(this.user)){
      this.router.navigate(['/maindex']);
      if(this.user.email == 'admin@admin.com'){
        this.presentToast('Bienvenido Administrador');
      }
      else{
        this.presentToast('Bienvenido ' + this.user.email);
      }
    }
    else{
      this.presentToast('Debe ingresar sus datos correctamente');
    }
  }
  
  async presentToast(message: string, duration?: number){
    const toast = await this.toastCtrl.create({
      message:message,
      duration:duration?duration:2000
    });
    toast.present();
  }

  validateModel(model: any){
    for(var[key,value] of Object.entries(model)){
      if(this.user.email == 'admin@admin.com' && this.user.password == '1234' || this.user.email == 'usuario@gmail.com' && this.user.password == '1234'){
        this.field = key;
        return true;
      }
    }
    return false;
  }


}
