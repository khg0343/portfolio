import React from "react";
import { Row, Col } from "reactstrap";

import { Button, IconButton } from "@mui/material";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const Header = () => {
  const lastEditDate = 16;
  return (
    <div id="main-header" className="mb-3">
      <Row>
        {/* <Col>icon</Col> */}
        <Col className="p-1" xs="auto">
          <Row className="px-2 m-1">
            <Button variant="" startIcon={<AccountBoxIcon />}>
              김 현 지 Hyeonji Kim
            </Button>
          </Row>
        </Col>
        <Col className="p-1" />
        <Col className="p-1" xs="auto">
          <Row className="px-3 m-1">
            <Col className="header-textbtn">
              <Button variant="text" disabled="false">
                {lastEditDate}시간 전 편집
              </Button>
            </Col>
            <Col className="header-textbtn">
              <Button variant="text" color="success">
                공유
              </Button>
            </Col>
            <Col className="header-iconbtn">
              <IconButton aria-label="comment" size="small">
                <CommentOutlinedIcon />
              </IconButton>
            </Col>
            <Col className="header-iconbtn">
              <IconButton aria-label="all update" size="small">
                <AccessTimeIcon />
              </IconButton>
            </Col>
            <Col className="header-iconbtn">
              <IconButton aria-label="favorite" size="small">
                <StarBorderIcon />
              </IconButton>
            </Col>
            <Col className="header-iconbtn">
              <IconButton aria-label="more" size="small">
                <MoreHorizIcon />
              </IconButton>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Header;
