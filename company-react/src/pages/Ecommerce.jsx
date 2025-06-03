import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

import ShopeeIcon from '../assets/images/sopi.jpg';
import LazadaIcon from '../assets/images/lzd.webp';
import TokopediaIcon from '../assets/images/tkpd.webp';
import TiktokShopIcon from '../assets/images/tiktokshop.png';

import bg1 from '../assets/images/bgonlen.jpg';
import bg2 from '../assets/images/bgonlen2.jpg';
import bg3 from '../assets/images/bgonlen3.jpg';

const shops = [
  { name: 'Shopee', url: 'https://shopee.co.id/mitra_griya_abadi', img: ShopeeIcon },
  { name: 'Lazada', url: 'https://www.lazada.co.id/shop/mitra-griya-abadi/?path=promotion-435817-0.htm&tab=promotion', img: LazadaIcon },
  { name: 'Tokopedia', url: 'https://tr.ee/iz93EYJMk-', img: TokopediaIcon },
  { name: 'TikTok Shop', url: 'https://tr.ee/iz93EYJMk-', img: TiktokShopIcon },
];

const backgrounds = [bg1, bg2, bg3];

const Ecommerce = () => {
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 3500); // ganti background setiap 3,5 detik

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        position: 'relative',
        minHeight: '100vh',
        paddingTop: '3rem',
        paddingBottom: '3rem',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `url(${backgrounds[bgIndex]})`,
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // overlay gelap agar gambar tidak burik dan teks terbaca
          zIndex: 1,
        }}
      />
      <Container style={{ position: 'relative', zIndex: 2 }}>
        <h2 className="mb-4 text-white">Toko Online Kami</h2>
        <p className="text-white mb-4" style={{ fontSize: '1.25rem', fontWeight: '600', textShadow: '1px 1px 2px rgba(0,0,0,0.7)' }}>
          Anda dapat mengunjungi toko online kami melalui platform ecommerce di bawah ini:
        </p>
        <Row>
          {shops.map((shop, index) => (
            <Col md={3} sm={6} xs={12} key={index} className="mb-4">
              <Card
                className="h-100 text-center"
                style={{ transition: 'transform 0.3s ease', cursor: 'pointer' }}
                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
              >
                <a href={shop.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <Card.Img variant="top" src={shop.img} alt={shop.name} style={{ maxHeight: '150px', objectFit: 'contain', padding: '1rem' }} />
                  <Card.Body>
                    <Card.Title>{shop.name}</Card.Title>
                  </Card.Body>
                </a>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Ecommerce;
