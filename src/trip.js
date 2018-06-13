import React from 'react';
import { List, Edit, Create, Datagrid, TextField, EditButton, DisabledInput, SimpleForm, TextInput, Filter, Responsive, SimpleList} from 'admin-on-rest';
//import { List, Edit, Create, Datagrid, TextField, EditButton, DisabledInput, SimpleForm, TextInput, Filter, Responsive, SimpleList, ReferenceField, LongTextInput, ReferenceInput, required, SelectInput } from 'admin-on-rest';

const TripFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
    </Filter>
);

export const TripList = (props) => (
    <List {...props} filters={<TripFilter />} >
        <Responsive
            small={
                <SimpleList
                    primaryText={record => record.employeeName}
                    secondaryText={record => record.employeeAfiliation}
                    tertiaryText={record => record.employeeCurp}
                />
            }
            medium={
                <Datagrid>
                    <TextField source="id" label="Id" />
                    <TextField source="tripShipId" label="Id Barco" />
                    <TextField source="tripCrewId" label="Id Tripulación" />
                    <TextField source="tripDate" label="Fecha" />
                    <TextField source="tripStatus" label="Estado" />
                    <EditButton />
                </Datagrid>
            }
        />
    </List>
);

export const EditTrip = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <DisabledInput source="tripId"  label="Id" />
            <TextInput source="tripShipId" label="Id Barco" />
            <TextInput source="tripCrewId" label="Id Tripulación" />
            <TextInput source="tripDate" label="Fecha" />
            <TextInput source="tripStatus" label="Estado" />
        </SimpleForm>
    </Edit>
);


export const CreateTrip = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="tripShipId" label="Id Barco" />
            <TextInput source="tripCrewId" label="Id Tripulación" />
            <TextInput source="tripDate" label="Fecha" />
            <TextInput source="tripStatus" label="Estado" />
        </SimpleForm>
    </Create>
);