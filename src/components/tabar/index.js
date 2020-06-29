import React, { useState } from "react";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col,
} from "reactstrap";
import classnames from "classnames";
import Macros from "../table";
const Tabar = (props) => {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <div>
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "1" })}
            onClick={() => {
              toggle("1");
            }}
          >
            Ingredients
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "2" })}
            onClick={() => {
              toggle("2");
            }}
          >
            Method
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row>
            <Col sm="12">
              <div className="time-portions">
                <div className="time-portions">30 mins</div>
                <div className="time-portions">2 portions</div>
              </div>
              <Macros />
              <ul className="ingredients">
                <li className="food">beef</li>
                <li className="units">400g</li>
              </ul>
              <ul className="ingredients">
                <li className="food">beef</li>
                <li className="units">400g</li>
              </ul>
              <ul className="ingredients">
                <li className="food">beef</li>
                <li className="units">400g</li>
              </ul>
              <ul className="ingredients">
                <li className="food">beef</li>
                <li className="units">400g</li>
              </ul>
              <ul className="ingredients">
                <li className="food">beef</li>
                <li className="units">400g</li>
              </ul>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <Col sm="6">
              <Card body>
                <CardTitle>Step 1</CardTitle>
                <CardText>
                  With supporting text below as a natural lead-in to additional
                  content.
                </CardText>
                <Button>Start timer</Button>
              </Card>
            </Col>
            <Col sm="6">
              <Card body>
                <CardTitle>step 2</CardTitle>
                <CardText>
                  With supporting text below as a natural lead-in to additional
                  content.
                </CardText>
                <Button>Start timer</Button>
              </Card>
            </Col>
          </Row>
        </TabPane>
      </TabContent>
    </div>
  );
};

export default Tabar;
