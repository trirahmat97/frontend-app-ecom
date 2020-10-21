import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { makeStyles } from '@material-ui/core/styles';

const items = [
    { name: 'home', label: 'Home' },
    {
        name: 'billing',
        label: 'Billing',
        items: [
            { name: 'statements', label: 'Statements' },
            { name: 'reports', label: 'Reports' },
        ],
    },
    {
        name: 'settings',
        label: 'Settings',
        items: [
            { name: 'profile', label: 'Profile' },
            { name: 'insurance', label: 'Insurance' },
            {
                name: 'notifications',
                label: 'Notifications',
                items: [
                    { name: 'email', label: 'Email' },
                    {
                        name: 'desktop',
                        label: 'Desktop',
                        items: [
                            { name: 'schedule', label: 'Schedule' },
                            { name: 'frequency', label: 'Frequency' },
                        ],
                    },
                    { name: 'sms', label: 'SMS' },
                ],
            },
        ],
    },
];

const useStyles = makeStyles((theme) => ({
    sidebar: {
        maxWidth: '300px',
        border: '1px solid rgba(0, 0, 0, 0.1)'
    },
    sidebarSubmitText: {
        fontSize: '0.8rem'
    }
}));

function SidebarItem({ label, items, depthStep = 10, depth = 0, ...rest }) {
    return (
        <div>
            <ListItem button dense {...rest}>
                <ListItemText style={{ paddingLeft: depth * depthStep }}>
                    <span>{label}</span>
                </ListItemText>
            </ListItem>
            {Array.isArray(items) ? (
                <List disablePadding dense>
                    {items.map((subItem) => (
                        <SidebarItem
                            key={subItem.name}
                            depth={depth + 1}
                            depthStep={depthStep}
                            {...subItem}
                        />
                    ))}
                </List>
            ) : null}
        </div>
    )
};

function Sidebar({ depthStep, depth }) {
    const classes = useStyles();
    return (
        <div className={classes.sidebar}>
            <List disablePadding dense>
                {items.map((sidebarItem, index) => (
                    <SidebarItem
                        key={`${sidebarItem.name}${index}`}
                        depthStep={depthStep}
                        depth={depth}
                        {...sidebarItem}
                    />
                ))}
            </List>
        </div>
    )
}

export default Sidebar;