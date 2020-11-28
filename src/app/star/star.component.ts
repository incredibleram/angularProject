import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {
  @Input() isFavourite;
  @Output() change = new EventEmitter();
  isClicked:boolean;
  constructor() { }
  public onStarClicked(){
    this.change.emit();
  }
  ngOnInit(): void {
  }

}
