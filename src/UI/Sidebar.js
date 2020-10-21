import React, { useEffect, useState } from "react";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";

import apis from '../apis/apis';
import SidebarItem from '../component/navigation/SidebarItem';

const Sidebar = ({ depthStep, depth, expanded }) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        apis.get('/category')
            .then(res => {
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

export default Sidebar;