import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

import bgbatubata from '../assets/images/bgbatubata.jpg';
import bgctky from '../assets/images/bgctky.jpg';
import bgcttmbk from '../assets/images/bgcttmbk.png';
import bgpasir from '../assets/images/bgpasir.jpg';
import bgpltr from '../assets/images/bgpltr.jpg';
import bgpvc from '../assets/images/bgpvc.jpg';
import bgsmn from '../assets/images/bgsmn.webp';
import bgwlpnl from '../assets/images/bgwlpnl.jpg';
import bggrgj from '../assets/images/bggrgj.jpg';
import bgobg from '../assets/images/bgobg.jpg';

const products = [
  {
    category: 'Bahan Dasar Bangunan',
    items: [
      { name: 'Semen', description: 'Semen berkualitas tinggi untuk konstruksi yang kuat.', image: bgsmn },
      { name: 'Pasir', description: 'Pasir halus untuk campuran beton dan plesteran.', image: bgpasir },
      { name: 'Batu Bata', description: 'Batu bata merah untuk dinding dan struktur bangunan.', image: bgbatubata },
    ],
  },
  {
    category: 'Cat',
    items: [
      { name: 'Cat Tembok', description: 'Cat tembok tahan lama dengan berbagai pilihan warna.', image: bgcttmbk },
      { name: 'Cat Kayu', description: 'Cat khusus untuk melindungi dan memperindah kayu.', image: bgctky },
      { name: 'Politur, Melamin, Vernis', description: 'Membantu mempercantik Lemari dan Furnitur berbahan kayu.', image: bgpltr },
    ],
  },
  {
    category: 'Dekoratif Interior',
    items: [
      { name: 'Wallpanel', description: 'Wallpanel dengan motif elegan dan klasik.', image: bgwlpnl },
      { name: 'Vinyl', description: 'Lantai Vinyl dengan pengaplikasian yang lebih praktis, dan Cantik.', image: null },
      { name: 'Plafon PVC', description: 'Pengganti Papan GRC ysng lebih Modern, mudah, dan beragam.', image: bgpvc },
    ],
  },
  {
    category: 'Alat-Alat',
    items: [
      { name: 'Palu', description: 'Alat tukang untuk berbagai keperluan konstruksi.', image: null },
      { name: 'Obeng', description: 'Obeng berkualitas untuk perbaikan rumah.', image: bgobg },
      { name: 'Gergaji', description: 'Berbagai macam jenis gergaji sesuai kebutuhan anda.', image: bggrgj },
    ],
  },
];

const ProductService = () => (
  <>
    <Container className="py-5">
      <h2 className="mb-4">Produk</h2>
      <p>Berikut adalah katalog produk yang kami tawarkan, lengkap dengan deskripsi singkat untuk setiap kategori.</p>
      {products.map((productCategory, idx) => (
        <div key={idx} className="mb-5">
          <h4 className="mb-3">{productCategory.category}</h4>
          <Row>
            {productCategory.items.map((item, index) => (
              <Col md={4} sm={6} xs={12} key={index} className="mb-3">
                <Card
                  className="h-100 shadow-sm"
                  style={{
                    backgroundImage: item.image ? `url(${item.image})` : 'none',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    color: 'white',
                    transition: 'transform 0.3s ease',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                >
                  <Card.Body style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>{item.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          {idx !== products.length - 1 && (
            <hr style={{ borderTop: '2px solid #ccc', margin: '2rem 0' }} />
          )}
        </div>
      ))}
    </Container>
    <Container className="pb-5">
      <p>
        <em>
          Temukan lebih banyak produk menarik dan berkualitas hanya di Mitra Griya Abadi. Jangan lewatkan kesempatan untuk mendapatkan kebutuhan Anda dengan mudah!
        </em>
      </p>
      <p>
        <span
          onClick={() => window.open('https://wa.me/6281234567890', '_blank', 'noopener,noreferrer')}
          style={{ fontWeight: 'bold', color: '#25D366', cursor: 'pointer', textDecoration: 'underline' }}
          role="button"
          tabIndex={0}
          onKeyPress={(e) => {
            if (e.key === 'Enter') window.open('https://wa.me/6281234567890', '_blank', 'noopener,noreferrer');
          }}
        >
          Lihat selengkapnya / Hubungi kami sekarang
        </span>
      </p>
    </Container>
  </>
);

export default ProductService;
