---
id: qs-04-symbols
title: Symbols
sidebar_label: Symbols
---

## Where we're at

So you've used and nested a couple of components. You've modified the content of text and styled the block.

### Whats next?

Shift is an incredibly powerful platform in that it not only lets you create your UI, but allows you to build an entire sophisticated design system. Lets go back to the components tree view by clicking on  <img style="display: inline-block; height: 2rem" src="/docs/docs/assets/add-component-btn.png" /> . Then right-click on your Block component in the tree and select 'Create Component' and name it.

<details open>
<summary>Fig 3</summary>
<img style='padding: 20px' src="/docs/docs/assets/create-symbol.gif" />
</details>

Notice, in the Symbols pane, we now have your newly created Symbol in addition to App. In the App canvas, the tree of components has been replaced with the symbol as well. Visually nothing has changed however. Go ahead and select your new symbol in the symbols pane. 

Your canvas is now showing the canvas for that symbol. Symbol trees and canvases are unique in certain ways. You are allowed to bring multiple instances of the symbols into these trees and their respective canvases. This allows you to view your component in multiple states, add documentation, provided visual context (what good is designing a full width button thats expected to go in 240px container, when it's streching across the whole page). At the end of the day, only the contents inside the symbol are 'exported' out (as seen in App, where our new component is beings used.)

## Variants

Select the top block in your Symbol. (It will be purple). Head over to the component editing tab and click 'Add Variant'. Let's name this Variant 'warning'.

With the 'warning' variant selected, go ahead and change your styling.

Switching back to the App symbol, note that the Symbol you made, doesn't reflect the changes you just made. However, if you pick the symbol in the tree and head to the Component Editor view, notice you are able to select a variant now.

In this way, like-components can be sensibly grouped.


