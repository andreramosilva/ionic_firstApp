import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {

  public nome_usuario="Cara da variavel";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

public somanumeros(num1:number,num2:number):void{
  //alert(num1+num2);
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedPage');
    //this.somanumeros(10,99);
  }

}
