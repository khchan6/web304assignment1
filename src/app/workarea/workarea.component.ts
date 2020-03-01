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
  hypo:string=null;
  noshow:boolean=true;

  // pythagorean function and round the result to nearest 1 decimal
  pythagorean(width, height) {
    return (Math.sqrt(this.height*this.height+this.width*this.width).toFixed(1));
  }

  // Event procedure for calculate button click
  handleSubmit(){
    this.noshow=false;
    
    // pythagorean theorm calculation
    this.hypo=this.pythagorean(this.width, this.height);

    //debug info
    console.log(this.height, this.width,this.hypo);
    console.log(this.noshow);

  }

  // Event procedure for reset button click
  reset(){
    this.noshow=true;
    
    this.width=null;
    this.height=null;
    // debug info
    console.log(this.noshow);
  }
  
  
  ngOnInit() {
  }



}
