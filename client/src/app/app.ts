import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Nav } from "./nav/nav";
import { Sidenav } from "./sidenav/sidenav";
import { Dashboard } from "./dashboard/dashboard";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Nav, Sidenav],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'client';
}
