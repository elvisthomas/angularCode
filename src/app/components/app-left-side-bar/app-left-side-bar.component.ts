import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import {Router} from '@angular/router';


@Component({
  selector: 'app-left-side-bar',
  templateUrl: './app-left-side-bar.component.html',
  styleUrls: ['./app-left-side-bar.component.css']
})
export class AppLeftSideBarComponent implements OnInit {

  session: string;
  constructor(private location:Location ,private router:Router) { }

  ngOnInit() {
  
    var userid = sessionStorage.getItem('id');
    this.session= userid;
    
  }

 logOut()
 {
     // var userid = sessionStorage.getItem('id');
     // this.route.params
     // .switchMap((params: Params) => this.userService.updatesession(userid))
     // .subscribe(res =>{

     // })
     window.sessionStorage.clear();
     this.router.navigate(['/login']);
     location.reload();
}
}
