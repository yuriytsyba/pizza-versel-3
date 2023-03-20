import React from 'react';
import ContentLoader from 'react-content-loader';

const Sceleton = (props) => (
  <ContentLoader
    speed={2}
    width={280}
    height={466}
    viewBox='0 0 280 466'
    backgroundColor='#f3f3f3'
    foregroundColor='#ecebeb'
    {...props}
  >
    <circle cx='120' cy='120' r='120' />
    <rect x='0' y='259' rx='15' ry='15' width='227' height='0' />
    <rect x='0' y='252' rx='16' ry='16' width='255' height='25' />
    <rect x='143' y='269' rx='0' ry='0' width='1' height='10' />
    <rect x='16' y='292' rx='0' ry='0' width='219' height='49' />
    <rect x='0' y='293' rx='0' ry='0' width='250' height='48' />
    <rect x='121' y='357' rx='12' ry='12' width='130' height='27' />
    <rect x='4' y='357' rx='0' ry='0' width='89' height='25' />
    <rect x='2' y='358' rx='0' ry='0' width='80' height='22' />
    <rect x='-1' y='359' rx='0' ry='0' width='53' height='22' />
    <rect x='2' y='359' rx='18' ry='18' width='96' height='27' />
  </ContentLoader>
);

export default Sceleton;
