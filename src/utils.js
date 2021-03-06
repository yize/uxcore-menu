let isLineClampSupport = (() => {
  const div = document.createElement('div');
  return [
    'lineClamp',
    'WebkitLineClamp',
  ].filter(prop => prop in div.style).length;
})();

const forceLineClampSupport = (support) => {
  isLineClampSupport = support;
};

const getClampProps = ({ mode, level, lineClamp, className }) => {
  const props = {};
  let clamp = false;
  if (mode === 'inline' || (mode === 'vertical' && level === 1)) {
    if (isLineClampSupport && lineClamp > 1) {
      const style = {};
      style.WebkitLineClamp = lineClamp;
      style.lineClamp = lineClamp;
      style.WebkitBoxOrient = 'vertical';
      style.boxOrient = 'vertical';
      props.style = style;
      props.className = className;
      clamp = true;
    }
  }
  return { props, clamp };
};

export default {
  forceLineClampSupport,
  getClampProps,
};
