import React, { Component } from 'react'

class ShowDetails extends Component {
  constructor (props){
    super(props);
  }
  
  componentDidMount(){
    const {fetchShowDetails} = this.props;
    // console.log('ShowDetails#componentDidMount')
    fetchShowDetails();
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
    // console.log(this.props.show)
    const {id,seriesName,banner,status,network,genre,overview,inQueue} = this.props.show;
    const {addShowToQueue,removeShowFromQueue} = this.props;
    
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
                {genre.map((g,idx) => (
                  <span key={idx}>
                    {g}
                    {genre.length-1 > idx &&
                    <i>, </i>
                    }
                  </span>
                ))}
              </td>
            </tr>
            }
          </tbody>
          
        </table>
        <h3>About</h3>
        <p>{overview}</p>
        
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