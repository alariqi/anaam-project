import React, { useState, useEffect, useContext  } from 'react'
import { useDataQuery, useDataMutation } from '@dhis2/app-runtime'
import AppContext from '../context/app-context'
import { ProgramDropdown } from './ProgramDropdown'
import {
    ButtonStrip, Table, TableBody, TableCell, TableCellHead, TableHead, TableRow, TableRowHead
} from '@dhis2/ui'



function GetHAO({ event }) {
    const queryHAO = {
        attributes: {
            resource: 'trackedEntityInstances',
            id: `${event.trackedEntityInstance}`
        }
    }

    
   // alert("entityinstans" + event.trackedEntityInstance)
    const { loading, error, data, refetch } = useDataQuery(queryHAO)
    const instance = event.trackedEntityInstance
    return (
        <div>
       
     
            {loading && <span>...</span>}
            {error && <span>{`ERROR: ${error.message}`}</span>}
            {data && (
                <>
                    <pre>
                        {data.attributes.attributes.map(atr => {
                           
                                return <li> HAO: {atr.value} </li>
                            
                        })}
                    </pre>
                </>
            )}
          
        </div>
           
    )
}

function GetdataValues({ event })
{
    const datavals = [];
    const items = [];
    const datavalData = event.dataValues;

    for (const dataval in datavalData) {
   
        datavals.push(datavalData[dataval])

}

    return(
     <React.Fragment >
            
         {datavals && (
        datavals.map(ev => (
            <>
                <div>
{ev.dataElement}

{ev.value}

                </div>
                
            </>
        )))
    }






     </React.Fragment>


     )   










   // for (const [index, value] of elements.entries()) {
    //    items.push(<li key={index}>{value}</li>)
    //}


}
function GetParent({ event }) {
    const query = {
        parent: {
            resource: 'organisationUnits',
            id: `${event.orgUnit}`

        }
    }
   
    const queryevents = {
        events: {
            resource: "events.json",
            params: {
                orgUnit: `${event.orgUnit}`,
                ouMode: "SELECTED",
                program: `${event.program}`,
                skipPaging: "true",
                pageSize: 5,
            },
        },
    };
  

    //event.dataValues.some(dataelement => dataelement.value )
   // alert("Events" + event.dataValues)
    const { loading, error, data, refetch } = useDataQuery(query)

   
    return (
       
        <div>
            <Table>
                <TableHead>
                    <TableRowHead>
                        <TableCellHead>Event</TableCellHead>
                        <TableCellHead>Enrollment Date</TableCellHead>
                        <TableCellHead>Enrollment</TableCellHead>

                        <TableCellHead>OrgUnit</TableCellHead>

                        <TableCellHead>trackedEntityInstance</TableCellHead>
                        <TableCellHead>dataValues</TableCellHead>
                        <TableCellHead>dataelements</TableCellHead>
                        <TableCellHead>OrgUnit parent</TableCellHead>
                    </TableRowHead>
                </TableHead>
                <TableBody>
                    <TableRow key={event.event}>
                        <TableCell>
                            {event.dataValues.dataelement }
                        </TableCell>
                        <TableCell>
                            {event.eventDate}
                        </TableCell>
                        <TableCell>
                            {event.enrollment}
                        </TableCell>
                        <TableCell>
                            {event.orgUnit}
                        </TableCell>
                        <TableCell>
                            {event.trackedEntityInstance}
                        </TableCell>

                        <TableCell>

                        </TableCell>


                        {loading && <span>...</span>}
                        {error && <span>{`ERROR: ${error.message}`}</span>}
                        {data && (
                            <>
                                <pre>
                                    <TableCell> OrgParent: {data.parent.parent.id} </TableCell>
                                </pre>
                            </>
                        )}
                        <GetdataValues 
                            key={event.event}
                            event={event}
                        
                        
                        />






                    </TableRow>
                </TableBody>
            </Table>
        </div>
        
    )
             
   
    
}
//lastUpdatedDuration: '100d'
//filter: 'MZ5Ww7OZTgM:eq:First visit'
export const EventList = ({OrgUnits}, {prog}) => {
    const {
        selectedOrgUnits,
        programSelected,
           } = useContext(AppContext)

    
    const orgid = selectedOrgUnits
    const orgunitid = orgid.map(item => item.split(/[\/ ]+/).pop()).join()
  //  alert("selected orgunit" + orgunitid)

    //alert("selected prog"+programSelected)
    const queryevents = {
        events: {
            resource: "events.json",
            params: {
               // orgUnit: orgunitid,
                orgUnit:orgunitid,
                ouMode: "SELECTED",
                program:programSelected,
                //program: "M3xtLkYBlKI",
                //skipPaging: "true",
                pageSize: 10,
            },
        },
    };

   // alert(prog)

    const { loading, error, data, refetch } = useDataQuery(queryevents)
   // const color = React.useContext(AppContext);

 

    return (<React.Fragment >
        <div>
            <h3>List of Events</h3>
            {loading && <span>...</span>}
            {error && <div>No events</div>}
            {data && (
                <>
                    <pre>
                        {data.events.events.map(ev => (
                            <>
                                <div> 
                                    

                                </div>
                                <GetParent
                                    key={ev.event}
                                    event={ev}
                                />
                               
                            </>
                        ))
                        
                        }
                      
                    </pre>
                </>
            )
            
            
            }
            {!data && (
                <div> 

                    No Events Found
                    </div>
            )
            }
        

        </div>
    </React.Fragment>
    )
}
