import React from 'react';
import Radium from 'radium';

@Radium
export default class DropdownMenu extends React.Component {
    displayName = 'Dropdown menu items'

    static propTypes = {
        menuItems: React.PropTypes.array,
        style:     React.PropTypes.object,
        handleDocumentClick: React.PropTypes.func
    }

    getStyles = () => {
      let styles = {
          menu: {
              position: 'absolute',
              top: '100%',
              left: '0',
              zIndex: '1000',
              float: 'left',
              minWidth: '160px',
              margin: '0px',
              padding: '5px 0',
              fontSize: '14px',
              textAlign: 'left',
              listStyle: 'none',
              backgroundColor: '#fff',
              backgroundClip: 'padding-box',
              border: '1px solid #ccc',
              borderBottomLeftRadius: '4px',
              borderBottomRightRadius: '4px',
              boxShadow: '0 6px 12px #C9C9C9',
              display: 'block'
          },
          link: {
              display: 'block',
              padding: '3px 20px',
              clear: 'both',
              fontWeight: 'normal',
              lineHeight: '1.42857143',
              color: '#333',
              whiteSpace: 'nowrap',
              textDecoration: 'none',

              ':hover': {
                  color: '#262626',
                  backgroundColor: '#f5f5f5'
              },

              ':focus': {
                  color: '#262626',
                  backgroundColor: '#f5f5f5'
              }
          }
      };
      return styles;
    }

    componentDidMount() {
      document.addEventListener('click', this.props.handleDocumentClick);
    }

    componentWillUnmount() {
      document.removeEventListener('click', this.props.handleDocumentClick);
    }

    render() {
      const defStyle = this.getStyles();
      const {menuItems, style} = this.props;
      return (
        <ul style={[defStyle.menu, style && style]}>
          {
            menuItems.map(item => {
              return (
                <li key={menuItems.indexOf(item)}>
                    <a key={item.name} style={[defStyle.link]} href={item.href}>{item.name}</a>
                </li>
              );
            })
          }
        </ul>
      );
    }
}
