# Editor design
I want to be able to show content on any type of application when it is written once
Use cases: Showing the content in react and react native application faster

I want to choose a format for the posts to render the structure efficiently in the frontend
A big part of showing content is styling Hence I have to make it customisable.

 [XSS cheat sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html)

Requirements:
Task it hand - Do it faster, complete
Block level editor
Each block should contain element
Inline elements should be pasted anywhere

create blocks, insert blocks



Why would someone read articles when Chat gpt can tell us?

1. For exploring, to bring in new ideas

Ideas to make it unique:
1. Block anywhere, create block and style it as liked
2. multiple modes of writing, write it fast and edit for more communication
3. Make versions, compare
4. Take research notes


Problems:
1. How do I make change to the writer schema? should I store it in a state?
2. How to a create a new block
3. Update the content in a block
4. Store the updated content in a block
5. How to add inline elements? Should i do dangerously set inner html?

1. How do I make change to the writer schema? should I store it in a state?
- Choose to do simple json schema with innerHTML on all of them
To create a block insert after an array
Once there is a backspace in an empty block delete it

For the issue of going to new block on enter, create a new block then just move the cursor there