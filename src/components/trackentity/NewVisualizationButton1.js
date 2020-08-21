import { useState } from "react";
import { useDataMutation } from "@dhis2/app-runtime";
import { Button } from "@dhis2/ui";
import NewModal from "./NewModal";

/*const mutation = {
  resource: "trackedEntityAttributes",
  type: "create",
  data: {
    name: "0000000New_Attaribute",
    shortName: "000New_Attaribute",
    valueType: "TEXT",
    aggregationType: "NONE"

  }*/
let attributes = [];
const mutation = {
  resource: 'trackedEntityAttributes',
  type: 'create',
  data: ({ attributes }) => attributes
};


const NewVisualizationButton1 = ({refetch}) => {
    
  const [showModal, setShowModal] = useState(false);
  const [mutate, { loading }] = useDataMutation(mutation);
 
  const handleClick = async(newname, newshortName, newvalueType, newaggregationType) => {
    
       
    attributes = {

      name: newname,
      shortName: newshortName,
      valueType: newvalueType,
      aggregationType: newaggregationType
    };
  
    await mutate({
      attributes: attributes
     }).then(refetch);
    //refetch();
    setShowModal(false);
  };
 
  const handleClickold = () => {
     mutate();
    refetch();
    setShowModal(false);
  };


  return (
    <div>
      {showModal && (
        <NewModal  handleClick={handleClick} />
      )}
      <Button primary disabled={loading} onClick={() => setShowModal(true) }>
        New trackedEntityAttributes
      </Button>
    </div>
  );
};

export default NewVisualizationButton1;
