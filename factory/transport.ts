class transport {
     planDelivery() {
        // Logic to plan delivery
        console.log("Planning delivery...");
    }
    createTransport() {
        // Logic to create transport
        console.log("Creating transport...");
    }
}
class roadLogistics extends transport{
    planDelivery() {
        // Custom logic for road logistics delivery planning
        console.log("Planning road delivery...");
    }
    createTransport() {
        // Custom logic for creating road transport
        console.log("Creating road transport...");
    }
}
class seaLogistics extends transport{
    planDelivery() {
        // Custom logic for sea logistics delivery planning
        console.log("Planning sea delivery...");
    }
    createTransport() {
        // Custom logic for creating sea transport
        console.log("Creating sea transport...");
    }
}
class airLogistics extends transport{
    planDelivery() {
        // Custom logic for air logistics delivery planning
        console.log("Planning air delivery...");
    }
    createTransport() {
        // Custom logic for creating air transport
        console.log("Creating air transport...");
    }
}
export { transport, roadLogistics, seaLogistics, airLogistics };