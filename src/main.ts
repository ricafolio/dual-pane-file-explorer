import { App, Notice, Plugin, PluginSettingTab, Setting } from 'obsidian';
import { DualPaneView } from "./dual-pane-view"

interface MyPluginSettings {
	useCompact: boolean;
}

const DEFAULT_SETTINGS: MyPluginSettings = {
	useCompact: false
}

export default class MyPlugin extends Plugin {
	settings: MyPluginSettings;

	VIEW_TYPE = "dual-pane-view";

	async onload() {
		await this.loadSettings();

		// Register file tree view
		this.registerView(this.VIEW_TYPE, (leaf) => new DualPaneView(leaf));

		// This creates an icon in the left ribbon.
		const columnsIcon = this.addRibbonIcon('columns', 'Dual Pane File Explorer', async (evt: MouseEvent) => {
			new Notice('Welcome to dual pane file explorer!');
			await this.openDualPaneLeaf();
		});

		// open sidebar upon startup, not reco, add setting
		// this.app.workspace.onLayoutReady(async () => {
		// 	if (openOnStart) {
		//   await this.openDualPaneLeaf();
		//  }
		// });

		// Perform additional things with the ribbon
		columnsIcon.addClass('columns-icon');

		// This adds a settings tab
		this.addSettingTab(new SettingTab(this.app, this));

		// If the plugin hooks up any global DOM events (on parts of the app that doesn't belong to this plugin)
		// Using this function will automatically remove the event listener when this plugin is disabled.
		this.registerDomEvent(document, 'click', (evt: MouseEvent) => {
			console.log('click', evt);
		});

		// When registering intervals, this function will automatically clear the interval when the plugin is disabled.
		this.registerInterval(window.setInterval(() => console.log('setInterval'), 5 * 60 * 1000));
	}

	async onunload() {

	}

	async loadSettings() {
		this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
	}

	async saveSettings() {
		await this.saveData(this.settings);
	}

	async openDualPaneLeaf() {
		const leaf = this.app.workspace.getLeftLeaf(false);
		await leaf.setViewState({ type: this.VIEW_TYPE });
		this.app.workspace.revealLeaf(leaf);
	}
}

class SettingTab extends PluginSettingTab {
	plugin: MyPlugin;

	constructor(app: App, plugin: MyPlugin) {
		super(app, plugin);
		this.plugin = plugin;
	}

	display(): void {
		const {containerEl} = this;

		containerEl.empty();

		new Setting(containerEl)
			.setName('Compact mode')
			.setDesc('Use compact style for file list')
			.addToggle(toggle =>
				toggle
				.setValue(this.plugin.settings.useCompact)
				.onChange(async (value) => {
					this.plugin.settings.useCompact = value;
					await this.plugin.saveSettings();
					new Notice('Compact file tree enabled');
					// do setting effect //
				})
			)
	}
}
