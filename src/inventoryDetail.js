import React from 'react';
import { List, Edit, Create, Datagrid, TextField, EditButton, DisabledInput, SimpleForm, TextInput, Filter, Responsive, SimpleList} from 'admin-on-rest';
//import { List, Edit, Create, Datagrid, TextField, EditButton, DisabledInput, SimpleForm, TextInput, Filter, Responsive, SimpleList, ReferenceField, LongTextInput, ReferenceInput, required, SelectInput } from 'admin-on-rest';

const InventoryDetailFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
    </Filter>
);

export const InventoryDetailList = (props) => (
    <List {...props} filters={<InventoryDetailFilter />} >
        <Responsive
            small={
                <SimpleList
                    primaryText={record => record.inventoryDetailInventoryId}
                    secondaryText={record => record.inventoryDetailAmount}
                    tertiaryText={record => record.inventoryDetailAmountLeft}
                />
            }
            medium={
                <Datagrid>
                    <TextField source="id" label="Id" />
                    <TextField source="inventoryDetailInventoryId" label="Id Inventario" />
                    <TextField source="inventoryDetailSpecieIdId" label="Id Especie" />
                    <TextField source="inventoryDetailAmount" label="Cantidad" />
                    <TextField source="inventoryDetailAmountLeft" label="Cantidad Restante" />
                    <TextField source="inventoryStatus" label="Estado" />
                    <EditButton />
                </Datagrid>
            }
        />
    </List>
);

export const EditInventoryDetail = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <DisabledInput source="inventoryDetailId"  label="Id" />
            <TextInput source="inventoryDetailInventoryId" label="Id Inventario" />
            <TextInput source="inventoryDetailSpecieIdId" label="Id Especie" />
            <TextInput source="inventoryDetailAmount" label="Cantidad" />
            <TextInput source="inventoryDetailAmountLeft" label="Cantidad Restante" />
            <TextInput source="inventoryStatus" label="Estado" />
        </SimpleForm>
    </Edit>
);


export const CreateInventoryDetail = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="inventoryDetailInventoryId" label="Id Inventario" />
            <TextInput source="inventoryDetailSpecieIdId" label="Id Especie" />
            <TextInput source="inventoryDetailAmount" label="Cantidad" />
            <TextInput source="inventoryDetailAmountLeft" label="Cantidad Restante" />
            <TextInput source="inventoryStatus" label="Estado" />
        </SimpleForm>
    </Create>
);