import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiComponent } from './pages/api/api.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ApiComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-http-client-test';
}
