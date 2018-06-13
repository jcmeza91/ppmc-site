import React from 'react';
import { List, Edit, Create, Datagrid, TextField, EditButton, DisabledInput, SimpleForm, TextInput, Filter, Responsive, SimpleList} from 'admin-on-rest';
//import { List, Edit, Create, Datagrid, TextField, EditButton, DisabledInput, SimpleForm, TextInput, Filter, Responsive, SimpleList, ReferenceField, LongTextInput, ReferenceInput, required, SelectInput } from 'admin-on-rest';

const PriceFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
    </Filter>
);

export const PriceList = (props) => (
    <List {...props} filters={<PriceFilter />} >
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
                    <TextField source="priceSpecieId" label="Id Especie" />
                    <TextField source="pricePrice" label="Precio" />
                    <TextField source="priceDate" label="Fecha" />
                    <TextField source="priceStatus" label="Estado" />
                    <TextField source="priceClientId" label="Id Cliente" />
                    <EditButton />
                </Datagrid>
            }
        />
    </List>
);

export const EditPrice = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <DisabledInput source="priceId"  label="Id" />
            <TextInput source="priceSpecieId" label="Id Especie" />
            <TextInput source="pricePrice" label="Precio" />
            <TextInput source="priceDate" label="Fecha" />
            <TextInput source="priceStatus" label="Estado" />
            <TextInput source="priceClientId" label="Id Cliente" />
        </SimpleForm>
    </Edit>
);


export const CreatePrice = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="priceSpecieId" label="Id Especie" />
            <TextInput source="pricePrice" label="Precio" />
            <TextInput source="priceDate" label="Fecha" />
            <TextInput source="priceStatus" label="Estado" />
            <TextInput source="priceClientId" label="Id Cliente" />
        </SimpleForm>
    </Create>
);