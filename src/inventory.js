import React from 'react';
import { List, Edit, Create, Datagrid, TextField, EditButton, DisabledInput, SimpleForm, TextInput, Filter, Responsive, SimpleList} from 'admin-on-rest';
//import { List, Edit, Create, Datagrid, TextField, EditButton, DisabledInput, SimpleForm, TextInput, Filter, Responsive, SimpleList, ReferenceField, LongTextInput, ReferenceInput, required, SelectInput } from 'admin-on-rest';

const InventoryFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
    </Filter>
);

export const InventoryList = (props) => (
    <List {...props} filters={<InventoryFilter />} >
        <Responsive
            small={
                <SimpleList
                    primaryText={record => record.inventoryDate}
                    secondaryText={record => record.inventoryPlant}
                    tertiaryText={record => record.inventoryPlace}
                />
            }
            medium={
                <Datagrid>
                    <TextField source="inventoryId" label="Id" />
                    <TextField source="inventoryTripId" label="Id Viaje" />
                    <TextField source="inventoryDate" label="Fecha" />
                    <TextField source="inventoryReportId" label="Id Reporte" />
                    <TextField source="inventoryReportDate" label="Fecha Reporte" />
                    <TextField source="inventoryPlant" label="Planta" />
                    <TextField source="inventorySupplier" label="Proveedor" />
                    <TextField source="inventoryPlace" label="Lugar" />
                    <TextField source="inventoryLot" label="Lote" />
                    <TextField source="inventoryPackageType" label="Tipo" />
                    <TextField source="inventoryPackageUnit" label="Unidad" />
                    <TextField source="inventoryStatus" label="Estado" />
                    <EditButton />
                </Datagrid>
            }
        />
    </List>
);

export const EditInventory = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <DisabledInput source="id"  label="Id" />
            <TextInput source="inventoryTripId" label="Id Viaje" />
            <TextInput source="inventoryDate" label="Fecha" />
            <TextInput source="inventoryReportId" label="Id Reporte" />
            <TextInput source="inventoryReportDate" label="Fecha Reporte" />
            <TextInput source="inventoryPlant" label="Planta" />
            <TextInput source="inventorySupplier" label="Proveedor" />
            <TextInput source="inventoryPlace" label="Lugar" />
            <TextInput source="inventoryLot" label="Lote" />
            <TextInput source="inventoryPackageType" label="Tipo" />
            <TextInput source="inventoryPackageUnit" label="Unidad" />
            <TextInput source="inventoryStatus" label="Estado" />
        </SimpleForm>
    </Edit>
);


export const CreateInventory = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="inventoryTripId" label="Id Viaje" />
            <TextInput source="inventoryDate" label="Fecha" />
            <TextInput source="inventoryReportId" label="Id Reporte" />
            <TextInput source="inventoryReportDate" label="Fecha Reporte" />
            <TextInput source="inventoryPlant" label="Planta" />
            <TextInput source="inventorySupplier" label="Proveedor" />
            <TextInput source="inventoryPlace" label="Lugar" />
            <TextInput source="inventoryLot" label="Lote" />
            <TextInput source="inventoryPackageType" label="Tipo" />
            <TextInput source="inventoryPackageUnit" label="Unidad" />
            <TextInput source="inventoryStatus" label="Estado" />
        </SimpleForm>
    </Create>
);