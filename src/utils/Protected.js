import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const Protected = ({ children, type }) => {
    const { data: member } = useSelector((state) => state.user.meData)

    useEffect(() => { }, [member])

    if (member !== undefined && member !== null) {
        if (type === 'comp-auth') {
            return <>{children}</>;
        }
    } else {
        if (type === 'comp-guest') {
            return <>{children}</>;
        }
    }
}

export default Protected;
