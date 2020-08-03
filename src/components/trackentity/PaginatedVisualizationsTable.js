import React, { useState } from "react";
import { useDataQuery } from "@dhis2/app-runtime";
import { CircularLoader } from "@dhis2/ui";

import { VisualizationsTable } from "./VisualizationsTable";
import { PaginationControls } from "./PaginationControls";

import * as classes from "../../App.module.css";

const visualizationsQuery = {
  // NOTE: you could use any name here, which is handy if you have multiple parallel queries
  results: {
    resource: "trackedEntityAttributes",
    params: ({ page }) => ({
      pageSize: 5,
      fields: ["id", "name","shortName", "valueType","aggregationType"],
      page: page
    })
    
  }
};

export const PaginatedVisualizationsTable = () => {
  const { loading, error, data, refetch } = useDataQuery(visualizationsQuery, {
    variables: { page: 1 }
  });

  if (error) {
    return <span>ERROR: {error.message}</span>;
  }

  if (loading) {
    return <CircularLoader />;
  }
  return (
    <div className={classes.tableContainer}>
      <VisualizationsTable
        visualizations={data.results.trackedEntityAttributes}
        refetch={refetch}
      />
      <PaginationControls pager={data.results.pager} refetch={refetch} />
    </div>
  );
};
