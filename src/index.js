import { equal, index, clone, isEmpty, type, trim, toQueryString } from './object';
import { toHump, toHyphen, toFormData } from './string';
import { toPercentile, toThousands } from './number';
import { copyText, getTextWidth } from './text';
import { download } from './file';
import moment from './time';


const ShuyunUtils = {
	copyText,
    getTextWidth,
    moment,
    equal,
    index,
    clone,
    isEmpty,
    type,
    trim,
    toQueryString,
    toHump,
    toHyphen,
    toFormData,
    toPercentile,
    toThousands,
    download
};

export default ShuyunUtils;

module.exports = ShuyunUtils;

