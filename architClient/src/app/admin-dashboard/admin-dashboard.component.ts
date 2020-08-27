import { Router } from '@angular/router';
import { ApproveClaim } from './../Entity/ApproveClaim';
import { Claim } from './../Entity/Claim';
import { AdminDashboardService } from './admin-dashboard.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  data: any;
  customerCount: any;
  renewCount: any;
  claimCount: any;

  constructor(private service: AdminDashboardService, private router: Router) { }

  fetchCustomerCount(){
    this.service.fetchCustomerCount().subscribe(data=>{
      alert(JSON.stringify(data));
    })
  }

  fetchClaimCount(){
    this.service.fetchClaimCount().subscribe(data=>{
      alert(JSON.stringify(data));
    })
  }

  fetchPolicyCount(){
    this.service.fetchPolicyCount().subscribe(data=>{
      alert(JSON.stringify(data));
    })
  }

  fetchRenewCount(){
    this.service.fetchRenewCount().subscribe(data=>{
      alert(JSON.stringify(data));
    })
  }

  statusUpdate(id, status){
    let data = new ApproveClaim()
    
    data.claimId = id
    data.status = status

    this.service.updateStatus(data).subscribe(data =>{
      window.location.reload();
    })
  }


  logout(){
    sessionStorage.clear();
    this.router.navigate(['login']);
  }




  ngOnInit(): void {
      this.service.fetchClaimData('PENDING').subscribe(data=>{
      this.data = data;
    })
    
    this.service.fetchCustomerCount().subscribe(data=>{
      this.customerCount = data;
    })

    this.service.fetchClaimCount().subscribe(data=>{
      this.claimCount = data;
    })

    this.service.fetchRenewCount().subscribe(data=>{
      this.renewCount = data;
    })
  }
}
