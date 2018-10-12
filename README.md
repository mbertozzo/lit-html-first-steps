# lit-html first steps

This is a learning repo traking some experiments done with lit-html.
The code is organized following the boilerplate for Bitrock frontend projects rules. 

### Installation
Download the project or clone the repo and install the dependecies with

```bash
$ yarn install
```

In order to be able to fetch data from the NewsApi service used to provide the news feed you'll need to register [to the site](https://newsapi.org/) and get your **api key**. You can then add it to the news link in the file

```bash
src/libs/app.js
```

### Available NPM tasks
Start the project in development mode (live reload)
```bash
$ yarn start
```

Create a static build in the `./dist` folder
```bash
$ yarn build
```

Run the tests
```bash
$ yarn test
```

Run the build action and deploy to GitHub pages 
```bash
$ yarn deploy
```


### License
This code is published under the [MIT license](LICENSE).
Boilerplate developed by Bitrock UI Engineering team, also released under the [MIT license](LICENSE).