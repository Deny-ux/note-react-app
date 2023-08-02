import { useSelector } from "react-redux";
import { RootState } from "./app/store";
import ModalsContainer from "./components/ModalsContainer";
import Table from "./components/Table";

function App() {
  const { showCreateModal, showEditModal } = useSelector(
    (state: RootState) => state.modals
  );
  return (
    <>
      <Table tableFor="List of notes" />;
      <Table tableFor="Summary" />
      {(showCreateModal || showEditModal) && <ModalsContainer />}
    </>
  );
}

export default App;
