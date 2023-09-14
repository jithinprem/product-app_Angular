import { Component } from '@angular/core';
import { ITopBarPrimaryParams } from './topbar.component.interface';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent {
  public topBarItems : ITopBarPrimaryParams= {
    logoURL : "https://static.vecteezy.com/system/resources/previews/018/930/750/non_2x/spotify-app-logo-spotify-icon-transparent-free-png.png",
    companyName : "Spotify"
  }
}
