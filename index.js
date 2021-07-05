const grid = document.getElementById('grid')
const width = 28
let scoreDisplay = document.querySelector('#score');
let score = 0;
let squares = []
let pacmanCurrentIndex = 490
let square;


//28 * 28 = 784
  // 0 - pac-dots
  // 1 - wall
  // 2 - ghost-lair
  // 3 - power-pellet
  // 4 - empty
  // 5 - tree leaves

const layout = [
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,3,1,5,5,1,0,1,5,5,5,1,0,1,1,0,1,5,5,5,1,0,1,5,5,1,3,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,1,5,5,1,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,1,1,1,1,0,1,5,5,5,5,1,1,1,1,5,5,5,5,1,0,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,
    1,5,5,5,5,1,0,1,1,4,4,4,4,4,4,4,4,4,4,1,1,0,1,5,5,5,5,1,
    1,5,5,5,5,1,0,1,1,4,1,1,1,2,2,1,1,1,4,1,1,0,1,5,5,5,5,1,
    1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
    4,4,4,4,4,4,0,0,0,4,1,2,2,2,2,2,2,1,4,0,0,0,4,4,4,4,4,4,
    1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
    1,5,5,5,5,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,5,5,5,5,1,
    1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
    1,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,1,5,5,1,0,1,5,5,5,1,0,1,1,0,1,5,5,5,1,0,1,5,5,1,0,1,
    1,3,0,0,5,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,5,0,0,3,1,
    1,1,1,0,5,1,0,1,1,0,1,5,5,5,5,5,5,1,0,1,1,0,1,5,0,1,1,1,
    1,1,1,0,5,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,5,0,1,1,1,
    1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,
    1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
    1,0,1,5,5,5,5,5,5,5,5,1,0,1,1,0,1,5,5,5,5,5,5,5,5,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1 
]

function createGrid() {
    for (let i = 0; i < layout.length; i++) {
        //creating each square as div
        square = document.createElement('div')
        
        //append each div inside our grid to create the squares
        grid.appendChild(square)
        
        //pushing each div inside our array squares
        squares.push(square)
        
        
        if (layout[i] === 0) {
            squares[i].classList.add('pac-dots')
        } else if (layout[i] === 1) {
            squares[i].classList.add('wall')
        } else if (layout[i] === 5) {
            squares[i].classList.add('tree-leaves')
        } else if (layout[i] === 3) {
            squares[i].classList.add('power-pellet')
        } else if (layout[i] === 2) {
            squares[i].classList.add('ghost-lair')
        }
    }
}
createGrid()

squares[pacmanCurrentIndex].classList.add('pacman')


function control(e) {
    switch(e.keyCode) {
        case 40:
            //if direction does not have class of tree-leaves & wall
            if (
                !squares[pacmanCurrentIndex + width].classList.contains('wall') &&
                !squares[pacmanCurrentIndex + width].classList.contains('tree-leaves') &&
                !squares[pacmanCurrentIndex + width].classList.contains('ghost-lair')
               ) 
            {
                //remove class pacman
                squares[pacmanCurrentIndex].classList.remove('pacman')
                
                //add the direction we're going
                squares[pacmanCurrentIndex += width]
                
                //add class pacman back
                squares[pacmanCurrentIndex].classList.add('pacman')
            }
            break
        case 39:
            if (
                !squares[pacmanCurrentIndex + 1].classList.contains('wall') &&
                !squares[pacmanCurrentIndex + 1].classList.contains('tree-leaves')
               ) 
            {
                squares[pacmanCurrentIndex].classList.remove('pacman')
                squares[pacmanCurrentIndex += 1] 
                squares[pacmanCurrentIndex].classList.add('pacman')
            } else if (pacmanCurrentIndex === 391) {
                squares[pacmanCurrentIndex].classList.remove('pacman')
                pacmanCurrentIndex = 364
                squares[pacmanCurrentIndex].classList.add('pacman')
            }
            break
        case 38:
            if (
                !squares[pacmanCurrentIndex - width].classList.contains('wall') &&
                !squares[pacmanCurrentIndex - width].classList.contains('tree-leaves')
               ) 
            {
                squares[pacmanCurrentIndex].classList.remove('pacman')
                squares[pacmanCurrentIndex -= width]
                squares[pacmanCurrentIndex].classList.add('pacman')
            }
            break
        case 37:
            if (
                !squares[pacmanCurrentIndex - 1].classList.contains('wall') &&
                !squares[pacmanCurrentIndex - 1].classList.contains('tree-leaves')
               ) 
            {
                squares[pacmanCurrentIndex].classList.remove('pacman')
                squares[pacmanCurrentIndex -= 1]
                squares[pacmanCurrentIndex].classList.add('pacman')
            } else if (pacmanCurrentIndex === 364) {
                squares[pacmanCurrentIndex].classList.remove('pacman')
                pacmanCurrentIndex = 391
                squares[pacmanCurrentIndex].classList.add('pacman')
            }
            break
    }
    pacdotsEaten()
    powerPelletsEaten()
    winner()
    gameOver()
}
document.addEventListener('keyup', control)


