import React, { Component } from 'react'

class ShowDetails extends Component {
  constructor (props){
    super(props);
  }
  
  componentDidMount(){
    const {fetchShowDetails} = this.props;
    console.log('ShowDetails#componentDidMount')
    fetchShowDetails();
  }
  
  render(){
    return this.props.isFetching ? (
      <p>loading...</p>
    ) : this.renderDetail()
  }
    
  renderDetail(){
    console.log(this.props.show)
    const {id,seriesName,banner,status,network,genre} = this.props.show;

    
    return (
      <div>
        <h1>{seriesName}</h1>
        {banner &&
          <img src={`http://thetvdb.com/banners/_cache/${banner}`} />
        }
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
      </div>
    )
  }
}

export default ShowDetails