import React, { useState, useEffect, useRef } from 'react';
import Search from '../searches/Search';
import PagingButtons from '../paging/PagingButtons';
import Artists from '../artists/Artists';
// import getArtists from '../services/getArtists';
import useArtists from '../../hooks/useArtists';

const SearchArtistPage = () => {
  const [searchInput, updateSearchInput] = useState('');
  // const [artists, updateArtists] = useState([]);
  const [page, updatePage] = useState();
  const [upDisabled, updateUpDisabled] = useState(true);
  const [downDisabled, updateDownDisabled] = useState(true);
  const didMountRef = useRef(false);
  const artists = useArtists(didMountRef, searchInput, page, updateDownDisabled);

  const handleChange = (event) => {
    updateSearchInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateUpDisabled(false);
    updatePage(0);
    // getArtists(searchInput, 0)
    //   .then(result => { 
    //     updateArtists(result); 
    //     updateUpDisabled(false);
    //     updatePage(0); 
    //   });
  };

  const pageUpFunction = () => {
    updatePage(page + 1);
    updateDownDisabled(false);
  };

  const pageDownFunction = () => {
    updatePage(page - 1);
  };

  // useEffect(() => {
  //   if(didMountRef.current) {
  //     getArtists(searchInput, page)
  //       .then(result => {
  //         updateArtists(result); 
  //       });
  //   } else {
  //     didMountRef.current = true;
  //   }

  //   return updateDownDisabled(page == 0);
  // }, [page]);

  return (
    <>
      <Search
        searchInput={searchInput}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <PagingButtons 
        pageUpFunction={pageUpFunction}
        pageDownFunction={pageDownFunction}
        upDisable={upDisabled}
        downDisable={downDisabled}
      />
      <Artists items={artists}/>
    </>
  );
};

export default SearchArtistPage;

// export default class SearchArtistPage extends Component {
//   state = {
//     searchInput: '',
//     artists: [],
//     page: 0,
//     upDisable: true,
//     downDisable: true
//   }

//   handleChange = (event) => {
//     this.setState({ searchInput: event.target.value });
//   }

//   handleSubmit = (event) => {
//     event.preventDefault();
//     getArtists(this.state.searchInput, 0)
//       .then(result => this.setState({ 
//         artists: result, 
//         upDisable: false, 
//       }));
//   }

//   pageUpFunction = () => {
//     this.setState(state => ({
//       page: state.page + 1
//     }), () => {
//       return getArtists(this.state.searchInput, this.state.page)
//         .then(result => this.setState({ 
//           artists: result,
//           downDisable: false
//         }));
//     });
//   } 

//   pageDownFunction = () => {
//     this.setState(state => ({
//       page: state.page - 1
//     }), () => {
//       return getArtists(this.state.searchInput, this.state.page)
//         .then(result => this.setState({ 
//           artists: result,
//           downDisable: this.state.page === 0 ? true : false
//         }));
//     });
//   }

//   render() {
//     return (
//       <>
//         <Search
//           searchInput={this.state.searchInput}
//           handleChange={this.handleChange}
//           handleSubmit={this.handleSubmit}
//         />
//         <PagingButtons 
//           pageUpFunction={this.pageUpFunction}
//           pageDownFunction={this.pageDownFunction}
//           upDisable={this.state.upDisable}
//           downDisable={this.state.downDisable}
//         />
//         <Artists items={this.state.artists}/>
//       </>
//     );
//   }
// }
