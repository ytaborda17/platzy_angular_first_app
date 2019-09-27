import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { PlayerService } from './player/shared/player.service';
import { TeamService } from './team/shared/team.service';
import { TeamTableComponent } from './team/table/team-table.component';
import { PlayerTableComponent } from './player/table/player-table.component';
import { PlayerDialogComponent } from './player/dialog/player-dialog/player-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    TeamTableComponent,
    PlayerTableComponent,
    PlayerDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AppRoutingModule
  ],
  providers: [PlayerService, TeamService],
  bootstrap: [AppComponent]
})
export class AppModule { }
