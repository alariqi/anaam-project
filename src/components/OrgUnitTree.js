import React, { useState, useEffect, useContext} from 'react';
import { OrganisationUnitTree, CircularLoader } from '@dhis2/ui'
import { useDataQuery } from '@dhis2/app-runtime';
import AppContext from '../context/app-context'

const ORGUNIT_QUERY = {
  orgUnits: {
    resource: 'organisationUnits',
    id: 'ImspTQPwCqd',
    params: {
      paging: false,
      includeChildren: true,
      includeDescendants: true,
      level: '1',
      fields: 'id',
      
    },
  },
};

export const OrgUnitTree = () => {
  const [orgUnits, setOrgUnits] = useState(0);
  const { selectedOrgUnits, setSelectedOrgUnits } = useContext(AppContext)
 // const [selectedOrgUnits, setSelectedOrgUnits] = useState([])
  const [orgUnitSelected, setOrgUnitSelected] = useState(0);
  const { loading, error, data } = useDataQuery(ORGUNIT_QUERY);


  if (error) {
    return <span>ERROR: {error.message}</span>
  }

  if (loading) {
    return <CircularLoader />
  }
  /*const handleChange = (event) => {
    setOrgUnitSelected(event.selected);
    alert(event.displayName);
    setOrgUnits(data);
    //setOrgUnitSelected(event.id);
    console.log(orgUnitSelected);
    console.log(orgUnits);
  }*/
  const onChangeOrgUnitTreeSelection = e => {
    console.log(e.selected.map(item => item.split(/[\/ ]+/).pop()).join())
    setSelectedOrgUnits(e.selected)
  }

  return (
    <React.Fragment>
      <p>Select an organisation unit from the tree:</p>
      {// display that the data is being loaded
      // when loading is true
      loading && "Loading..."}

      {// display the error message
      // is an error occurred
      error && error.message}

      {// if there is any data available
      data?.orgUnits?.organisationUnits && (
        <OrganisationUnitTree
            filter={[]}
            highlighted={[]}
            initiallyExpanded={[]}
          name="Root org unit"
          data={data}
          roots="ImspTQPwCqd"
            onChange={onChangeOrgUnitTreeSelection}
            selected={selectedOrgUnits} 
           
        />
      )}
    </React.Fragment>
  );
};
