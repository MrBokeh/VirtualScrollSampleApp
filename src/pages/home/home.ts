import { Component, ViewChild } from '@angular/core';
import { NavController, Content } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(Content) content: Content;

  public logo:string = "assets/imgs/logo.png";
  public images:Array<string> = ["assets/imgs/logo.png","assets/imgs/logo.png","assets/imgs/logo.png"];

  constructor(public navCtrl: NavController) {
    setInterval(()=>{
      this.images.push(this.logo);
      this.content.scrollToBottom();
    }, 100);
  }

}
