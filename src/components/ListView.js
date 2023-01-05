import React from "react";
import PropTypes from "prop-types";
import ShopItem from "./ShopItem";

export default function ListView( { items } ) {
    return (
        <div className="ListView">
            {items.map((item) => {
                return (
                    <ShopItem item={item} key={item.name + item.color}/>
                )
            })}
        </div>
    );
}

ListView.propTypes = {
    item: PropTypes.object.isRequired,
}
