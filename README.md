This is a note-taking web app that allows user to create, delete and store notes on the browser.

### Demo Link

Hosted on Firebase: (https://sampleproject-42ae9.web.app)

### Features

- [x] The user should be able to create a new note.
- [x] The user should be able to edit and delete a note.
- [x] The user should be able to navigate through multiple notes.
- [x] Search function to find notes.
- [x] Create notes in different categories.
- [ ] Move notes trough categories.
- [x] Markdown editor.
- [x] Using localStorage to store notes.

### File Structure

The structure is such that files which are rendered on the same screens, they are in the same folder.
The assets folder is under the src folder but outside the components folder.

```
|   |   ├── components
|   |   |   ├── sidebar
|   |   |   |   ├── folder.js
|   |   |   |   ├── note.js
|   |   |   |   ├── searchbar.js
|   |   |   |   ├── sidebar-header.js
|   |   |   |   ├── sidebar.js
|   |   |   ├── main.js
|   |   ├── assets
|   |   |   ├── add-document.png
|   |   |   ├── add-folder.png
|   |   |   ├── doc.png
|   |   |   ├── folder.png
|   |   ├── App.js
|   |   ├── App.css

```

### Architecture and Package Usage

- The page is built as reusable component-based architecture.
- For styling, I have used mostly plain CSS and `react-boostrap` ext package for some components
- For searching notes, I have used an external package, `react-bootstrap-typahead` (ericgio.github.io/react-bootstrap-typeahead/). I have used the `Typeahead` component, whereby I give the search query and it filters the list of notes based on the query. This component also allows the user to provide the properties to filter on, which for now I have added the note's `title` and `body` but more can be added.
- For markdown editor, I have used another external package, `react-markdown` (remarkjs.github.io/react-markdown/). This package supports markdown syntax and then show the notes as markdown.
- Lastly, I have used `react-uuid` package to help generate random unique identifer where required

### Hosting

I have built and deployed it on Firebase Hosting. Demo link: (https://sampleproject-42ae9.web.app)

Below are the built in steps to run and build the app as provided by the create-react-app cli

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

(Apologies for not having any tests, I couldn't figure out how to write Jest for React since I didn't use any ext backend)
Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
