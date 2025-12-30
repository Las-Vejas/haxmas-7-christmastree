//getting date  
const date = new Date();  
const days = date.getDate();  
const month = date.getMonth() + 1;  
const year = date.getFullYear();  
  
//list of all the images in img/ornaments and a list of emojis the top decoration thing can be  
const ornament = ["1.png","2.jpg","3.jpg","4.jpeg","5.jpg","6.webp"];  
const stars = ["⭐", "💫", "💖", "🎄", "🏴‍☠️", "👾"];  
  
function changeStar(){  
    let randomIndex = Math.floor(Math.random() * 6 );  
    document.getElementById("star").innerText = stars[randomIndex];  
}  
  
//checks if the HTML elements have loaded before doing anything  
document.addEventListener('DOMContentLoaded', () => {  
    //sets the elements with the IDs to variables for easy access!  
    const decorations = document.getElementById("decorations");  
    const dateText = document.getElementById("date");  
    const star = document.getElementById("star");  
  
    console.log("Script loaded!");
    console.log("Elements found:", {decorations, dateText, star});
    
    //sets the text inside dateText to DD/MM/YY (the superior format)  
    dateText.innerText = days + "/" + month + "/" + year;  
    
    // Initialize star
    changeStar();
  
    // Add all ornaments with random positioning in a tree shape
    for(let i = 0; i < ornament.length; i++){  
        decorations.innerHTML += `<img src="assets/ornaments/${ornament[i]}" class="ornament" id="ornament${i}" alt="ornament">`;  
        const ornamentElement = document.getElementById("ornament"+i);  
        
        // Position ornaments lower on the tree
        const verticalPos = Math.random() * 50 + 40; // 40-90% from top (lower on tree)
        const treeWidth = (verticalPos / 100) * 60 + 20; // Width increases as we go down
        const horizontalCenter = 50;
        const horizontalOffset = (Math.random() - 0.5) * treeWidth;
        
        ornamentElement.style.left = (horizontalCenter + horizontalOffset) + "%";  
        ornamentElement.style.top = verticalPos + "%";  
    }
  
    star.addEventListener('click', changeStar);  
})