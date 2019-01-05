# Recipe Block

Gutenberg block for displaying recipes on your site 🥐 🍲 🥘 🍪

![Screenshot of the recipe block](https://ryelle.codes/wp-content/uploads/2019/01/Screen-Shot-2019-01-05-at-13.17.23.png)

-------------

## Installation

1. For **a ready-to-use version**, download the zip on the [release tab](#).
2. Upload that to your WP site by going to Plugins > Add New, then click Upload Plugin in the header to reveal the file upload.
3. Activate the plugin 🎉
4. You can skip to the Usage section.

Alternately, if you want to hack on the plugin (feel free!), you'll want to clone this repo, install dependencies, and build the files. You will need [node & npm](https://nodejs.org/en/) installed.

```
$ git clone git@github.com:ryelle/rmb-recipe-block.git
$ cd rmb-recipe-block
$ npm install
$ npm run build
```

Now you can activate the plugin 🎉

## Usage

You now have "Recipe" block in the block inserter.

<img src="https://ryelle.codes/wp-content/uploads/2019/01/recipe-in-widgets-1.png" alt="Screenshot of Recipe icon in Widgets section" width="383px" />

Adding this will insert a template with an image, heading, recipe information (serving size, time, duration), and a section for ingredients and directions. You can add and remove blocks from this container.

When in the recipe block, you'll be able to add extra Recipe Ingredients, Recipe Directions, and Recipe Meta blocks.

-------------

## Development

There are other npm scripts that will come in handy:

- `npm run start` – Run the build process, and keep watching for any file changes.
- `npm run lint` – Run the JS linter to make sure all code is following code standards.
