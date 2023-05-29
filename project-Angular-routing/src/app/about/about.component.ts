import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  constructor(private route:Router ,private activateTo:ActivatedRoute){}

  navigate(){
    // route through navigate
    // this.route.navigate(['Home']);
// absolute path
    this.route.navigate(['/Home'],{relativeTo:this.activateTo});
    // route through navigateByURL
    // this.route.navigateByUrl('Home');
  }

}
