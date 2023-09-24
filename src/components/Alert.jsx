import React from 'react';

const Alert = (props) => {
    return (
        <div style={{ height: "60px" }}>
            {props.alert &&
                <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                    <strong>{(props.alert.type === "success" ? "Success" : "")}</strong> {props.alert.msg}
                    {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
                </div>}
        </div>
    )
}

export default Alert;
