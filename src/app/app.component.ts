import { Component, NgZone } from '@angular/core';
import { AppService } from './app.service';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  searchForm : FormGroup;
  locations_orig : any;
  locations : any;

	zipCode = [
        { "Code" : "800", "Name" : "新興區" },
        { "Code" : "801", "Name" : "前金區" },
        { "Code" : "802", "Name" : "苓雅區" },
        { "Code" : "803", "Name" : "鹽埕區" },
        { "Code" : "804", "Name" : "鼓山區" },
        { "Code" : "805", "Name" : "旗津區" },
        { "Code" : "806", "Name" : "前鎮區" },
        { "Code" : "807", "Name" : "三民區" },
        { "Code" : "811", "Name" : "楠梓區" },
        { "Code" : "812", "Name" : "小港區" },
        { "Code" : "813", "Name" : "左營區" },
        { "Code" : "814", "Name" : "仁武區" },
        { "Code" : "815", "Name" : "大社區" },
        { "Code" : "820", "Name" : "岡山區" },
        { "Code" : "821", "Name" : "路竹區" },
        { "Code" : "822", "Name" : "阿蓮區" },
        { "Code" : "823", "Name" : "田寮區" },
        { "Code" : "824", "Name" : "燕巢區" },
        { "Code" : "825", "Name" : "橋頭區" },
        { "Code" : "826", "Name" : "梓官區" },
        { "Code" : "827", "Name" : "彌陀區" },
        { "Code" : "828", "Name" : "永安區" },
        { "Code" : "829", "Name" : "湖內區" },
        { "Code" : "830", "Name" : "鳳山區" },
        { "Code" : "831", "Name" : "大寮區" },
        { "Code" : "832", "Name" : "林園區" },
        { "Code" : "833", "Name" : "鳥松區" },
        { "Code" : "840", "Name" : "大樹區" },
        { "Code" : "842", "Name" : "旗山區" },
        { "Code" : "843", "Name" : "美濃區" },
        { "Code" : "844", "Name" : "六龜區" },
        { "Code" : "845", "Name" : "內門區" },
        { "Code" : "846", "Name" : "杉林區" },
        { "Code" : "847", "Name" : "甲仙區" },
        { "Code" : "848", "Name" : "桃源區" },
        { "Code" : "849", "Name" : "那瑪夏" },
        { "Code" : "851", "Name" : "茂林區" },
        { "Code" : "852", "Name" : "茄萣區" }
  ];

	constructor(fb: FormBuilder,
				private appService : AppService,
				private ngZone : NgZone){
          this.searchForm = fb.group({
            "area" : []
          });
	}
	searchLocation(searchForm) {
    console.log(searchForm);
		this.appService.searchLocation()
			.then((result) => {

        if(searchForm.area == null){
          this.locations = result;
        } else {
          this.locations_orig = result;
          this.locations = this.locations_orig.filter(function(item){
            return item.zipcode_ == searchForm.area;
          });
        }

        console.log(this.locations);
				this.ngZone.run(() => {
          			console.log("run");
        		});

			})
			.catch((error) => {
				console.log(error);
			});
	}
}
