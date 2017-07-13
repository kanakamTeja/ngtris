# ngtris
Angular Tetris game

## Installation
To install this library, run:

```bash
$ npm install ngtris --save
```

## Usage
from your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import your library
import { NGTrisModule } from 'ngtris';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NGTrisModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

```xml
<!-- You can now use your library component in app.component.html -->
<ng-tris></ng-tris>
```

## License

MIT © [liuy97](liuy97@gmail.com)
