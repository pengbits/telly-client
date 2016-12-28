import React, { Component } from 'react'
import Show from './Show'

class ShowsList extends Component {
  constructor (props){
    super(props);
  }
  
  componentDidMount(){
    const {getShows} = this.props;
    //setShows();
    getShows();
  }
  
  render(props){
    const { shows } = this.props;
    return (  
      <div>
        <h1>My Shows</h1>
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <th>In Queue</th>
            </tr>
            {shows.map((show,idx) => (
              <tr key={idx}>
                <td>
                  <Show name={show.seriesName} id={show.id} />
                </td>
                <td>
                  {show.inQueue ?
                    (<b>√</b>) : (<b>x</b>)
                  }
                </td>
              </tr>
            ))}

          </tbody>
        </table>
        
      </div>
    )
  }
}

export default ShowsList