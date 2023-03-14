// @ts-nocheck
function activateFocusMode() {}

function removeTag() {
	console.log('document', document)
	const recommendationGrid = document
		.querySelector('ytd-rich-grid-renderer')
		?.remove()
}

const filter = {}

chrome.webNavigation.onCommitted.addListener(
	(details) => {
		chrome.scripting
			.executeScript({
				target: {tabId: details.tabId},
				function: removeTag,
			})
			.then((args) => {
				console.log('Hello loaded', args)
			})
	},
	{
		url: [{hostSuffix: '.youtube.com'}],
	}
)
