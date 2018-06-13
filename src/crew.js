import React from 'react';
import { List, Edit, Create, Datagrid, TextField, EditButton, DisabledInput, SimpleForm, TextInput, Filter, Responsive, SimpleList} from 'admin-on-rest';
//import { List, Edit, Create, Datagrid, TextField, EditButton, DisabledInput, SimpleForm, TextInput, Filter, Responsive, SimpleList, ReferenceField, LongTextInput, ReferenceInput, required, SelectInput } from 'admin-on-rest';

const CrewFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
    </Filter>
);

export const CrewList = (props) => (
    <List {...props} filters={<CrewFilter />} >
        <Responsive
            small={
                <SimpleList
                    primaryText={record => record.crewEmployeeId}
                    secondaryText={record => record.crewRoleId}
                />
            }
            medium={
                <Datagrid>
                    <TextField source="id" label="Id" />
                    <TextField source="crewEmployeeId" label="Id Empleado" />
                    <TextField source="crewRoleId" label="Id Role" />
                    <EditButton />
                </Datagrid>
            }
        />
    </List>
);

export const EditCrew = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <DisabledInput source="crewId"  label="Id" />
            <TextInput source="crewEmployeeId" label="Id Empleado" />
            <TextInput source="crewRoleId" label="Id Role" />
        </SimpleForm>
    </Edit>
);


export const CreateCrew = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="crewEmployeeId" label="Id Empleado" />
            <TextInput source="crewRoleId" label="Id Role" />
        </SimpleForm>
    </Create>
);