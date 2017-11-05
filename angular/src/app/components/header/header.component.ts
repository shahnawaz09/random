import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../../services/authentication.service';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  isLoggedIn:boolean;
  currentUser:any;
  username : any;

  constructor(private authService: AuthService, private router : Router) { 
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
   
  }

  ngOnInit() {
   
    this.subscription = this.authService.isLoggedIn.subscribe(data => {
      this.isLoggedIn = data;

      // var currentUser = JSON.parse(localStorage.getItem('currentUser'));
      // if(currentUser !== null && data === false){

      //   this.isLoggedIn = true;
      // }
      // else if(currentUser !== null && data === true){
      //   this.isLoggedIn = true;
      // }
      // else if(currentUser === null && data === false){
      //   this.isLoggedIn = false;
      // }
    });
  }

  logout(): void{
    localStorage.removeItem('currentUser');
    this.authService.logout();
    this.router.navigate(['/login']);
  }
  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }
}
