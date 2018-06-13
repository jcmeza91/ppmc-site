import React from 'react';
import { List, Edit, Create, Datagrid, TextField, EditButton, DisabledInput, SimpleForm, TextInput, Filter, Responsive, SimpleList} from 'admin-on-rest';
//import { List, Edit, Create, Datagrid, TextField, EditButton, DisabledInput, SimpleForm, TextInput, Filter, Responsive, SimpleList, ReferenceField, LongTextInput, ReferenceInput, required, SelectInput } from 'admin-on-rest';

const SaleFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
    </Filter>
);

export const SaleList = (props) => (
    <List {...props} filters={<SaleFilter />} >
        <Responsive
            small={
                <SimpleList
                    primaryText={record => record.saleDate}
                    secondaryText={record => record.saleAmount}
                    tertiaryText={record => record.salePrice}
                />
            }
            medium={
                <Datagrid>
                    <TextField source="id" label="Id" />
                    <TextField source="saleInventoryDetailId" label="Id Detalle" />
                    <TextField source="saleClientId" label="Id Cliente" />
                    <TextField source="saleAmount" label="Cantidad" />
                    <TextField source="salePrice" label="Precio" />
                    <TextField source="saleDate" label="Fecha" />
                    <TextField source="saleStatus" label="Estado" />
                    <EditButton />
                </Datagrid>
            }
        />
    </List>
);

export const EditSale = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <DisabledInput source="saleId"  label="Id" />
            <TextInput source="saleInventoryDetailId" label="Id Detalle" />
            <TextInput source="saleClientId" label="Id Cliente" />
            <TextInput source="saleAmount" label="Cantidad" />
            <TextInput source="salePrice" label="Precio" />
            <TextInput source="saleDate" label="Fecha" />
            <TextInput source="saleStatus" label="Estado" />
        </SimpleForm>
    </Edit>
);


export const CreateSale = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="saleInventoryDetailId" label="Id Detalle" />
            <TextInput source="saleClientId" label="Id Cliente" />
            <TextInput source="saleAmount" label="Cantidad" />
            <TextInput source="salePrice" label="Precio" />
            <TextInput source="saleDate" label="Fecha" />
            <TextInput source="saleStatus" label="Estado" />
        </SimpleForm>
    </Create>
);