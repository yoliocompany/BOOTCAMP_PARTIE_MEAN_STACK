import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/layout/header/header.component';
import { SidebarComponent } from '../../shared/layout/sidebar/sidebar.component';
import { FooterComponent } from '../../shared/layout/footer/footer.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [HeaderComponent, SidebarComponent, FooterComponent, RouterOutlet],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
