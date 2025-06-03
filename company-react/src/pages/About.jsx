import React, { useState, useEffect } from 'react';
import { Container, Row, Col, ListGroup, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const sections = [
  { id: 'tentang-kami', title: 'Tentang Kami' },
  { id: 'visi-misi', title: 'Visi dan Misi' },
  { id: 'latar-belakang', title: 'Latar Belakang / Sejarah Singkat' },
];

const content = {
  'tentang-kami': (
    <>
      <h3 id="tentang-kami">Tentang Mitra Griya Abadi</h3>
      <p>
        Mitra Griya Abadi adalah toko bangunan terpercaya yang telah melayani kebutuhan material konstruksi dan renovasi di wilayah Cirebon dan sekitarnya selama bertahun-tahun.
        Kami berkomitmen untuk menyediakan produk berkualitas tinggi dengan harga bersaing serta layanan pelanggan yang profesional dan ramah.
      </p>
      <p>
        Dengan pengalaman dan pengetahuan mendalam di bidang bahan bangunan, kami siap menjadi mitra terbaik Anda dalam setiap proyek pembangunan, baik skala kecil maupun besar.
      </p>
      <p>
        Kami terus berinovasi dan beradaptasi dengan perkembangan teknologi dan kebutuhan pasar untuk memastikan kepuasan pelanggan dan keberhasilan proyek Anda.
      </p>
    </>
  ),
  'visi-misi': (
    <>
      <h3 id="visi-misi">Visi Mitra Griya Abadi</h3>
      <p>
        Menjadi toko bangunan terkemuka yang menyediakan produk berkualitas dan layanan terbaik untuk mendukung pembangunan yang berkelanjutan.
      </p>
      <h3>Misi Mitra Griya Abadi</h3>
      <ul>
        <li>Menyediakan bahan bangunan berkualitas dengan harga kompetitif.</li>
        <li>Memberikan layanan pelanggan yang ramah dan profesional.</li>
        <li>Mendukung keberhasilan proyek pelanggan dengan solusi lengkap.</li>
      </ul>
    </>
  ),
  'latar-belakang': (
    <>
      <h3 id="latar-belakang">Latar Belakang / Sejarah Singkat</h3>
      <p>
        Mitra Griya Abadi didirikan dengan tujuan untuk memenuhi kebutuhan bahan bangunan berkualitas di wilayah Cirebon dan sekitarnya. Dengan pengalaman bertahun-tahun, kami terus berkembang dan berinovasi untuk memberikan layanan terbaik kepada pelanggan kami.
      </p>
    </>
  ),
};

const About = () => {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState('tentang-kami');

  useEffect(() => {
    if (location.hash) {
      const hash = location.hash.replace('#', '');
      if (sections.find((section) => section.id === hash)) {
        setActiveSection(hash);
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  }, [location]);

  return (
    <Container className="py-5">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="mb-4">Tentang Kami</h2>
        <Row>
          <Col md={3}>
            <ListGroup>
              {sections.map((section) => (
                <ListGroup.Item
                  key={section.id}
                  action
                  active={activeSection === section.id}
                  onClick={() => setActiveSection(section.id)}
                  style={{ cursor: 'pointer' }}
                >
                  {section.title}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
          <Col md={9}>
            <Card>
              <Card.Body>{content[activeSection]}</Card.Body>
            </Card>
          </Col>
        </Row>
      </motion.div>
    </Container>
  );
};

export default About;
