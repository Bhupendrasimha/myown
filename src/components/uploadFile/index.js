import { Upload, message } from "antd";

// Styles
import "./styles.scss";

function UploadFile(props) {
  const { Dragger } = Upload;
  const dummyRequest = ({ file, onSuccess }) => {
    setTimeout(() => {
      console.log(file)
   props.handleFile(file,props.id)
      onSuccess("ok");
    }, 0);
  };
  const propsSection = {
    name: "file",
    multiple: true,
  //"https://www.mocky.io/v2/5cc8019d300000980a055e76",
    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };
  return (
    <>
      <div className={`upload-style`}>
        
          <div className="uploading">
            <div className="upload-box">
              <button className="btn-upload" onClick={props.onClick}>Add Text</button>
              <p className="ant-upload-hint">Or drag and drop files</p>
            </div>
            <div>
              <hr className="line" />
            </div>
            <Dragger customRequest={dummyRequest}>
            <div className="upload-box"  >
              <button className="btn-upload">Add File</button>
              <p className="ant-upload-hint">Or drag and drop files</p>
            </div>
            </Dragger>
          </div>
      
      </div>
    </>
  );
}

export default UploadFile;
