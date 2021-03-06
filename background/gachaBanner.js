/*
 * @Author: zy9@github.com/zy410419243 
 * @Date: 2018-07-13 20:33:24 
 * @Last Modified by: zy9
 * @Last Modified time: 2018-07-14 22:22:32
 */
const initGacha = (url, checked) => {
	chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
		const port = chrome.tabs.connect(tabs[0].id, { name: 'popup_to_content' });

		port.postMessage({ message: 'init_eunuch', status: checked });
	});
};

module.exports = { initGacha };