function pacdotsEaten() {
    //if pacman's current index has a class of pad-dots
    if (squares[pacmanCurrentIndex].classList.contains('pac-dots')) {
        
        //remove the pac-dots class
        squares[pacmanCurrentIndex].classList.remove('pac-dots')
        
        //add the score
        score++
        
        //display the score
        scoreDisplay.textContent = score
    }
}

//add the ghosts
class Ghost {
    constructor(className, startIndex, speed) {
        this.className = className
        this.startIndex = startIndex
        this.speed = speed
        this.timerId = NaN
        this.currentIndex = startIndex
        this.isScared = false
    }
}

const ghosts = [
    new Ghost('lorenzo', 348, 150),
    new Ghost('jon', 376, 200),
    new Ghost('tin', 351, 250),
    new Ghost('gwen', 379, 300)
]

ghosts.forEach(ghost => {
    squares[ghost.startIndex].classList.add(ghost.className)
    squares[ghost.startIndex].classList.add('ghost')                    
})

ghosts.forEach(ghost => moveGhost(ghost))

//eating power pellet
function powerPelletsEaten() {
    //if pacman's current index containes power-pellet
    if (squares[pacmanCurrentIndex].classList.contains('power-pellet')) {
        
        //get rid of the power-pellet class
        squares[pacmanCurrentIndex].classList.remove('power-pellet')
        
        //add 10 to the score
        score += 10
        
        //show on the scoreboard
        scoreDisplay.textContent = score
        
        //change to isScared ghost
        ghosts.forEach(ghost => ghost.isScared = true)
        
        setTimeout(function(){
            ghosts.forEach(ghost => ghost.isScared = false)
        }, 10000)
    } 
}

function getCoordinates(index) {
    return [index % width, Math.floor(index / width)]
}

//make our ghosts move around the grid
function moveGhost(ghost) {
    //indentify the directions
    const directions = [-width, +width, -1, +1];
    let direction = directions[Math.floor(Math.random() * directions.length)]
    
    
    
    ghost.timerId = setInterval(function(){
        //if the ghost direction does not have a class of wall and tree leaves
        
        if (
            !squares[ghost.currentIndex + direction].classList.contains('wall') &&
            !squares[ghost.currentIndex + direction].classList.contains('tree-leaves') &&
            !squares[ghost.currentIndex + direction].classList.contains('ghost')
           ) 
        {
            //remove class of classname
            squares[ghost.currentIndex].classList.remove(ghost.className)
            squares[ghost.currentIndex].classList.remove('ghost', 'scared-ghost')
            
            //add direction to the ghost
            ghost.currentIndex += direction
            
            //add class of classname
            squares[ghost.currentIndex].classList.add(ghost.className)
            squares[ghost.currentIndex].classList.add('ghost')
        } direction = directions[Math.floor(Math.random() * directions.length)]
        
        //making the ghosts look scared
        if (ghost.isScared) {
            //change the color of the ghost
            squares[ghost.currentIndex].classList.add('scared-ghost')
        }
        
        //if the ghosts are currently scared the pacman is on it
        // *******************     fixed code     ************************** //
        if (ghost.isScared && squares[pacmanCurrentIndex].classList.contains('ghost', 'scared-ghost', ghost.className)) {
            //remove the ghost
            squares[ghost.currentIndex].classList.remove('scared-ghost', ghost.className, 'ghost')
            
            //send it back to its startIndex
            ghost.currentIndex = ghost.startIndex
            
            //add 100 to the score
            score += 100
            
            //show score on the scoreboard
            scoreDisplay.textContent = score
            
            //add ghost class again
            squares[ghost.currentIndex].classList.add(ghost.className, 'ghost')
        }
        winner()
        gameOver()
        
    }, ghost.speed)
}
moveGhost()


function gameOver() {
    //if ghost aren't scared and pacman is on it, you're done, son
    if (
        squares[pacmanCurrentIndex].classList.contains('ghost') &&
        !squares[pacmanCurrentIndex].classList.contains('scared-ghost')
       ) {
        //stop the ghost's movement
        ghosts.forEach(ghost => clearInterval(ghost.timerId))
        
        //change score to Game over: YOU LOSE!
        score = 0;
        scoreDisplay.textContent = "You LOSE!"
        
        //remove event listener
        document.removeEventListener('keyup', control)
    }
}

function winner() {
    if (score === 400) {
        ghosts.forEach(ghost => clearInterval(ghost.timerId))
        
        document.removeEventListener('keyup', control)
        
        
        scoreDisplay.innerHTML = "You WIN!"
    }
}
        
        
        
        
        
        
        
        