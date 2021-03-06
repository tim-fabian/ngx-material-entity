import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxMatEntityTableComponent } from './table.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { NgxMatEntityCreateDialogModule } from './create-dialog/create-entity-dialog.module';
import { NgxMatEntityEditDialogModule } from './edit-dialog/edit-entity-dialog.module';

@NgModule({
    declarations: [NgxMatEntityTableComponent],
    imports: [
        CommonModule,
        MatInputModule,
        FormsModule,
        MatFormFieldModule,
        MatCheckboxModule,
        MatTableModule,
        MatPaginatorModule,
        MatButtonModule,
        MatMenuModule,
        MatDialogModule,
        NgxMatEntityCreateDialogModule,
        NgxMatEntityEditDialogModule,
    ],
    exports: [NgxMatEntityTableComponent]
})
export class NgxMatEntityTableModule {}