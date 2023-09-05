import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreComponent } from './pages/core/core.component';
import { NavigationComponent } from './components/core/navigation/navigation.component';
import { LoginWidgetComponent } from './components/widgets/user/login-widget/login-widget.component';


import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import {MatInputModule} from '@angular/material/input';

import { PrismaManagerModule } from '@ng-board/prisma-manager';


@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatInputModule,
  ],
  exports: [CoreComponent],
  declarations: [CoreComponent, NavigationComponent, LoginWidgetComponent],
})
export class BoardUiModule {}
