import React from 'react';
import { List, Edit, Create, Datagrid, TextField, EditButton, DisabledInput, SimpleForm, TextInput, Filter, Responsive, SimpleList} from 'admin-on-rest';
//import { List, Edit, Create, Datagrid, TextField, EditButton, DisabledInput, SimpleForm, TextInput, Filter, Responsive, SimpleList, ReferenceField, LongTextInput, ReferenceInput, required, SelectInput } from 'admin-on-rest';

const SpecieFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
    </Filter>
);

export const SpecieList = (props) => (
    <List {...props} filters={<SpecieFilter />} >
        <Responsive
            small={
                <SimpleList
                    primaryText={record => record.Descuento}
                    secondaryText={record => record.Tipo}
                />
            }
            medium={
                <Datagrid>
                    <TextField source="id" label="Id" />
                    <TextField source="specieDesc" label="Descuento" />
                    <TextField source="specieType" label="Tipo" />
                    <TextField source="specieStatus" label="Estado" />
                    <EditButton />
                </Datagrid>
            }
        />
    </List>
);

export const EditSpecie = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <DisabledInput source="specieId"  label="Id" />
            <TextInput source="specieDesc" label="Descuento" />
            <TextInput source="specieType" label="Tipo" />
            <TextInput source="specieStatus" label="Estado" />
        </SimpleForm>
    </Edit>
);


export const CreateSpecie = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="specieDesc" label="Descuento" />
            <TextInput source="specieType" label="Tipo" />
            <TextInput source="specieStatus" label="Estado" />
        </SimpleForm>
    </Create>
);