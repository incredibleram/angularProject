import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css']
})
export class ZippyComponent implements OnInit {

  constructor() { }
  firstClicked: boolean;
  secondClicked:boolean;
  onClick(){
    this.firstClicked=!this.firstClicked;
  }

  ngOnInit(): void {
  }

}
