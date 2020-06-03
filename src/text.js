/**
 * 将文本放粘贴板
 * @param text
 * @returns {boolean}: 是否复制成功
 */
export const copyText = text => {
	const ele = document.createElement('input');
	ele.style.cssText = 'position:absolute;top:0;z-index: -999;';
	ele.value = text;
	document.body.appendChild(ele);

	ele.select();

	// 复制触焦节点的文本
	const isSuccess = document.execCommand('copy');

	ele.remove();
	return isSuccess;
};

/**
 * 获取文本所占宽度
 * @param text
 * @returns {number}
 */
export const getTextWidth = text => {

	const element = document.createElement('div');

	element.style.display = 'inline-block';
	element.style.opacity = '0';
	element.innerText = text;

	document.body.appendChild(element);

	const { width } = window.getComputedStyle(element);

	document.body.removeChild(element);

	return parseInt(width, 10);
};
