import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DtFormComponent } from "./components/dt-form/dt-form.component";
import { NgbdDatepickerPopup } from "./components/dt-datepicker/dt-datepicker.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DtFormComponent, NgbdDatepickerPopup],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'momments';
}
