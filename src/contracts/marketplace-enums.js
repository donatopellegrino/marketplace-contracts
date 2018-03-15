// TODO: where should enums be so they'd stay synced automagically?
const ProductState = {
    NotDeployed: 0,                // non-existent or deleted
    Deployed: 1                    // created or redeployed
}
const Currency = {
    DATA: 0,
    USD: 1
}

module.exports = {
    ProductState,
    Currency
}