import React, { Fragment } from 'react'
import { Route } from 'react-router-dom';

const AdminLayout = (props) => {
    return (
        <Fragment>
            {props.children}
        </Fragment>
    )
}

export default function AdminTemplate({ Component, ...props }) {
    return (
        <Route
            {...props}
            render={propsComponent => (
                <AdminLayout>
                    <Component {...propsComponent} />
                </AdminLayout>
            )}
        />

    )
}
