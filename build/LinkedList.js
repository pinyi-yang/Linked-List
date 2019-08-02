"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ListNode_1 = __importDefault(require("./ListNode"));
class LinkedList {
    constructor(_head = null) {
        this._head = _head;
    }
    add(data) {
        let node = new ListNode_1.default(data);
        let currNode = this._head;
        if (!currNode) {
            this._head = node;
        }
        else {
            while (currNode.next) {
                currNode = currNode.next;
            }
            currNode.next = node;
        }
    }
    deleteAt(index) {
        let current = this._head;
        if (!current) {
            return null;
        }
        if (index == 0) {
            this._head = current.next;
            let data = current.data;
            current.next = null;
            current.data = null;
            return data;
        }
        if (current) {
            let last = current;
            let next = current.next;
            while (index >= 1 && next) {
                last = current;
                current = next;
                next = current.next;
                index--;
            }
            if (index == 0) {
                last.next = next;
                let data = current.data;
                current.data = null;
                current.next = null;
                return data;
            }
            return null;
        }
    }
    insertAt(index, data) {
        let node = new ListNode_1.default(data);
        let current = this._head;
        if (index == 0) {
            node.next = current;
            this._head = node;
            return;
        }
        if (!current) {
            console.log('error: index out of list range');
        }
        else {
            let counter = 0;
            let last = current;
            while (counter < index && current.next) {
                last = current;
                current = current.next;
                counter++;
            }
            if (counter == index) {
                last.next = node;
                node.next = current;
            }
            else {
                console.log('error: index out of list range');
            }
        }
    }
    print() {
        //print to console!
        if (this._head !== null) {
            let arr = [];
            let current = this._head;
            while (current.next !== null) {
                arr.push(current.data);
                current = current.next;
            }
            arr.push(current.data);
            console.log(arr);
        }
        else {
            console.log('empty list');
        }
    }
}
// test
let linky = new LinkedList();
linky.add('Hello, ');
linky.add('World');
// linky.insertAt(0, 'Hello0');
linky.print();
linky.insertAt(1, 'Hello1');
linky.print();
linky.insertAt(3, 'Hello3');
linky.print();
//# sourceMappingURL=LinkedList.js.map