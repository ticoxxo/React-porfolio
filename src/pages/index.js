import React from 'react';

import Layout from 'components/layout';

const vid = require('../videos/unOwen.mp4');
const Index = () => (
  <Layout>
    <div>
        <video
          width="100%"
          height="100%" 
          src={vid}
          controls
          playsInline
          loop
          autoPlay
          />
    </div>
  </Layout>
);

export default Index;