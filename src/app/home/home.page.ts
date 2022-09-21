import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  username:string=''
  constructor(
    private router:Router,
    private activatedRouter:ActivatedRoute,
    private menu:MenuController
  ) {
    this.activatedRouter.queryParams.subscribe(params=>{
      if (this.router.getCurrentNavigation().extras.state) {
        let usuario = this.router.getCurrentNavigation().extras.state.requestUser;
        this.username = usuario
        console.log(this.username);
      }
    })
  }
  verMenu(){
    this.menu.toggle('first');
  }

}
