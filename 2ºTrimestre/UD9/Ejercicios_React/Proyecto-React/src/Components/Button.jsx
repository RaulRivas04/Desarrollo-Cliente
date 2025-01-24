import PropTypes from 'prop-types';

const Button = ({ onClick, style, children }) => {
  return (
    <button onClick={onClick} style={style}>
      {children}
    </button>
  );
};

// Validación de las props usando PropTypes
Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  style: PropTypes.object,
  children: PropTypes.node.isRequired,
};

export default Button;