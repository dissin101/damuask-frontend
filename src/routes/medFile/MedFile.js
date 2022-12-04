import React from 'react';
import SectionOfFile from '../../components/sectionOfFile/SectionOfFile';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentPage } from '../../store/currentPage/currentPage.slice';

const MedFile = () => {

  const currentPage = useSelector((state) => state.currentPage.data);
  const dispatch = useDispatch();

  return (
    <Tab.Container id="left-tabs-example" activeKey={currentPage} onSelect={(key) => dispatch(setCurrentPage(key))}>
      <Row>

        <Col sm={3} style={{ maxWidth: '300px', marginTop: '20px' }}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="primary-examination">Первичный осмотр</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="complaints-on-admission">Жалобы при поступлении</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="anamnesis-of-disease">Анамнез заболевания</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="anamnesis-of-life">Анамнез жизни</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="allergic-anamnesis">Аллергологический анамнез</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="objective-data">Объективные данные</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="data-from-last-survey">Данные последнего обследования</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>

        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="primary-examination">
              <SectionOfFile />
            </Tab.Pane>
            <Tab.Pane eventKey="complaints-on-admission">
              <SectionOfFile />
            </Tab.Pane>
            <Tab.Pane eventKey="anamnesis-of-disease">
              <SectionOfFile />
            </Tab.Pane>
            <Tab.Pane eventKey="anamnesis-of-life">
              <SectionOfFile />
            </Tab.Pane>
            <Tab.Pane eventKey="allergic-anamnesis">
              <SectionOfFile />
            </Tab.Pane>
            <Tab.Pane eventKey="objective-data">
              <SectionOfFile />
            </Tab.Pane>
            <Tab.Pane eventKey="data-from-last-survey">
              <SectionOfFile />
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}

export default MedFile;