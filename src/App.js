import React from 'react';
import { jsonServerRestClient, Admin, Resource, Delete } from 'admin-on-rest';

import { ClientList, EditClient, CreateClient } from './client';
import { CrewList, EditCrew, CreateCrew } from './crew';
import { EmployeeList, EditEmployee, CreateEmployee } from './employee';
import { InventoryList, EditInventory, CreateInventory } from './inventory';
import { InventoryDetailList, EditInventoryDetail, CreateInventoryDetail } from './inventoryDetail';
import { PriceList, EditPrice, CreatePrice } from './price';
import { ReturnList, EditReturn, CreateReturn } from './return';
import { RoleList, EditRole, CreateRole } from './role';
import { SaleList, EditSale, CreateSale } from './sale';
import { ShipList, EditShip, CreateShip } from './ship';
import { SpecieList, EditSpecie, CreateSpecie } from './specie';
import { TripList, EditTrip, CreateTrip } from './trip';


import Home from './home';
import authClient from './authClient';

import EmployeeIcon from 'material-ui/svg-icons/social/person';
import ClientIcon from 'material-ui/svg-icons/social/person';
import CrewIcon from 'material-ui/svg-icons/social/group';
import InventoryIcon from 'material-ui/svg-icons/action/book';
import InventoryDetailIcon from 'material-ui/svg-icons/action/description';
import PriceIcon from 'material-ui/svg-icons/editor/attach-money';
import ReturnIcon from 'material-ui/svg-icons/action/cached';
import RoleIcon from 'material-ui/svg-icons/action/assignment-ind';
import SaleIcon from 'material-ui/svg-icons/maps/local-atm';
import ShipIcon from 'material-ui/svg-icons/maps/directions-boat';
import SpecieIcon from 'material-ui/svg-icons/action/store';
import TripIcon from 'material-ui/svg-icons/action/today';

const App = () => (
    <Admin authClient={authClient} dashboard={Home} title="PPMC" restClient={jsonServerRestClient('http://127.0.0.1:3000/api/2')}>
        
        //
        <Resource name="cliente" list={ClientList} edit={EditClient} create={CreateClient} remove={Delete} icon={ClientIcon} />
        <Resource name="tripulacione" list={CrewList} edit={EditCrew} create={CreateCrew} remove={Delete} icon={CrewIcon}  />
        //Working Example
        <Resource name="empleado" list={EmployeeList} edit={EditEmployee} create={CreateEmployee} remove={Delete} icon={EmployeeIcon} />
        //END Working Example   
        <Resource name="inventario" list={InventoryList} edit={EditInventory} create={CreateInventory} remove={Delete} icon={InventoryIcon}  />
        <Resource name="detalleInventario" list={InventoryDetailList} edit={EditInventoryDetail} create={CreateInventoryDetail} remove={Delete} icon={InventoryDetailIcon}  />
        <Resource name="precio" list={PriceList} edit={EditPrice} create={CreatePrice} remove={Delete} icon={PriceIcon}  />
        <Resource name="devolucione" list={ReturnList} edit={EditReturn} create={CreateReturn} remove={Delete} icon={ReturnIcon}  />
        <Resource name="role" list={RoleList} edit={EditRole} create={CreateRole} remove={Delete} icon={RoleIcon}  />
        <Resource name="venta" list={SaleList} edit={EditSale} create={CreateSale} remove={Delete} icon={SaleIcon}  />
        <Resource name="barco" list={ShipList} edit={EditShip} create={CreateShip} remove={Delete} icon={ShipIcon}  />
        <Resource name="especie" list={SpecieList} edit={EditSpecie} create={CreateSpecie} remove={Delete} icon={SpecieIcon}  />
        <Resource name="viaje"list={TripList} edit={EditTrip} create={CreateTrip} remove={Delete} icon={TripIcon}  />
        //
    </Admin>
);

export default App;