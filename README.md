1. ng new ecommerce-frontend
2. cd ecommerce-frontend
3. ng add @angular/material
   Step 2: Folder Structure

Step 3: Implement Core Module

1. Generate the core module:
   ng g m core
2. Create an AuthInterceptor for JWT authentication:
   ng g interceptor core/interceptors/auth
   Implement the AuthInterceptor:

Step 4: Run the Tests

1. Install Jest and Angular testing utilities:
   npm install --save-dev jest @types/jest jest-preset-angular
   npm install --save-dev @angular-builders/jest jest jest-preset-angular
   npm install --save-dev @types/jest
   Update angular.json to use Jest:
   "test": {
   "builder": "@angular-devkit/build-angular:karma",
   "options": {
   "main": "src/test.ts",
   "polyfills": "src/polyfills.ts",
   "tsConfig": "tsconfig.spec.json",
   "karmaConfig": "karma.conf.js",
   "scripts": [],
   "styles": [],
   "assets": []
   }
   }

1. Replace the test section with:
   "test": {
   "builder": "@angular-builders/jest:run",
   "options": {
   "configPath": "./jest.config.js"
   }
   }
1. Create a jest.config.js file:
   module.exports = {
   preset: 'jest-preset-angular',
   setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
   testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/dist/'],
   globals: {
   'ts-jest': {
   tsconfig: '<rootDir>/tsconfig.spec.json',
   },
   },
   };
1. Create a setup-jest.ts file:
   import 'jest-preset-angular';
   import './jest-global-mocks';
1. Run the tests:
   npm test
