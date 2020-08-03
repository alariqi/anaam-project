import { useState } from "react";
import { useDataMutation } from "@dhis2/app-runtime";
import { Button } from "@dhis2/ui";
import UpdateModal from "./UpdateModal";

const mutation = {
  resource: "trackedEntityAttributes",
  type: "update",
  id: ({ id }) => id,
  partial: true,
  data: ({ newName }) => ({ name: newName })
};

const EditVisualizationButton = ({ id, name, refetch }) => {
  const [showModal, setShowModal] = useState(false);
  const [mutate, { loading }] = useDataMutation(mutation);
  const handleClick = newName => {
    
    mutate({ id, newName }).then(refetch);
    setShowModal(false);
  };
  return (
    <div>
      {showModal && (
        <UpdateModal originalName={name} handleClick={handleClick} />
      )}
      <Button primary disabled={loading} onClick={() => setShowModal(true)}>
        Edit
      </Button>
    </div>
  );
};

export default EditVisualizationButton;
