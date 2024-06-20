import { Console } from 'node:console';
import { createServer } from 'node:http';

const companies = [
  {
    companyId: '001',
    title: 'Company 1',
    cashback: '20%',
    points: '8547',
    level: '0',
    logoUrl: '/src/assets/img/logo.png'
  },
  {
    companyId: '002',
    title: 'Everforest',
    cashback: '10%',
    points: '847',
    level: '1',
    logoUrl: '/src/assets/img/logo.png',
    styles: {
      highlightTextColor: '#e69875',
      textColor: '#d3c6aa',
      backgroundColor: '#232a2e',
      cardBackgroundColor: '#3d484d',
      accentColor: '#e67e80',
      mainColor: '#7fbbb3'
    }
  },
  {
    companyId: '003',
    title: 'Company 3',
    cashback: '20%',
    points: '12334',
    level: '2',
    logoUrl: '/src/assets/img/logo.png'
  },
  {
    companyId: '004',
    title: 'Company 4',
    cashback: '40%',
    points: '29384',
    level: '3',
    logoUrl: '/src/assets/img/logo.png'
  },
  {
    companyId: '001',
    title: 'Company 1',
    cashback: '20%',
    points: '8547',
    level: '0',
    logoUrl: '/src/assets/img/logo.png'
  },
  {
    companyId: '002',
    title: 'Everforest',
    cashback: '10%',
    points: '847',
    level: '1',
    logoUrl: '/src/assets/img/logo.png',
    styles: {
      highlightTextColor: '#e69875',
      textColor: '#d3c6aa',
      backgroundColor: '#232a2e',
      cardBackgroundColor: '#3d484d',
      accentColor: '#e67e80',
      mainColor: '#7fbbb3'
    }
  },
  {
    companyId: '003',
    title: 'Company 3',
    cashback: '20%',
    points: '12334',
    level: '2',
    logoUrl: '/src/assets/img/logo.png'
  },
  {
    companyId: '004',
    title: 'Company 4',
    cashback: '40%',
    points: '29384',
    level: '3',
    logoUrl: '/src/assets/img/logo.png'
  },
  {
    companyId: '001',
    title: 'Company 1',
    cashback: '20%',
    points: '8547',
    level: '0',
    logoUrl: '/src/assets/img/logo.png'
  },
  {
    companyId: '002',
    title: 'Everforest',
    cashback: '10%',
    points: '847',
    level: '1',
    logoUrl: '/src/assets/img/logo.png',
    styles: {
      highlightTextColor: '#e69875',
      textColor: '#d3c6aa',
      backgroundColor: '#232a2e',
      cardBackgroundColor: '#3d484d',
      accentColor: '#e67e80',
      mainColor: '#7fbbb3'
    }
  },
  {
    companyId: '003',
    title: 'Company 3',
    cashback: '20%',
    points: '12334',
    level: '2',
    logoUrl: '/src/assets/img/logo.png'
  },
  {
    companyId: '004',
    title: 'Company 4',
    cashback: '40%',
    points: '29384',
    level: '3',
    logoUrl: '/src/assets/img/logo.png'
  },
  {
    companyId: '001',
    title: 'Company 1',
    cashback: '20%',
    points: '8547',
    level: '0',
    logoUrl: '/src/assets/img/logo.png'
  },
  {
    companyId: '002',
    title: 'Everforest',
    cashback: '10%',
    points: '847',
    level: '1',
    logoUrl: '/src/assets/img/logo.png',
    styles: {
      highlightTextColor: '#e69875',
      textColor: '#d3c6aa',
      backgroundColor: '#232a2e',
      cardBackgroundColor: '#3d484d',
      accentColor: '#e67e80',
      mainColor: '#7fbbb3'
    }
  },
  {
    companyId: '003',
    title: 'Company 3',
    cashback: '20%',
    points: '12334',
    level: '2',
    logoUrl: '/src/assets/img/logo.png'
  },
  {
    companyId: '004',
    title: 'Company 4',
    cashback: '40%',
    points: '29384',
    level: '3',
    logoUrl: '/src/assets/img/logo.png'
  },
  {
    companyId: '001',
    title: 'Company 1',
    cashback: '20%',
    points: '8547',
    level: '0',
    logoUrl: '/src/assets/img/logo.png'
  },
  {
    companyId: '002',
    title: 'Everforest',
    cashback: '10%',
    points: '847',
    level: '1',
    logoUrl: '/src/assets/img/logo.png',
    styles: {
      highlightTextColor: '#e69875',
      textColor: '#d3c6aa',
      backgroundColor: '#232a2e',
      cardBackgroundColor: '#3d484d',
      accentColor: '#e67e80',
      mainColor: '#7fbbb3'
    }
  },
  {
    companyId: '003',
    title: 'Company 3',
    cashback: '20%',
    points: '12334',
    level: '2',
    logoUrl: '/src/assets/img/logo.png'
  },
  {
    companyId: '004',
    title: 'Company 4',
    cashback: '40%',
    points: '29384',
    level: '3',
    logoUrl: '/src/assets/img/logo.png'
  },
  {
    companyId: '001',
    title: 'Company 1',
    cashback: '20%',
    points: '8547',
    level: '0',
    logoUrl: '/src/assets/img/logo.png'
  },
  {
    companyId: '002',
    title: 'Everforest',
    cashback: '10%',
    points: '847',
    level: '1',
    logoUrl: '/src/assets/img/logo.png',
    styles: {
      highlightTextColor: '#e69875',
      textColor: '#d3c6aa',
      backgroundColor: '#232a2e',
      cardBackgroundColor: '#3d484d',
      accentColor: '#e67e80',
      mainColor: '#7fbbb3'
    }
  },
  {
    companyId: '003',
    title: 'Company 3',
    cashback: '20%',
    points: '12334',
    level: '2',
    logoUrl: '/src/assets/img/logo.png'
  },
  {
    companyId: '004',
    title: 'Company 4',
    cashback: '40%',
    points: '29384',
    level: '3',
    logoUrl: '/src/assets/img/logo.png'
  },
  {
    companyId: '001',
    title: 'Company 1',
    cashback: '20%',
    points: '8547',
    level: '0',
    logoUrl: '/src/assets/img/logo.png'
  },
  {
    companyId: '002',
    title: 'Everforest',
    cashback: '10%',
    points: '847',
    level: '1',
    logoUrl: '/src/assets/img/logo.png',
    styles: {
      highlightTextColor: '#e69875',
      textColor: '#d3c6aa',
      backgroundColor: '#232a2e',
      cardBackgroundColor: '#3d484d',
      accentColor: '#e67e80',
      mainColor: '#7fbbb3'
    }
  },
  {
    companyId: '003',
    title: 'Company 3',
    cashback: '20%',
    points: '12334',
    level: '2',
    logoUrl: '/src/assets/img/logo.png'
  },
  {
    companyId: '004',
    title: 'Company 4',
    cashback: '40%',
    points: '29384',
    level: '3',
    logoUrl: '/src/assets/img/logo.png'
  },
];

const server = createServer((req, res) => {
  const data = [];

  req.on('data', (chank) => {
    data.push(chank);
  });

  req.on('end', () => {
    const writeHead = (status) => res.writeHead(status, { 'Content-Type': 'application/json' });
    const body = JSON.parse(data);

    try {
      if (req.headers['TOKEN'] !== '123') {
        writeHead(401);
      };

      if (req.url === "/getAllCards" && req.method === 'POST') {
        const offset = body.offset ?? 0;
        const limit = body.limit ?? -1; 
        res.end(JSON.stringify(companies.slice(offset, limit)));
      }

      res.end();
    } catch (e) {
      writeHead(500);
      res.end(JSON.stringify({ message: e.message }));
    }
  });
});

server.listen(3000, '127.0.0.1', () => {
  console.log('Listening on 127.0.0.1:3000');
});
