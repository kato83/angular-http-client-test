# AngularHttpClientTest

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.9.

Angular の `HttpClient` を使用するとAPIのモックとテストがとても楽に感じたのでそれを共有するためのサンプルリポジトリ。

## Usage

```sh
git clone https://github.com/kato83/angular-http-client-test.git
cd angular-http-client-test
npm i
npm run [start|test|ng|build|watch]
```

## 蛇足

JS のグローバル関数の `fetch` だったり HTTP 通信するようなパッケージの利用（例 `axios` や `superagent` など）だと何が問題なの？

![](./img01.png)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
