import React from 'react';
import { List, Edit, Create, Datagrid, TextField, EditButton, DisabledInput, SimpleForm, TextInput, Filter, Responsive, SimpleList} from 'admin-on-rest';
//import { List, Edit, Create, Datagrid, TextField, EditButton, DisabledInput, SimpleForm, TextInput, Filter, Responsive, SimpleList, ReferenceField, LongTextInput, ReferenceInput, required, SelectInput } from 'admin-on-rest';

const ReturnFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
    </Filter>
);

export const ReturnList = (props) => (
    <List {...props} filters={<ReturnFilter />} >
        <Responsive
            small={
                <SimpleList
                    primaryText={record => record.returnsAmount}
                    secondaryText={record => record.returnsDate}
                    tertiaryText={record => record.returnsComment}
                />
            }
            medium={
                <Datagrid>
                    <TextField source="id" label="Id" />
                    <TextField source="returnsSaleId" label="Id Venta" />
                    <TextField source="returnsAmount" label="Cantidad" />
                    <TextField source="returnsDate" label="Fecha" />
                    <TextField source="returnsComment" label="Comentario" />
                    <TextField source="returnsStatus" label="Estado" />
                    <EditButton />
                </Datagrid>
            }
        />
    </List>
);

export const EditReturn = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <DisabledInput source="returnsId"  label="Id" />
            <TextInput source="returnsSaleId" label="Id Venta" />
            <TextInput source="returnsAmount" label="Cantidad" />
            <TextInput source="returnsDate" label="Fecha" />
            <TextInput source="returnsComment" label="Comentario" />
            <TextInput source="returnsStatus" label="Estado" />
        </SimpleForm>
    </Edit>
);


export const CreateReturn = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="returnsSaleId" label="Id Venta" />
            <TextInput source="returnsAmount" label="Cantidad" />
            <TextInput source="returnsDate" label="Fecha" />
            <TextInput source="returnsComment" label="Comentario" />
            <TextInput source="returnsStatus" label="Estado" />
        </SimpleForm>
    </Create>
);