import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import CreateNoteModal from "./CreateNoteModal";
import EditNoteModal from "./EditNoteModal";

const ModalsContainer = () => {
  const { showCreateModal, showEditModal } = useSelector(
    (state: RootState) => state.modals
  );

  return (
    <section className="modal-block show-modal-block">
      {showCreateModal && <CreateNoteModal />}
      {showEditModal && <EditNoteModal />}
    </section>
  );
};
export default ModalsContainer;
