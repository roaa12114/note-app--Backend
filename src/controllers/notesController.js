import Note from "../models/Note.js";

export async function getAllNotes(req, res) {
   try{
      const notes = await Note.find().sort({createdAt:-1}); 
      res.status(200).json(notes)
   }catch(error){
      console.error("Error in getAllNotes controller", error);
       res.status(500).json({message:"Internal server error"});
   }
}

//create note
export async  function createNote(req, res)  {
    try {
      const {title, content} = req.body
      const note = new Note({title, content});

      const savedNote = await note.save();
      res.status(201).json(savedNote)
    } catch (error) {
      console.error("Error in getAllNotes controller", error);
       res.status(500).json({message:"Internal server error"});
    }
}

//update note
export async function updateNote(req, res) {
  try {
        const {title, content} = req.body
        const updatedNote = await Note.findByIdAndUpdate((req.params.id), {title, content}, {new: true});
        if (!updateNote) return res.status(404).json({message:"Note not found"});
        res.status(201).json(updateNote)
  } catch (error) {
   console.error("Error in getAllNotes controller", error);
       res.status(500).json({message:"error in update note"});
  }
}

//Delet note
export async function deleteNote(req, res) {
   try {
      const deletedNote =await Note.findByIdAndDelete(req.params.id)
      if (!deletedNote) return res.status(404).json({message: "Note not found"});
      res.json({message:"Note deleted successfully"});
   } catch (error) {
      console.error("Error in getAllNotes controller", error);
       res.status(500).json({message:"error in update note"});
   }
}

//getNoteById

export async function getNoteById(req, res) {
   try {
      const note = await Note.findById(req.params.id)
      if (!note) return res.status(404).json({message: "Note not found"})
         res.status(200).json(note)
   } catch (error) {
      console.error("Error in getAllNotes controller", error);
       res.status(500).json({message:"error in update note"});
   }

}