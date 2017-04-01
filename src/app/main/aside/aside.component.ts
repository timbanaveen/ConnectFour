import { Component, Input } from '@angular/core';

import { AsideInfoModel } from '../../models/asideinfomodel';

@Component({
    selector: 'app-aside',
    templateUrl: './aside.component.html',
    styleUrls: ['./aside.component.css']
})
export class AsideComponent {
    @Input() data: AsideInfoModel;
}
