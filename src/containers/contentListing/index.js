import {Tabs, Table, Switch, Tag, Input} from "antd";
import {useHistory} from "react-router";
import ButtonOutline from "../../components/buttons/buttonOutline";
import ButtonPrimary from "../../components/buttons/buttonPrimary";
import MainContainer from "../../components/mainContainer";
import SelectPrimary from "../../components/selectPrimary";

// Styles
import "./styles.scss";

const {TabPane} = Tabs;

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows
    );
  },
};

function ContentListing() {
  const columns = [
    {
      title: "Content Title",
      dataIndex: "contentTitle",
    },
    {
      title: "Category",
      dataIndex: "category",
    },
    {
      title: "Reads",
      dataIndex: "reads",
    },
    {
      title: "Date Published",
      dataIndex: "datePublished",
    },
    {
      title: "Visibility",
      dataIndex: "visibility",
    },
  ];
  const data = [
    {
      key: "1",
      contentTitle: (
        <div className="table-info-section">
          <div className="img-box">
            <img src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80" alt="" />
          </div>
          <div className="text-section">
            <h5 className="title5">Osteoporosis quiz</h5>
            <p className="description">
              Testing knowledge of osteo, opportunity to share...
            </p>
          </div>
        </div>
      ),
      category: <Tag className="green-tag">Managing Osteoporosis</Tag>,
      reads: "1.2k",
      datePublished: "22 Oct, 2020",
      visibility: <Switch defaultChecked onChange={toggleChange} />,
    },
    {
      key: "2",
      contentTitle: (
        <div className="table-info-section">
          <div className="img-box">
            <img src="https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2389&q=80" alt=""/>
          </div>
          <div className="text-section">
            <h5 className="title5">Osteoporosis quiz</h5>
            <p className="description">
              Testing knowledge of osteo, opportunity to share...
            </p>
          </div>
        </div>
      ),
      category: <Tag className="blue-tag">Complications</Tag>,
      reads: "1.2k",
      datePublished: "24 May, 2020",
      visibility: <Switch defaultChecked onChange={toggleChange} />,
    },
    {
      key: "3",
      contentTitle: (
        <div className="table-info-section">
          <div className="img-box">
            <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80" alt=""/>
          </div>
          <div className="text-section">
            <h5 className="title5">Osteoporosis quiz</h5>
            <p className="description">
              Testing knowledge of osteo, opportunity to share...
            </p>
          </div>
        </div>
      ),
      category: <Tag className="warning-tag">About Osteoporosis</Tag>,
      reads: "1.2k",
      datePublished: "1 Feb, 2020",
      visibility: <Switch defaultChecked onChange={toggleChange} />,
    },
  ];

  function callback(key) {
    console.log(key);
  }

  function toggleChange(checked) {
    console.log(`switch to ${checked}`);
  }

  const {Search} = Input;
  const onSearch = (value) => console.log(value);

  let history = useHistory();

  function handleContent() {
    history.push("/create-content");
  }

  return (
    <div className="create-content-style">
      <MainContainer
        pageTitle="Content"
        rightSection={
          <div className="d-flex justify-content-end">
            <ButtonOutline title="Export" btnStyle="mr--10 sm" />
            <ButtonPrimary
              title="+ Add Content"
              btnStyle="sm"
              onClick={handleContent}
            />
          </div>
        }
      >
        <div className="card">
          <Tabs defaultActiveKey="1" onChange={callback}>
            <TabPane tab="Published" key="1">
              <div className="input-section">
                <SelectPrimary
                  inputStyle="select-style"
                  placeholder="Filter"
                  options={["test", "test1", "test2", "test3"]}
                />
                <div className="search-box border-style ml--10">
                  <Search placeholder="Search..." onSearch={onSearch} />
                </div>
              </div>

              <Table
                rowSelection={{
                  ...rowSelection,
                }}
                columns={columns}
                dataSource={data}
                size="small"
              />
            </TabPane>

            {/* tab 2 start */}
            <TabPane tab="Drafts" key="2">
              Coming Soon
            </TabPane>
          </Tabs>
        </div>
      </MainContainer>
    </div>
  );
}

export default ContentListing;
