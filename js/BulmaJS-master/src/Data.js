class Data {
    constructor() {
        this._data = {};
    }

    set(uid, key, value) {
        if(!Object.prototype.hasOwnProperty.call(this._data, uid)) {
            this._data[uid] = {};
        }

        this._data[uid][key] = value;
    }

    get(uid, key) {
        if(!Object.prototype.hasOwnProperty.call(this._data, uid)) {
            return undefined;
        }

        return this._data[uid][key];
    }

    destroy(uid) {
        if(Object.prototype.hasOwnProperty.call(this._data, uid)) {
            delete this._data[uid];
        }
    }
}

Data.uid = 1;

export default Data;