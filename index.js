// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(driver => driver.revenue > revenue);
};
function driverNamesWithRevenueOver(drivers, revenue) {
  const filtered_drivers = driversWithRevenueOver(drivers, revenue);
  return filtered_drivers.map(driver => driver.name);
};
function exactMatch() {

}
