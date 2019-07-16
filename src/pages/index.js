import React from 'react';

import Layout from 'components/layout';

const vid = require('../videos/unOwen.mp4');
const Index = ({ data }) => (
  <Layout>
    <div>
        <video
          width="100%"
          height="100%" 
          src={vid}
          playsInline
          loop
          autoPlay
          muted
        />
    </div>
  </Layout>
);

export default Index;