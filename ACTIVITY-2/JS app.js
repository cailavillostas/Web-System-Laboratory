document.addEventListener("DOMContentLoaded", () => {
    const songList = document.getElementById("songList");
    const addButton = document.getElementById("add");
    const searchInput = document.getElementById("searchInput");
  
    // Add a new song when the user clicks "Add"
    addButton.addEventListener("click", (e) => {
      e.preventDefault();
      
      const songTitle = document.getElementById("songTitle").value.trim();
      const songArtist = document.getElementById("songArtist").value.trim();
  
      if (songTitle !== "" && songArtist !== "") {
        const newSong = document.createElement("li");
        newSong.className = "list-group-item d-flex justify-content-between align-items-center bg-warning text-dark";
        newSong.innerHTML = `
          <p>${songTitle}</p>
          <small class="d-block text-muted">${songArtist}</small>
          <span class="badge bg-danger btn-delete">Delete</span>
        `;
  
        songList.appendChild(newSong);
        addDeleteFunctionality(newSong);
        
        // Clear the input fields after adding the song
        document.getElementById("songTitle").value = '';
        document.getElementById("songArtist").value = '';
      }
    });
  
    // Function to add delete functionality to each song item
    const addDeleteFunctionality = (songItem) => {
      songItem.querySelector(".btn-delete").addEventListener("click", () => {
        songItem.remove();
      });
    };
  
    // Add delete functionality to existing songs
    document.querySelectorAll(".btn-delete").forEach(button => {
      button.addEventListener("click", function() {
        this.closest("li").remove();
      });
    });
  
    // Search function
    searchInput.addEventListener("input", () => {
      const filter = searchInput.value.toLowerCase();
      const songs = document.querySelectorAll("#songList li");
  
      songs.forEach(song => {
        const title = song.querySelector("p").textContent.toLowerCase();
        const artist = song.querySelector("small").textContent.toLowerCase();
  
        if (title.includes(filter) || artist.includes(filter)) {
          song.style.display = "";
        } else {
          song.style.display = "none";
        }
      });
    });
  });
  