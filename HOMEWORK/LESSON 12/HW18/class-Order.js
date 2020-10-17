store = new StoreService();
class Order {
    constructor({
        size,
        ingridient,
        status
    }) {
        this.size = size;
        this.ingridient = ingridient;
        this.status = status;
    }
    static getOrderBySize(size) {
        let foundOrder = order.getItem('size', size);
        return foundOrder;
    }
    static getOrderByStatus(status) {
        let foundOrder = order.getItem('status', status);
        return foundOrder;
    }
    static createOrder(data) {
        order.setItem(new Order(data));
    }
    static changeStatus(status, newStatus) {
        let foundOrder = order.getItem('status', status);
        foundOrder.status = newStatus;
        return foundOrder;
    }
}
