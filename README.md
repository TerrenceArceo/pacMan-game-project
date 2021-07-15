# pacMan-game-project
My very simple MVP pacman game using CSS, HTML, and Javascript.

## Overview
I was very lucky to have been given the oppoprtunity to build this game from scratch from the course I took online,
becuase this is one of my childhood favorite arcade game, growing up.

This is the second project I had built as I progress through the Scrimba Front-end career Path, 
implementing just Vanilla Javascript, CSS, and a little bit of HTML.

## challenges & bugs 
### I ran into a little bit of problem and had to change some of the original code. e.g.
- On line 297's if-statement, I had finished all the dots and scored 1000+, but the game still wasn't ending.
having to change from if(score === 400) to if(score === 400 || score > 400) solved that problem.

- On line 254 the original line being "if the ghost' index has a class of pacman" which will depend on the movement of the ghosts-
instead of pacman's movement, weather that ghost will be eaten or not. I changed the line to 
"pacmanCurrentIndex.classlist.contains('ghost, 'scared-ghost)
this solves the problem and it now depends on pacman's movement weather the ghost will be eaten or not.

## How can make this game even better tho?
- If I can probably make blinky (one of the ghosts) chase pacman around the map. I still haven't figure that out yet.


https://scrimba.com/
