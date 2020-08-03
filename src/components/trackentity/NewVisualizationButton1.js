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

const mutation = {
  resource: 'trackedEntityAttributes',
  type: 'create',
  data: ({  name, shortName, valueType, aggregationType }) => ({
    name, shortName, valueType, aggregationType
  }),
}
/*const mutation = {
  resource: 'trackedEntityAttributes',
  type: 'create',
  data: ( newname ,  newshortName ,  newvalueType , newaggregationType) => 
    ({ name: newname }, { shortName: newshortName }, { valueType: newvalueType }, { aggregationType: newaggregationType } )
  //data: { {name}, {shortName}, {valueType}, {aggregationType} }


};
*/


const NewVisualizationButton1 = ({ name, shortName, valueType, aggregationType, refetch }) => {
  
  
  const [showModal, setShowModal] = useState(false);
  
  //console.log(state);
  //const [mutate, { loading }] = useDataMutation(mutation);

  const [mutate, { called, loading, error, data }] = useDataMutation(mutation, {
    onComplete: (ew) => console.log(ew),
    onError: err => console.log(err),
    variables: {
      resource: "trackedEntityAttributes",
      type: "create",
      name: name,
      shortName: shortName,
      valueType: valueType,
      aggregationType: aggregationType
      
    }
  }
  )




  const handleClick222 = (newname, newshortName, newvalueType, newaggregationType) => {
  
    
    mutate();
    refetch();
    setShowModal(false);
  };
  /*const handleClick = newName => {
    mutate({ id, newName }).then(refetch);
    setShowModal(false);
  };*/

  const handleClick = () => {
     mutate();
    refetch();
    setShowModal(false);
  };


  return (
    <div>
      {showModal && (
        <NewModal  handleClick={handleClick} />
      )}
      <Button primary disabled={loading} onClick={() => setShowModal(true)}>
        New trackedEntityAttributes
      </Button>
    </div>
  );
};

export default NewVisualizationButton1;
