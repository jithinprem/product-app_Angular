import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-routing-with-params-first',
  templateUrl: './routing-with-params-first.component.html',
  styleUrls: ['./routing-with-params-first.component.scss']
})
export class RoutingWithParamsFirstComponent {

  constructor(private route: ActivatedRoute){

  }

  ngOninIt(): void {
    alert(this.route.snapshot.paramMap.get("id"));
  }

}
