import React, { useState, useEffect, useContext } from "react";
import { useDataQuery } from "@dhis2/app-runtime";
import { SingleSelect, SingleSelectOption } from "@dhis2/ui";
import AppContext from '../context/app-context'

import { programListClass } from '../App.module.css'
const PROGRAMS_QUERY = {
  programs: {
    resource: "programs",
    params: {
      paging: false,
      fields: "id, displayName",
      ou: "DiszpKrYNg8"
    },
  },
};

const dataElementQuery = {
  dataElements: {
    resource: 'dataElements',
    params: {
      fields: 'id,displayName,code',
      paging: false
    }
  }
}

export const ProgramDropdown = () => {
 
  const {programSelected, setProgramSelected}= useContext(AppContext)

  const { loading, error, data } = useDataQuery(PROGRAMS_QUERY);
  
  const handleChange = (event) => {
    //alert(programSelected);
    setProgramSelected(programSelected);
   // setProgramSelected(event.selected);
    //alert(event.selected);
   // console.log(programSelected);
  };
  const onChangeProgramSelection = e => {
     setProgramSelected(e.selected)
  }

 /* useEffect(() => {
    setPrograms(data);
  }, [programs]);
*/
  return (
    <div className={programListClass}>
    <React.Fragment>
           <p> Select a tracker program from the list: </p>
      {// display that the data is being loaded
      // when loading is true
      loading && "Loading..."}

      {// display the error message
      // is an error occurred
      error && error.message}

      {// if there is any data available
      data?.programs?.programs && (
        <SingleSelect 
            className="select"
       
            onChange={onChangeProgramSelection }
            selected={programSelected}
           
            >
          {data.programs.programs.map(({ id, displayName }) => (
            <SingleSelectOption key={id} label={displayName} value={id}
             
            
            />
          ))}
        </SingleSelect>
      )}
     
    </React.Fragment>
    </div>
  )
};
