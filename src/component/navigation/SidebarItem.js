import React, { useState } from 'react';
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import Collapse from "@material-ui/core/Collapse";
import Icon from '@material-ui/core/Icon';
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";

const SidebarItem = ({ depthStep = 10, depth = 0, expanded, item, ...rest }) => {
    const [collapsed, setCollapsed] = useState(true);
    const { label, items, icon, onClick: onClickProp } = item;

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
                    {icon ? <Icon className="sidebar-item-icon" fontSize="small">{icon}</Icon> : <Icon className="sidebar-item-icon" fontSize="small">fiber_manual_record</Icon>}
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
};

export default SidebarItem;