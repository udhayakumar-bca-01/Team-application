// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  appUrl : "http://localhost:3000/",
  firebase: {
    projectId: 'attendancelog-3bfe1',
    appId: '1:659403870761:web:47907e0490a58f149f8238',
    storageBucket: 'attendancelog-3bfe1.appspot.com',
    apiKey: 'AIzaSyDxEnKCcVIm6gAiSTeZpr2l3gnx8s5qmlM',
    authDomain: 'attendancelog-3bfe1.firebaseapp.com',
    messagingSenderId: '659403870761',
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
