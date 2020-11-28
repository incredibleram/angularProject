import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name:'capitalizer'
})
export class Capitalizer implements PipeTransform{
    transform(value: any){
        let splitStrs;
        let finale="";
        if(value==undefined || value==null){
            return null
        }else{
            splitStrs = value.split(" ");
            for(let i=0;i<splitStrs.length;i++){
                if (i==0){
                    if(splitStrs[i].ignoreCase=="the"){
                        splitStrs[i]="The"
                    }if(splitStrs[i].ignoreCase=="of"){
                        splitStrs[i]="Of"
                    }else{
                        splitStrs[i] = splitStrs[i].substring(0,1).toUpperCase()+
                        splitStrs[i].substring(1,splitStrs[i].length).toLowerCase();
                    }
                }else{
                    if(splitStrs[i].toLowerCase()!="of"&&splitStrs[i].toLowerCase()!="the"){
                        splitStrs[i] = splitStrs[i].substring(0,1).toUpperCase()+
                        splitStrs[i].substring(1,splitStrs[i].length).toLowerCase();
                    }else if(splitStrs[i].toLowerCase()=="of"|| splitStrs[i].toLowerCase()=="the"){
                        splitStrs[i] = splitStrs[i].substring(0,1).toLowerCase()+
                        splitStrs[i].substring(1,splitStrs[i].length).toLowerCase();
                    }
                }
                finale = finale+" "+splitStrs[i];
            }
            return finale;
        }
    }
}