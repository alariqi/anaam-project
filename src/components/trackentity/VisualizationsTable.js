import React from "react";
import {
  ButtonStrip,
  Table,
  TableBody,
  TableCell,
  TableCellHead,
  TableHead,
  TableRow,
  TableRowHead
} from "@dhis2/ui";

import { DeleteVisualizationButton } from "./DeleteVisualizationButton";
import { NewVisualizationButton } from "./NewVisualizationButton";
import  NewVisualizationButton1  from "./NewVisualizationButton1";
import EditVisualizationButton from "./EditVisualizationButton";

export const VisualizationsTable = ({ visualizations, refetch }) => (
  <Table>
    <TableHead>
      <TableRowHead>
        <TableCellHead>name</TableCellHead>
        <TableCellHead>shortName</TableCellHead>
         <TableCellHead>valueType</TableCellHead>
        <TableCellHead>aggregationType</TableCellHead>
        <TableCellHead>
         
            <NewVisualizationButton refetch={refetch} />
            <p>
          <NewVisualizationButton1 refetch={refetch} />
          </p>
        </TableCellHead>
      </TableRowHead>
    </TableHead>
    <TableBody>
      {visualizations.map(visualization => (
        <TableRow key={visualization.id}>
          <TableCell>{visualization.name}</TableCell>
          <TableCell>{visualization.shortName}</TableCell>
          <TableCell>{visualization.valueType}</TableCell>
          <TableCell>{visualization.aggregationType}</TableCell>

          <TableCell>
            <EditVisualizationButton
              id={visualization.id}
              name={visualization.name}
              refetch={refetch}
            />
            <DeleteVisualizationButton
              id={visualization.id}
              refetch={refetch}
            />
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);
