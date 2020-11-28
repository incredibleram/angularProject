import { Component, OnInit } from '@angular/core';
import { AuthorsService } from './../authors.service';

@Component({
  selector: 'authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  author;
  content;
  email="ram@mail.com";
  constructor(authorsFromService: AuthorsService) {
    this.author=authorsFromService.getAuthors();
  }
  onkeyUp($event){
    this.content = ($event.target.value);
    console.log(this.email);
  }
  ngOnInit(): void {
  }

}
