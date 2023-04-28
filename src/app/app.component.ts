import { Component, OnInit } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { AuthService } from './auth/auth.service';
import { firebaseConfig } from './firebase.config';

@Component({
	selector: 'app-root',
	// template: "<h1>hello world</h1>",
	// styles: ['h1{color:green}']
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.css'],
})
export class AppComponent implements OnInit{
	constructor(private authService: AuthService){}
	
	ngOnInit(): void {
    // Initialize Firebase
    initializeApp(firebaseConfig);
	}

	isAuthenticated() {
		return this.authService.isAuthenticated
	}

	logout() {
		this.authService.logout()
	}
}