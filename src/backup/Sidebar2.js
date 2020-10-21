import React, { useEffect, useState } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import Collapse from "@material-ui/core/Collapse";
import Icon from '@material-ui/core/Icon';

//api
import apis from '../apis/apis';

// import HomeIcon from "@material-ui/icons/Home";
// import ReceiptIcon from "@material-ui/icons/Receipt";
// import NotificationsIcon from "@material-ui/icons/Notifications";
// import DesktopWindowsIcon from "@material-ui/icons/DesktopWindows";
// import SettingsIcon from "@material-ui/icons/Settings";
// import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';

function onClick(e, item) {
    window.alert(JSON.stringify(item, null, 2));
}


function SidebarItem({ depthStep = 10, depth = 0, expanded, item, ...rest }) {
    const [collapsed, setCollapsed] = React.useState(true);
    const { label, items, icon, onClick: onClickProp } = item;
    console.log(icon);

    function toggleCollapse() {
        setCollapsed(prevValue => !prevValue);
    }

    function onClick(e) {
        if (Array.isArray(items)) {
            toggleCollapse();
        }
        if (onClickProp) {
            onClickProp(e, item);
        }
    }

    let expandIcon;

    if (Array.isArray(items) && items.length) {
        expandIcon = !collapsed ? (
            <ExpandLessIcon
                className={
                    "sidebar-item-expand-arrow" + + " sidebar-item-expand-arrow-expanded"
                }
            />
        ) : (
                <ExpandMoreIcon className="sidebar-item-expand-arrow" />
            );
    }

    return (
        <div>
            <ListItem
                className="sidebar-item"
                onClick={onClick}
                button
                dense
                {...rest}
            >
                <div
                    style={{ paddingLeft: depth * depthStep }}
                    className="sidebar-item-content"
                >
                    {icon && <Icon className="sidebar-item-icon" fontSize="small">{icon}</Icon>}
                    <div className="sidebar-item-text">{label}</div>
                </div>
                {expandIcon}
            </ListItem>
            <Collapse in={!collapsed} timeout="auto" unmountOnExit>
                {Array.isArray(items) ? (
                    <List disablePadding dense>
                        {items.map((subItem, index) => (
                            <React.Fragment key={`${subItem.name}${index}`}>
                                {subItem === "divider" ? (
                                    <Divider style={{ margin: "6px 0" }} />
                                ) : (
                                        <SidebarItem
                                            depth={depth + 1}
                                            depthStep={depthStep}
                                            item={subItem}
                                        />
                                    )}
                            </React.Fragment>
                        ))}
                    </List>
                ) : null}
            </Collapse>
        </div>
    );
}

const Sidebar2 = ({ depthStep, depth, expanded }) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        apis.get('/category')
            .then(res => {
                console.log(res.data.values);
                setItems([...res.data.values]);
            })
            .catch(err => console.log(err));
    }, []);
    return (
        <div className="sidebar">
            Cateory
            <List disablePadding dense>
                {items.map((sidebarItem, index) => (
                    <React.Fragment key={`${sidebarItem.name}${index}`}>
                        {sidebarItem === "divider" ? (
                            <Divider style={{ margin: "6px 0" }} />
                        ) : (
                                <SidebarItem
                                    depthStep={depthStep}
                                    depth={depth}
                                    expanded={expanded}
                                    item={sidebarItem}
                                />
                            )}
                    </React.Fragment>
                ))}
            </List>
        </div>
    );
}

export default Sidebar2;