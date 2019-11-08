import React from 'react';
import PagingButtons from '../paging/PagingButtons';
import Albums from '../music/Albums';
import PropTypes from 'prop-types';
import useAlbums from '../../hooks/useAlbums';
import usePaging from '../../hooks/usePaging';

const Discography = ({ match }) => {
  const { page, updatePage, pageUpFunction, pageDownFunction, upDisabled, downDisabled } = usePaging();
  const albums = useAlbums(match.params.id, page);

  if(page === undefined) updatePage(0);

  return (
    <>
      <PagingButtons 
        pageUpFunction={pageUpFunction}
        pageDownFunction={pageDownFunction}
        upDisable={upDisabled}
        downDisable={downDisabled}
      />
      <Albums items={albums} />
    </>
  );
};

Discography.propTypes = {
  match: PropTypes.object.isRequired
};

export default Discography;

// export default class Discography extends Component {
//   static propTypes = {
//     match: PropTypes.object.isRequired
//   }
//   state = {
//     albums: [],
//     page: 0,
//     upDisable: true,
//     downDisable: true
//   }

//   componentDidMount() {
//     return getAlbums(this.props.match.params.id, this.state.page)
//       .then(result => this.setState({ 
//         albums: result,
//         upDisable: false
//       }));
//   }

//   pageUpFunction = () => {
//     this.setState(state => ({
//       page: state.page + 1
//     }), () => {
//       return getAlbums(this.props.match.params.id, this.state.page)
//         .then(result => this.setState({ 
//           albums: result,
//           downDisable: false
//         }));
//     });
//   } 

//   pageDownFunction = () => {
//     this.setState(state => ({
//       page: state.page - 1
//     }), () => {
//       return getAlbums(this.props.match.params.id, this.state.page)
//         .then(result => this.setState({ 
//           albums: result,
//           downDisable: this.state.page === 0 ? true : false
//         }));
//     });
//   }

//   render() {
//     return (
//       <>
//         <PagingButtons 
//           pageUpFunction={this.pageUpFunction}
//           pageDownFunction={this.pageDownFunction}
//           upDisable={this.state.upDisable}
//           downDisable={this.state.downDisable}
//         />
//         <Albums items={this.state.albums} />
//       </>
//     );
//   }
// }
