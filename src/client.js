import React from 'react';
import { List, Edit, Create, Datagrid, TextField, EditButton, DisabledInput, SimpleForm, TextInput, Filter, Responsive, SimpleList} from 'admin-on-rest';
//import { List, Edit, Create, Datagrid, TextField, EditButton, DisabledInput, SimpleForm, TextInput, Filter, Responsive, SimpleList, ReferenceField, LongTextInput, ReferenceInput, required, SelectInput } from 'admin-on-rest';

const ClientFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
    </Filter>
);

export const ClientList = (props) => (
    <List {...props} filters={<ClientFilter />} >
        <Responsive
            small={
                <SimpleList
                    primaryText={record => record.clientName}
                    secondaryText={record => record.clientStatus}
                />
            }
            medium={
                <Datagrid>
                    <TextField source="id" label="Id" />
                    <TextField source="clientName" label="Nombre" />
                    <TextField source="clientStatus" label="Estado" />
                    <EditButton />
                </Datagrid>
            }
        />
    </List>
);

export const EditClient = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <DisabledInput source="clientId"  label="Id" />
            <TextInput source="clientName" label="Nombre" />
            <TextInput source="clientStatus" label="Estado" />
        </SimpleForm>
    </Edit>
);


export const CreateClient = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="clientName" label="Nombre" />
            <TextInput source="clientStatus" label="Estado" />
        </SimpleForm>
    </Create>
);