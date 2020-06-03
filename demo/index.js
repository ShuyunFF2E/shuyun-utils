import { copyText, getTextWidth } from '../src/text';

function handleClick() {
	const renderDiv = document.querySelector('.renderDiv');
	const btn = document.getElementById('copyAction');
	const input = document.getElementById('copyText');

	btn.addEventListener('click', () => {
		copyText(input.value);

		const p = document.createElement('p');
		const text = `已经将【${document.querySelector('#copyText').value}】放至粘贴板<br/>当前文本宽度所占像素为: ${getTextWidth(input.value)}`;
		p.innerHTML = text;

		renderDiv.appendChild(p);
	});
}

handleClick();
