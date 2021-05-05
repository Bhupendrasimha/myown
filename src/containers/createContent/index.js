import ButtonOutline from "../../components/buttons/buttonOutline";
import ButtonPrimary from "../../components/buttons/buttonPrimary";
import HtmlEditor from "../../components/htmlEditor";
import InputPrimary from "../../components/inputPrimary";
import InputColor from "../../components/inputColor";
import MainContainer from "../../components/mainContainer";
import SelectPrimary from "../../components/selectPrimary";
import UploadFile from "../../components/uploadFile";
import { useState } from "react";
import { Field, Formik } from "formik";
import * as UserActions from "../../store/article/action";
import { useDispatch, useSelector } from "react-redux";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
// Styles
import "./styles.scss";
//import { setArticle } from "../../store/article/actionCreator";

function CreateContent(props) {
  const [select, setSelect] = useState({});
  const [publish, setPublish] = useState(false);
  const [colour,setColour] =useState("");
  const [count, setCount] = useState(0);
  const [article, setArticle] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [visible, setVisible] = useState(false);
  let children = [];
  const dispatch = useDispatch();
  const [articleID, setArticleId] = useState(1);
  const articlenum = useSelector((state) => state.Article.postData);
  const [imageUploadId,setImageUploadId]=useState('')
//
  const handleSections = ()=>{
  //  setCount(count + 1);
  setArticle([...article,{text_content:"",media_content:[]}])
  console.log(article)
  console.log("1")
  };
  const handlePublish = () => {
    console.log(title, description);
    console.log(publish);
    const data = {
      title: title,
      short_description: description,
      publish: publish,
    };
    const newData = JSON.stringify(data);
    console.log(newData, "newData");

    // data.short_description=description
    // data.publish=publish
    console.log(data);
  };
  // const ApiCall = async (values) => {
  //   console.log(values);
  //   await dispatch(postArticle(values));
  // };

  const handleDescription = (data,className,id) => {
 console.log(data,className)
 //if(["article"].includes(className)){
 let articles=[...article,data]
 articles[id].text_content=data
 // article[id][className]=data
  console.log(articles)
     console.log(article)
  
  
 
//}
  };
  const handleFile=(file,id)=>{
   let files=[...article,file]
 files[id].media_content=file
 // article[id][className]=data
  console.log(files)
     console.log(article)
   
    //setArticle({})
  }
  console.log(select)
console.log(imageUploadId)
  const handlearticles = (e) => {
    console.log(e.target.value);
  };

  let cat = "d6f8d3d6-76f5-4ebc-8510-68799b662ff6";
  return (
    <div className="create-content-style">
      <MainContainer pageTitle="Add Content" backButton>
        <Formik
          enableReinitialize
          initialValues={{
            title: "",
            short_description: "",
            //color: colour,
            category: cat,
          }}
          // validationSchema={yup.object().shape({
          //   email: yup.string().email().required("Email is required"),
          //   password: yup.string().required("Password is required"),
          // })}
          onSubmit={async (values) => {
            setVisible(!visible);
            console.log(JSON.stringify(values));
            //  handlePublish()
            const response = await props.postData(JSON.stringify(values));
            console.log(response);
            if (response?.success) {
              // handleClick();
            } else {
              console.log("error", response);
            }
          }}
        >
          {({ values, setFieldValue, submitForm }) => (
            <div>
              <div className="card" style={{ background: `${colour}` }}>
                <div className="info-content">
                  <h4 className="title4">Basic Information</h4>
                  <div className="description">
                    Some preliminary information about the content
                  </div>
                </div>
                <div className="row mt--25">
                  <div className="col-sm-6">
                    <Field
                      component={InputPrimary}
                      label="Title"
                      placeholder="Title"
                      value={values.title}
                      name="title"
                    />
                  </div>
                  <div className="col-sm-6">
                    <Field
                      component={InputPrimary}
                      label="Description"
                      placeholder="Choose"
                      value={values.description}
                      name="short_description"
                    />
                  </div>
                </div>
                <div className="row mt--25">
                  <div className="col-sm-6">
                    <SelectPrimary
                      lable="Category"
                      placeholder="Choose"
                      setSelect={setSelect}
                      options={["test1", "test2", "test3"]}
                    />
                  </div>
                  <div className="col-sm-6">
                  <InputColor
                      label="Background Colour"
                      placeholder="Choose"
                      name="color"
                      setColour={setColour}
                   
                    />
                  </div>
                </div>

{article.length > 0 &&article.map((val,idx)=>{
  let artId=`Art-${idx}`
  return(
    <div className="row mt--25" key={idx} >
    <div className="col-sm-12">
      <HtmlEditor onChange={handleDescription} setImageUploadId={setImageUploadId}id={idx}  name= {`article-${idx}`} className="article" />
    </div>
  </div>
)
  })
}
                {/* {Array(count).fill(
                  <div className="row mt--25" id={count}>
                    <div className="col-sm-12">
                      <HtmlEditor onChange={handleDescription} />{" "}
                    </div>
                  </div>
                )} */}
                <div className="divider" />
<div>
                <div className="col-sm-12 d-flex justify-content-center">
                  <ButtonPrimary
                    title="Add Sections"
                    btnStyle="sm"
                    onClick={submitForm}
                  />
                </div>
                </div>
                <div>
                {visible ? (
                  <div className="row">
                    <div className="col-sm-12">
                      <UploadFile onClick={handleSections} id={imageUploadId} handleFile={handleFile}/>
                    </div>
                  </div>
                ) : null}
                </div>
              </div>

              <div className="divider" />

              <div className="row">
                <div className="col-sm-12 d-flex justify-content-end">
                  <ButtonOutline title="Draft" btnStyle="mr--10 sm" />
                  <ButtonPrimary title="Publish" btnStyle="sm" />
                 
                </div>
              </div>
            </div>
          )}
        </Formik>
      </MainContainer>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = (dispatch) => {
  return {
    postArticle: bindActionCreators(UserActions.postArticle, dispatch),
    postData: bindActionCreators(UserActions.postData, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateContent);
