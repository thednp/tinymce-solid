const tinymceURL = import.meta.env.MODE === 'production'
    ? './assets/tinymce/tinymce.min.js' // the tinymce is copied to dist at build time
    : '/node_modules/tinymce/tinymce.js';

export default tinymceURL;
