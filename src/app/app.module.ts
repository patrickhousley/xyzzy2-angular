import '../rx';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from './../environments/environment';
import { AppComponent } from './core/containers/app/app.container';
import { CoreModule } from './core/core.module';
import { LayoutEffects } from './core/effects/layout';
import { GameModule } from './game/game.module';
import { metaReducers, reducers } from './reducers';
import { SimplifiedRouterStateSerializer } from './shared/router-state-serializer';
import { SharedModule } from './shared/shared.module';
import {
  StoreRouterConnectingModule,
  RouterStateSerializer,
} from '@ngrx/router-store';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    RouterModule.forRoot(
      [
        { path: '', pathMatch: 'full', redirectTo: 'game' },
        {
          path: 'game',
          loadChildren: './game/game.module#GameModule'
        },
        { path: '**', redirectTo: 'game' }
      ],
      { useHash: true }
    ),
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule,
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    SharedModule,
    CoreModule.forRoot()
  ],
  providers: [
    { provide: RouterStateSerializer, useClass: SimplifiedRouterStateSerializer },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
