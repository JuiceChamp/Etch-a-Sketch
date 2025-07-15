const etchContainer = document.querySelector(".etch-container")
function createGrid(size)
{
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
};

createGrid(16);

const artContainer = document.querySelector(".art-container");

const pixelBox = document.querySelectorAll(".pixel-box");

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

// Colour Changes

pixelBox.forEach(function(box)
{
    box.addEventListener("mouseover", changeColor);
    box.addEventListener("mousedown", changeColor);
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

// Function to reset grid size
function recreateGrid(size)
{
    console.log(size);
    const artContain = document.querySelectorAll(".art-container");
    artContain.forEach(function(art)
    {
        art.remove();
    });
}