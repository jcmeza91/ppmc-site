import React from 'react';
import { List, Edit, Create, Datagrid, TextField, EditButton, DisabledInput, SimpleForm, TextInput, Filter, Responsive, SimpleList} from 'admin-on-rest';
//import { List, Edit, Create, Datagrid, TextField, EditButton, DisabledInput, SimpleForm, TextInput, Filter, Responsive, SimpleList, ReferenceField, LongTextInput, ReferenceInput, required, SelectInput } from 'admin-on-rest';

const EmployeeFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
    </Filter>
);

export const EmployeeList = (props) => (
    <List {...props} filters={<EmployeeFilter />} >
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
                    <TextField source="employeeName" label="Name" />
                    <TextField source="employeeAfiliation" label="Afiliación" />
                    <TextField source="employeeRfc" label="RFC" />
                    <TextField source="employeeCurp" label="CURP" />
                    <TextField source="employeeLc" label="LC" />
                    <TextField source="employeeStatus" label="Estado" />
                    <EditButton />
                </Datagrid>
            }
        />
    </List>
);

export const EditEmployee = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <DisabledInput source="employeeId"  label="Id" />
            <TextInput source="employeeName" label="Name" />
            <TextInput source="employeeAfiliation" label="Afiliación" />
            <TextInput source="employeeRfc" label="RFC" />
            <TextInput source="employeeCurp" label="CURP" />
            <TextInput source="employeeLc" label="LC" />
            <TextInput source="employeeStatus" label="Estado" />
        </SimpleForm>
    </Edit>
);


export const CreateEmployee = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="employeeName" label="Name" />
            <TextInput source="employeeAfiliation" label="Afiliación" />
            <TextInput source="employeeRfc" label="RFC" />
            <TextInput source="employeeCurp" label="CURP" />
            <TextInput source="employeeLc" label="LC" />
            <TextInput source="employeeStatus" label="Estado" />
        </SimpleForm>
    </Create>
);