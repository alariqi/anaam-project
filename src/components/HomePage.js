import React, { useState, useEffect } from 'react'

import {
    AlertStack,
    AlertBar,
    CenteredContent,
    CircularLoader,
} from '@dhis2/ui'
import * as classes from '../App.module.css'

import { useDataQuery } from '@dhis2/app-runtime'

import {EventList} from './EventList'
import FilterBar from './FilterBar'

import AppContext from '../context/app-context'

const commentsListQuery1 = {
    results: {
        resource: 'dataValueSets',
        params: ({ orgUnits, dataSets }) => ({
            orgUnit: orgUnits,
            startDate: '1990',
            endDate: '2050',
            dataSet: dataSets,
        }),
    },
}

const commentsListQuery = {
    events: {
        resource: 'events.json',
        params: ({ orgUnits, programsList }) => ({
            orgUnit: orgUnits,
            ouMode: 'DESCENDANTS',
            program: programsList,
           pageSize: 5,
           
        })
    }
}

export const HomePage = () => {
    const [selectedOrgUnits, setSelectedOrgUnits] = useState([])
    const [programSelected, setProgramSelected] = useState('')
    
    const [showAlert, setShowAlert] = useState(false)
    const [alertMessage, setAlertMessage] = useState('')
    
    const { loading, error, data, refetch } = useDataQuery(commentsListQuery, {
        variables: { orgUnits: '', programsList: '' },
        lazy: true,
    })
    //alert(commentsListQuery)
    useEffect(() => {
        if (error) {
            setAlertMessage(error.message)
            setShowAlert(true)
        }
    }, [error])

    return (
        <>
            <AppContext.Provider
                value={{
                    selectedOrgUnits,
                    setSelectedOrgUnits,
                    programSelected,
                    setProgramSelected,
                    refetch,
                }}
            >
                <div className={classes.tableContainer}>
                    <FilterBar />
                    {loading ? (
                        <CenteredContent>
                            <CircularLoader />
                        </CenteredContent>
                    ) : (
                           
                            data &&
                            data.events.events && (
                                <EventList
                                 OrgUnits=
                                   { selectedOrgUnits
                    .map(item => item.split(/[\/ ]+/).pop())
                                .join()}
                                prog={programSelected}
                                    
                                    refetch={refetch}
                                    setAlertMessage={setAlertMessage}
                                    setShowAlert={setShowAlert}
                                />
                            )
                        )}
                    {/* <PaginationControls pager={data.results.pager} refetch={refetch} /> */}
                </div>
            </AppContext.Provider>
            {showAlert && (
                <AlertStack>
                    <AlertBar
                        duration={8000}
                        icon
                        warning
                        onHidden={() => setShowAlert(false)}
                    >
                        {alertMessage}
                    </AlertBar>
                </AlertStack>
            )}
        </>
    )
}

