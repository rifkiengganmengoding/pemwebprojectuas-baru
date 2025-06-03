import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaInstagram, FaYoutube, FaTiktok, FaFacebook, FaPhone, FaEnvelope } from 'react-icons/fa';

import ShopeeIcon from '../assets/images/shp.webp';
import LazadaIcon from '../assets/images/lzd.webp';
import TokopediaIcon from '../assets/images/tkpd.webp';
import TiktokShopIcon from '../assets/images/tiktokshop.png';

const Footer = () => (
  <footer>
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      style={{ backgroundColor: '#007bff', padding: '1rem 0' }}
      className="d-flex justify-content-between align-items-center px-4"
    >
      <div className="d-flex align-items-center">
        <img
          src={require('../assets/images/logo.jpg')}
          alt="Mitra Griya Abadi"
          style={{ height: '50px' }}
        />
        <div style={{ borderLeft: '2px solid white', height: '50px', margin: '0 12px' }}></div>
        <div style={{ color: 'white', lineHeight: '1.2', fontWeight: 'bold', fontSize: '1rem' }}>
          <div>Mitra</div>
          <div>griya</div>
          <div>abadi</div>
        </div>
      </div>
      <div>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: 'white', margin: '0 8px' }}>
          <FaInstagram size={24} />
        </a>
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" style={{ color: 'white', margin: '0 8px' }}>
          <FaYoutube size={24} />
        </a>
        <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" style={{ color: 'white', margin: '0 8px' }}>
          <FaTiktok size={24} />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ color: 'white', margin: '0 8px' }}>
          <FaFacebook size={24} />
        </a>
      </div>
    </motion.div>
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      style={{ backgroundColor: '#1a1a1a', color: 'white', padding: '2rem 0' }}
    >
      <Container>
        <Row>
          <Col md={4}>
            <h5>Hubungi Kami</h5>
            <p><FaPhone style={{ marginRight: '8px' }} /> (+62) 123-4567-890</p>
            <p><FaEnvelope style={{ marginRight: '8px' }} /> info@mitragriyaabadi.com</p>
            <p>Jl. Ki Gede Wesaguna, RT.01/RW.01, Bode Lor, Kec. Plumbon, Kabupaten Cirebon, Jawa Barat 45155</p>
          </Col>
          <Col md={4}>
            <h5>Toko Online</h5>
            <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
              <li>
                <img src={ShopeeIcon} alt="Shopee" style={{ width: '20px', marginRight: '8px' }} />
                <a href="https://shopee.co.id/mitra_griya_abadi" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>Shopee</a>
              </li>
              <li>
                <img src={LazadaIcon} alt="Lazada" style={{ width: '20px', marginRight: '8px' }} />
                <a href="https://www.lazada.co.id/shop/mitra-griya-abadi/?path=promotion-435817-0.htm&tab=promotion" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>Lazada</a>
              </li>
              <li>
                <img src={TokopediaIcon} alt="Tokopedia" style={{ width: '20px', marginRight: '8px' }} />
                <a href="https://www.tokopedia.com/mitragriyaabadi" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>Tokopedia</a>
              </li>
              <li>
                <img src={TiktokShopIcon} alt="TikTok Shop" style={{ width: '20px', marginRight: '8px' }} />
                <a href="https://www.tokopedia.com/mitragriyaabadi" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>TikTok Shop</a>
              </li>
            </ul>
          </Col>
          <Col md={4}>
            <iframe
              title="Google Map Mitra Griya Abadi"
              src="https://maps.google.com/maps?q=TB%20H%20Apud%20Cirebon&t=&z=19&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Col>
        </Row>
        <Row className="mt-3 text-center">
          <Col>
            <small>© 2025 - Mitra Griya Abadi</small>
          </Col>
        </Row>
      </Container>
    </motion.div>
  </footer>
);

export default Footer;
