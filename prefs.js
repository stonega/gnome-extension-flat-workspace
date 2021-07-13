const { GObject, Gtk, Gio } = imports.gi;
const Extension = imports.misc.extensionUtils.getCurrentExtension();

const SCHEMA_NAME = "org.gnome.shell.hide-app-icon";

let Fileds = {
  COLORFY: "colorfy-icon",
  HIDE: "hide-icon",
};

getSchema = function () {
  let schemaDir = Extension.dir.get_child("schemas").get_path();
  let schemaSource = Gio.SettingsSchemaSource.new_from_directory(
    schemaDir,
    Gio.SettingsSchemaSource.get_default(),
    false
  );
  let schema = schemaSource.lookup(SCHEMA_NAME, false);

  return new Gio.Settings({ settings_schema: schema });
};

let SettingSchema = getSchema();


