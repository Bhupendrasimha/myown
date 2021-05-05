import {CKEditor} from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Font from "@ckeditor/ckeditor5-font/src/font";


// Styles
import "./styles.scss";



function HtmlEditor(props) {
 
  return (
    
   <>
    <div className={`html-editor-style`} >
     {props.lable && (
        <div className={`label-style ${props.labelStyle}`}>{props.lable}</div>
      )}

      <CKEditor
        editor={ClassicEditor}
      
      
        data={props.data}
        onReady={(editor) => {
          // You can store the "editor" and use when it is needed.
          console.log("Editor is ready to use!", editor);
        }}
                   
        onChange={(event,editor)=>{
          console.log(editor)
          let data=editor.getData()
          props.onChange(data,props.className,props.id)
        }}
        
        onBlur={(event, editor) => {
          console.log("Blur.", event,editor);
        }}
        onFocus={(event, editor,data) => {
          console.log("Focus.",event, editor);
          props.setImageUploadId(props.id)
          
        }}
      />
    </div>
</>    
  );
}

export default HtmlEditor;
