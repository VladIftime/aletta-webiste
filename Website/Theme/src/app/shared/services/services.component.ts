import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})

/**
 * Services component
 */
export class ServicesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  servicesData = [
    {
      icon: 'ti-settings',
      title: 'Secure and compliant',
    },
    {
      icon: 'ti-palette',
      title: 'Time and cost efficient',
    },
    {
      icon: 'ti-stats-up',
      title: 'Feasibility in multicenter studies',
    },
    {
      icon: 'ti-package',
      title: 'Increased participant engagement and retention',
    },
    {
      icon: 'ti-dashboard',
      title: 'Efficient data capture',
    },
    {
      icon: 'ti-headphone',
      title: 'Better data management, reporting and tracking',
    },
  ]
}
