import React, { useState } from "react";
import {
  Modal,
  ModalTitle,
  ModalContent,
  ModalActions,
  Field,
  InputField,
  Button,
   SingleSelect,
  SingleSelectOption
} from "@dhis2/ui";
import { useDataMutation } from "@dhis2/app-runtime";

const NewModal = ({ handleClick }) => {

   const [valueType, setValuetype] = useState("");
  const [aggregationType, setAggregationType] = useState("");
  const [state, setState] = useState({
    name: "",
    shortName: ""
    
  
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
        value Type
        <Field>
          <SingleSelect
            className="select"
            label="valueType"
            name="valueType"
            onChange={({ selected }) => setValuetype(selected)}
            selected={valueType}
          >
            <SingleSelectOption
              dataTest="dhis2-uiwidgets-singleselectfield"
              key="NUMBER"
              label="NUMBER"
              value="NUMBER"
            />
            <SingleSelectOption
              dataTest="dhis2-uiwidgets-singleselectfield"
              key="TEXT"
              label="TEXT"
              value="TEXT"
            />
          </SingleSelect>
        </Field>
		
		
		
		Aggragation Type
		<Field>
          <SingleSelect
            className="select"
            label="AggragationType"
            name="aggregationType"
            dataTest="dhis2-uiwidgets-singleselectfield"
            //  selected={selected}
            // onChange={(value) => handleSelectOption(value)}
            onChange={({ selected }) => setAggregationType(selected)}
            selected={aggregationType}
          >
            <SingleSelectOption
              dataTest="dhis2-uiwidgets-singleselectfield"
              key="NONE"
              label="NONE"
              value="NONE"
            />
            <SingleSelectOption
              dataTest="dhis2-uiwidgets-singleselectfield"
              key="SUM"
              label="SUM"
              value="SUM"
            />
			<SingleSelectOption
              dataTest="dhis2-uiwidgets-singleselectfield"
              key="MAX"
              label="MAX"
              value="MAX"
            />
          </SingleSelect>
        </Field>
        
      </ModalContent>
      <ModalActions>
        <Button primary type="button" onClick={() => handleClick(state.name, state.shortName, valueType, aggregationType)}>
          Update
        </Button>
      </ModalActions>
    </Modal>
  );
};

export default NewModal;
