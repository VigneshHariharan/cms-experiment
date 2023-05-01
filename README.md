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

