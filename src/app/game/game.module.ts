
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';

import { LobbyComponent } from './containers/lobby/lobby.container';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', redirectTo: 'lobby' },
      { path: 'lobby', component: LobbyComponent }
    ]),

    // /**
    //  * StoreModule.forFeature is used for composing state
    //  * from feature modules. These modules can be loaded
    //  * eagerly or lazily and will be dynamically added to
    //  * the existing state.
    //  */
    // StoreModule.forFeature('books', reducers),

    // /**
    //  * Effects.forFeature is used to register effects
    //  * from feature modules. Effects can be loaded
    //  * eagerly or lazily and will be started immediately.
    //  *
    //  * All Effects will only be instantiated once regardless of
    //  * whether they are registered once or multiple times.
    //  */
    // EffectsModule.forFeature([BookEffects, CollectionEffects]),
  ],
  declarations: [
    LobbyComponent
  ]
  // providers: [BookExistsGuard],
})
export class GameModule {}
