import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-list',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
	title = `我是一个列表`

	constructor() { }

	ngOnInit(): void {
	}

}
