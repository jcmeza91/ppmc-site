import React from 'react';
import { List, Edit, Create, Datagrid, TextField, EditButton, DisabledInput, SimpleForm, TextInput, Filter, Responsive, SimpleList} from 'admin-on-rest';
//import { List, Edit, Create, Datagrid, TextField, EditButton, DisabledInput, SimpleForm, TextInput, Filter, Responsive, SimpleList, ReferenceField, LongTextInput, ReferenceInput, required, SelectInput } from 'admin-on-rest';

const RoleFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
    </Filter>
);

export const RoleList = (props) => (
    <List {...props} filters={<RoleFilter />} >
        <Responsive
            small={
                <SimpleList
                    primaryText={record => record.roleName}
                    secondaryText={record => record.rolePercentage}
                    tertiaryText={record => record.roleStatus}
                />
            }
            medium={
                <Datagrid>
                    <TextField source="id" label="Id" />
                    <TextField source="roleName" label="Nombre" />
                    <TextField source="rolePercentage" label="Porcentaje" />
                    <TextField source="roleStatus" label="Estado" />
                    <EditButton />
                </Datagrid>
            }
        />
    </List>
);

export const EditRole = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <DisabledInput source="roleId"  label="Id" />
            <TextInput source="roleName" label="Nombre" />
            <TextInput source="rolePercentage" label="Porcentaje" />
            <TextInput source="roleStatus" label="Estado" />
        </SimpleForm>
    </Edit>
);


export const CreateRole = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="roleName" label="Nombre" />
            <TextInput source="rolePercentage" label="Porcentaje" />
            <TextInput source="roleStatus" label="Estado" />
        </SimpleForm>
    </Create>
);