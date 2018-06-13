import React from 'react';
import { List, Edit, Create, Datagrid, TextField, EditButton, DisabledInput, SimpleForm, TextInput, Filter, Responsive, SimpleList} from 'admin-on-rest';
//import { List, Edit, Create, Datagrid, TextField, EditButton, DisabledInput, SimpleForm, TextInput, Filter, Responsive, SimpleList, ReferenceField, LongTextInput, ReferenceInput, required, SelectInput } from 'admin-on-rest';

const ShipFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
    </Filter>
);

export const ShipList = (props) => (
    <List {...props} filters={<ShipFilter />} >
        <Responsive
            small={
                <SimpleList
                    primaryText={record => record.shipName}
                    secondaryText={record => record.shipAnoConstruccion}
                    tertiaryText={record => record.shipEslora}
                />
            }
            medium={
                <Datagrid>
                    <TextField source="id" label="Id" />
                    <TextField source="shipName" label="Nombre" />
                    <TextField source="shipAnoConstruccion" label="Año" />
                    <TextField source="shipEslora" label="Eslora" />
                    <TextField source="shipManga" label="Manga" />
                    <TextField source="shipPuntal" label="Puntual" />
                    <TextField source="shipTonBrutas" label="Ton Brutas" />
                    <TextField source="shipTonNetas" label="Ton Netas" />
                    <TextField source="shipCapAcarreo" label="Cap Acarreo" />
                    <TextField source="shipCapBodega" label="Cap Bodega" />
                    <TextField source="shipSisConservacion" label="Conservación" />
                    <TextField source="shipCalado" label="Calado" />
                    <TextField source="shipMotorSerie" label="Serie Motor" />
                    <TextField source="shipMotorModelo" label="Modelo Motor" />
                    <TextField source="shipMotorMarca" label="Marca Motor" />
                    <TextField source="shipMotorPotencia" label="Potencia Motor" />
                    <TextField source="shipPesqueraRnp" label="RnP Pesquera" />
                    <TextField source="shipRnp" label="RnP" />
                    <TextField source="shipMatricula" label="Matricula" />
                    <TextField source="shipPermisoCamaron" label="Permiso Camarón" />
                    <TextField source="shipPermisoCamaronExpedicion" label="Expedición Permiso Camarón" />
                    <TextField source="shipPermisoCamaronVencimiento" label="Vencimiento Permiso Camarón" />
                    <TextField source="shipPermisoEscama" label="Permiso Escama" />
                    <TextField source="shipPermisoEscamaExpedicion" label="Expedición Permiso Escama" />
                    <TextField source="shipPermisoEscamaVencimiento" label="Vencimiento Permiso Escama" />
                    <TextField source="shipStatus" label="Estado" />
                    <EditButton />
                </Datagrid>
            }
        />
    </List>
);

export const EditShip = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <DisabledInput source="shipId"  label="Id" />
            <TextInput source="shipName" label="Nombre" />
            <TextInput source="shipAnoConstruccion" label="Año" />
            <TextInput source="shipEslora" label="Eslora" />
            <TextInput source="shipManga" label="Manga" />
            <TextInput source="shipPuntal" label="Puntual" />
            <TextInput source="shipTonBrutas" label="Ton Brutas" />
            <TextInput source="shipTonNetas" label="Ton Netas" />
            <TextInput source="shipCapAcarreo" label="Cap Acarreo" />
            <TextInput source="shipCapBodega" label="Cap Bodega" />
            <TextInput source="shipSisConservacion" label="Conservación" />
            <TextInput source="shipCalado" label="Calado" />
            <TextInput source="shipMotorSerie" label="Serie Motor" />
            <TextInput source="shipMotorModelo" label="Modelo Motor" />
            <TextInput source="shipMotorMarca" label="Marca Motor" />
            <TextInput source="shipMotorPotencia" label="Potencia Motor" />
            <TextInput source="shipPesqueraRnp" label="RnP Pesquera" />
            <TextInput source="shipRnp" label="RnP" />
            <TextInput source="shipMatricula" label="Matricula" />
            <TextInput source="shipPermisoCamaron" label="Permiso Camarón" />
            <TextInput source="shipPermisoCamaronExpedicion" label="Expedición Permiso Camarón" />
            <TextInput source="shipPermisoCamaronVencimiento" label="Vencimiento Permiso Camarón" />
            <TextInput source="shipPermisoEscama" label="Permiso Escama" />
            <TextInput source="shipPermisoEscamaExpedicion" label="Expedición Permiso Escama" />
            <TextInput source="shipPermisoEscamaVencimiento" label="Vencimiento Permiso Escama" />
            <TextInput source="shipStatus" label="Estado" />
        </SimpleForm>
    </Edit>
);


export const CreateShip = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="shipName" label="Nombre" />
            <TextInput source="shipAnoConstruccion" label="Año" />
            <TextInput source="shipEslora" label="Eslora" />
            <TextInput source="shipManga" label="Manga" />
            <TextInput source="shipPuntal" label="Puntual" />
            <TextInput source="shipTonBrutas" label="Ton Brutas" />
            <TextInput source="shipTonNetas" label="Ton Netas" />
            <TextInput source="shipCapAcarreo" label="Cap Acarreo" />
            <TextInput source="shipCapBodega" label="Cap Bodega" />
            <TextInput source="shipSisConservacion" label="Conservación" />
            <TextInput source="shipCalado" label="Calado" />
            <TextInput source="shipMotorSerie" label="Serie Motor" />
            <TextInput source="shipMotorModelo" label="Modelo Motor" />
            <TextInput source="shipMotorMarca" label="Marca Motor" />
            <TextInput source="shipMotorPotencia" label="Potencia Motor" />
            <TextInput source="shipPesqueraRnp" label="RnP Pesquera" />
            <TextInput source="shipRnp" label="RnP" />
            <TextInput source="shipMatricula" label="Matricula" />
            <TextInput source="shipPermisoCamaron" label="Permiso Camarón" />
            <TextInput source="shipPermisoCamaronExpedicion" label="Expedición Permiso Camarón" />
            <TextInput source="shipPermisoCamaronVencimiento" label="Vencimiento Permiso Camarón" />
            <TextInput source="shipPermisoEscama" label="Permiso Escama" />
            <TextInput source="shipPermisoEscamaExpedicion" label="Expedición Permiso Escama" />
            <TextInput source="shipPermisoEscamaVencimiento" label="Vencimiento Permiso Escama" />
            <TextInput source="shipStatus" label="Estado" />
        </SimpleForm>
    </Create>
);