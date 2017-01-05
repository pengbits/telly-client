import React, { Component } from 'react'
import GenreList from './GenreList'
import UserRating from './UserRating'

class ShowDetails extends Component {
  constructor (props){
    super(props);
  }
  
  componentDidMount(){
    const {getShowDetails} = this.props;
    // console.log('ShowDetails#componentDidMount')
    getShowDetails();
  }
  
  componentWillReceiveProps(nextProps) {
    //console.log('incoming...')
  }
  
  render(){
    return this.props.isFetching ? (
      <p>loading...</p>
    ) : this.renderDetail()
  }
    
  renderDetail(){

    const {
      id,
      seriesName,
      banner,
      status,
      network,
      genre,
      overview,
      siteRating,
      inQueue
    } = this.props.show;
    const {
      addShowToQueue,
      removeShowFromQueue
    } = this.props;
    
    return (
      <div>
        <h1>{seriesName}</h1>
        {banner &&
          <img src={`http://thetvdb.com/banners/_cache/${banner}`} />
        }
        <p></p>
        <table>
          <tbody>
            <tr>
              <td>id</td>
              <td>{id}</td>
            </tr>
            <tr>
              <td>seriesName</td>
              <td>{seriesName}</td>
            </tr>
            <tr>
              <td>network</td>
              <td>{network}</td>
            </tr>
            <tr>
              <td>status</td>
              <td>{status}</td>
            </tr>
            {genre && genre.length &&
            <tr>
              <td>genre</td>
              <td>
                <GenreList genre={genre} />
              </td>
            </tr>
            }
          </tbody>
        </table>
        
        <h3>About</h3>
        <p>{overview}</p>
        
        <h3>TVDB Rating</h3>
        <p>{siteRating}</p>
        
        <UserRating rating={UserRating} />
          
        {!inQueue ?
          (<button onClick={addShowToQueue}>Add to Queue</button>)
          :
          (<button onClick={removeShowFromQueue}>Remove from Queue</button>)
        }
      </div>
    )
  }
}

export default ShowDetails