import React from "react";
import { Row, Col } from "reactstrap";

const Footer = () => {
  const totalView = 1;
  const todayView = 2;

  return (
    <div id="main-footer" className="text-center p-2">
      <Row>
        <Col>
          <p>김 현 지 Hyeonji Kim</p>
          <p>
            todayView : {todayView} | totalView : {totalView}
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
