import React, { useState } from 'react'
import { OrgUnitTree, ProgramDropdown ,EventList ,HomePage} from '../components'
import AppContext from '../context/app-context'
import FilterBar from '../components/FilterBar'
export const EventsList = () => {
  const [programSelected, setProgramSelected] = useState('')
  
  return (
    <React.Fragment>
      <AppContext.Provider
        value={{
          programSelected,
          
                    
        }}
      >
      <h1>Program Events List</h1>
     {/* <OrgUnitTree />
      <ProgramDropdown /> 
      <FilterBar /> */}
        <HomePage />
      </AppContext.Provider>
    </React.Fragment>
  )
}