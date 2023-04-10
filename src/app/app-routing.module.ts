import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

const routes: Routes = [
    {path: "primeira-pag"}
]


@NgModule({
    declarations: [],
    imports: [
        RouterModule.forRoot(routes)
    ]
})

export class AppRoutingModule{}