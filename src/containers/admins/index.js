import {Tabs, Table, Button, Input} from "antd";
import {MdDelete, MdModeEdit} from "react-icons/md";
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

function Admins() {
  const columns = [
    {
      title: "Name",
      dataIndex: "contentTitle",
    },
    {
      title: "Location",
      dataIndex: "location",
    },
    {
      title: "Date Joined",
      dataIndex: "dateJoined",
    },
  ];
  const data = [
    {
      key: "1",
      contentTitle: (
        <div className="table-info-section">
          <div className="img-box">
            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80" alt="" />
          </div>
          <div className="text-section">
            <h5 className="title5">Walter Gibson</h5>
          </div>
        </div>
      ),
      location: "Sawaynchester",
      dateJoined: "1 Feb, 2020",
    },
    {
      key: "2",
      contentTitle: (
        <div className="table-info-section">
          <div className="img-box">
            <img src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80" alt="" />
          </div>
          <div className="text-section">
            <h5 className="title5">Lenora Robinson</h5>
          </div>
        </div>
      ),
      location: "Kaydenville",
      dateJoined: "1 Feb, 2020",
    },
    {
      key: "3",
      contentTitle: (
        <div className="table-info-section">
          <div className="img-box">
            <img src="https://images.unsplash.com/photo-1554126807-6b10f6f6692a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80" alt="" />
          </div>
          <div className="text-section">
            <h5 className="title5">Walter Gibson</h5>
          </div>
        </div>
      ),
      location: "Sawaynchester",
      dateJoined: "1 Feb, 2020",
    },
  ];

  function callback(key) {
    console.log(key);
  }
  
  const {Search} = Input;
  const onSearch = (value) => console.log(value);

  let history = useHistory();

  function handleAdmin() {
    history.push("/add-admin");
  }

  return (
    <div className="admins-style">
      <MainContainer
        pageTitle="Admins"
        rightSection={
          <div className="d-flex justify-content-end">
            <ButtonOutline title="Export" btnStyle="mr--10 sm" />
            <ButtonPrimary
              title="+ Add Admin"
              btnStyle="sm"
              onClick={handleAdmin}
            />
          </div>
        }
      >
        <div className="card">
          <Tabs defaultActiveKey="1" onChange={callback}>
            <TabPane tab="Admins" key="1">
              <div className="action-section">
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

                <div className="edit-section">
                  <Button type="default" icon={<MdModeEdit />} size="middle" />
                  <Button type="default" icon={<MdDelete />} size="middle" />
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
            <TabPane tab="Clients" key="2">
              Coming Soon
            </TabPane>
            {/* tab 2 start */}
            <TabPane tab="Viewers" key="3">
              Coming Soon
            </TabPane>
          </Tabs>
        </div>
      </MainContainer>
    </div>
  );
}

export default Admins;
