$(document).ready(function () {

    //all notes get pushed into here
    let notes = [];

    //the value of the notes in the editor
    let currentIndex = null;

    $(".back-button").hide();
    $(".update-button").hide();
    $(".delete-button").hide();

    $(document).on("click", ".delete-button", function() {
        notes.splice(currentIndex, 1);
        renderNotes(); 
        clearValue(); 
    })
     
    function renderNotes() {
        $(".items").html("");
        for (var i = 0; i < notes.length; i++) {
            $(".items").append('<li><textarea class="items-input" data-index="' + i + '">' + notes[i].title + "\n" + notes[i].content.slice(0, 11) + '...</textarea></li>')
        }
    }
    renderNotes();

    function renderNotesEditor() {
        if (currentIndex) {
            notes[currentIndex];
        }
        renderNotesEditor();
    }
    
 //notes
    $(".save-note-button").on("click", function (event) {
        event.preventDefault();

        var title = $("#title-name").val();
        var content = $("#write-notes").val();
     
        const note = {
            title,
            content
        };
     
            notes.push(note);
            renderNotes();
            clearValue();  

    })
   
    //Title and Name show up again after being clicked
    $(document).on("click", ".items-input", function () {
      
        const index = $(this).data("index");
        currentIndex = index;       
        $("#title-name").val(notes[index].title);
        $("#write-notes").val(notes[index].content);
        console.log(notes[index].content)
        $(".delete-button").show();

       renderNotesEditor();
    });
});
    
    function clearValue() {
        $("#title-name").val("");
        $("#write-notes").val("");
    }

  
  
