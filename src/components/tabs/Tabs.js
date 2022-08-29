// import Box from "@mui/material/Box";
// import Tabsmui from "@mui/material/Tabs";
// import Tab from "@mui/material/Tab";
// import TabPanel from "@mui/lab/TabPanel";
// import TabContext from "@mui/lab/TabContext";
import { Tabs as Tabbs, Tab } from "react-bootstrap";

import TabContent from "./TabContent";
import TabHeader from "./TabHeader";
import { useSelector, useDispatch } from "react-redux";
import { activeTab, closeAllTabs } from "../../redux/features/tab/tabsSlice";
import { IoCloseSharp } from "react-icons/io5";

function Tabs() {
  const { tabs, activeKey } = useSelector((state) => state.tabs);
  const dispatch = useDispatch();
  return (
    <div style={{ width: "100%" }}>
      {tabs.length > 0 && (
        <Tabbs
          id="controlled-tab-example"
          activeKey={activeKey}
          className="mb-3"
          onSelect={(key) => dispatch(activeTab({ id: key }))}
        >
          {tabs.map((tab) => (
            <Tab key={tab.id} eventKey={tab.id} title={<TabHeader {...tab} />}>
              <TabContent {...tab} />
            </Tab>
          ))}
          <Tab
            key={"close-all"}
            eventKey={"close-all"}
            title={
              <IoCloseSharp
                className="text-danger"
                onClick={() => dispatch(closeAllTabs())}
              />
            }
          ></Tab>
        </Tabbs>
      )}
      {/* <TabContext value={activeKey.toString()}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabsmui
            value={activeKey.toString()}
            onChange={(key) => dispatch(activeTab({ id: key }))}
            aria-label="basics tabs example"
          >
            {tabs.map((tab, i) => (
              <Tab key={i.toString()} label={tab.title} />
            ))}
          </Tabsmui>
        </Box>
        {tabs.map((tab, i) => (
          <TabPanel key={tab.id} value={i.toString()} index={i}>
            <TabContent {...tab} />
          </TabPanel>
        ))}
      </TabContext> */}
    </div>
  );
}

export default Tabs;
