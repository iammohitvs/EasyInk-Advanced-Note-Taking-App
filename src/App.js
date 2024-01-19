import SideNav from "./components/SideNav";
import NotesWindow from "./components/NotesWindow";
import TagsWindow from "./components/TagsWindow";
import Modal from "./components/Modal";
import NewNoteForm from "./components/NewNoteForm";

import { createContext, useState } from "react";
import useLocalStorage from "./hooks/useLocalStorage";

import { notesSeed } from "./scritps/constants";

export const NotesContext = createContext();

function App() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [notes, setNotes] = useLocalStorage("notes", notesSeed);
    const [notesWindow, setNotesWindow] = useState(true);
    const [tagsWindow, setTagsWindow] = useState(false);

    let notesValue = { notes, setNotes };

    return (
        <NotesContext.Provider value={notesValue}>
            <div className="flex flex-row h-[100%]">
                <div className="z-100">
                    {isModalOpen && (
                        <Modal
                            handleDismiss={() => {
                                setIsModalOpen(!isModalOpen);
                            }}
                        >
                            <NewNoteForm
                                handleDismiss={() => {
                                    setIsModalOpen(!isModalOpen);
                                }}
                            />
                        </Modal>
                    )}
                </div>
                <SideNav
                    setIsModalOpen={setIsModalOpen}
                    setNotesWindow={setNotesWindow}
                    setTagsWindow={setTagsWindow}
                    className={`${isModalOpen && "pointer-events-none"}`}
                />
                {notesWindow && (
                    <NotesWindow notes={notes} setNotes={setNotes} />
                )}
                {tagsWindow && <TagsWindow notes={notes} />}
            </div>
        </NotesContext.Provider>
    );
}

export default App;
