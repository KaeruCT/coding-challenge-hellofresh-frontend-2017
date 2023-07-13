# KaeruCT-frontend-test

## Build instructions

You will need:

* node 8.9.4 or higher
* npm 5.6.0 or higher

First, install the dependencies:

```
$ npm install
```

Then, build the project:

```
$ npm run build
```

Finally, start the server

```
$ npm run serve
```

You can also run the project in dev mode (with hot reloading):

```
$ npm run dev
```

## Running tests

To run the tests, just use NPM:

```
$ npm test
```

## Architecture overview

I think I followed a pretty standard architecture for a small React project.

A small explanation follows for each directory:

* `server`: Contains a very simple express server that's used only to serve
  the static files and the `recipes.json` file as an endpoint.

* `components`: "Dumb" React components. These are reusable components
  that do only one thing.

* `containers`: These are React components that handle the state. There's only one
  because this app is very simple, but there could be one for each part of the state
  in a larger app. However, in a larger app I would inclined to use redux instead.

* `pages`: These are React components that represent individual screens. They're
  in charge of requesting state and rendering simpler components by passing props to them.

* `services`: This is a service layer that is supposed to interact with the server.
  It could be refactored to call APIs without having to change the code that uses it.

* `styles`: This contains style variables and some common styles that are used
  throughout the app. However, most of the style code is in the components themselves.

## CSS

I recall reading somewhere that you guys use aphrodite for your
css-in-js shenanigans so I decided to give it a spin. I really like it!

## Tests

I used jest and enzyme for the tests. I didn't test everything but I did try to
have high coverage. You can see the coverage report if you run `npm test`.

## See the app running

You can go to [kaeruct-hf-test.herokuapp.com](https://kaeruct-hf-test.herokuapp.com/)
to see the app in action.

I must warn you though: it's hosted on a free plan, it might take a while to spin up.

## Additional notes/comments

* I was going to load the recipes from the API, but after an initial attempt, I
  noticed the shape of the data was not exactly the same and I could not find a
  thumbnail field in the data -- so I decided to keep using the `recipes.json` file.

* The code is formatted with [prettier](https://prettier.io/), I love not having
  to worry about code formatting anymore.
