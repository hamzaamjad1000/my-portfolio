// Handle new recommendation submission
document.getElementById("recommendationForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const text = document.getElementById("recommendationText").value;
    const name = document.getElementById("recommenderName").value;
  
    const newDiv = document.createElement("div");
    newDiv.classList.add("recommendation");
  
    const para = document.createElement("p");
    para.innerText = `"${text}"`;
  
    const author = document.createElement("h4");
    author.innerText = `– ${name}`;
  
    newDiv.appendChild(para);
    newDiv.appendChild(author);
  
    document.querySelector(".recommendation-container").appendChild(newDiv);
  
    // Clear the form
    document.getElementById("recommendationForm").reset();
  
    // Show confirmation popup
    alert("Thank you for submitting a recommendation!");
  });
  