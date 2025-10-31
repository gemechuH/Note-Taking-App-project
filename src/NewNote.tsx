import { NoteForm } from "./NoteForm";
import type { NoteData } from "./App";

type NewNoteProps = {
  onSubmit: (data: NoteData) => void;
};

const NewNote = ({ onSubmit }: NewNoteProps) => {
  return (
    <div>
      <h1>New Note</h1>
      <NoteForm onSubmit={onSubmit} />
    </div>
  );
};

export default NewNote;
