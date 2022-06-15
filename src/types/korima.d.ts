interface KorimaJSON {
  // unique id of extensions, e.g. contacts
  id: string;
  /* the name of the extension (e.g. Contacts) or
  a map of language / name pairs (e.g. {
    "en": "Contacts",
    "de": "Kontakte"
  })
  */
  name:
    | string
    | {
        [key: string]: string;
      };
  // a short description of the extension
  description:
    | string
    | {
        [key: string]: string;
      };
  web?: string;
  lib?: string;
}
