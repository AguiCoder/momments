import { Component } from '@angular/core';
import { NgbdDatepickerPopup } from "../dt-datepicker/dt-datepicker.component";

interface DateType {
    name: string;
}

const DATE_TYPES: DateType[] = [
  {
    name: 'Viagem'
  },
  {
    name: 'Jantar'
  },
  {
    name: 'Aventura'
  },
  {
    name: 'Outros'
  }
]

@Component({
  selector: 'app-dt-form',
  standalone: true,
  imports: [NgbdDatepickerPopup],
  templateUrl: './dt-form.component.html',
  styleUrl: './dt-form.component.css'
})
export class DtFormComponent {
  datetypes = DATE_TYPES;
}
