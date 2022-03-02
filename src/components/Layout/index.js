import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Message } from "semantic-ui-react";
import { clearError } from "../../actions";
import Menu from "../Menu";
import "./styles.css";

const Layout = ({ children }) => {
  const errorMessage = useSelector((state) => state.errorMessage);
  const dispatch = useDispatch();

  const handleDismiss = () => {
    dispatch(clearError());
  };

  return (
    <div>
      <Menu />
      {errorMessage && (
        <div className="wrapper">
          <Message
            onDismiss={handleDismiss}
            content={errorMessage}
            color="red"
          />
        </div>
      )}
      <div className="Layout-content">{children}</div>
    </div>
  );
};

export default Layout;
