import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-app';
  favClass = "fa fa-star";
  isClicked:boolean;
  tweet={
    body: "here is the body of a tweet",
    isLiked:false,
    likes:0
  };
  onStarClick() {
    this.favClass = this.isClicked ? "fas fa-star": "far fa-star";
    this.isClicked = !this.isClicked;
  }
  onLikeClick(){
    
    if(this.tweet.isLiked){
      this.tweet.isLiked=false;
      this.tweet.likes=this.tweet.likes-1;
    }else{
      this.tweet.isLiked=true;
      this.tweet.likes=this.tweet.likes+1;
    }
  }
}
