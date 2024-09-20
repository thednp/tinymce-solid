import SolidEditor, { type IAllProps } from '~/index'

const tinymceURL = import.meta.env.BASE_URL + "tinymce/tinymce.js";

export const Editor = (props: IAllProps) =>
    <SolidEditor { ...props } licenseKey="gpl" tinymceScriptSrc={tinymceURL} />;