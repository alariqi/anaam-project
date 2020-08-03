import React, { useState } from "react";
import {
  Modal,
  ModalTitle,
  ModalContent,
  ModalActions,
  Field,
  InputField,
  Button
} from "@dhis2/ui";
import { useDataMutation } from "@dhis2/app-runtime";

const NewModal = ({ handleClick }) => {

  

  const [state, setState] = useState({
    name: "",
    shortName: "",
    valueType: "",
    aggregationTyp: ""
  
  } )

  
 
  const handleClick2 = async () => {
    name = state.name
    shortName = state.shortName
    valueType = state.valueType
    aggregationType = state.aggregationType
   //await mutate();
  
    refetch();
    setShowModal(false);
  };
  function handleChange(evt) {
    const value = evt.value;
    setState({
      ...state,
      [evt.name]: value
    });
  }


  const handleInputChange = e => {
    setName(e.value);
  };

  return (
    <Modal>
      <ModalTitle>New trackedEntityAttribute</ModalTitle>
      <ModalContent>
       <Field>
        <InputField
          label="Name"
          name="name"
          value={state.name}
          onChange={handleChange}
        />
        </Field>
        <Field>
        <InputField
          label="Short Name"
          name="shortName"
          value={state.shortName}
          onChange={handleChange}
        />
        </Field>
        <Field>
        <InputField
          label="value Type"
          name="valueType"
          value={state.valueType}
          onChange={handleChange}
        />
        </Field>
        <Field>
        <InputField
          label="Aggregation Type"
          name="aggregationType"
          value={state.aggregationType}
          onChange={handleChange}
        />
        </Field>
      </ModalContent>
      <ModalActions>
        <Button primary type="button" onClick={() => handleClick(state.name, state.shortName, state.valueType, state.aggregationType)}>
          Update
        </Button>
      </ModalActions>
    </Modal>
  );
};

export default NewModal;
