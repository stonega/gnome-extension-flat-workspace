const Main = imports.ui.main
let panel = Main.panel
let indicator = panel.statusArea['appMenu']

function enable() {
    indicator._iconBox.hide()
}

function init() {}

function disable() {
    indicator._iconBox.show()
}
