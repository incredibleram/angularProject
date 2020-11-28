import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'likecomponent',
  templateUrl: './likecomponent.component.html',
  styleUrls: ['./likecomponent.component.css']
})
export class LikecomponentComponent implements OnInit {

  constructor() { }
  @Input() isActive:boolean;
  @Input() likesCount=0;
  @Output() change = new EventEmitter();
  onLikeClicked(){
    this.change.emit();
  }

  ngOnInit(): void {
  }

}
