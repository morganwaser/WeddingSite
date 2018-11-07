import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entry-code',
  templateUrl: './entry-code.component.html',
  styleUrls: ['./entry-code.component.css']
})
export class EntryCodeComponent implements OnInit {

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
