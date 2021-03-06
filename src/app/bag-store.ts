import Immutable = require('immutable');
import { createStore } from 'redux';
import { IBagAction } from './actions';
import { reducer } from './reducer';

export class Bag {
    size: string;
    price: number;
}

export class BagStore {

    store = createStore(reducer, Immutable.List<Bag>());

    get bags(): Immutable.List<Bag> {
        return this.store.getState();
    }

    get totalCost(): number {
        return this.bags.reduce((prev, curr) => prev + curr.price, 0);
    }

    dispatch(action: IBagAction) {
        this.store.dispatch(action);
    }
}
