import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
// import { EventEmitter } from 'stream';
import { RouterModule } from '@angular/router';
import { LogoutService } from 'src/app/services/logout.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Output() sideNavToggled = new EventEmitter<boolean>();
  menuStatus: boolean = false;

  username = localStorage.getItem('name');
  user_type = localStorage.getItem('user_type');
  role = localStorage.getItem('role');
  ImgUrl = localStorage.getItem('imgUrl');

  constructor(private router: Router,private _logout:LogoutService) {}

  ngOnInit(): void {}

  SideNavToggled() {
    this.menuStatus = !this.menuStatus;
    this.sideNavToggled.emit(this.menuStatus);
  }
  gotoProfile() {
    this.router.navigate(['./student/student/app-student-profile']);
  }

  gotoScannerProfile() {
    this.router.navigate(['./scanner/scanner/app-scanner-profile']);
  }

  gotoTeacherProfile(){
    this.router.navigate(['./teacher/teacher/app-teacher-profile']);
  }

  gotoExaminerProfile(){
    this.router.navigate(['./examiner/examiner/app-examiner-profile']);
  }

  openDialog(): void {
    /*const dialogRef = this.dialog.open(LogOutComponent, {
      width: '350px',
      height: '212px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {

    });*/
  }

  changePassword(): void {
    /* const dialogRef = this.dialog.open(ChangePasswordComponent, {
      width: '450px',
      height: '305px',
      data: {}
    });
    dialogRef.afterClosed().subscribe(result => {
    });*/
  }


  logout(){
    this._logout.logout();
  }
}
