import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'inputOutput';
  datoEnviado = 'User0104';

  sendData(): void {
    this.datoEnviado = "sadf";
    console.log(this.datoEnviado);
  }
}
