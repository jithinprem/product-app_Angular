import { Component, Input } from '@angular/core';
import { ITopBarPrimaryParams } from '../topbar.component.interface';

@Component({
  selector: 'app-topbar-primarychild',
  templateUrl: './topbar-primarychild.component.html',
  styleUrls: ['./topbar-primarychild.component.scss']
})
export class TopbarPrimarychildComponent {
  @Input() TopBarPrimaryValues : ITopBarPrimaryParams = {
    logoURL: "",
    companyName: ""
  }
  


}
