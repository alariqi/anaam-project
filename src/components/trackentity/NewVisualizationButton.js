import { useDataMutation } from "@dhis2/app-runtime";
import { Button } from "@dhis2/ui";

const mutation = {
  resource: "trackedEntityAttributes",
  type: "create",
  data: {
    name: "0000000New_Attaribute",
    shortName:"000New_Attaribute",
    valueType:"TEXT",
    aggregationType:"NONE"
    
    }
  /* @TODO: add a mutation for creating a NEW visualization */
  /* Use this data payload:
        {
            name: 'AAA_TEST',
            type: 'SINGLE_VALUE'
        }
    */
};

export const NewVisualizationButton = ({ refetch }) => {
  const [mutate, { loading }] = useDataMutation(mutation);
  const onClick = async () => {
    await mutate();
    refetch();
  };
  return (
    <Button primary disabled={loading} onClick={onClick}>
      + New trackedEntityAttributes
    </Button>
  );
};