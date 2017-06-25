import { Component } from '@angular/core';
import { SaveFileService } from '../services/saveFileService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  file:any;
  compiledOutput:any;
  result:any;

constructor(private saveFileService:SaveFileService){
     //called first time before the ngOnInit()
  }

  ngOnInit(){
    console.log("23");
  }

  save(file){
    console.log("button clicked",file);
    this.saveFileService.saveFile(file).subscribe(res=>{
      console.log(res);
     
    },err=>{

    })

  }

  compile(){
    this.saveFileService.compileFile().subscribe(res=>{
      console.log(res);
       if(res!=null && res!='')
      this.compiledOutput = res;
      else{
        this.compiledOutput = 'compiled success';
      }
      
    },err=>{

    })
  }

  output(){
    this.saveFileService.outputFile().subscribe(res=>{
      console.log(res);
      this.result = res;
    },err=>{

    })
  }
}
