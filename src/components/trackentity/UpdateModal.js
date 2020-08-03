import React, { useState } from "react";
import {
  Modal,
  ModalTitle,
  ModalContent,
  ModalActions,
  InputField,
  Button
} from "@dhis2/ui";

const UpdateModal = ({ originalName, handleClick }) => {
  const [name, setName] = useState(originalName);
  console.log(name);

  const handleInputChange = e => {
    setName(e.value);
  };

  return (
    <Modal>
      <ModalTitle>Update visualization name</ModalTitle>
      <ModalContent>
        <InputField
          label="Update name"
          name="update-name"
          value={name}
          onChange={handleInputChange}
        />
      </ModalContent>
      <ModalActions>
        <Button primary type="button" onClick={() => handleClick(name)}>
          Update
        </Button>
      </ModalActions>
    </Modal>
  );
};

export default UpdateModal;
