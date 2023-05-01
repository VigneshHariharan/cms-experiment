# Medium clone but self hosting - experiment for my learning

This is an experiment to see whether I can build something like medium that has a notion like editor and how publications can self host it and authorize people to write posts

## Features

- [ ] Editor basic setup with a plugin model
- [ ] Headings (h1,h2,h3) plugin
- [ ] Edit option for these
- [ ] Paragraph with bold, italic, underline
- [ ] Spacing in editor
- [ ] Images
- [ ] blockquote
- [ ] Dictate
- [ ] Home page to show all the posts created
- [ ] Rate limit or make it hard for people to spam
- [ ] Render the post in such a way that it is performant on the client
- [ ] Using themes

## Design

### User Interface

Pages:

- Home page where posts are available
- Editor page - with draft, preview and publish model
- Post page

### Editor

Notion editor behaviours are everything written in a block will have it's own style, If the style is changed then the entire format of the block changes. Some limitations with them are having an image and a text side-by-side.

### Self hosting

- [ ] Hosting instructions
- [ ] Storage for posts
- [ ] Image storage

### Backend

- [ ] API route for getting list of posts
- [ ] CREATE, PUT for storing posts with draft or publish options
- [ ] Authorization on who can write posts
- [ ] How to upload images on publisher's storage

### Task list with prioritization

- [ ] Design the editor, store it in a separate module - make it easy to use, flexible, platform independant (like using in react native, electron or compatible to migrate to another storage)
- [ ] Implement this editor
- [ ] Rethink decisions made, test whether it solves the problems
- [ ] Refine the code for editor
- [ ] Make a wireframe for UI that looks clean on mobile, ipad, desktop
- [ ] How to store details which database to use?
- [ ] Which ORM or tool to use for writing queries?
- [ ] Create schema design for posts and users
- [ ] CRUD API for users
- [ ] CRUD API for posts
- [ ] Test these API's
- [ ] Document them and try to do it in github itself
- [ ] Create pages for the frontend
- [ ] Implement the homepage with test data
- [ ] Implement the design for editor page
- [ ] Implement the post page
- [ ] Refine the design all the pages
