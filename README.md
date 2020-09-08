# Recipe Block

A block for displaying recipes on your WordPress site 🥐 🍲 🥘 🍪

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

<img src="https://ryelle.codes/wp-content/uploads/2019/01/recipe-in-widgets-1.png" alt="Screenshot block inserter: new Recipe icon in Widgets section" width="383px" />

Adding this will insert a template with an image, heading, recipe information (serving size, time, duration), and a section for ingredients and directions. You can add and remove blocks from this container.

When in the recipe block, you'll be able to add extra Recipe Ingredients, Recipe Directions, and Recipe Meta blocks.

<img src="https://ryelle.codes/wp-content/uploads/2019/01/sub-blocks.png" alt="Screenshot of block inserter: new recipe section blocks in Recipe section" width="383px" />

_Note:_ This block doesn't add schema or structured content to your site (the magic used by google to format recipes in search results and for voice assistants). That's probably not in scope for me as this is a side-project and fulfills my use case, but PRs are welcome 😁

-------------

## Development

There are other npm scripts that will come in handy:

- `npm run start` – Run the build process, and keep watching for any file changes.
- `npm run lint` – Run the JS linter to make sure all code is following code standards. This will also be run on each PR automatically, so it might save a step to run it yourself before making a PR.
