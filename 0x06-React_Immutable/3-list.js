import { list } from 'immutable';
import { List } from './node_modules/immutable/dist/immutable';

export default function getListObject(array) {
    return List(array);
}
export default function addElementToList(list, element) {
    return list.push(element);
}