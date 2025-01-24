import PropTypes from 'prop-types';

const ListItem = ({ item }) => {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      padding: '10px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      margin: '5px 0',
      boxShadow: '2px 2px 5px rgba(0,0,0,0.1)',
    }}>
      <span style={{ fontSize: '18px', fontWeight: 'bold', marginRight: '10px' }}>•</span>
      {item}
    </div>
  );
};

ListItem.propTypes = {
  item: PropTypes.string.isRequired,
};

export default ListItem;