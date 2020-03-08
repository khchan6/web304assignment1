import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-workarea',
  templateUrl: './workarea.component.html',
  styleUrls: ['./workarea.component.css']
})

export class WorkareaComponent implements OnInit {

  constructor() { }

  width:number=null;
  height:number=null;
  hypo:number=null;
  inputerror:boolean=false;

  // pythagorean function and round the result to nearest 1 decimal
  pythagorean(width, height) {
    return Number(Math.sqrt(this.height*this.height+this.width*this.width).toFixed(1));
  }

  // Event procedure for calculate button click
  handleSubmit(){
    
    //Input error handling
    this.inputerror=false;
    if ((this.width<1 || this.width==null) || (this.height <1 || this.width==null)){
      this.inputerror=true;
    }

    // pythagorean theorm calculation
    if (this.inputerror==false) {
      this.hypo=this.pythagorean(this.width, this.height);
    }

    //debug info
    console.log(this.inputerror, this.height, this.width,this.hypo);
  }

  // Event procedure for reset button click
  reset(){
    this.width=null;
    this.height=null;
    this.hypo=null;
  }
  
  ngOnInit() {
  }



}
