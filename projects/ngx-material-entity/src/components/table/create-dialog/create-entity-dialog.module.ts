import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxMatEntityCreateDialogComponent } from './create-entity-dialog.component';
import { NgxMatEntityInputModule } from '../../input/input.module';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
    declarations: [NgxMatEntityCreateDialogComponent],
    imports: [
        CommonModule,
        NgxMatEntityInputModule,
        MatDialogModule,
        FormsModule,
        MatButtonModule
    ],
    exports: [NgxMatEntityCreateDialogComponent]
})
export class NgxMatEntityCreateDialogModule {}