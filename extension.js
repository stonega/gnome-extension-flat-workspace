const Main = imports.ui.main

let workspaces = Main.overview.controls._workspacesDisplay._workspaces

function enable() {
	workspaces.forEach((w) => {
		w.add_style_class_name('workspace-background-flat')
	})
}

function init () {
	log('Remove workspace background shadow')
}

function disable() {
	workspaces.forEach((w) => {
		w.remove_style_class_name('workspace-background-flat')
	})
}