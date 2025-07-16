const etchContainer = document.querySelector(".etch-container")
function createGrid(size)
{
    if(size == 16)
    {
        document.documentElement.style.setProperty('--pixel-size', '0.75rem');
    }
    else if(size == 24)
    {
        document.documentElement.style.setProperty('--pixel-size', '0.5rem');
    }
    else if(size == 32)
    {
        document.documentElement.style.setProperty('--pixel-size', '0.375rem');
    }
    for (let i = 0; i < size; i++)
    {
        const artContain = document.createElement("div");
        artContain.classList.add("art-container");
        for (let j = 0; j < size; j++)
        {
            const pixelSquare = document.createElement("div");
            pixelSquare.classList.add("pixel-box");
            artContain.appendChild(pixelSquare);
        }
        etchContainer.appendChild(artContain);
    }
    // Colour Changes

    const artContainer = document.querySelector(".art-container");
    const pixelBox = document.querySelectorAll(".pixel-box");

    pixelBox.forEach(function(box)
    {
        box.addEventListener("mouseover", changeColor);
        box.addEventListener("mousedown", changeColor);
    });
};

createGrid(16);

// Tracking Users Mouse State
let mouseDown = false;

document.addEventListener("mousedown", function()
{
    mouseDown = true;
});

document.addEventListener("mouseup", function()
{
    mouseDown = false;
});

function changeColor(event)
{
    if(mouseDown == true || event.type == "mousedown")
    {
        let selectedBox = event.target;
        selectedBox.style.backgroundColor = "black";
    }
}

// Program Button to Clear Current Work

const clearButton = document.querySelector(".clear-button");
clearButton.addEventListener("click", clearBoard)

function clearBoard(event)
{
    const pixelBox = document.querySelectorAll(".pixel-box");
    pixelBox.forEach(function (box)
    {
        box.style.backgroundColor = "white";
    });
};

// Size Change Buttons
const smallButton = document.querySelector(".small-button");
const mediumButton = document.querySelector(".medium-button");
const largeButton = document.querySelector(".large-button");
smallButton.addEventListener("click", function(){
    recreateGrid(16);
});
mediumButton.addEventListener("click", function(){
    recreateGrid(24);
});
largeButton.addEventListener("click", function(){
    recreateGrid(32);
});

// Function to reset grid size
function recreateGrid(size)
{
    console.log(size);
    const artContain = document.querySelectorAll(".art-container");
    artContain.forEach(function(art)
    {
        art.remove();
    });
    createGrid(size);
}