import  { roadLogistics as RoadLogistics, seaLogistics as SeaLogistics, airLogistics as AirLogistics } from './transport';
type LogisticsType = 'road' | 'sea' | 'air';
function createLogistics(type: LogisticsType) {
    switch (type) {
        case 'road':
            return new RoadLogistics();
        case 'sea':
            return new SeaLogistics();
        case 'air':
            return new AirLogistics();
        default:
            throw new Error('Invalid logistics type');
    }
}
let seaLogisticsInstance = createLogistics('sea');
seaLogisticsInstance.planDelivery(); // Output: Planning sea delivery...
seaLogisticsInstance.createTransport(); // Output: Creating sea transport...
let roadLogisticsInstance = createLogistics('road');
roadLogisticsInstance.planDelivery(); // Output: Planning road delivery...
roadLogisticsInstance.createTransport(); // Output: Creating road transport...
let airLogisticsInstance = createLogistics('air');
airLogisticsInstance.planDelivery(); // Output: Planning air delivery...
airLogisticsInstance.createTransport(); // Output: Creating air transport...