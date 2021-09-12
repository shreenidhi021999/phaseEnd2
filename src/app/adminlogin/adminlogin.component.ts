import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  uname?:string;
    pwd?:string;
    msg:string='';
  router: any;
  constructor(
    private _router: Router,
    private _activatedRoute:ActivatedRoute
    ) { }
  check()
  {
    if(this.uname=="shree" && this.pwd=="1234")
    {
      this._router.navigate(["/fooddetails"],{relativeTo:this._activatedRoute})
    }
  }
 
  
  

  ngOnInit(): void {
  }

}

