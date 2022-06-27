export const Tabs = {
	navTabs: [],
	paneTabs: [],
	activeElement: null,
	duration: 500,
	init: function () {
		this.paneTabs = this.getpaneTabs();
		this.navTabs = this.getnavTabs();
		if (this.navTabs.length > 0 && this.paneTabs.length > 0) {
			this.navTabs.forEach((e) => e.addEventListener('click', this.onClick.bind(this))); // add click listener to nav tabs
			this.navTabs[0].classList.add('active');
			this.paneTabs[0].classList.add('show');
			this.getLocationUrl();
		}
	},
	onClick: function (event) {
		event.preventDefault();
		this.handleNavActiveState(event.currentTarget);
	},
	getpaneTabs: function () {
		return Array.from(document.querySelectorAll('[data-pane]'));
	},
	getnavTabs: function () {
		return Array.from(document.querySelectorAll('[data-target'));
	},
	getPaneByTarget: function (element) {
		const foundPane = this.paneTabs.find((e) => e.dataset.pane == element.dataset.target);
		if (typeof foundPane === 'undefined') return null;
		else return foundPane;
	},
	handleNavActiveState: function (element) {
		if (!element.classList.contains('active')) {
			this.clearNavTabsState();
			element.classList.add('active');
			const targetPane = this.getPaneByTarget(element);
			if (targetPane != null) this.clearPaneTabsState(targetPane);
		}
	},
	clearNavTabsState: function () {
		this.navTabs.forEach((e) => e.classList.remove('active'));
	},
	clearPaneTabsState: function (targetPane) {
		const leavingPane = this.paneTabs.find((e) => e.classList.contains('show'));
		leavingPane.classList.toggle('leave');
		setTimeout(() => {
			this.paneTabs.forEach((e) => e.classList.remove('show', 'leave'));
			targetPane.classList.toggle('show');
		}, this.duration);
	},
	getLocationUrl: function () {
		const url = new URL(location);
		if (url.hash) {
			const activeElement = document.querySelector(url.hash);
			this.handleNavActiveState(activeElement);
		}
	},
};
