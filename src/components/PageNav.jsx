import React from "react";
import { Link } from "react-router-dom";

export default function () {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          {" "}
          <Link to="product">Product</Link>
        </li>
        <li>
          {" "}
          <Link to="pricing">Pricing</Link>
        </li>
      </ul>
    </div>
  );
}
