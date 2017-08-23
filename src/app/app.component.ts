import { Component, NgZone } from '@angular/core';
import { AppService } from './app.service';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

	locations = {};
	zipCode = {"800" : "新興區", "801" : "前金區", "802" : "苓雅區", "803" : "鹽埕區",
			   "804" : "鼓山區", "805" : "旗津區", "806" : "前鎮區", "807" : "三民區",
			   "811" : "楠梓區", "812" : "小港區", "813" : "左營區", "814" : "仁武區",
			   "815" : "大社區", "820" : "岡山區", "821" : "路竹區", "822" : "阿蓮區",
			   "823" : "田寮區", "824" : "燕巢區", "825" : "橋頭區", "826" : "梓官區",
			   "827" : "彌陀區", "828" : "永安區", "829" : "湖內區", "830" : "鳳山區",
			   "831" : "大寮區", "832" : "林園區", "833" : "鳥松區", "840" : "大樹區",
			   "842" : "旗山區", "843" : "美濃區", "844" : "六龜區", "845" : "內門區",
			   "846" : "杉林區", "847" : "甲仙區", "848" : "桃源區", "849" : "那瑪夏",
			   "851" : "茂林區", "852" : "茄萣區"};

	constructor(fb: FormBuilder, 
				private appService : AppService,
				private ngZone : NgZone){
	}
	searchLocation() {
		this.appService.searchLocation()
			.then((result) => {
				this.locations = result;
				this.ngZone.run(() => {
          			console.log("run");
        		});

			})
			.catch((error) => {
				console.log(error);
			});
	}
}
