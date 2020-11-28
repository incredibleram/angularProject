import { StylesCompileDependency } from '@angular/compiler';
import { serializeNodes } from '@angular/compiler/src/i18n/digest';
import { Component, OnInit } from '@angular/core';
import { resolve } from 'dns';
import { promise } from 'protractor';
import { stringify } from 'querystring';
import { Observable } from 'rxjs'

@Component({
  selector: 'testcomponent',
  templateUrl: './testcomponent.component.html',
  styleUrls: ['./testcomponent.component.css']
})
export class TestcomponentComponent {
  offensiveWords = ['demon', 'gun'];
  userList = [{
    id: 'e3d46de8c7194cb1a52345195c15dc42',
    name: 'Yui',
    description: 'I do house cleaning work. 10 years of experience.',
    location: 'tokyo',
    jobType: 'housecleaning',
  },
  {
    id: 'e3d46de8c7194cb4532275195c56dc08',
    name: 'Ai',
    description: 'My partner and I clean an average of ten houses a week.',
    location: 'tokyo',
    jobType: 'housecleaning',
  },
  {
    id: 'e3d46de8c7194cb1a32275195c15dc01',
    name: 'Kenta',
    description:
      'Housecleaning is what people do to remove mess, trash, and dirt from houses and put things where they belong so the house looks neat.',
    location: 'tokyo',
    jobType: 'housecleaning',
  },
  {
    id: 'e3e46de8c7194cb1a32582935c15dca1',
    name: 'Yuto',
    description: 'K-12, business, and conversational English lessons',
    location: 'osaka',
    jobType: 'english-lesson',
  },
  {
    id: 'e3d46de8c7494cb1a322751v5c1fdc47',
    name: 'Haruto',
    description: 'I provide interactive English lessons.',
    location: 'tokyo',
    jobType: 'english-lesson',
  },
  {
    id: 'e3d46df8c7194cb1a32275865b15dc83',
    name: 'Sota',
    description: 'Need your home, house, or apartment cleaned? I am the rightperson',
    location: 'osaka',
    jobType: 'housecleaning',
  },
  {
    id: 'e3d46de8c7494cb1a322751v5c1fdc47',
    name: 'Haruto',
    description: 'I provide interactive English lessons.',
    location: 'tokyo',
    jobType: 'english-lesson',
  },
  {
    id: 'e3e46de8c7194cb1a32582935c15dca1',
    name: 'Yuto',
    description: 'K-12, business, and conversational English lessons',
    location: 'osaka',
    jobType: 'english-lesson',
  },
  {
    id: 'e3d45he8c7194cb1at2245195c15j497',
    name: 'Mean Person',
    description: 'I sometimes carry a gun with me when I go teach an English class.',
    location: 'tokyo',
    jobType: 'english-lesson',
  }];

  getTopPros(users : any, jobType : string, location : string, limit : number) {
    let topPros = [];
    const ZERO=0;
    //iterate users and check for matches
    users.forEach((user: { location: string; jobType: string; description: string; }) => {
      //check for jobtype, location and offensive words
      if (user.jobType === jobType &&
        user.location === location &&
        this.checkOffensiveWords(user.description)) {
          topPros.push(user);
        }
    });
    //checking for duplicates in the array
    topPros = this.checkDuplicates(topPros);
    //returning number of reults specified by limit from user
    console.log( topPros.slice(ZERO, limit));
  } v

  //method to check if description contains offensive words
  checkOffensiveWords(userDescription: string):boolean{
    return !this.offensiveWords.some(flagWord=>userDescription.includes(flagWord));
  }

  //method to filter duplicate data
  checkDuplicates(topPros : any){
    return Array.from(new Set(topPros.map(JSON.stringify)))
    .map((subPros : string)=>JSON.parse(subPros));
  }

  //method to group array based on input type
  grouper(filter : string){
    let result : any;
    //using reduce function of array to re-structure object array
    result = this.userList.reduce((reducer,accumulator)=>{
      reducer[accumulator[filter]] = reducer[accumulator[filter]] || [];
      if(this.checkOffensiveWords(accumulator.description)){
        reducer[accumulator[filter]].push(accumulator);
      }
      reducer[accumulator[filter]] = this.checkDuplicates(reducer[accumulator[filter]]);
      return reducer;
    }, Object.create(null));
    return result;
  }

}

