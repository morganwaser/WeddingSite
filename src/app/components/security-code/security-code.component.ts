import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-security-code',
  templateUrl: './security-code.component.html',
  styleUrls: ['./security-code.component.css']
})
export class SecurityCodeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  verifyCode = function(codeValue){
    // Check if code is valid
    // If valid
        // Save Cookie
        // Enable site
    // If invalid
        // Display invalid message
}

}
