import { Component, OnInit } from '@angular/core';
import { GituhubHttpService } from 'src/app/services/http-services/gituhub-http.service';

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {

 appTitle: string = "Help a Friend"

  constructor() {}

  ngOnInit(): void {
  }

}
